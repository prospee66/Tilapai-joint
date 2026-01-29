# Mobile Money Payment Integration Guide for Akopia

This guide explains how to integrate **real Mobile Money payments** (MTN, Vodafone, AirtelTigo) into your Akopia website.

## Overview

You have 3 main options for accepting Mobile Money payments in Ghana:

---

## Option 1: Paystack (RECOMMENDED - Easiest)

**Why Paystack?**
- ✅ Handles all 3 Mobile Money providers (MTN, Vodafone, AirtelTigo)
- ✅ No separate integration needed for each provider
- ✅ Most popular in Ghana
- ✅ Easy to set up
- ✅ Good documentation
- ✅ Lower transaction fees (1.95%)

### Step-by-Step Setup:

#### 1. Create a Paystack Account
- Go to https://paystack.com
- Click "Sign Up" (top right)
- Fill in your business details
- Verify your email

#### 2. Complete Business Verification
- Login to your Dashboard
- Go to Settings → Business
- Upload required documents:
  - Business registration certificate
  - ID card (Ghana Card or Passport)
  - Proof of address

*Verification takes 1-3 business days*

#### 3. Get Your API Keys
- Login to Dashboard
- Go to Settings → API Keys & Webhooks
- You'll see:
  - **Test Public Key** (starts with `pk_test_`)
  - **Live Public Key** (starts with `pk_live_`)

**Use Test key for development, Live key for production**

#### 4. Update Your Website Code

Replace line 30 in `src/pages/Contact.jsx`:

```javascript
// REPLACE THIS:
const publicKey = 'pk_test_your_public_key_here';

// WITH YOUR ACTUAL KEY:
const publicKey = 'pk_test_xxxxxxxxxxxxxxxxxxxx'; // Your actual Paystack public key
```

#### 5. Activate Mobile Money

In Paystack Dashboard:
- Go to Settings → Payments
- Enable "Mobile Money"
- Select: MTN, Vodafone, AirtelTigo
- Save changes

#### 6. Test the Payment

1. Run your website: `npm run dev`
2. Go to Contact page
3. Fill in payment form with test details:
   - Name: Test User
   - Email: test@example.com
   - Amount: 10
4. Click "Pay Now"
5. Paystack popup will appear
6. Select Mobile Money provider
7. Enter phone number: `0551234567` (test number)
8. Complete test payment

#### 7. Go Live

When ready for real payments:
1. Replace test key with **live key** in Contact.jsx
2. Deploy your website
3. Real customers can now pay!

---

## Option 2: Flutterwave

**Why Flutterwave?**
- ✅ Also supports all 3 Mobile Money providers
- ✅ Good alternative to Paystack
- ✅ Similar features

### Setup:
1. Sign up at https://flutterwave.com/gh
2. Verify your business
3. Get API keys from Dashboard
4. Install: `npm install flutterwave-react-v3`
5. Follow their documentation: https://developer.flutterwave.com/docs

---

## Option 3: Direct Mobile Money APIs (Advanced)

This requires integrating with each provider separately:

### MTN Mobile Money API
- Website: https://momodeveloper.mtn.com/
- Requires separate business account with MTN
- More complex setup
- **Not recommended unless you have specific requirements**

### Vodafone Cash API
- Contact Vodafone Business directly
- Limited documentation

### AirtelTigo Money API
- Contact AirtelTigo Business directly
- Limited public API

**❌ Not recommended** - Too complex, use Paystack or Flutterwave instead.

---

## RECOMMENDED APPROACH

### For Your Akopia Website:

**Use Paystack** because:
1. One integration = All 3 providers
2. Easy to set up
3. Trusted by customers
4. Good support
5. Low fees (1.95% per transaction)

### Quick Start Checklist:

- [ ] Sign up at paystack.com
- [ ] Verify your business (1-3 days)
- [ ] Get test API key
- [ ] Add API key to Contact.jsx line 30
- [ ] Test payments on your site
- [ ] When ready: Switch to live API key
- [ ] Start accepting real payments!

---

## Current Payment Flow (What You Have Now)

Your current code in `Contact.jsx` shows a **demo/form only**.

It does NOT process real payments. When someone clicks "Send Payment Request", it just shows an alert message.

To make it REAL:
1. Follow Paystack setup above
2. Replace the demo code with Paystack integration
3. Customers will get REAL mobile money prompts on their phones

---

## Need Help?

**Paystack Support:**
- Email: support@paystack.com
- Phone: +233 59 229 6211
- Live chat on their website

**My Recommendation:**
Start with Paystack test mode today. You can test without business verification. When verification completes, switch to live mode.

---

## Cost Breakdown

### Paystack Fees:
- **1.95% per transaction**
- No setup fees
- No monthly fees
- Example: Customer pays GHS 50
  - You receive: GHS 49.02
  - Paystack takes: GHS 0.98

### Flutterwave Fees:
- **1.4% + GHS 1** per transaction
- Example: Customer pays GHS 50
  - You receive: GHS 48.30
  - Flutterwave takes: GHS 1.70

**Paystack is cheaper for transactions under GHS 100**

---

## Next Steps

1. **Today**: Sign up for Paystack
2. **Tomorrow**: Submit verification documents
3. **Day 3-5**: Wait for verification
4. **Day 6**: Add your API key to the website
5. **Day 7**: Test thoroughly
6. **Day 8**: Go live and accept real payments!

Good luck! 🚀
