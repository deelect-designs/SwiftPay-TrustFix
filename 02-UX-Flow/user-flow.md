# SwiftPay TrustFix — User Flow Map

## Project

SwiftPay TrustFix is a trust-centered fintech UX redesign created to address user friction and reduce abandonment during the financial transaction journey.

## Primary UX Problem

SwiftPay is experiencing a 60% user drop-off rate.

The redesign focuses on reducing uncertainty during login, account navigation, transaction review and confirmation.

## User Goal

The user wants to:

- securely access their account
- understand their available balance
- initiate a transfer
- verify the recipient
- understand the total transaction cost
- confirm the transfer with confidence
- receive clear proof that the transaction was completed

---

# Primary User Flow

START
↓
Open SwiftPay
↓
Login
↓
Home Dashboard
↓
Select "Send Money"
↓
Review Recipient
↓
Recipient Verification
↓
Enter/Review Amount
↓
View Transfer Fee
↓
View Total Amount
↓
Review Security Information
↓
Confirm Transfer
↓
Processing
↓
Transaction Successful
↓
Transaction Reference
↓
Back to Home
↓
END

---

# Detailed User Flow

## 1. Login

### User action

The user enters their phone number/email and password.

### System response

SwiftPay validates the login information and opens the dashboard.

### Trust mechanism

The login screen displays:

"Secure connection"

and explains that personal and financial information is protected.

### UX objective

Reduce anxiety around entering sensitive financial credentials.

---

## 2. Home Dashboard

### User action

The user views their account.

### Information presented

- Total balance
- Available balance
- Send Money
- Add Money
- Recent transactions
- Account protection status
- Security information

### Trust mechanism

The interface clearly displays:

"✓ Account protected"

### UX objective

Give the user immediate confidence that their account is protected and that important financial information is visible.

---

## 3. Send Money

### User action

The user selects "Send Money."

### System response

SwiftPay opens the transaction review experience.

### UX objective

Move the user into a focused transaction journey without unnecessary navigation.

---

## 4. Recipient Verification

### Information presented

- Recipient name
- Bank
- Masked account number
- Verification status

### Trust mechanism

"✓ Recipient verified"

### UX objective

Reduce the risk of sending money to the wrong recipient.

---

## 5. Transaction Review

### Information presented

- Transfer amount
- Transfer fee
- Total amount

Example:

Amount: ₦50,000.00

Transfer fee: ₦10.00

Total: ₦50,010.00

### UX objective

Prevent fee surprises and allow the user to understand the financial consequence before confirming.

---

## 6. Security Review

The interface communicates:

- Transfer details encrypted
- Recipient information verified

### UX objective

Make security visible at the moment when the user is deciding whether to authorize the transaction.

---

## 7. Confirmation

The user selects:

"Confirm Transfer"

A short processing state communicates that the transaction is being processed.

### UX objective

Prevent uncertainty caused by a silent or ambiguous transaction state.

---

## 8. Success

The interface displays:

"Money sent successfully"

The user also receives:

- recipient
- amount
- fee
- total
- transaction reference

### UX objective

Provide clear closure and evidence that the transaction was completed.

---

# Alternative Flow: User Cancels

Transaction Review
↓
Cancel
↓
Home Dashboard

The user can leave the transaction without completing it.

This preserves user control.

---

# Alternative Flow: User Goes Back

Transaction Review
↓
Back Arrow
↓
Home Dashboard

This gives the user a clear exit from the transaction journey.

---

# Trust Architecture

SwiftPay introduces trust signals at three critical moments:

LOGIN
→ Secure connection

HOME
→ Account protected

TRANSACTION
→ Recipient verified + Transparent total + Security indicators

SUCCESS
→ Transaction confirmation + Reference number

---

# UX Design Principle

The redesign follows the principle:

"Show users the information they need at the moment they need confidence."

Rather than hiding security and transaction information in secondary screens, SwiftPay presents relevant trust signals directly within the user journey.

---

# Success Criteria

The prototype should be evaluated using:

- Login completion rate
- Transaction initiation rate
- Transaction completion rate
- Transaction abandonment rate
- Time to complete a transfer
- User-reported trust/confidence
- User understanding of transaction fees
- User understanding of recipient verification

These are proposed evaluation metrics and are not claims of measured improvement.