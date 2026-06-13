import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_CONTACT_NAME,
  PRODUCT_NAME,
  WEBSITE_URL,
} from "@/lib/legal/site-metadata";

export type TermsSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `These terms and conditions apply to the ${PRODUCT_NAME} app for mobile devices, together with the marketing website at ${WEBSITE_URL} and any related services operated by ${LEGAL_CONTACT_NAME} (collectively, the "Application"). ${LEGAL_CONTACT_NAME} is hereby referred to as the "Service Provider".`,
      "By downloading or using the Application, you agree to these Terms and Conditions. You should read them carefully before using the Application.",
    ],
  },
  {
    id: "license",
    title: "License to use the Application",
    paragraphs: [
      "Subject to your compliance with these Terms, the Service Provider grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Application on a mobile device for personal or internal business purposes. You may not reproduce, distribute, modify, create derivative works from, reverse engineer, decompile, or disassemble the Application, except as and only to the extent that such activity is expressly permitted by applicable law.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      'The Service Provider retains all intellectual property rights in the Application, including its code, design, trademarks, service marks, trade names, logos, and branding (the "IP"). Nothing in these Terms grants you any license or right to use the Service Provider\'s trademarks, logos, or branding for any purpose. You agree not to remove, alter, or obscure any copyright, trademark, or other proprietary notices displayed in or on the Application.',
      "Unauthorized copying, modification of the Application, any part of the Application, or the Service Provider's trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "The Service Provider may suspend your access to the Application or services if you materially breach these Terms. The Service Provider will provide you with written notice of the breach and, where the breach is capable of cure, you will have 14 days from receipt of notice to remedy the breach. If you fail to cure the breach within that period, the Service Provider may terminate your access.",
      "The Service Provider may suspend or terminate your access immediately without notice if you violate applicable law, infringe intellectual property rights, or engage in activity that could cause harm to other users or the Service Provider.",
      "Upon termination, your right to use the Application will end and you must delete all copies from your devices.",
      "By accessing and using this Application, you represent that you are legally permitted to use it in your jurisdiction. You must be at least 16 years of age (or the age of digital consent in your jurisdiction, if higher) to use the Application. If you are below that age, a parent or legal guardian must review and accept these Terms on your behalf.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    paragraphs: [
      `${PRODUCT_NAME} is a private language-practice tool. The Application does not offer public posting, social feeds, or user-to-user sharing features. You use the Application to practice spoken Spanish with an on-device AI tutor; your voice is processed locally and is not published to other users.`,
      "You agree not to use the Application in any way that: violates applicable law or third-party intellectual property rights; is abusive, threatening, harassing, defamatory, or hate speech; contains discrimination or incitement to violence or illegal activity; involves spam, phishing, or malware; violates the privacy or personal data rights of others; or is misleading, false, or deceptive.",
      "The Service Provider reserves the right to restrict access to the Application if you misuse it, attempt to circumvent technical protections, or interfere with the Service Provider's systems or support channels.",
      `If you believe someone is using the Application unlawfully or infringing your rights, you may report it to the Service Provider at ${LEGAL_CONTACT_EMAIL}. Include enough information for the Service Provider to evaluate the complaint and contact you if follow-up is required.`,
    ],
  },
  {
    id: "purchases-and-modifications",
    title: "Purchases and Modifications",
    paragraphs: [
      "The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.",
      "Two conversation scenarios are available at no charge. You may unlock additional scenarios through a one-time in app purchase processed by Google Play or the App Store. Payment terms, pricing, and refunds are governed by the applicable store's policies. The Service Provider does not operate a subscription for the Application.",
    ],
  },
  {
    id: "device-and-connectivity",
    title: "Device Security and Connectivity",
    paragraphs: [
      "The Application is designed to process practice conversations on your device. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advises against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.",
      "Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. For example, downloading the on-device AI model requires a network connection. Conversation practice itself does not require an ongoing internet connection once the model is installed. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.",
      "If you are using the Application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during connection to the Application, or other third-party charges. By using the Application, you accept responsibility for any such charges, including roaming data charges if you use the Application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the Application, they assume that you have obtained permission from the bill payer.",
      "Similarly, the Service Provider cannot always assume responsibility for your usage of the Application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.",
      "Nothing in these Terms shall limit any rights you have under applicable consumer protection laws that cannot be lawfully excluded.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, the Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, data loss, or business interruption, even if advised of the possibility of such damages.",
      "However, the Service Provider retains full liability for: death or personal injury caused by negligence; fraud or fraudulent misrepresentation; and any other liability that cannot be excluded or limited under applicable law.",
      "To the fullest extent permitted by law, the total liability of the Service Provider for any claim shall not exceed the amount paid by you to the Service Provider for the Application in the 12 months preceding the claim, or the minimum amount that must be paid under applicable law, whichever is greater. If the Application is provided free of charge, this means the Service Provider's liability is limited to the minimum amount permitted by applicable law.",
      "The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on third-party information provided through this Application, or for inaccuracies in content provided by third parties.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "To the fullest extent permitted by law, you agree to indemnify and hold harmless the Service Provider, its affiliates, officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses, including reasonable legal fees, arising out of or directly related to your breach of these Terms or your intentional misuse of the Application.",
      "This indemnification does not apply to claims arising from the Service Provider's own negligence, breach of these Terms, or violation of applicable law. In jurisdictions where consumer indemnification is restricted by law, this clause shall be limited to the maximum extent permitted.",
    ],
  },
  {
    id: "updates-and-availability",
    title: "Updates and Availability",
    paragraphs: [
      "The Service Provider may wish to update the Application at some point. The Application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the Application to) may change, and you will need to download the updates if you want to continue using the Application. The Service Provider does not guarantee that it will always update the Application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. You should accept updates when offered; if you choose not to, the Service Provider may cease to support earlier versions and the Application may not function properly.",
      "The Service Provider may also wish to cease providing the Application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the Application, and (if necessary) delete it from your device.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms and Conditions are governed by the laws of the jurisdiction in which the Service Provider is established, excluding conflict of law rules, except to the extent mandatory consumer protection laws provide otherwise.",
      "Any dispute arising out of or relating to these Terms will be brought before the courts that have jurisdiction under applicable law. Nothing in this clause limits any rights you may have to bring a claim in a court that is competent under mandatory law.",
    ],
  },
  {
    id: "dsa-compliance",
    title: "DSA Compliance (Digital Services Act)",
    paragraphs: [
      'If the Application is an intermediary service as defined under the Digital Services Act (Regulation (EU) 2022/2065, "DSA"), the following provisions apply in addition to the terms above.',
      `Point of Contact: The Service Provider maintains a single point of contact for direct communication with EU authorities and recipients of the service, reachable at ${LEGAL_CONTACT_EMAIL}. Where the Service Provider is established outside the European Union, a legal representative in the EU has been designated in accordance with Article 13 of the DSA.`,
      "Content Moderation and Statement of Reasons: When the Service Provider restricts access to content, suspends or terminates an account, or otherwise limits the availability of the Application's features, a clear and specific statement of reasons will be provided to the affected user. The statement will include the nature of the restriction, the legal or contractual basis for the decision, and information on available redress mechanisms, in accordance with Article 17 of the DSA.",
      "Notice and Action: Users and third parties may submit notices of allegedly illegal content through the contact details provided in these Terms. The Service Provider will process notices promptly, diligently, and without automated decision-making where the circumstances require human review. Notices will be acknowledged electronically and a decision communicated without undue delay, in accordance with Article 16 of the DSA.",
      "Out-of-Court Dispute Settlement: Disputes regarding content moderation decisions, including decisions to restrict content or suspend accounts, may be submitted to an out-of-court dispute settlement body certified in accordance with Article 21 of the DSA. The Service Provider will engage with such bodies in good faith. Use of out-of-court dispute settlement does not affect your right to seek judicial remedy under applicable law.",
      `Transparency Reporting: The Service Provider publishes periodic transparency reports covering content moderation activities, including the volume of notices received, actions taken, and automated means used, in accordance with Article 24 of the DSA. Reports are made available upon request at ${LEGAL_CONTACT_EMAIL}.`,
      "These DSA provisions apply to the extent that the Application qualifies as an intermediary service under the DSA and does not replace or limit any rights or obligations under applicable consumer protection or data protection law.",
    ],
  },
  {
    id: "severability",
    title: "Severability",
    paragraphs: [
      "If any provision of these Terms and Conditions is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions of these Terms shall remain in full force and effect.",
    ],
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    paragraphs: [
      "These Terms and Conditions, together with the Privacy Policy, constitute the entire agreement between you and the Service Provider concerning your use of the Application, superseding any prior agreements or understandings.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms and Conditions",
    paragraphs: [
      "The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.",
      `Previous versions of these Terms and Conditions will be maintained and made available upon request by contacting the Service Provider at ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      `If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
];
