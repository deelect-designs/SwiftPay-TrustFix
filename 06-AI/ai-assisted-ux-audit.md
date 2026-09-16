# SwiftPay TrustFix — AI-Assisted UX Audit

## 1. Purpose

AI was used as an assistive tool during the SwiftPay UX design process to help structure the friction audit, identify potential usability issues and generate design hypotheses.

The AI output was treated as a starting point for human design reasoning rather than as validated user research.

---

# 2. Problem Context

SwiftPay is a fictional fintech application experiencing a 60% user drop-off rate.

The project focuses on identifying possible friction in:

- Login
- Home Dashboard
- Transaction Review
- Transaction Confirmation

The central design hypothesis is that uncertainty may contribute to user hesitation.

This hypothesis requires validation.

---

# 3. AI-Assisted Analysis

## Login

### Potential friction

Users are required to enter sensitive credentials.

### Possible user concern

"Is this platform secure?"

### AI-assisted design opportunity

Make security communication visible near the login action.

### Prototype intervention

The Login screen contains:

"Secure connection"

and:

"Your personal and financial information is protected."

### Validation required

Usability testing should determine whether this messaging actually increases user confidence without creating unnecessary cognitive load.

---

# 4. Home Dashboard

## Potential friction

Important account information and actions can become difficult to locate if the interface lacks hierarchy.

### Possible user concern

"Where can I find my balance and send money?"

### AI-assisted design opportunity

Create a clear visual hierarchy.

### Prototype intervention

The dashboard prioritizes:

1. Greeting
2. Account protection
3. Balance
4. Send Money
5. Quick actions
6. Recent transactions
7. Security information

---

# 5. Transaction Review

## Potential friction

Financial transactions involve high-consequence decisions.

Users may hesitate when recipient or pricing information is unclear.

### Possible user concerns

"Am I sending money to the right person?"

"How much will I actually pay?"

"Is this transfer protected?"

### AI-assisted design opportunities

Make the following information visible before confirmation:

- recipient
- bank
- masked account number
- verification status
- transfer amount
- transfer fee
- total amount
- security information

---

# 6. Recipient Verification

## Design problem

A user may fear sending money to the wrong recipient.

## Design intervention

The prototype presents:

"✓ Recipient verified"

alongside:

- recipient name
- bank
- masked account information

## UX principle

Prevent errors before they happen instead of relying only on error messages after the transaction.

---

# 7. Fee Transparency

## Design problem

Unexpected charges can create distrust.

## Design intervention

The prototype explicitly separates:

Amount
→ ₦50,000.00

Transfer fee
→ ₦10.00

Total
→ ₦50,010.00

## UX principle

Financial consequences should be visible before commitment.

---

# 8. Security Communication

The prototype uses contextual security messaging rather than presenting security information only in a settings area.

Examples include:

### Login

"Secure connection"

### Home

"✓ Account protected"

### Transaction

"✓ Transfer details encrypted"

"✓ Recipient information verified"

This approach places reassurance near moments of potential uncertainty.

---

# 9. Confirmation State

## Potential friction

A user may not know whether a transaction was successfully submitted.

## Design intervention

The interface displays:

"Processing..."

before showing the success state.

---

# 10. Success State

The success screen provides:

- successful transaction status
- recipient
- amount
- fee
- total
- transaction reference

This provides clearer closure than a generic success message.

---

# 11. AI-Assisted Design Principles

The AI-assisted process focused on:

### Clarity

Make important information easy to understand.

### Transparency

Show transaction costs before confirmation.

### Error prevention

Help users identify incorrect recipients before sending.

### Trust

Provide contextual security information.

### User control

Provide clear cancellation and navigation options.

### Closure

Provide transaction confirmation and a reference number.

---

# 12. Human Designer Responsibilities

AI-generated suggestions were reviewed and translated into actual interface decisions by the designer.

The designer remains responsible for:

- defining the actual product problem
- evaluating AI suggestions
- making design decisions
- checking usability
- checking accessibility
- protecting user privacy
- validating assumptions
- conducting user research
- interpreting research findings

---

# 13. What AI Did Not Establish

The AI process does not establish that:

- trust is definitely the cause of the 60% drop-off
- users definitely prefer these designs
- the redesign definitely increases conversion
- users definitely feel more secure
- the prototype is production-ready
- the product is legally compliant

These claims require empirical research, usability testing, analytics and appropriate professional review.

---

# 14. Validation Plan

The next research cycle should test:

### Task 1

Can users log in without hesitation?

### Task 2

Can users locate their available balance?

### Task 3

Can users find Send Money?

### Task 4

Can users correctly identify the recipient?

### Task 5

Can users identify the transfer fee?

### Task 6

Can users calculate or understand the total cost?

### Task 7

Do users understand the verification indicators?

### Task 8

Do users understand whether the transaction succeeded?

### Task 9

Can users locate the transaction reference?

---

# 15. Key Insight

AI can accelerate UX analysis, but the designer must remain responsible for deciding what is credible, what is an assumption and what requires validation.

The goal of AI-assisted UX is therefore not:

"Let AI design the product."

The goal is:

"Use AI to expand the designer's ability to investigate problems, generate hypotheses and evaluate possible solutions."