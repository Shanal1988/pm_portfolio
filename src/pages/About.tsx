import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const methodCards = [
    {
      title: 'Map the constraint',
      description: "Before deciding what to build, map what's actually possible given the vendor ecosystem, regulatory environment, and delivery constraints simultaneously. Most teams start with the solution. I start with the constraint — because the constraint usually contains the answer.",
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
      company: 'Global Relay — Enterprise SaaS, Financial Compliance & Archiving',
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
      company: 'IRIS Software Group — Tax & Accounting SaaS',
      description: 'Led desktop-to-cloud migration of tax compliance platform serving 10,000+ UK accountants. Shipped in 8 months under HMRC regulatory constraints.',
    },
    {
      dateRange: 'Jul 2016 – Apr 2020',
      role: 'Technical Product Manager',
      company: 'Infosys / BT & Openreach — Telecom Infrastructure',
      description: 'Delivered API-driven platform for B2B partners Sky, Vodafone, and BT Retail. 20% faster delivery, 15% SLA cost reduction.',
    },
    {
      dateRange: '2014 – 2016',
      role: 'Solution Designer',
      company: 'Infosys / Telstra — Broadband & Provisioning',
      description: "Designed omnichannel ordering and provisioning for Telstra's national broadband expansion.",
    },
    {
      dateRange: '2012 – 2014',
      role: 'Business Analyst',
      company: 'Infosys / DirecTV — Online Ordering Platform',
      description: "Defined platform and integration requirements for DirecTV's US online ordering system.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            ABOUT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-12">
            The background behind the work.
          </h1>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - 60% */}
            <div className="md:w-[60%] space-y-6 text-base text-gray-700 leading-relaxed">
              <p>
                Most PMs treat regulatory complexity as a constraint to manage around. I treat it as the product problem itself — because that's where the interesting work actually lives.
              </p>
              <p>
                My background runs across three structurally similar but jurisdictionally distinct environments: telecom infrastructure at BT/Openreach and Telstra, tax and accounting compliance SaaS at IRIS Software, and financial communication compliance at Global Relay. Each required learning the regulatory constraints, the vendor ecosystem, and the enterprise client needs fast — and shipping before the environment fully settled. The pattern that repeats isn't domain expertise in any one area. It's a method for operating in regulated markets where the path forward requires figuring out what's even possible before deciding what to build.
              </p>
              <p>
                At Global Relay, that method produced 167% seat growth and doubled ARR — not by competing on features with Teams and Zoom, but by reading the SEC and FCA off-channel enforcement wave before most of the market understood the regulatory exposure.
              </p>
              <p>
                CPaaS aggregators and payment processors are structurally identical: multi-party API dependencies, regulated enterprise clients, compliance frameworks that change faster than product cycles. The financial institutions I've been building for at Global Relay are the same ones that Wise, Revolut, Monzo, and Ebury serve. The domain is new. The architecture isn't.
              </p>
              <p>
                The roles that fit: Senior or Staff PM at fintech infrastructure, payments platforms, or compliance SaaS — where the product problem involves API ecosystems, regulatory workflows, or activation at scale.
              </p>
            </div>

            {/* Right column - 40% */}
            <div className="md:w-[40%]">
              <div className="space-y-6 md:sticky md:top-24">
                {methodCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <section className="mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            EXPERIENCE
          </div>
          <div className="space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

            {timeline.map((entry, index) => (
              <div key={index} className="relative md:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 bg-navy-900 rounded-full transform -translate-x-[3.5px] hidden md:block"></div>

                <div className="text-sm text-gray-500 mb-2">{entry.dateRange}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">{entry.role}</h3>
                <div className="text-base font-medium text-gray-600 mb-2">{entry.company}</div>
                <p className="text-base text-gray-700 leading-relaxed">{entry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Looking For */}
        <section>
          <div className="border-l-4 border-navy-900 bg-gray-50 p-6 rounded-r-lg">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Open to Senior and Staff PM roles at fintech infrastructure companies, payments platforms, and regulated enterprise SaaS in London — where the product problem involves multi-party API ecosystems, compliance workflows, or platform activation at scale.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center text-navy-900 font-semibold hover:underline"
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
