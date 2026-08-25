export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description:
    "How SeaCraft Technology Solutions Ltd collects, uses, and protects information submitted through this website.",
  lastUpdated: "July 2025",
  intro:
    "This Privacy Policy describes how we handle personal information collected through our website and enquiry channels. It is intended to provide general information and does not constitute legal advice.",
  sections: [
    {
      title: "Who We Are",
      paragraphs: [
        "SeaCraft Technology Solutions Ltd is a Nigerian company providing subsea, ROV, marine, and offshore services. References to \"we\", \"us\", or \"our\" in this policy refer to SeaCraft Technology Solutions Ltd.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "We may collect information that you voluntarily provide when contacting us, including your name, email address, phone number, company name, and message content.",
        "We may also collect standard technical information such as browser type, device information, and pages visited, where such data is generated through normal website operation or analytics tools.",
      ],
    },
    {
      title: "How We Use Information",
      paragraphs: [
        "We use enquiry information to respond to your request, assess service requirements, and communicate with you about potential or ongoing business relationships.",
        "We do not sell personal information. We may share information with service providers who assist us in operating our website or communications, subject to appropriate confidentiality arrangements, or where required by applicable law.",
      ],
    },
    {
      title: "Legal Basis and Retention",
      paragraphs: [
        "We process personal information as necessary to respond to enquiries, pursue legitimate business interests, and comply with applicable legal obligations.",
        "We retain information only for as long as reasonably required for the purposes described in this policy, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      title: "Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organisational measures designed to protect personal information against unauthorised access, loss, or misuse. No method of transmission over the internet is completely secure.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: [
        "Depending on applicable law, you may have rights to access, correct, or request deletion of personal information we hold about you, or to object to certain processing activities.",
        "To exercise these rights or ask questions about this policy, please contact us using the details below.",
      ],
    },
    {
      title: "Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies independently.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page will reflect the most recent revision. Continued use of the website after changes are posted constitutes acceptance of the updated policy.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For privacy-related enquiries, please contact us via the contact details published on this website.",
      ],
    },
  ] satisfies LegalSection[],
} as const;

export const termsOfUse = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the SeaCraft Technology Solutions Ltd website.",
  lastUpdated: "July 2025",
  intro:
    "By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the website. These terms apply to general website use and do not replace any separate contractual agreement for offshore or engineering services.",
  sections: [
    {
      title: "Website Purpose",
      paragraphs: [
        "This website provides general information about SeaCraft Technology Solutions Ltd, its service lines, capabilities, and contact channels. Content is for informational purposes only and may be updated without notice.",
      ],
    },
    {
      title: "No Professional or Contractual Advice",
      paragraphs: [
        "Information on this website does not constitute engineering, operational, legal, or commercial advice. Service scope, pricing, availability, and technical specifications are subject to separate written agreement and applicable project requirements.",
      ],
    },
    {
      title: "Acceptable Use",
      paragraphs: [
        "You agree to use this website lawfully and not to:",
      ],
      list: [
        "Attempt to gain unauthorised access to our systems or data",
        "Introduce malware or interfere with website functionality",
        "Use automated means to scrape or overload the website without permission",
        "Misrepresent your identity or affiliation when submitting enquiries",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, content on this website - including text, branding, layout, and graphics - is owned by or licensed to SeaCraft Technology Solutions Ltd and is protected by applicable intellectual property laws.",
        "You may view and print pages for personal, non-commercial reference. Reproduction, distribution, or commercial use requires prior written consent.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "This website and its content are provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by applicable law, we disclaim warranties of any kind, whether express or implied, regarding accuracy, completeness, or fitness for a particular purpose.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the extent permitted by applicable law, SeaCraft Technology Solutions Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website.",
      ],
    },
    {
      title: "Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless SeaCraft Technology Solutions Ltd from claims arising out of your misuse of the website or violation of these terms, to the extent permitted by applicable law.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms of Use are governed by the laws of the Federal Republic of Nigeria. Any disputes relating to website use shall be subject to the exclusive jurisdiction of the courts of Nigeria, unless otherwise required by mandatory applicable law.",
      ],
    },
    {
      title: "Changes",
      paragraphs: [
        "We may revise these Terms of Use at any time. Updated terms will be posted on this page with a revised \"Last updated\" date. Your continued use of the website constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For questions about these Terms of Use, please contact us via the contact details published on this website.",
      ],
    },
  ] satisfies LegalSection[],
} as const;

export const notFoundPage = {
  code: "404",
  title: "Page Not Found",
  description:
    "The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.",
  primaryAction: { label: "Return Home", href: "/" },
  secondaryAction: { label: "Contact Us", href: "/contact" },
  helpfulLinks: [
    { label: "About", href: "/about" },
    { label: "Equipment", href: "/equipment" },
    { label: "Leadership", href: "/leadership" },
    { label: "HSEQ", href: "/hseq" },
  ],
} as const;
