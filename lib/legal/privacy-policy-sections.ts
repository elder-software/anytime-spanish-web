import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_CONTACT_NAME,
  PRODUCT_NAME,
  WEBSITE_URL,
} from "@/lib/legal/site-metadata";

export type PrivacyPolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
  italicFirstParagraph?: boolean;
};

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `This privacy policy applies to the ${PRODUCT_NAME} app for mobile devices, together with the marketing website at ${WEBSITE_URL} and any related services operated by ${LEGAL_CONTACT_NAME} (collectively, the "Application"). ${LEGAL_CONTACT_NAME} is hereby referred to as the "Service Provider".`,
    ],
  },
  {
    id: "information-collected",
    title: "What information does the Application obtain and how is it used?",
    paragraphs: [
      `The Application is designed to minimize data collection. Registration is not required to use the app, and the Service Provider does not collect, log, or store your voice recordings, conversation transcripts, or practice history on its servers.`,
      "When you speak during a practice session, your audio is processed on your device by a local AI model to generate responses and feedback. Audio is handled ephemerally — it exists only long enough for the model to process it, then it is discarded. The Service Provider does not receive your voice data.",
      "To enable offline conversations, the app downloads an AI language model to your device over the internet. During that download, standard technical protocol data (such as your ephemeral IP address, device type, and download timestamp) may be transmitted to the third party file host that serves the model file. The Service Provider does not control what that host logs and does not receive a copy of that connection data.",
      "If you purchase access to additional conversation scenarios, payment is handled entirely by Google Play or the App Store. The Service Provider does not receive your payment card number or billing details. The store may share purchase confirmation data (such as whether a purchase was completed) so the Service Provider can unlock content in the app.",
      `The marketing website at ${WEBSITE_URL} uses Vercel Analytics to collect aggregated, anonymous page view data — such as which pages were visited and from which country. Vercel Analytics does not use cookies for tracking and does not collect personally identifiable information.`,
    ],
  },
  {
    id: "location",
    title:
      "Does the Application collect precise real time location information of the device?",
    paragraphs: [
      "This Application does not collect precise information about the location of your mobile device.",
    ],
  },
  {
    id: "third-parties",
    title:
      "Do third parties see and/or have access to information obtained by the Application?",
    paragraphs: [
      "The Service Provider does not sell your data or share personal information with third parties for advertising or profiling.",
      "Limited data may be processed by third parties in the following circumstances: the third party file host that serves the AI model download may log standard connection data as described above; Google Play or the App Store processes in app purchase transactions according to their own privacy policies; and Vercel processes aggregated website analytics for the marketing site according to Vercel's privacy policy at https://vercel.com/legal/privacy-policy.",
    ],
  },
  {
    id: "opt-out",
    title: "What are my opt-out rights?",
    paragraphs: [
      "Because the app does not collect personal information through normal use, uninstalling it removes the Application and any locally stored unlock status from your device.",
      `If you contact the Service Provider directly or voluntarily provide information by other means, you may request deletion of that information by contacting ${LEGAL_CONTACT_EMAIL}.`,
      "For website analytics data processed by Vercel, you may need to contact Vercel directly. For purchase records, contact Google or Apple as applicable.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      `The Application is not intended for children under 16 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly solicit data from children or market to them. Because the app does not collect personal information through normal use, children's data is not at risk from use of the Application alone.`,
      `If you voluntarily provide personal information through other means and are under 16 years of age, your parent or guardian must provide consent on your behalf where permitted by law. If you believe a child has provided personal information to the Service Provider, contact ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "Because the Application does not collect personal data through normal use, the risk of personal data exposure from the app is minimal. However, no security system is completely secure. The Service Provider implements reasonable safeguards to protect its systems and any data it holds.",
    ],
  },
  {
    id: "data-breach",
    title: "Data Breach Notification",
    paragraphs: [
      "Because the Application does not collect personal data through normal use, the risk of a data breach affecting your personal data from the app is minimal. If a breach occurs involving any data you have voluntarily provided, the Service Provider will notify you as required by applicable law.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.",
      `Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
  {
    id: "consent",
    title: "Your Consent",
    paragraphs: [
      "If you voluntarily provide information to the Service Provider and processing is based on consent, you may withdraw that consent at any time without affecting processing carried out before withdrawal.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      `If you have any questions regarding privacy while using the Application, or have questions about the practices described in this policy, please contact the Service Provider via email at ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
];
