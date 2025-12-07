import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-scout-primary text-white border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div>
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono">5k+</div>
                <div className="text-sm uppercase tracking-widest opacity-80">Miles Scanned</div>
            </div>
            <div>
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono">1.2M</div>
                <div className="text-sm uppercase tracking-widest opacity-80">Images Processed</div>
            </div>
            <div>
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono">99.8%</div>
                <div className="text-sm uppercase tracking-widest opacity-80">Defect Accuracy</div>
            </div>
            <div>
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono">10x</div>
                <div className="text-sm uppercase tracking-widest opacity-80">ROI for Agencies</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;