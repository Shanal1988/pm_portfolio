import { ArrowRight, Layers, Shield, Zap, Target, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [hoveredProof, setHoveredProof] = useState<number | null>(null);

  const proofPoints = [
    {
      metric: 'Doubled ARR',
      context: 'in 24 months',
      story:
        'Closed a compliance gap native carriers wouldn\'t touch — negotiated API capabilities directly with Twilio\'s product team and shipped through live A2P regulatory ambiguity. Paid seats grew 167%.',
      cta: 'Global Relay case study',
      page: 'case-study-global-relay',
      highlight: 'Vendor negotiation + regulatory navigation',
    },
    {
      metric: '49% faster',
      context: 'core workflow',
      story:
        'Led desktop-to-cloud migration of a tax compliance platform for 10,000+ UK accountants under a fixed 8-month timeline and live HMRC data constraints. Shipped to 1,500 beta users on schedule.',
      cta: 'IRIS Software case study',
      page: 'case-study-iris-element',
      highlight: 'Fixed deadline + live data constraints',
    },
    {
      metric: '20% faster delivery',
      context: '+ 15% SLA cost reduction',
      story:
        'Translated three sets of competing integration requirements from Sky, Vodafone, and BT Retail into a single coherent platform architecture that all three could adopt without bespoke builds.',
      cta: 'Openreach case study',
      page: 'case-study-openreach',
      highlight: 'Multi-party platform design',
    },
  ];

  const companies = [
    { name: 'Global Relay', domain: 'Financial Compliance SaaS' },
    { name: 'IRIS Software', domain: 'Tax & Accounting SaaS' },
    { name: 'BT / Openreach', domain: 'Telecom Infrastructure' },
    { name: 'Telstra', domain: 'Broadband & Provisioning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 opacity-60"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium mb-8 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Senior Product Manager · London
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
            I find the path forward when the constraint{' '}
            <span className="relative inline-block">
              <span className="text-blue-600 italic">is</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 -z-10 opacity-50"></span>
            </span>{' '}
            the job.
          </h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl">
            12 years shipping multi-party API platforms for regulated financial institutions across
            three ecosystems: CPaaS, tax compliance, telecom infrastructure. Same architectural pattern.
            Different jurisdictions.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-3xl leading-relaxed">
            CPaaS aggregators orchestrate vendor APIs and regulated enterprise clients. Payment
            processors do the same. The infrastructure thinking transfers directly. Now targeting
            fintech roles where that platform foundation maps precisely to payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('case-studies')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-900 transition-all hover:shadow-md"
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected work</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Infrastructure thinking under constraint: vendor negotiation, regulatory ambiguity, multi-party platform design.</p>
          </div>
          <div className="space-y-8">
            {proofPoints.map((point, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProof(index)}
                onMouseLeave={() => setHoveredProof(null)}
                className="group relative border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
                onClick={() => onNavigate(point.page)}
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-2xl transition-all duration-300 ${hoveredProof === index ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                  <div className="md:w-52 flex-shrink-0 mb-6 md:mb-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 leading-tight mb-2">{point.metric}</div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{point.context}</div>
                    <div className="mt-4 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-medium text-slate-600 inline-block">
                      {point.highlight}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{point.story}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(point.page);
                      }}
                      className="group/btn inline-flex items-center text-blue-600 font-semibold text-base hover:text-blue-700 transition-colors"
                    >
                      {point.cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I bring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-transparent to-blue-50 opacity-50"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Core Competencies
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The infrastructure pattern that transfers to fintech
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
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
                <p className="font-medium text-gray-900">
                  Telecom infrastructure, tax SaaS, financial communications compliance — all teaching the
                  same lesson. The domain changes. The architecture doesn't.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: Layers,
                  label: 'Vendor orchestration as platform architecture',
                  detail: 'Twilio, BT/Openreach partners, HMRC integrations. Understanding vendor constraints and turning them into product decisions — exactly how payment networks work.',
                },
                {
                  icon: Zap,
                  label: 'Multi-party API design that scales',
                  detail: 'Three partners, competing requirements, one platform. Same thinking applies to payment processor networks: merchants, banks, fintech platforms on one infrastructure.',
                },
                {
                  icon: Shield,
                  label: 'Shipping through regulatory transition',
                  detail: 'A2P 10DLC, HMRC requirements, FCA/SEC enforcement waves. Built product that absorbs regulatory change without breaking. Core fintech skill.',
                },
              ].map((item, i) => (
                <div key={i} className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-2 text-lg">{item.label}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Candidate-Market Fit */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <h2 className="text-4xl font-bold mb-6">
            Targeting fintech infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Senior or Staff PM roles at Wise, Revolut, Monzo, ComplyAdvantage, Ebury, Airwallex, or Stripe —
            where product problems involve payment networks, API orchestration, regulatory workflows, or platform
            activation at scale. Infrastructure PM with a financial institutions client base seeking the next domain.
          </p>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            The financial compliance problems I solved at Global Relay are identical to those fintech platforms solve daily.
            Vendor dependencies, regulatory frameworks, multi-party requirements. Same architecture. Bringing that foundation
            to payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              Read the Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
