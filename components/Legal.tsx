import React, { useEffect } from 'react';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="pt-32 pb-24 min-h-screen bg-scout-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">{title}</h1>
                <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const PrivacyPolicy: React.FC = () => (
    <LegalLayout title="Privacy Policy">
        <p>Last Updated: October 2025</p>
        <h3>1. Introduction</h3>
        <p>Scout Robotics ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website.</p>
        <h3>2. Information We Collect</h3>
        <p>We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information").</p>
        <h3>3. Data Usage</h3>
        <p>Our sensor pods collect data regarding infrastructure assets. This data is strictly used for the purpose of providing inspection analytics to our clients. We do not use infrastructure data for personal identification or advertising.</p>
        <h3>4. Contact Information</h3>
        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: legal@scoutrobotics.com.</p>
    </LegalLayout>
);

export const TermsOfService: React.FC = () => (
    <LegalLayout title="Terms of Service">
        <p>Last Updated: October 2025</p>
        <h3>1. Acceptance of the Terms of Use</h3>
        <p>These terms of use are entered into by and between You and Scout Robotics. The following terms and conditions govern your access to and use of scoutrobotics.com.</p>
        <h3>2. Accessing the Website</h3>
        <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time.</p>
        <h3>3. Intellectual Property Rights</h3>
        <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by the Company, its licensors, or other providers of such material.</p>
    </LegalLayout>
);

export const Security: React.FC = () => (
    <LegalLayout title="Security Standards">
        <h3>Commitment to Security</h3>
        <p>Scout Robotics utilizes industry-leading security practices to protect your infrastructure data. Our platform is designed with security as a core tenant, from the edge device to the cloud.</p>
        
        <h3>Compliance</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>SOC 2 Type II:</strong> We are currently in the audit process for SOC 2 Type II compliance.</li>
            <li><strong>Data Encryption:</strong> All data is encrypted at rest (AES-256) and in transit (TLS 1.3).</li>
            <li><strong>Access Control:</strong> We utilize strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) for all system access.</li>
        </ul>

        <h3 className="mt-8">Reporting Vulnerabilities</h3>
        <p>If you believe you have found a security vulnerability in our platform, please report it to security@scoutrobotics.com. We operate a bug bounty program for responsible disclosure.</p>
    </LegalLayout>
);