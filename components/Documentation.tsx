import React, { useEffect } from 'react';
import { Terminal, Copy } from 'lucide-react';

export const APIDocs: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="pt-24 min-h-screen bg-[#0F172A] flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="w-20 h-20 bg-scout-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Terminal className="w-10 h-10 text-scout-primary" />
                </div>
                <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
                <p className="text-xl text-slate-400 mb-8">
                    Coming Soon
                </p>
                <p className="text-slate-500 mb-12 leading-relaxed">
                    We're currently developing our public API to allow programmatic access to inspection data, defect alerts, and fleet management. The Scout Robotics API will enable seamless integration with your existing work order systems (SAP, Maximo, etc.).
                </p>
                <div className="bg-[#151e32] border border-white/10 rounded-xl p-8">
                    <h3 className="text-white font-bold mb-4">Interested in Early Access?</h3>
                    <p className="text-slate-400 text-sm mb-6">
                        Contact us to learn more about API access for Enterprise customers.
                    </p>
                    <a 
                        href="mailto:contact@scoutrobo.com?subject=API Early Access Request" 
                        className="inline-block bg-scout-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};