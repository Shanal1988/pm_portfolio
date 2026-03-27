import { ArrowRight, ExternalLink } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const proofPoints = [
    {
      metric: 'Doubled ARR',
      context: 'in 24 months',
      story:
        'Closed a compliance gap native carriers wouldn\'t touch — negotiated API capabilities directly with Twilio\'s product team and shipped through live A2P regulatory ambiguity. Paid seats grew 167%.',
      cta: 'Global Relay case study',
      page: 'case-study-global-relay',
    },
    {
      metric: '49% faster',
      context: 'core workflow',
      story:
        'Led desktop-to-cloud migration of a tax compliance platform for 10,000+ UK accountants under a fixed 8-month timeline and live HMRC data constraints. Shipped to 1,500 beta users on schedule.',
      cta: 'IRIS Software case study',
      page: 'case-study-iris-element',
    },
    {
      metric: '20% faster delivery',
      context: '+ 15% SLA cost reduction',
      story:
        'Translated three sets of competing integration requirements from Sky, Vodafone, and BT Retail into a single coherent platform architecture that all three could adopt without bespoke builds.',
      cta: 'Openreach case study',
      page: 'case-study-openreach',
    },
  ];

  const companies = [
    { name: 'Global Relay', domain: 'Financial Compliance SaaS' },
    { name: 'IRIS Software', domain: 'Tax & Accounting SaaS' },
    { name: 'BT / Openreach', domain: 'Telecom Infrastructure' },
    { name: 'Telstra', domain: 'Broadband & Provisioning' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-8 tracking-wide uppercase">
            Senior Product Manager · London
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
            I find the path forward when the constraint{' '}
            <span className="text-blue-600 italic">is</span>{' '}
            the job.
          </h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl">
            12 years shipping multi-party API platforms for regulated financial institutions across
            three ecosystems: CPaaS, tax compliance, telecom infrastructure. Same architectural pattern.
            Different jurisdictions.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
            CPaaS aggregators orchestrate vendor APIs and regulated enterprise clients. Payment
            processors do the same. The infrastructure thinking transfers directly. Now targeting
            fintech roles where that platform foundation maps precisely to payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-500 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 text-center">
            Multi-party API platform clients
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {companies.map((co) => (
              <div key={co.name} className="text-center">
                <div className="text-base font-semibold text-gray-800">{co.name}</div>
                <div className="text-xs text-gray-500">{co.domain}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Selected work</h2>
            <p className="text-gray-500 text-lg">Infrastructure thinking under constraint: vendor negotiation, regulatory ambiguity, multi-party platform design.</p>
          </div>
          <div className="space-y-6">
            {proofPoints.map((point, index) => (
              <div
                key={index}
                className="group border border-gray-200 rounded-xl p-8 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                  <div className="md:w-44 flex-shrink-0 mb-4 md:mb-0">
                    <div className="text-3xl font-bold text-gray-900 leading-tight">{point.metric}</div>
                    <div className="text-sm text-gray-500 mt-1">{point.context}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-4">{point.story}</p>
                    <button
                      onClick={() => onNavigate(point.page)}
                      className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                    >
                      {point.cta}
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I bring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The infrastructure pattern that transfers to fintech
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  CPaaS aggregators orchestrate vendor APIs, regulatory constraints, and regulated enterprise clients.
                  Payment processors do exactly the same. The financial institutions I've served at Global Relay
                  are the same clients that Wise, Revolut, Monzo, and Ebury serve today.
                </p>
                <p>
                  This isn't a career pivot. It's applying infrastructure PM thinking to a new domain. The pattern
                  repeats: vendor negotiation, multi-party API design, shipping through regulatory ambiguity,
                  prioritization under constraint.
                </p>
                <p>
                  Telecom infrastructure, tax SaaS, financial communications compliance — all teaching the
                  same lesson. The domain changes. The architecture doesn't.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: 'Vendor orchestration as platform architecture',
                  detail: 'Twilio, BT/Openreach partners, HMRC integrations. Understanding vendor constraints and turning them into product decisions — exactly how payment networks work.',
                },
                {
                  label: 'Multi-party API design that scales',
                  detail: 'Three partners, competing requirements, one platform. Same thinking applies to payment processor networks: merchants, banks, fintech platforms on one infrastructure.',
                },
                {
                  label: 'Shipping through regulatory transition',
                  detail: 'A2P 10DLC, HMRC requirements, FCA/SEC enforcement waves. Built product that absorbs regulatory change without breaking. Core fintech skill.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="font-semibold text-gray-900 mb-1.5">{item.label}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Candidate-Market Fit */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Targeting fintech infrastructure
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Senior or Staff PM roles at Wise, Revolut, Monzo, ComplyAdvantage, Ebury, Airwallex, or Stripe —
            where product problems involve payment networks, API orchestration, regulatory workflows, or platform
            activation at scale. Infrastructure PM with a financial institutions client base seeking the next domain.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            The financial compliance problems I solved at Global Relay are identical to those fintech platforms solve daily.
            Vendor dependencies, regulatory frameworks, multi-party requirements. Same architecture. Bringing that foundation
            to payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-500 transition-colors"
            >
              Read the Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
