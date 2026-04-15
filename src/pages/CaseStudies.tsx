import { ArrowRight, Briefcase } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const caseStudies = [
    {
      id: 'global-relay',
      title: 'Shipping Compliant Multi-Party Messaging in 24 Months',
      company: 'Global Relay',
      role: 'Senior Product Manager',
      summary: 'Led cross-functional initiative to ship the platform\'s most-requested feature while navigating evolving A2P 10DLC regulations. Built compliance archiving into the core architecture before a single line of feature code was written.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Paid Seat Growth', value: '167%' },
        { label: 'ARR Growth', value: '2×' },
        { label: 'Delivery Window', value: '24 months' },
        { label: 'Regulated Clients', value: '1,000+' },
      ],
      tags: ['CPaaS', 'Regulatory Compliance', 'API Integration', 'Financial Services'],
    },
    {
      id: 'iris-element',
      title: 'Cloud Migration That Reduced Workflow Time by 49%',
      company: 'IRIS Software Group',
      role: 'Product Manager',
      summary: 'Led desktop-to-cloud migration for a tax compliance platform serving 10,000+ UK accountants under a live HMRC regulatory deadline. Shipped on schedule in 8 months.',
      image: 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Workflow Time Reduction', value: '49%' },
        { label: 'Filing Time', value: '33 → 17 min' },
        { label: 'Beta Users', value: '1,500+' },
        { label: 'Time to MVP', value: '8 months' },
      ],
      tags: ['Cloud Migration', 'Tax Compliance', 'Fintech', 'UK Regulation'],
    },
    {
      id: 'openreach',
      title: 'Multi-Partner API Platform for National Telecom Infrastructure',
      company: 'BT / Openreach',
      role: 'Technical Product Manager',
      summary: 'Translated three sets of competing integration requirements from Sky, Vodafone, and BT Retail into a single coherent platform all three could adopt without bespoke builds.',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: [
        { label: 'Delivery Time Reduction', value: '20%' },
        { label: 'SLA Cost Reduction', value: '15%' },
        { label: 'Premises Served', value: '30M+' },
        { label: 'Enterprise Partners', value: '3' },
      ],
      tags: ['Telecom Infrastructure', 'API Platform', 'Enterprise Scale', 'B2B'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Three regulated products. Three industries.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Each case study follows the same structure: the constraint that defined the problem space, the discovery process, and the measurable outcome that followed.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-navy-900 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => onNavigate(`case-study-${study.id}`)}
              aria-label={`Read case study: ${study.title}`}
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                  <img
                    src={study.image}
                    alt={`${study.company} case study`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors duration-300" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-navy-900 text-xs font-bold rounded-md shadow-sm">
                      <Briefcase className="w-3 h-3" />
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10 md:col-span-3 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1.5 bg-navy-50 text-navy-900 text-xs font-semibold rounded-md border border-navy-100">
                      {study.company}
                    </span>
                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium rounded-md">
                      {study.role}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 leading-tight group-hover:text-navy-700 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">
                    {study.summary}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 group-hover:bg-navy-50 transition-colors">
                        <div className="text-xl font-bold text-navy-900 mb-0.5">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 font-medium leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
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
                    className="group/btn inline-flex items-center text-navy-900 font-semibold hover:text-navy-700 transition-colors self-start"
                    aria-label={`Read full case study for ${study.title}`}
                  >
                    Read full case study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
