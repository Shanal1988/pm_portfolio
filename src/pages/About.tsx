import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const methodCards = [
    {
      title: 'Map the constraint',
      description: "Before deciding what to build, map what's actually possible given the vendor ecosystem, regulatory environment, and delivery constraints simultaneously. Most teams start with the solution. I start with the constraint - because the constraint usually contains the answer.",
    },
    {
      title: 'Find the abstraction layer',
      description: 'There is always a single architecture decision that serves all parties without bespoke builds. I found it for three enterprise partners at Openreach. I found it for A2P regulatory compliance at Global Relay. The pattern transfers across domains because multi-party API ecosystems are structurally similar whether the regulated layer is telecom, tax, or financial communications.',
    },
    {
      title: 'Ship before the framework settles',
      description: 'Regulatory ambiguity is not a reason to wait. Build configurable logic that absorbs multiple outcomes. The A2P 10DLC framework changed three times during delivery. We shipped on time because the architecture was designed to absorb change, not depend on certainty.',
    },
    {
      title: 'Measure the ecosystem',
      description: 'MAU and activation rates matter. So do vendor API response times, partner SLA compliance rates, and regulatory acceptance rates. The product metric is one layer of a multi-layer system. Missing the ecosystem metrics means missing the early signals.',
    },
  ];

  const timeline = [
    {
      dateRange: 'Aug 2025 – Present',
      role: 'Senior Product Manager',
      company: 'Global Relay - Enterprise SaaS, Financial Compliance & Archiving',
      description: 'Owning product strategy and roadmap across compliance infrastructure, partner API integrations, and self-serve onboarding.',
    },
    {
      dateRange: 'May 2021 – Aug 2025',
      role: 'Product Manager',
      company: 'Global Relay',
      description: 'Built multi-party messaging compliance platform under evolving A2P 10DLC regulations. Scaled platform 167% in paid seats.',
    },
    {
      dateRange: 'May 2020 – May 2021',
      role: 'Product Manager',
      company: 'IRIS Software Group - Tax & Accounting SaaS',
      description: 'Led desktop-to-cloud migration of tax compliance platform serving 10,000+ UK accountants. Shipped in 8 months under HMRC regulatory constraints.',
    },
    {
      dateRange: 'Jul 2016 – Apr 2020',
      role: 'Technical Product Manager',
      company: 'Infosys / BT & Openreach - Telecom Infrastructure',
      description: 'Delivered API-driven platform for B2B partners Sky, Vodafone, and BT Retail. 20% faster delivery, 15% SLA cost reduction.',
    },
    {
      dateRange: '2014 – 2016',
      role: 'Solution Designer',
      company: 'Infosys / Telstra - Broadband & Provisioning',
      description: "Designed omnichannel ordering and provisioning for Telstra's national broadband expansion.",
    },
    {
      dateRange: '2012 – 2014',
      role: 'Business Analyst',
      company: 'Infosys / DirecTV - Online Ordering Platform',
      description: "Defined platform and integration requirements for DirecTV's US online ordering system.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            ABOUT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            The background behind the work.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            I build platform and API products in regulated markets where the constraint is the job.
          </p>
        </div>

        {/* Core Approach - Visual Cards */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Core approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-navy-900 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Experience</h2>
          <div className="space-y-6 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

            {timeline.map((entry, index) => (
              <div key={index} className="relative md:pl-10 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-navy-900 hover:shadow-lg transition-all duration-200">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-3 h-3 bg-navy-900 rounded-full transform -translate-x-[5px] hidden md:block ring-4 ring-white"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{entry.role}</h3>
                    <div className="text-base font-medium text-gray-700">{entry.company}</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium sm:text-right">{entry.dateRange}</div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">{entry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="border-l-4 border-navy-900 bg-navy-50 p-8 rounded-r-xl">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
