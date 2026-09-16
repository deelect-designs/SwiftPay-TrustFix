# SwiftPay TrustFix

## Redesigning a Fintech Experience Around Trust, Clarity and User Control

**Role:** UX/UI Designer  
**Project Type:** UX/UI Design Capstone  
**Industry:** Fintech  
**Platform:** Mobile-first web application  
**Design Focus:** Trust, usability, transparency, privacy  
**Project Duration:** Capstone project  
**Tools:** Figma/UX tools, VS Code, HTML, CSS, JavaScript, AI-assisted research and ideation

---

# 01 — Project Overview

SwiftPay is a fictional fintech application presented in the capstone brief as experiencing a **60% user drop-off**.

The challenge was to investigate a potential friction point in the user journey and redesign three high-fidelity screens:

1. Login
2. Home
3. Transaction

The redesign was required to build international user trust.

Rather than treating trust as a visual branding exercise, I approached it as a UX problem.

The core question became:

> **How might we make SwiftPay users feel confident, informed and in control before completing a financial transaction?**

---

# 02 — The Problem

The capstone brief identified a 60% drop-off but did not provide the exact cause.

Therefore, I did not assume that one specific issue was responsible.

Instead, I conducted a UX friction audit and developed a hypothesis around moments where users may experience uncertainty.

Potential friction areas included:

- security uncertainty during login;
- difficulty identifying important actions;
- unclear account protection status;
- uncertainty about the recipient;
- unexpected or poorly communicated fees;
- unclear transaction totals;
- insufficient confirmation;
- unclear processing states;
- insufficient transaction receipts.

---

# 03 — Design Challenge

### How might we make SwiftPay users feel confident, informed and in control before completing a financial transaction?

The design challenge required balancing:

- speed;
- simplicity;
- financial transparency;
- security communication;
- privacy;
- accessibility;
- error prevention.

---

# 04 — UX Hypothesis

My primary hypothesis was:

> Users may hesitate or abandon financial tasks when security, recipient information, fees, transaction totals and confirmation states are unclear at critical decision points.

This is a hypothesis, not a proven research finding.

The prototype was therefore designed to make these elements more visible and testable.

---

# 05 — User Persona

## Ada Nwosu

**Age:** 29  
**Location:** Lagos, Nigeria  
**Occupation:** Digital entrepreneur  
**Technology:** Smartphone and digital financial services

### Goals

- Send money quickly
- Know the exact transaction cost
- Verify the recipient
- Receive immediate confirmation
- Feel protected when using financial technology

### Frustrations

- Unexpected fees
- Confusing confirmation messages
- Unclear error messages
- Hidden security information
- Fear of sending money to the wrong person

### Main Need

> “Before I press Send, I want to be completely sure where my money is going and how much I will be charged.”

---

# 06 — Friction Audit

| Stage | Friction | User Concern | Design Response |
|---|---|---|---|
| Login | Security uncertainty | Is my information safe? | Secure connection |
| Home | Security status hidden | Is my account protected? | Account protected |
| Home | Primary action unclear | Where do I send money? | Prominent Send Money |
| Transaction | Recipient uncertainty | Am I sending to the right person? | Recipient verification |
| Transaction | Fee uncertainty | What will I be charged? | Visible transfer fee |
| Transaction | Total uncertainty | How much leaves my account? | Visible total |
| Confirmation | Fear of mistakes | Can I review this first? | Review state |
| Processing | Unclear status | Did my transfer work? | Processing feedback |
| Success | Weak confirmation | Can I prove the transaction? | Transaction reference |

---

# 07 — User Journey

The redesigned journey is:

Open SwiftPay

↓

Login

↓

Home Dashboard

↓

Send Money

↓

Review Recipient

↓

Recipient Verification

↓

Enter Amount

↓

View Fee

↓

View Total

↓

Security Review

↓

Confirm Transfer

↓

Processing

↓

Transaction Successful

↓

Transaction Reference

↓

Return to Home

---

# 08 — Trust Architecture

The redesign uses progressive trust signals.

### Login

**🔒 Secure connection**

The user receives a visible security signal before entering the application.

↓

### Home

**🔒 Account protected**

The user can immediately see that account security is an intentional part of the experience.

↓

### Transaction

**✓ Recipient verified**

The interface helps users confirm who will receive the money.

↓

### Review

**Fee + Total**

The complete financial consequence is visible before confirmation.

↓

### Confirmation

**✓ Transfer details encrypted**

Security communication appears at the point of financial commitment.

↓

### Success

**Transaction reference**

The user receives a clear record of the completed action.

---

# 09 — Design System

## Colour

### Primary Green

`#087443`

Used for:

- primary actions;
- trust indicators;
- important interface states.

### Dark Green

`#065A34`

Used for:

- headers;
- strong emphasis;
- navigation areas.

### Background

`#F7F9F8`

Used to create a clean fintech environment.

### Text

`#102A43`

Used for readable primary text.

### Success

`#16803A`

Used for successful transaction states.

### Error

`#C62828`

Used for error and warning states.

---

# 10 — Typography

The interface uses a clean modern sans-serif style.

Primary options:

- Inter
- Roboto

The typography prioritises:

- readability;
- clear hierarchy;
- short labels;
- accessible contrast;
- mobile usability.

---

# 11 — Screen 01: Login

## Objective

Create confidence before users provide sensitive credentials.

### Key elements

- SwiftPay brand
- “Your money. Your control.”
- Welcome message
- Phone/email input
- Password input
- Sign in
- Forgot password
- Secure connection
- Privacy
- Security
- Help

### Trust mechanism

> 🔒 Secure connection

> Your personal and financial information is protected.

---

# 12 — Screen 02: Home Dashboard

## Objective

Provide a clear financial overview and make important actions easy to identify.

### Key elements

- Personal greeting
- Account protection status
- Total balance
- Send Money
- Add Money
- Quick actions
- Recent transactions
- Privacy & Security

### Trust mechanism

> 🔒 Account protected

The hierarchy prioritises:

1. Account status
2. Balance
3. Primary action
4. Quick actions
5. Recent activity
6. Security controls

---

# 13 — Screen 03: Transaction

## Objective

Reduce uncertainty before the user commits to a financial transfer.

### Recipient

**Chinedu Okafor**

**Access Bank**

**•••• 3489**

### Verification

> ✓ Recipient verified

### Amount

**₦50,000.00**

### Transfer fee

**₦10.00**

### Total

**₦50,010.00**

### Security

> ✓ Transfer details encrypted

> ✓ Recipient information verified

### Confirmation

> Please confirm that the recipient, amount and fee are correct.

The user can then choose:

**Confirm Transfer**

or

**Cancel**

---

# 14 — Transaction Success

After confirmation, the interface provides:

> **Money sent successfully**

It displays:

- Recipient
- Amount
- Fee
- Total
- Transaction reference

Example:

**SWP-2026-847291**

The purpose is to give the user immediate confirmation and a record that can be referenced later.

---

# 15 — Why These Changes Matter

The redesign does not simply add more information.

It places the **right information at the right moment**.

### Before login

Security

### Before sending

Recipient identity

### Before confirmation

Fee + total

### After confirmation

Transaction status + reference

This reduces the need for users to guess.

---

# 16 — AI-Enhanced UX Workflow

The project incorporated AI as an assistive design tool.

The workflow was:

User Problem

↓

Project Context

↓

AI-Assisted Research

↓

Persona Hypothesis

↓

Friction Audit

↓

User Flow

↓

Wireframe

↓

AI Design Ideation

↓

High-Fidelity UI

↓

Interactive Prototype

↓

Usability Audit

↓

Accessibility Audit

↓

Privacy Audit

↓

User Testing

↓

Iteration

AI was used to support:

- idea generation;
- synthesis;
- UX audit thinking;
- persona development;
- design exploration;
- documentation.

AI did not replace human judgment.

---

# 17 — RTCROS Master Prompt

The AI workflow was structured using an RTCROS prompt.

### Role

Senior UX researcher, fintech product designer and privacy-conscious UX consultant.

### Task

Conduct a UX friction audit and develop trust-centered recommendations for SwiftPay.

### Context

SwiftPay is a fictional fintech application experiencing a reported 60% drop-off.

### Requirements

Consider:

- trust;
- security communication;
- usability;
- accessibility;
- transaction clarity;
- privacy;
- cognitive load;
- business impact.

### Output

Generate:

- Executive Summary
- Persona
- User Journey
- Friction Audit
- Trust Barriers
- UX Recommendations
- Screen Recommendations
- Accessibility considerations
- Privacy considerations
- Success metrics
- Design priorities

### Style

Professional, concise, evidence-based and transparent about assumptions.

---

# 18 — Privacy by Design

Privacy was incorporated into the redesign rather than treated as a separate technical concern.

The project considered:

- Nigeria Data Protection Act;
- GDPR;
- CCPA/CPRA;
- ISO/IEC 27001:2022;
- ISO/IEC 27701:2025.

### Privacy principles

- Data minimisation
- Purpose limitation
- Transparency
- Security
- User control
- Retention awareness
- Accountability

### UX examples

Masked account information:

> •••• 3489

Privacy navigation:

> Privacy & Security

Security indicators:

> 🔒 Secure connection

> ✓ Transfer details encrypted

---

# 19 — Privacy Risk Assessment

Key risks considered:

### Credential uncertainty

**Impact:** Very High

**Response:** Security communication.

### Wrong recipient

**Impact:** Very High

**Response:** Recipient verification.

### Unexpected fees

**Impact:** High

**Response:** Show fee and total before confirmation.

### Excessive data collection

**Impact:** High

**Response:** Data minimisation.

### Unnecessary data exposure

**Impact:** High

**Response:** Mask sensitive information.

---

# 20 — A-I-P Business Proposal

## Assessment

SwiftPay has a reported 60% drop-off.

The UX audit identifies potential friction around:

- security;
- navigation;
- recipient verification;
- fees;
- transaction totals;
- confirmation;
- feedback.

---

## Insight

Users need clear information and visible control at critical financial decision points.

Trust therefore needs to be demonstrated through interaction design.

---

## Plan

Redesign the critical journey around:

**Security**

↓

**Clarity**

↓

**Verification**

↓

**Transparency**

↓

**Confirmation**

↓

**Feedback**

Then validate the solution using real users and measurable UX metrics.

---

# 21 — Success Metrics

The redesign should be evaluated using measurable outcomes.

## Transaction Completion Rate

Completed transactions ÷ Started transactions × 100

---

## Login Completion Rate

Successful logins ÷ Login attempts × 100

---

## Abandonment Rate

Abandoned journeys ÷ Started journeys × 100

---

## Task Completion Time

Measure how long users need to complete the target task.

---

## Error Rate

Measure incorrect or repeated actions.

---

## Trust Score

Ask users to rate statements such as:

> “I felt confident completing this transaction.”

Use a defined rating scale.

---

# 22 — Validation Plan

The prototype should be tested before claiming business improvement.

### Research participants

Recruit representative fintech users.

### Test tasks

1. Log in.
2. Find Send Money.
3. Verify the recipient.
4. Identify the transfer fee.
5. Identify the total.
6. Confirm the transaction.
7. Find the transaction reference.

### Observe

- hesitation;
- errors;
- confusion;
- completion;
- questions;
- abandonment;
- confidence.

### Measure

Compare results against the relevant baseline.

---

# 23 — Accessibility Considerations

The redesign considers:

- readable typography;
- sufficient colour contrast;
- clear hierarchy;
- descriptive labels;
- large touch targets;
- clear error states;
- avoiding colour as the only communication method;
- simple language;
- responsive mobile layouts.

Accessibility testing would still be required before production deployment.

---

# 24 — What I Learned

This project reinforced that UX design is not primarily about making screens attractive.

A strong interface should reduce uncertainty and help people make informed decisions.

In financial products, small ambiguities can become significant user problems.

For example:

> “How much am I actually paying?”

is not merely a visual-design question.

It is a trust question.

Similarly:

> “Who exactly am I sending this money to?”

is both a usability and risk question.

This changed the way I approached the transaction screen.

---

# 25 — Key Design Insight

> **Trust should not be communicated only through branding. It should be demonstrated through the interface.**

SwiftPay demonstrates this through:

- secure connection messaging;
- account protection;
- recipient verification;
- transparent fees;
- visible totals;
- security indicators;
- explicit confirmation;
- transaction references.

---

# 26 — Business Impact Hypothesis

If research confirms that uncertainty contributes to abandonment, the redesigned experience could potentially improve:

- transaction completion;
- task clarity;
- user confidence;
- error prevention;
- transparency;
- support efficiency.

These are hypotheses to be validated.

The prototype itself does not establish a measured business improvement.

---

# 27 — Final Design Philosophy

The SwiftPay redesign follows five principles:

### 1. Make important information visible.

### 2. Make financial consequences clear before commitment.

### 3. Verify high-risk information.

### 4. Communicate security at the right moment.

### 5. Give users control and confirmation.

---

# 28 — Final Outcome

SwiftPay TrustFix transforms the original challenge into a structured UX solution.

### Problem

60% reported drop-off.

↓

### Research

Persona + friction audit.

↓

### Insight

Potential trust and uncertainty barriers.

↓

### Design

Three high-fidelity trust-centered screens.

↓

### Prototype

Interactive Login → Home → Transaction → Success flow.

↓

### Privacy

Privacy-by-design and global framework review.

↓

### Business

A-I-P proposal and measurable validation plan.

---

# 29 — Final Case Study Statement

> **SwiftPay TrustFix is a trust-centered fintech UX redesign created to address a reported 60% user drop-off. I used an AI-assisted UX workflow to conduct a friction audit, develop a user persona and journey, identify potential trust barriers, and redesign the Login, Home and Transaction experiences. The final prototype makes security status, recipient verification, transaction fees, total cost and confirmation states visible at critical decision points. I also incorporated privacy-by-design principles and mapped the concept against major privacy and information-security frameworks. The project demonstrates how UX can connect human needs, business problems, technology and responsible design.**

---

# 30 — Project Deliverables

### Research

- Persona
- Friction Audit

### UX

- User Flow
- Wireframes
- High-Fidelity Screens

### Prototype

- Login
- Home
- Transaction
- Success

### AI

- RTCROS Master Prompt
- AI-Assisted UX Audit
- AI Workflow

### Privacy

- Data Privacy Audit
- Privacy Risk Register
- Global Standards Review

### Business

- A-I-P Proposal
- Success Metrics
- Validation Plan

---

# 31 — Project Repository Structure

```text
SwiftPay-TrustFix/
│
├── 01-Research/
│   ├── persona.md
│   └── friction-audit.md
│
├── 02-UX-Flow/
│   ├── user-flow.md
│   └── user-flow.html
│
├── 03-Wireframes/
│
├── 04-High-Fidelity/
│
├── 05-Prototype/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── 06-AI/
│   ├── RTCROS-master-prompt.md
│   ├── ai-assisted-ux-audit.md
│   └── ai-workflow.md
│
├── 07-Privacy/
│   ├── data-privacy-audit.md
│   └── privacy-audit.html
│
└── 08-Portfolio/
    ├── aip-proposal.md
    ├── aip-proposal.html
    └── SwiftPay-TrustFix-case-study.md