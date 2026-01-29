# Quick Start: Activate Paystack Payments

## ✅ You Have Everything Ready!

- ✅ react-paystack is installed
- ✅ Payment code is written and ready
- ⏳ Just need to add your Paystack test key

---

## 🚀 3 Simple Steps (Takes 5 Minutes)

### Step 1: Get Paystack Test Key

1. Go to **https://paystack.com** → Sign Up
2. Verify your email
3. Login to Dashboard
4. Click **Settings** (bottom left) → **API Keys & Webhooks**
5. Copy your **Test Public Key** (starts with `pk_test_...`)

---

### Step 2: Add Key to Your Code

Open this file:
```
src/pages/Contact-Paystack-Version.jsx
```

Find **line 30** which looks like this:
```javascript
const publicKey = 'pk_test_your_actual_paystack_key_here';
```

**Replace it** with your real test key:
```javascript
const publicKey = 'pk_test_abc123def456ghi789jkl012mno345pqr678';
```
(Use YOUR actual key, not this example)

**Save the file.**

---

### Step 3: Replace Your Current Contact Page

**Option A: Rename the file (Windows Explorer)**
1. Go to folder: `src/pages/`
2. Rename `Contact.jsx` → `Contact-OLD.jsx` (backup)
3. Rename `Contact-Paystack-Version.jsx` → `Contact.jsx`
4. Done! ✅

**Option B: Using Command Line**
```bash
cd "c:\Users\LIFE GOES ON\Desktop\Tilapia-joint\tilapia-website\src\pages"
ren Contact.jsx Contact-OLD.jsx
ren Contact-Paystack-Version.jsx Contact.jsx
```

---

## 🧪 Step 4: Test Your Payment

1. Go to your website: **http://localhost:5175/**
2. Click **"Contact"** in navigation
3. Scroll to **"Mobile Money Payment"** section
4. Fill in the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Phone:** 0551234567
   - **Amount:** 10
5. Click **"Pay with Mobile Money"**

### What Happens Next:

1. **Paystack popup appears** ✅
2. Select **"Mobile Money"** as payment method
3. Choose network: **MTN / Vodafone / AirtelTigo**
4. Enter test number: **0551234567**
5. Click **"Pay GHS 10"**
6. **Test payment succeeds!** 🎉

**No real money is charged because you're using the test key!**

---

## 📱 Test Numbers to Use

For testing, use these numbers (they won't charge real money):

### MTN Test Numbers:
- **0551234567**
- **0241234567**

### Vodafone Test Numbers:
- **0201234567**

### AirtelTigo Test Numbers:
- **0271234567**

**Any of these will work for testing!**

---

## ✅ What Success Looks Like

When payment works correctly, you'll see:

1. ✅ **Paystack popup opens**
2. ✅ **Payment methods appear** (Mobile Money, Card, etc.)
3. ✅ **You can select your network**
4. ✅ **After submitting, you see "Payment Successful"**
5. ✅ **Alert shows: "Payment successful! Reference: XXXXX"**

---

## 🔴 Go Live (When Ready)

### To Accept REAL Payments:

**Step 1: Verify Your Business**
1. Dashboard → Settings → Business
2. Upload documents:
   - Business certificate OR Ghana Card
   - ID (Ghana Card/Passport)
   - Bank account proof
3. Wait 1-3 days for approval

**Step 2: Get Live Key**
1. After approval, go to Settings → API Keys
2. Copy **Live Public Key** (starts with `pk_live_...`)

**Step 3: Update Code**
Open `src/pages/Contact.jsx` and change line 30:
```javascript
// FROM (Test):
const publicKey = 'pk_test_abc123...';

// TO (Live):
const publicKey = 'pk_live_xyz789...';
```

**Step 4: Deploy & Go Live! 🚀**

---

## ❓ Troubleshooting

### Problem: Paystack popup doesn't open
**Solution:**
- Make sure you saved the file after adding the key
- Refresh your browser (Ctrl + F5)
- Check browser console for errors (F12)

### Problem: "Invalid key" error
**Solution:**
- Make sure you copied the FULL key (starts with `pk_test_`)
- No spaces before/after the key
- Key is wrapped in quotes: `'pk_test_...'`

### Problem: Test payment fails
**Solution:**
- Use official test numbers: 0551234567
- Make sure you're using TEST key (not live key)
- Amount should be at least 1 GHS

---

## 💰 Transaction Fees

**With Test Key:** FREE - Test unlimited times!

**With Live Key:**
- 1.95% per transaction
- Example: Customer pays GHS 100 → You get GHS 98.05

---

## 🎉 You're Almost Done!

Current Progress:
- ✅ react-paystack installed
- ✅ Code ready
- ⏳ **Next:** Get your test key from Paystack
- ⏳ **Then:** Add it to line 30 of Contact-Paystack-Version.jsx
- ⏳ **Finally:** Rename file to Contact.jsx

**5 minutes away from accepting payments!** 🚀

---

## Need Help?

**Paystack Support:**
- Phone: +233 59 229 6211
- Email: support@paystack.com
- WhatsApp: +233 59 229 6211

**Hours:** Mon-Sat, 8am-8pm
