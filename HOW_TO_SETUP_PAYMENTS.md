# Simple Guide: How to Accept Real Mobile Money Payments

## ✅ You Already Have Everything Installed!

react-paystack is already installed and ready to use on your website.

---

## 🚀 Quick 3-Step Setup

### Step 1: Create Paystack Account (5 minutes)

1. Go to **https://paystack.com**
2. Click **"Sign Up"** (top right corner)
3. Fill in:
   - Your email
   - Password
   - Business name: "Akopia"
4. Verify your email (check inbox)

### Step 2: Get Your Test Key (2 minutes)

1. Login to Paystack Dashboard
2. Click **Settings** (bottom left)
3. Click **API Keys & Webhooks**
4. Copy your **Test Public Key** (starts with `pk_test_...`)

**Example:** `pk_test_abc123def456ghi789jkl012`

### Step 3: Add Key to Your Website (1 minute)

1. Open file: `src/pages/Contact-Paystack-Version.jsx`
2. Find line 30:
   ```javascript
   const publicKey = 'pk_test_your_actual_paystack_key_here';
   ```
3. Replace it with YOUR key:
   ```javascript
   const publicKey = 'pk_test_abc123def456ghi789jkl012';
   ```
4. Save the file
5. Rename `Contact-Paystack-Version.jsx` to `Contact.jsx` (replace the old one)

**Done!** Your website now accepts REAL Mobile Money payments! 🎉

---

## 📱 How Customers Will Pay

When a customer wants to pay:

1. They fill in the payment form on your website:
   - Name: John Doe
   - Email: john@example.com
   - Phone: 0241234567
   - Amount: 50

2. Click **"Pay with Mobile Money"**

3. Paystack popup appears

4. Customer selects their network:
   - MTN Mobile Money
   - Vodafone Cash
   - AirtelTigo Money

5. Enters their Mobile Money number

6. **Customer receives SMS on their phone** asking to approve payment

7. Customer enters their Mobile Money PIN

8. ✅ **Payment Complete!**
   - Customer gets confirmation SMS
   - You get confirmation email
   - Money appears in your Paystack dashboard

---

## 💰 How You Get Paid

1. Customer makes payment → Money goes to Paystack

2. View your money in **Paystack Dashboard → Transactions**

3. Withdraw to your bank account:
   - Go to **Paystack Dashboard → Settlements**
   - Click **"Withdraw"**
   - Enter bank details (one-time setup)
   - Money appears in your bank within 24 hours

---

## 🧪 Test Payments (Before Going Live)

### Test with Test Key:

1. Use test key (starts with `pk_test_`)
2. Fill payment form with any details:
   - Email: test@example.com
   - Amount: 10
3. Click Pay
4. When Paystack popup appears, use test phone:
   - **MTN Test Number:** `0551234567`
   - **Amount:** Any amount

5. It will show "Payment Successful" (but NO real money charged)

6. Test as many times as you want - it's FREE!

---

## 🔴 Go LIVE (When Ready)

### To Accept Real Payments:

1. **Verify Your Business with Paystack:**
   - Login to Paystack Dashboard
   - Go to Settings → Business
   - Upload:
     - Business registration certificate OR Ghana Card
     - ID card (Ghana Card/Passport)
     - Bank account details
   - Wait 1-3 business days for approval

2. **Get Live Key:**
   - After verification, go to Settings → API Keys
   - Copy **Live Public Key** (starts with `pk_live_`)

3. **Update Website:**
   - Open `src/pages/Contact.jsx`
   - Replace test key with live key:
     ```javascript
     const publicKey = 'pk_live_your_real_live_key_here';
     ```

4. **🎉 You're LIVE!**
   - Real customers can now pay
   - Real money goes to your Paystack account
   - Withdraw to bank anytime

---

## 💵 Fees

**Paystack charges: 1.95% per transaction**

Examples:
- Customer pays GHS 50 → You get GHS 49.02
- Customer pays GHS 100 → You get GHS 98.05
- Customer pays GHS 200 → You get GHS 196.10

**No setup fees. No monthly fees.**

---

## ❓ Common Questions

### Q: Do I need a business registration?
**A:** For test mode (test key), NO. For live mode (real payments), YES - you need business documents or Ghana Card.

### Q: How long does verification take?
**A:** Usually 1-3 business days after submitting documents.

### Q: Can I test without verification?
**A:** YES! Use test key to test unlimited times. Real payments need verification.

### Q: Which networks are supported?
**A:** All 3:
- MTN Mobile Money
- Vodafone Cash
- AirtelTigo Money

### Q: How do I know when someone pays?
**A:** You get:
1. Email notification immediately
2. SMS notification
3. See it in Paystack Dashboard

### Q: Can customer pay with card instead?
**A:** Yes! Paystack automatically shows card option too. But your code forces Mobile Money only. To allow cards, change line 71 in Contact-Paystack-Version.jsx:
```javascript
// Current (Mobile Money only):
channels: ['mobile_money']

// Change to (Allow all):
channels: ['card', 'mobile_money', 'bank', 'ussd']
```

---

## 📞 Need Help?

**Paystack Support:**
- Email: support@paystack.com
- Phone: +233 59 229 6211
- WhatsApp: +233 59 229 6211
- Live chat on paystack.com

**Support Hours:** 8am - 8pm (Monday - Saturday)

---

## ✅ Checklist: Today to Payment

- [ ] Sign up on paystack.com
- [ ] Verify email
- [ ] Get test API key
- [ ] Add key to Contact-Paystack-Version.jsx line 30
- [ ] Rename file to Contact.jsx
- [ ] Test payment with 055XXXXXXX
- [ ] Submit business verification documents
- [ ] Wait for verification (1-3 days)
- [ ] Get live API key
- [ ] Replace test key with live key
- [ ] 🎉 Start accepting real payments!

---

## Current Status

✅ react-paystack is installed
✅ Payment code is ready in `Contact-Paystack-Version.jsx`
⏳ Waiting for you to get Paystack API key
⏳ Then rename file to `Contact.jsx`

**You're 99% done! Just need the API key!** 🚀
