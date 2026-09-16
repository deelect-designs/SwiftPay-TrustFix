# SwiftPay Data Privacy Audit

## Project

**Project Name:** SwiftPay TrustFix  
**Project Type:** Fintech UX/UI Capstone Prototype  
**Primary UX Problem:** 60% user drop-off  
**Privacy Focus:** Responsible handling of personal and financial information  
**Audit Type:** Prototype-level UX and privacy-by-design audit  
**Date:** September 2026

---

# 1. Executive Summary

SwiftPay is a fictional fintech application experiencing a 60% user drop-off rate.

The UX redesign focuses on reducing uncertainty during login, account navigation and financial transactions.

Because fintech applications process highly sensitive information, trust must extend beyond visual design.

Users should understand:

- what information is being requested;
- why information is required;
- how information is protected;
- what happens when a transaction is initiated;
- what information is shared;
- how long information may be retained;
- how users can exercise control over their information.

This privacy audit therefore evaluates the SwiftPay prototype against privacy-by-design principles and selected global privacy and information-security frameworks.

The audit considers:

1. Nigeria Data Protection Act (NDPA)
2. General Data Protection Regulation (GDPR)
3. California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA)
4. ISO/IEC 27001:2022
5. ISO/IEC 27701:2025

This document does not constitute legal advice and does not claim that the SwiftPay prototype is legally compliant or ISO certified.

---

# 2. Privacy-by-Design Objective

The central privacy objective is:

> Give users meaningful visibility and control over how their personal and financial information is handled while minimising unnecessary data collection.

The design should make privacy understandable without forcing users to become security experts.

SwiftPay should therefore communicate privacy and security at the moments when users are most likely to feel uncertainty.

---

# 3. Data Inventory

The following categories represent data that a production fintech application such as SwiftPay may process.

| Data Category | Example | Sensitivity | UX/Privacy Consideration |
|---|---|---:|---|
| Identity information | Full name | High | Collect only when necessary |
| Contact information | Phone number, email | High | Explain purpose |
| Authentication data | Password, OTP | Very High | Never display sensitive credentials |
| Financial information | Account details | Very High | Protect and minimise exposure |
| Transaction information | Amount, recipient, date | Very High | Provide transparent transaction details |
| Device information | Device/browser information | Medium | Explain security purpose where applicable |
| Location information | Approximate or precise location | High | Do not collect unnecessarily |
| Security information | Login/device risk indicators | High | Use proportionately |
| Support information | Customer service interactions | Medium/High | Define retention purpose |

---

# 4. Data Minimisation

SwiftPay should only request information that is necessary for a clearly defined purpose.

### Recommended controls

- Do not request unnecessary personal information during login.
- Avoid collecting precise location unless there is a documented purpose.
- Do not expose complete account numbers unnecessarily.
- Display masked account information where possible.
- Do not place passwords or OTPs in visible transaction history.
- Avoid collecting sensitive information simply because it may be useful in the future.
- Review collected data periodically.

### Prototype implementation

The prototype uses:

- phone/email input;
- password input;
- recipient information;
- transaction amount;
- transaction fee;
- transaction reference.

The prototype does not implement real data collection or financial processing.

---

# 5. Purpose Limitation

Each category of personal information should have a defined business purpose.

| Data | Possible Purpose |
|---|---|
| Phone/email | Account authentication and communication |
| Password | Account authentication |
| Recipient information | Completing a transfer |
| Transaction amount | Executing and recording a transaction |
| Transaction reference | Transaction identification and support |
| Device information | Security and fraud prevention |
| Location | Only where legally and operationally justified |

SwiftPay should not reuse collected information for unrelated purposes without an appropriate legal and privacy assessment.

---

# 6. Transparency

Users should be able to understand the major privacy implications of using SwiftPay.

### Recommended interface controls

Login screen:

> Secure connection  
> Your personal and financial information is protected.

Account area:

> Privacy & Security

Transaction screen:

> Transfer details encrypted

Privacy section:

- What data we collect
- Why we collect it
- How we protect it
- How long we retain it
- Who we share it with
- Your privacy rights
- Contact/support information

---

# 7. User Control

A trustworthy fintech application should give users meaningful control over their information.

Potential controls include:

- View personal information
- Correct inaccurate information
- Request deletion where legally applicable
- Manage privacy preferences
- Manage communication preferences
- Review security activity
- Manage connected devices
- Contact privacy support
- Request information about personal-data processing

These controls would need to be implemented and legally reviewed in a production system.

---

# 8. Security and Confidentiality

Financial information requires strong security controls.

### Recommended production controls

- Encryption in transit
- Encryption at rest
- Strong authentication
- Multi-factor authentication
- Secure password storage
- Role-based access control
- Least-privilege access
- Audit logging
- Security monitoring
- Secure session management
- Rate limiting
- Fraud detection
- Secure backups
- Incident-response procedures
- Vulnerability management

The prototype only communicates selected security concepts through the interface.

It does not implement production-grade encryption, authentication infrastructure, fraud detection or database security.

---

# 9. Privacy at the Three Core Screens

## 9.1 Login Screen

### Privacy/security risk

Users may hesitate to enter credentials if they are uncertain whether the service is legitimate or secure.

### UX response

Display:

> 🔒 Secure connection

And:

> Your personal and financial information is protected.

Provide accessible links to:

- Privacy
- Security
- Help

### Privacy principle

Transparency and security.

---

## 9.2 Home Dashboard

### Privacy/security risk

Users need confidence that their account is protected and that sensitive information is not unnecessarily exposed.

### UX response

Display:

> 🔒 Account protected

Provide a visible:

> Privacy & Security

area.

Use masked or appropriately protected financial information where possible.

### Privacy principle

User control, transparency and security.

---

## 9.3 Transaction Screen

### Privacy/security risk

Users may fear sending money to the wrong recipient or being charged an unexpected amount.

### UX response

Display:

> ✓ Recipient verified

Show:

- Recipient name
- Bank
- Masked account number
- Amount
- Transfer fee
- Total amount

Before confirmation:

> Please confirm that the recipient, amount and fee are correct.

### Privacy principle

Transparency, accuracy, data minimisation and security.

---

# 10. Transaction Privacy Design

The transaction-review screen should minimise uncertainty before the user confirms a transfer.

### Required information

**Recipient**

Chinedu Okafor

**Bank**

Access Bank

**Account**

•••• 3489

**Amount**

₦50,000.00

**Transfer fee**

₦10.00

**Total**

₦50,010.00

**Security**

✓ Transfer details encrypted

✓ Recipient information verified

The prototype intentionally avoids displaying unnecessary financial information.

---

# 11. Data Retention

SwiftPay should establish documented retention periods for different categories of information.

Example retention framework:

| Data | Retention Approach |
|---|---|
| Account information | Retain while account/service relationship requires it |
| Transaction records | Retain according to applicable legal and financial obligations |
| Security logs | Retain according to documented security requirements |
| Marketing preferences | Retain while needed for preference management |
| Support records | Retain according to documented support/legal requirements |

Retention periods must be determined by the actual production application's legal, regulatory, operational and security requirements.

The prototype does not establish legally required retention periods.

---

# 12. Data Subject / Consumer Rights

Depending on the applicable jurisdiction and circumstances, users may have privacy rights concerning their personal information.

Potential rights include:

- Access
- Correction/rectification
- Deletion/erasure where applicable
- Restriction of processing where applicable
- Data portability where applicable
- Objection to certain processing
- Control over certain uses of personal information
- Information about processing activities

SwiftPay should provide a clear privacy-request process.

---

# 13. Nigeria Data Protection Act

Nigeria is the primary context for this project.

The Nigeria Data Protection Act provides a framework for protecting personal data and includes principles such as:

- Lawfulness
- Fairness
- Transparency
- Purpose limitation
- Data minimisation
- Storage limitation
- Accuracy
- Confidentiality, integrity and availability
- Accountability
- Duty of care

### SwiftPay UX response

The prototype supports these principles through:

- clear security communication;
- limited information displayed during transactions;
- masked account information;
- transparent fees;
- recipient verification;
- visible transaction totals;
- privacy/security navigation;
- explicit transaction confirmation.

A production SwiftPay implementation would require legal, technical and organisational controls beyond the prototype.

---

# 14. GDPR Considerations

The GDPR establishes important principles for personal-data processing, including:

- Lawfulness, fairness and transparency
- Purpose limitation
- Data minimisation
- Accuracy
- Storage limitation
- Integrity and confidentiality
- Accountability

### SwiftPay UX response

The prototype supports these principles conceptually through:

- transparent transaction information;
- minimised display of account details;
- security communication;
- user-facing privacy controls;
- clear purpose-oriented information.

Whether GDPR applies to a real SwiftPay business would depend on the actual processing activities, users, jurisdictions and other legal factors.

---

# 15. CCPA / CPRA Considerations

The California Consumer Privacy Act, as amended by the California Privacy Rights Act, provides California consumers with privacy rights concerning personal information in applicable circumstances.

Relevant rights can include:

- Right to know
- Right to delete
- Right to correct
- Right to opt out of sale/sharing
- Right to limit certain uses/disclosures of sensitive personal information
- Other protections provided under applicable California privacy law

### SwiftPay UX response

If the service were subject to applicable California requirements, the privacy experience should provide appropriate mechanisms for exercising relevant rights.

Potential interface:

> Privacy Center

Options:

- View my data
- Correct my information
- Delete/request deletion
- Privacy preferences
- Opt out where applicable
- Limit sensitive-information use where applicable
- Contact privacy support

Applicability would need to be determined based on the actual business, data processing and California legal requirements.

---

# 16. ISO/IEC 27001:2022

ISO/IEC 27001:2022 focuses on establishing, implementing, maintaining and continually improving an Information Security Management System (ISMS).

SwiftPay production controls should consider:

- Information-security governance
- Risk assessment
- Access control
- Asset management
- Incident management
- Business continuity
- Security monitoring
- Supplier security
- Secure development
- Employee security awareness
- Continuous improvement

### UX relevance

Security should not exist only in backend infrastructure.

The user interface should communicate important security states clearly.

Examples:

> Secure connection

> Account protected

> Recipient verified

> Transfer details encrypted

---

# 17. ISO/IEC 27701:2025

ISO/IEC 27701:2025 provides requirements and guidance for establishing, implementing, maintaining and continually improving a Privacy Information Management System (PIMS).

For SwiftPay, this suggests a structured approach to:

- Personal information governance
- Privacy risk management
- Accountability
- Data-processing controls
- Privacy responsibilities
- Continuous improvement

### UX relevance

The interface should help users understand and control privacy rather than hiding privacy practices inside lengthy technical documentation.

---

# 18. Privacy Risk Register

| Risk | Likelihood | Impact | UX/Control Response |
|---|---|---|---|
| User enters credentials on an untrusted screen | Medium | Very High | Secure connection indicators |
| Wrong recipient receives funds | Medium | Very High | Recipient verification |
| Unexpected transaction fee | High | High | Show fee before confirmation |
| Excessive personal-data collection | Medium | High | Data minimisation |
| Unclear privacy practices | Medium | High | Privacy Center |
| Unnecessary account-data exposure | Medium | High | Mask sensitive information |
| Unauthorised account access | Medium | Very High | Strong authentication |
| Excessive data retention | Medium | High | Retention policy |
| Third-party data exposure | Medium | High | Vendor/data-processing controls |
| Poor privacy-request experience | Low/Medium | Medium | Privacy request workflow |

---

# 19. Privacy-by-Design Checklist

## Data Collection

- [x] Identify categories of data
- [x] Consider data minimisation
- [x] Identify purpose for each data category
- [ ] Implement production data inventory
- [ ] Validate lawful basis for processing

## Transparency

- [x] Security messaging
- [x] Transaction transparency
- [x] Privacy/security navigation
- [ ] Production privacy notice
- [ ] Jurisdiction-specific notices

## Security

- [x] Security indicators in UI
- [x] Recipient verification concept
- [x] Transaction confirmation
- [ ] Production encryption implementation
- [ ] Multi-factor authentication
- [ ] Access-control system
- [ ] Security monitoring

## User Control

- [x] Privacy & Security concept
- [ ] Data access workflow
- [ ] Data correction workflow
- [ ] Deletion/request workflow
- [ ] Privacy preference management

## Governance

- [x] Privacy risk register
- [x] Global standards comparison
- [ ] Data Protection Impact Assessment where required
- [ ] Vendor assessment
- [ ] Retention schedule
- [ ] Incident-response plan
- [ ] Production legal review

---

# 20. Standards Comparison

| Framework | Primary Focus | SwiftPay Design Implication |
|---|---|---|
| NDPA | Nigerian personal-data protection | Privacy, lawful processing, accountability |
| GDPR | European personal-data protection | Transparency, minimisation, user rights |
| CCPA/CPRA | California consumer privacy | Consumer control and privacy rights |
| ISO/IEC 27001:2022 | Information security management | Security risk management and controls |
| ISO/IEC 27701:2025 | Privacy information management | Structured privacy governance |

---

# 21. What the Prototype Demonstrates

The SwiftPay prototype demonstrates privacy-conscious UX concepts through:

1. Secure connection messaging
2. Account protection status
3. Recipient verification
4. Masked account information
5. Transparent fees
6. Transparent transaction totals
7. Transaction confirmation
8. Transaction reference
9. Privacy and security navigation
10. Privacy-by-design documentation

---

# 22. What the Prototype Does NOT Demonstrate

The prototype does not prove that SwiftPay has:

- production encryption;
- secure backend infrastructure;
- legal compliance;
- ISO certification;
- GDPR certification;
- NDPA compliance certification;
- CCPA/CPRA compliance;
- production authentication;
- production fraud detection;
- production database security;
- legally validated retention periods;
- completed data-processing agreements;
- completed privacy impact assessments.

These would require implementation, testing, documentation, governance and appropriate legal/security review.

---

# 23. Key Privacy UX Principle

> Trust should not be communicated only through branding. It should be demonstrated through the interface.

SwiftPay demonstrates this principle by placing trust signals at moments of uncertainty:

**Login**

Secure connection

↓

**Home**

Account protected

↓

**Transaction**

Recipient verified + Fee visible + Total visible

↓

**Confirmation**

Transfer details encrypted

↓

**Success**

Transaction reference provided

---

# 24. Final Privacy Assessment

The SwiftPay redesign incorporates privacy-by-design concepts into the user experience.

The strongest privacy UX improvements are:

- minimising unnecessary information exposure;
- explaining security at relevant moments;
- giving users transaction transparency;
- verifying recipient information;
- providing privacy/security access;
- considering user rights;
- documenting security and privacy risks.

However, the prototype should be considered a **design demonstration**, not evidence of legal compliance or security certification.

Before a real financial product could be launched, SwiftPay would require appropriate legal, privacy, cybersecurity, engineering, risk and compliance assessments.

---

# 25. Portfolio Statement

### Privacy by Design

> I treated privacy as part of the user experience rather than as an afterthought. The SwiftPay redesign makes security, recipient verification, transaction transparency and user control visible at critical points in the journey. I also mapped the concept against the Nigeria Data Protection Act, GDPR, CCPA/CPRA, ISO/IEC 27001:2022 and ISO/IEC 27701:2025. Because this is a prototype, the audit identifies design requirements and risks rather than claiming legal compliance or certification.

---

# References

1. Nigeria Data Protection Commission — Nigeria Data Protection Act and related guidance.
2. European Union — Regulation (EU) 2016/679, General Data Protection Regulation.
3. California Privacy Protection Agency — California Consumer Privacy Act and related regulations.
4. ISO — ISO/IEC 27001:2022, Information Security Management Systems.
5. ISO — ISO/IEC 27701:2025, Privacy Information Management Systems.

**Audit status:** Prototype-level privacy and UX assessment.