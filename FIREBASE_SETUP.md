# Email Signup Firebase Integration Setup

## Overview
This document describes the end-to-end flow for capturing user emails and saving them to Firebase Realtime Database.

## Architecture

```
User enters email → Clicks "Sign Up" 
                  ↓
        /api/signup (POST)
                  ↓
     Validates email format
                  ↓
   Saves to Firebase Realtime DB
                  ↓
        Returns success/error
                  ↓
     Shows feedback to user
```

## Database Structure

```
signups/
├── -NqK... (auto-generated ID)
│   ├── email: "user@example.com"
│   ├── createdAt: "2026-04-06T10:30:45.123Z"
│   └── timestamp: 1738839045
└── -NrL... (auto-generated ID)
    ├── email: "another@example.com"
    ├── createdAt: "2026-04-06T10:35:20.456Z"
    └── timestamp: 1738839320
```

## Files Modified/Created

### [app/api/signup/route.ts](app/api/signup/route.ts)
- Server-side API endpoint that saves emails to Firebase
- Validates email format
- Stores email with timestamp and ISO date
- Returns success/error response

### [components/Deployment.tsx](components/Deployment.tsx)
- Frontend form component
- Handles user input and submission
- Shows loading, success, and error states
- Automatically resets state after 3 seconds

### [.env.local](.env.local)
- Firebase configuration (already set up)
- Database URL reference

### [firebase-rules.json](firebase-rules.json)
- Security rules for Firebase Realtime Database
- Restricts all public access to read/write
- Validates email format and required fields

## Setup Steps

### Step 1: Enable Firebase Realtime Database
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `pian-labs-coming-soon-page`
3. Go to **Realtime Database** in the left sidebar
4. Click **Create Database**
5. Start in **locked mode** (or apply the rules immediately)
6. Choose region close to your users

### Step 2: Apply Security Rules
1. In Firebase Console, go to **Realtime Database**
2. Click the **Rules** tab
3. Replace all content with the rules from [firebase-rules.json](firebase-rules.json)
4. Click **Publish**

### Current Rules Explained

```json
{
  "rules": {
    "signups": {
      ".read": false,           // Nobody can read signups
      ".write": false,          // Nobody can write directly
      "$uid": {
        ".validate": "newData.hasChildren(['email', 'createdAt', 'timestamp'])",
        // Requires all three fields
        
        "email": {
          ".validate": "newData.isString() && newData.val().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/)"
          // Email must be valid format
        },
        "createdAt": {
          ".validate": "newData.isString()" // ISO date string
        },
        "timestamp": {
          ".validate": "newData.isNumber()" // Unix timestamp
        }
      }
    }
  }
}
```

### Why These Rules?

- **`.read: false`** - Prevents anyone from viewing the emails list
- **`.write: false`** - Prevents direct writes; must go through your server (`/api/signup`)
- **Field validation** - Ensures only properly formatted data is stored
- **Email validation** - Only valid emails are accepted

### For Production/Admin Access

If you need to read or delete signups later, you can:

1. **Option 1: Firebase Admin SDK** (in server code)
   - Use service account credentials
   - Full read/write access server-side

2. **Option 2: Firestore instead of Realtime Database**
   - More flexible permissions per user
   - Better for complex access control

3. **Option 3: Custom API endpoint** (recommended)
   - Create `/api/admin/signups` endpoint
   - Protected with API key or authentication
   - Returns signup data to authorized users

## Testing the Flow

### Local Testing
```bash
# 1. Start your Next.js dev server
npm run dev

# 2. Navigate to the "Deploys Across" section
# 3. Enter a test email
# 4. Click "Sign Up"
# 5. Check Firebase Console → Realtime Database → signups
```

### Checking Saved Data
1. Open [Firebase Console](https://console.firebase.google.com)
2. Go to **Realtime Database**
3. Expand **signups** node
4. You should see your entries with email, createdAt, and timestamp

## Environment Variables Required

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
NEXT_PUBLIC_FIREBASE_DATABASE_URL (optional, derived from PROJECT_ID)
```

All set in `.env.local` ✅

## Troubleshooting

### "Permission denied" errors
- Check if Firebase Realtime Database is created
- Verify rules are published
- Ensure databaseURL is correct in environment

### Emails not saving
- Check browser console for client errors
- Check server logs with `npm run dev`
- Verify email format (must be valid)
- Check Firebase Console for error messages in Realtime Database

### Rules not working
- Make sure rules are **Published** (not just saved)
- Wait 30 seconds for propagation
- Refresh browser and try again

## Future Enhancements

- [ ] Duplicate email checking
- [ ] Email verification before saving
- [ ] Admin dashboard to view/export signups
- [ ] Email notifications to PRANLabsAdmin@gmail.com
- [ ] Rate limiting per IP
- [ ] Backup to CSV export
