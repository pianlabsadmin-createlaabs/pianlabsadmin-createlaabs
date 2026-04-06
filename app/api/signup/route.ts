import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    console.log("🔧 Initializing Firebase Admin SDK...");
    console.log("📁 Project ID:", process.env.FIREBASE_PROJECT_ID);
    console.log("✉️  Client Email:", process.env.FIREBASE_CLIENT_EMAIL);
    console.log("🔑 Private Key exists:", !!process.env.FIREBASE_PRIVATE_KEY);
    console.log("🌍 Database URL:", process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL);

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
    console.log("✅ Firebase Admin SDK initialized successfully");
  } catch (error) {
    console.error("❌ Firebase initialization error:", error);
  }
}

const database = admin.database();

export async function POST(request: Request) {
  try {
    console.log("📨 [Signup] Request received");

    const { email } = await request.json();
    console.log("📧 Email:", email);

    // Basic but strict email regex match for security filter
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      console.log("❌ Invalid email format:", email);
      return NextResponse.json({ error: "Invalid email address provided." }, { status: 400 });
    }

    // Save to Firebase Realtime Database
    console.log("💾 Saving to Firebase...");
    const newSignupRef = database.ref("signups").push();

    await newSignupRef.set({
      email: email,
      createdAt: new Date().toISOString(),
      timestamp: Math.floor(Date.now() / 1000),
    });

    console.log(`✅ [Signup] Email saved to Firebase: ${email}, ID: ${newSignupRef.key}`);

    return NextResponse.json({
      success: true,
      message: "Email saved successfully",
      id: newSignupRef.key
    });
  } catch (err) {
    console.error("❌ [Signup] Error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `Server error: ${errorMessage}` }, { status: 500 });
  }
}
