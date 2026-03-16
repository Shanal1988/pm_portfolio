import { ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
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
        { label: 'User Adoption Increase', value: '30% MoM' },
        { label: 'Platform User Growth', value: '30k → 80k YoY' },
        { label: 'Messages Processed', value: '2M+/month' },
        { label: 'Time to Market', value: '6 months' },
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
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Deep dives into products I've shipped, problems I've solved, and the impact delivered.
            Real products, real metrics, real outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-blue-600">
                      {study.company}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{study.role}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-blue-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate(`case-study-${study.id}`)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 w-5 h-5" />
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
