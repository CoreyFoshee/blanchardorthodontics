import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
// Pixel-perfect migration of privacy-policy.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="banner-title-area-section">
        <div className="banner-title-overlay"></div>
        <div className="banner-area-title">
          <div className="container w-container">
            <div className="title-area-content">
              <h1 className="banner-title-text">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="license-section">
        <div className="container w-container">
          <div className="license-item-wrap">
            <p className="paragraph-2"><strong>Last Updated: June 5th, 2025<br />‍<br />‍</strong>Blanchard Orthodontics ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website blanchardorthodontics.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto(collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access theSite.<br /><br /><strong>Privacy Notice – SMS Communication Compliance</strong><br /><br /><strong>Data Collection and Use</strong><br />Blanchard Orthodontics may collect personal information, including your name, email address, and phone number, when you provide it to us through our website, in-office forms, or other communication channels. If you provide your mobile number, you consent to receive SMS messages from us regarding appointment reminders, treatment updates, promotions, and other relevant notifications.<br /><br /><strong>Consent and Opt-In for SMS Messaging</strong><br />By providing your mobile number, you expressly consent to receive text messages from Blanchard Orthodontics. These messages may include appointment confirmations, follow-ups, practice updates, and promotional offers. Message frequency may vary. Standard message and data rates may apply.<br /><br />You can opt in to receive SMS messages through:<br />• Completing an online or in-office registration form<br />• Checking an opt-in box on our website or patient portal<br />• Confirming via a double opt-in SMS verification message (if applicable)<br /><br /><strong>How We Use Your Information</strong><br />We use your phone number solely for the purpose of providing important updates related to your orthodontic care, appointment scheduling, and occasional promotional content. Your phone number will not be shared, sold, or rented to third parties for marketing purposes. However, we may share your number with trusted third-party service providers who assist in delivering SMS communications on our behalf. These providers are contractually required to protect your information and comply with all privacy regulations.<br /><br /><strong>Opt-Out Policy</strong><br />You can opt out of receiving SMS messages at any time by:<br />• Replying "STOP" to any text message you receive from us<br />• Contacting our office at (903) 707-6275 or info@blanchardorthodontics.com<br />• Updating your communication preferences in our patient portal (if applicable)<br /><br />After opting out, you will no longer receive SMS messages from Blanchard Orthodontics, except for responses confirming your opt-out request.<br /><br /><strong>Data Security</strong><br />We take the security of your personal information seriously. We implement administrative, technical, and physical security measures to protect your phone number and other data from unauthorized access, disclosure, or misuse. Our SMS communications are conducted through compliant platforms that adhere to industry standards for data protection.<br /><br /><strong>Data Retention and Deletion</strong><br />We retain your contact information for as long as necessary to provide services to you. If you wish to have your mobile number removed from our database, please contact us at info@blanchardorthodontics.com. We will process deletion requests in accordance with applicable regulations.<br /><br /><strong>Changes to This Policy</strong><br />Blanchard Orthodontics reserves the right to modify this Privacy Notice at anytime. Updates will be posted on our website, and we encourage you to review this policy periodically.<br /><br /><strong>CONTACT US</strong><br />If you have questions or comments about this Privacy Policy, please contact us at:<br /><br />(903) 707-6275<br />info@blanchardorthodontics.com<br />1501 East Rusk St<br />Jacksonville, TX 75766</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
