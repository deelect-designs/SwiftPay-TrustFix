# SwiftPay TrustFix — UX Friction Audit

## 1. Executive Summary

SwiftPay is presented as a fintech application experiencing a 60% user drop-off rate.

The purpose of this UX audit is to identify potential points of friction in the user journey and redesign the experience around clarity, trust, transparency and user control.

The audit focuses on three primary screens:

1. Login
2. Home
3. Transaction

The redesign does not assume that the 60% drop-off is caused by a single issue. Instead, trust-related uncertainty is treated as a design hypothesis requiring validation through user research and usability testing.

---

# 2. Primary UX Hypothesis

Users may hesitate or abandon the SwiftPay journey when they are uncertain about:

- whether their account is secure
- where their money is going
- whether the recipient is correct
- how much they will actually be charged
- whether the transaction has succeeded

Therefore:

If SwiftPay makes security, recipient verification, transaction fees, confirmation states and user control visible at the appropriate moments, users may experience less cognitive friction and greater confidence.

This hypothesis requires testing with real users.

---

# 3. Friction Audit Table

| Journey Stage | Potential Friction | User Concern | UX Risk | Trust Intervention |
|---|---|---|---|---|
| Login | Security information may not be visible | "Is my information safe?" | User hesitation | Secure connection message |
| Login | Sensitive credentials | "Can I trust this platform?" | Abandonment | Clear security communication |
| Home | Security status may be hidden | "Is my account protected?" | Uncertainty | Account protected status |
| Home | Important actions may be difficult to locate | "Where do I send money?" | Cognitive load | Clear Send Money CTA |
| Home | Financial information may lack hierarchy | "What is my available balance?" | Confusion | Prominent balance card |
| Transaction | Recipient identity may be unclear | "Am I sending this to the right person?" | Wrong-recipient anxiety | Recipient verification |
| Transaction | Bank/account information may be unclear | "Is this account correct?" | Transaction hesitation | Bank + masked account number |
| Transaction | Fees may appear too late | "How much will I pay?" | Fee surprise | Fee shown before confirmation |
| Transaction | Total cost may be unclear | "How much leaves my account?" | Lack of confidence | Prominent total |
| Transaction | Security may be invisible | "Is this transfer protected?" | Trust concern | Security indicators |
| Confirmation | Processing state may be unclear | "Did it work?" | Repeated actions/errors | Processing state |
| Success | Confirmation may be insufficient | "Where is my proof?" | Post-transaction uncertainty | Receipt + reference |

---

# 4. Login Friction

## Potential Problem

A financial application asks users to provide highly sensitive credentials.

Without visible trust cues, users may hesitate before continuing.

## User Need

The user needs reassurance that:

- the connection is secure
- their personal information is protected
- they are interacting with the intended financial service

## Design Response

SwiftPay introduces a visible:

"Secure connection"

message directly below the login form.

## Expected UX Effect

The design is intended to reduce uncertainty without overwhelming the user with technical security terminology.

---

# 5. Home Dashboard Friction

## Potential Problem

A dashboard can become cognitively demanding when important information and actions compete for attention.

## User Need

The user should immediately understand:

- where they are
- how much money is available
- whether their account is protected
- what actions they can take

## Design Response

The redesigned Home screen establishes a visual hierarchy:

1. Greeting
2. Account protection
3. Balance
4. Primary financial actions
5. Quick actions
6. Recent transactions
7. Security information

## Expected UX Effect

Users should be able to understand their account state quickly and find the Send Money action without unnecessary navigation.

---

# 6. Transaction Friction

## Potential Problem

Financial transactions create a high-consequence decision.

Users may hesitate when important information is unclear.

## User Need

Before pressing Confirm Transfer, the user should know:

- who receives the money
- which bank receives it
- which account is involved
- how much is being sent
- what fee applies
- the final amount
- whether the recipient has been verified

## Design Response

SwiftPay creates a dedicated transaction review experience.

The user sees all relevant information before confirmation.

---

# 7. Trust Intervention

The transaction screen introduces three major trust mechanisms.

## Recipient Verification

"✓ Recipient verified"

This gives the user a visible confirmation that the recipient information has been checked by the system.

## Transparent Pricing

The interface separates:

Amount

Transfer fee

Total

This allows users to understand the complete transaction cost before authorization.

## Security Communication

The interface communicates:

"Transfer details encrypted"

and:

"Recipient information verified"

These messages provide contextual reassurance at the point of decision.

---

# 8. Confirmation Friction

## Potential Problem

If the interface does not clearly communicate what happens after the user presses the confirmation button, users may:

- press the button repeatedly
- become uncertain
- leave the screen
- question whether the transaction succeeded

## Design Response

SwiftPay introduces a short:

"Processing..."

state.

The interface then transitions to a clear success screen.

---

# 9. Post-Transaction Friction

## Potential Problem

A simple success message may not provide enough evidence for a financial transaction.

## Design Response

SwiftPay provides:

- success status
- recipient
- amount
- fee
- total
- transaction reference

## UX Objective

Give users a clear record of what happened and reduce post-transaction uncertainty.

---

# 10. Cognitive Load Analysis

The redesign attempts to reduce unnecessary cognitive load by:

- grouping related information
- using clear headings
- separating security information from transaction information
- presenting the total cost before confirmation
- using familiar interaction patterns
- reducing unnecessary navigation
- maintaining consistent visual hierarchy

---

# 11. Error Prevention

The redesign uses preventive UX rather than relying only on error messages.

Examples:

### Recipient verification

Helps users check who they are sending money to.

### Transparent fee

Helps prevent unexpected cost.

### Review before confirmation

Gives the user a final opportunity to identify mistakes.

### Cancel option

Allows the user to exit without completing the transaction.

### Transaction reference

Provides evidence after completion.

---

# 12. Accessibility Considerations

The prototype should be evaluated for:

- sufficient text contrast
- readable font sizes
- clear button labels
- logical information hierarchy
- keyboard accessibility
- visible focus states
- meaningful labels for interactive elements
- reduced dependence on colour alone
- responsive mobile layout

Accessibility should be validated through formal testing before production deployment.

---

# 13. Business Impact Hypothesis

Reducing friction may contribute to:

- improved transaction completion
- lower abandonment
- improved user confidence
- fewer avoidable transaction errors
- clearer customer support interactions
- stronger perception of transparency

These are hypotheses and should be validated using usability testing and product analytics.

---

# 14. Recommended Research

Before production implementation, SwiftPay should conduct:

1. User interviews
2. Usability testing
3. Task-completion testing
4. Accessibility testing
5. A/B testing
6. Funnel analysis
7. Trust/confidence surveys

The 60% drop-off figure should also be investigated using product analytics to determine exactly where abandonment occurs.

---

# 15. Key Design Insight

The central insight from the audit is:

"Trust should not be communicated only through branding. It should be demonstrated through the interface."

SwiftPay demonstrates trust through:

- visible security status
- recipient verification
- transparent pricing
- review-before-confirmation
- clear processing state
- transaction receipt
- transaction reference
- user-controlled cancellation