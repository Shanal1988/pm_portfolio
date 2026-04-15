import { ArrowRight, Briefcase, Users, Zap } from 'lucide-react';
import { useState } from 'react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  const caseStudies = [
    {
      id: 'global-relay',
      title: 'Shipping Compliant Multi-Party Messaging in 6 Months',
      company: 'Global Relay',
      role: 'Senior Product Manager',
      duration: 'Aug 2025 - Present',
      summary: 'Led cross-functional initiative to ship the platform\'s #1 requested feature while navigating evolving A2P 10DLC regulations',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Paid Seat Growth', value: 'Significant' },
        { label: 'ARR Growth', value: 'Strong YoY' },
        { label: 'Delivery Window', value: '24 months' },
        { label: 'Regulated Clients Served', value: '1,000+' },
      ],
      tags: ['CPaaS', 'Regulatory Compliance', 'API Integration', 'Financial Services'],
    },
    {
      id: 'iris-element',
      title: 'Cloud Migration That Reduced Workflow Time by 49%',
      company: 'IRIS Software Group',
      role: 'Product Manager',
      duration: 'May 2020 - May 2021',
      summary: 'Led desktop-to-cloud migration for tax compliance platform serving 10,000+ UK accountants',
      image: 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Workflow Time Reduction', value: '49%' },
        { label: 'Filing Time', value: '33 min → 17 min' },
        { label: 'Beta Users', value: '1,500+' },
        { label: 'Time to MVP', value: '8 months' },
      ],
      tags: ['Cloud Migration', 'Tax Compliance', 'Fintech', 'UK Regulation'],
    },
    {
      id: 'openreach',
      title: 'Designing Integration for National Telecom Infrastructure',
      company: 'BT/Openreach',
      role: 'Product Owner',
      duration: 'Jul 2018 - Apr 2020',
      summary: 'Designed integration solution for engineer scheduling platform serving 30M+ UK premises',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Delivery Time Reduction', value: '20%' },
        { label: 'SLA Penalty Reduction', value: '15%' },
        { label: 'Premises Served', value: '30M+' },
        { label: 'Major B2B Partners', value: 'Sky, BT Retail' },
      ],
      tags: ['Telecom Infrastructure', 'API Integration', 'Enterprise Scale', 'B2B'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            Portfolio
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep dives into products I've shipped, problems I've solved, and the impact delivered.
            Real products, real metrics, real outcomes.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              onMouseEnter={() => setHoveredCase(study.id)}
              onMouseLeave={() => setHoveredCase(null)}
              className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate(`case-study-${study.id}`)}
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="relative h-72 md:h-auto md:col-span-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-slate-500/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-6 left-6 z-20 transition-all duration-300 ${hoveredCase === study.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                      {index === 0 && <Zap className="w-4 h-4 text-blue-600" />}
                      {index === 1 && <Briefcase className="w-4 h-4 text-blue-600" />}
                      {index === 2 && <Users className="w-4 h-4 text-blue-600" />}
                      <span className="text-sm font-semibold text-gray-900">Featured Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10 md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                      {study.company}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600 font-medium">{study.role}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {study.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-4 group-hover:bg-blue-50 transition-colors">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(`case-study-${study.id}`);
                    }}
                    className="group/btn inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
