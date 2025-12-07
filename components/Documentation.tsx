import React, { useEffect } from 'react';
import { Terminal, Copy } from 'lucide-react';

export const APIDocs: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="pt-24 min-h-screen bg-[#0F172A] flex">
            {/* Sidebar */}
            <div className="hidden lg:block w-64 fixed left-0 top-24 bottom-0 border-r border-white/5 bg-[#0B1120] p-6 overflow-y-auto">
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Getting Started</h3>
                <ul className="space-y-3 text-sm text-slate-400 mb-8">
                    <li className="text-scout-primary font-bold">Introduction</li>
                    <li className="hover:text-white cursor-pointer">Authentication</li>
                    <li className="hover:text-white cursor-pointer">Rate Limits</li>
                </ul>
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Resources</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                    <li className="hover:text-white cursor-pointer">Defects</li>
                    <li className="hover:text-white cursor-pointer">Assets</li>
                    <li className="hover:text-white cursor-pointer">Runs</li>
                    <li className="hover:text-white cursor-pointer">Webhooks</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 p-8 lg:p-12 max-w-5xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>
                    <p className="text-slate-400 text-lg">
                        The Scout Robotics API allows you to programmatically access inspection data, manage fleets, and integrate defect alerts into your existing work order systems (SAP, Maximo, etc.).
                    </p>
                </div>

                {/* Endpoint Example */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">List Defects</h2>
                    <p className="text-slate-400 mb-6">Returns a paginated list of defects detected by your fleet. Filters can be applied for severity, type, and location.</p>
                    
                    <div className="bg-[#1E293B] rounded-xl border border-white/10 overflow-hidden">
                        <div className="bg-[#0B1120] px-6 py-3 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2 font-mono text-sm">
                                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase text-xs font-bold">GET</span>
                                <span className="text-slate-300">/v1/defects</span>
                            </div>
                            <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" />
                        </div>
                        <div className="p-6 font-mono text-sm text-blue-300 overflow-x-auto">
<pre>{`curl -X GET https://api.scoutrobotics.com/v1/defects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d "severity=critical"`}</pre>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Terminal className="w-5 h-5 text-blue-400" />
                        <h4 className="text-white font-bold">Need an API Key?</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                        Access to the API is available for Enterprise customers. Contact your account manager to generate a key pair.
                    </p>
                </div>
            </div>
        </div>
    );
};