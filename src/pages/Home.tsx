import { ArrowRight, Building2, Target, Layers, TrendingUp } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import Accordion from '../components/Accordion';
import TestimonialCard from '../components/TestimonialCard';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const caseStudies = [
    {
      company: 'Global Relay',
      typeTag: 'Platform Strategy',
      outcomeTags: ['167% seat growth', 'Doubled ARR', '24 months'],
      title: 'The Compliance Pivot',
      hook: 'Steered the product away from competing on UC features toward federated channel compliance — ahead of the SEC and FCA off-channel enforcement wave.',
      sections: {
        context: 'Enterprise communication platform serving 1,000+ regulated financial institution clients. The product was positioned against Teams and Zoom on UC features — a race it structurally could not win.',
        why: 'SEC and FCA off-channel enforcement was creating direct regulatory exposure for clients. Compliance archiving was underserved. Competing on video conferencing features was the wrong direction.',
        discovery: 'Client conversations with compliance officers and IT administrators revealed the pain was regulatory exposure, not feature gaps. Competitive analysis showed no CPaaS provider had built configurable multi-channel compliance archiving at enterprise scale.',
        solution: 'Federated channel compliance architecture — configurable to absorb multiple A2P regulatory outcomes simultaneously rather than hardcoding against a framework still in flux.',
        execution: 'Negotiated API capability requirements directly with Twilio\'s product team. Aligned a sceptical commercial team. Shipped through live regulatory ambiguity — A2P framework changed multiple times during delivery.',
        impact: '167% seat growth, doubled ARR over 24 months.',
        learnings: 'Designing for regulatory ambiguity requires configurable architecture. Shipping before the framework settles is a competitive advantage if you build the right abstraction layer.',
      },
    },
    {
      company: 'Global Relay',
      typeTag: 'Activation & Growth',
      outcomeTags: ['~70% → ~85% completion', '12% MAU growth'],
      title: 'Onboarding Redesign',
      hook: 'Funnel analysis identified mid-flow abandonment as the primary activation blocker — not the step everyone assumed.',
      sections: {
        context: 'Enterprise SaaS onboarding for regulated financial institution clients. Activation was below target and the cause was unclear.',
        why: 'MAU growth was flat despite healthy top-of-funnel. Onboarding was the likely bottleneck but no one had mapped where users were actually dropping.',
        discovery: 'Funnel analysis identified mid-flow abandonment as the primary drop-off point — not the steps most stakeholders assumed were causing friction.',
        solution: 'Simplified activation touchpoints across the onboarding flow. Removed steps that added friction without adding trust or compliance value.',
        execution: 'Cross-functional delivery with Engineering, UX, and Marketing. Staged rollout with measurement gates at each phase.',
        impact: 'Onboarding completion improved from ~70% to ~85%. 12% MAU growth post-launch.',
        learnings: 'Enterprise onboarding friction is often invisible until you map the funnel at step level. The drop-off point is almost never where stakeholders assume it is.',
      },
    },
    {
      company: 'IRIS Software',
      typeTag: 'Regulated Migration',
      outcomeTags: ['49% faster workflow', '1,500 beta users', '8 months'],
      title: 'Making Tax Digital — Desktop to Cloud',
      hook: 'Led the migration of a locally-installed tax filing platform to cloud under a live HMRC regulatory deadline — shipped on schedule to 1,500 beta users in 8 months.',
      sections: {
        context: 'IRIS Element was a locally-installed desktop application used by 10,000+ UK accountants and tax professionals for individual and business tax filing. The product had no cloud presence and no omnichannel capability at a moment when HMRC\'s Making Tax Digital initiative was fundamentally changing how tax data could be submitted, stored, and accessed.',
        why: 'HMRC\'s Making Tax Digital regulatory shift created a hard external deadline for compliance. Staying on desktop-only architecture would have left IRIS clients directly exposed to regulatory non-compliance — the same pattern as off-channel enforcement in financial communications. The migration wasn\'t optional; the question was what to build, what to cut, and how to ship it before the deadline.',
        discovery: 'The HMRC constraints on cloud-hosted tax data defined the outer boundary of what was architecturally possible before a single requirement was written. Understanding those constraints precisely — what data could move to the cloud, under what conditions, with what access controls — was the first product decision, not the last. Discovery ran in parallel with constraint mapping across legal, compliance, and the Tax SME team to define what "done" could actually mean within the regulatory envelope.',
        solution: 'A cloud-hosted MVP scoped tightly to the core tax filing workflow — the subset of functionality that 10,000+ accountants used most frequently and that HMRC\'s digital submission requirements touched directly. Non-essential features were deferred. The API-driven cloud storage integration that automated file uploads was the single highest-impact decision: it removed the manual step that accounted for the majority of the 33-minute baseline workflow.',
        execution: 'Coordinated a 12-person cross-functional team across frontend and backend engineering, UX, Tax SME, and architects, with legal and compliance sign-off required on the cloud data architecture before build could proceed. The Tax SME was the critical dependency — every workflow decision needed domain validation before engineering could act on it. Scope discipline under a fixed 8-month deadline required constant prioritisation pressure: if it didn\'t directly serve the core filing workflow or satisfy the HMRC constraint, it didn\'t make the cut.',
        impact: 'Shipped on schedule to 1,500 beta users within the 8-month window. The API-driven file upload automation reduced the core tax filing workflow from 33 to 17 minutes — a 49% improvement for 10,000+ professionals. Zero regulatory compliance issues on cloud data architecture at launch.',
        learnings: '[PLACEHOLDER — update with your own reflection once you\'ve written the full story. Suggested angle: what the HMRC constraint taught you about scoping under regulatory deadlines, or what you\'d do differently on the discovery phase.]',
      },
    },
    {
      company: 'BT / Openreach',
      typeTag: 'API Platform',
      outcomeTags: ['20% faster delivery', '15% SLA cost reduction'],
      title: 'Multi-Partner API Platform',
      hook: 'Translated three sets of competing integration requirements from Sky, Vodafone, and BT Retail into a single coherent platform all three could adopt without bespoke builds.',
      sections: {
        context: 'BT/Openreach B2B partner platform serving Sky, Vodafone, and BT Retail as simultaneous integration partners. Each had distinct SLA requirements and integration preferences.',
        why: 'Building bespoke integrations per partner was creating unsustainable delivery complexity and growing SLA compensation costs.',
        discovery: 'Mapped integration requirements across all three partners. Identified the shared architecture layer that could serve all three without bespoke builds.',
        solution: 'Single coherent API platform architecture with configurable parameters per partner. One platform. Three consumers.',
        execution: 'Translated three sets of competing requirements into a unified spec. Managed stakeholder sign-off across three enterprise partner organisations simultaneously.',
        impact: '20% reduction in delivery time. 15% YoY reduction in SLA compensation costs.',
        learnings: 'Multi-party platform design requires finding the abstraction layer early. Bespoke builds feel faster in week one and become the bottleneck by month six.',
      },
    },
  ];

  const methodCards = [
    {
      title: 'Map the constraint',
      description: 'Before deciding what to build, map what\'s actually possible given the vendor ecosystem, regulatory environment, and delivery constraints simultaneously. Most teams start with the solution. I start with the constraint — because the constraint usually contains the answer.',
      icon: Target,
    },
    {
      title: 'Find the abstraction layer',
      description: 'There is always a single architecture decision that serves all parties without bespoke builds. I found it for three enterprise partners at Openreach. I found it for A2P regulatory compliance at Global Relay. The pattern transfers across domains because multi-party API ecosystems are structurally similar whether the regulated layer is telecom, tax, or financial communications.',
      icon: Layers,
    },
    {
      title: 'Ship before the framework settles',
      description: 'Regulatory ambiguity is not a reason to wait. Build configurable logic that absorbs multiple outcomes. The A2P 10DLC framework changed three times during delivery. We shipped on time because the architecture was designed to absorb change, not depend on certainty.',
      icon: TrendingUp,
    },
    {
      title: 'Measure the ecosystem',
      description: 'MAU and activation rates matter. So do vendor API response times, partner SLA compliance rates, and regulatory acceptance rates. The product metric is one layer of a multi-layer system. Missing the ecosystem metrics means missing the early signals.',
      icon: Building2,
    },
  ];

  const companies = [
    { name: 'Global Relay', domain: 'Financial Compliance & Archiving' },
    { name: 'IRIS Software', domain: 'Tax & Accounting SaaS' },
    { name: 'BT / Openreach', domain: 'Telecom Infrastructure' },
    { name: 'Telstra', domain: 'Broadband & Provisioning' },
    { name: 'Infosys', domain: 'Enterprise Consulting' },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Senior Product Manager · London
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-tight tracking-tight">
            I find the path forward when the constraint{' '}
            <span className="italic">is</span> the job.
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl">
            12 years of shipping platform and API products across regulated ecosystems, telecom infrastructure, tax compliance, and financial communications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 divide-x divide-gray-200">
            <div className="px-6 py-4">
              <div className="text-4xl font-bold text-navy-900 mb-1">167%</div>
              <div className="text-sm text-gray-500">Paid seat growth</div>
            </div>
            <div className="px-6 py-4">
              <div className="text-4xl font-bold text-navy-900 mb-1">2x</div>
              <div className="text-sm text-gray-500">ARR growth</div>
            </div>
            <div className="px-6 py-4">
              <div className="text-4xl font-bold text-navy-900 mb-1">20%</div>
              <div className="text-sm text-gray-500">Faster partner delivery</div>
            </div>
            <div className="px-6 py-4">
              <div className="text-4xl font-bold text-navy-900 mb-1">12%</div>
              <div className="text-sm text-gray-500">MAU growth post-launch</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const selectedWorkSection = document.getElementById('selected-work');
                selectedWorkSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all"
            >
              See My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg border border-gray-200 hover:border-navy-900 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Products shipped at
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-x-8 gap-y-6 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="text-base font-medium text-navy-900">{company.name}</div>
                <div className="text-sm text-gray-500 mt-1">{company.domain}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 mb-3">Selected Work</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Three regulated industries. Three platform problems. Measurable outcomes each time.
          </p>
          <Accordion items={caseStudies} />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 mb-3">How I think</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            The method that repeats across every regulated environment I've worked in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-8 h-8 text-navy-900 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{card.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 mb-3">What others say</h2>
          <p className="text-lg text-gray-600 mb-12">
            Placeholder — replace with LinkedIn recommendations before publishing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Quote placeholder — pull from LinkedIn recommendations. Best quotes reference: specific project outcomes, how you operate under ambiguity, or cross-functional leadership style."
              author="Name Placeholder"
              role="Title"
              company="Company"
            />
            <TestimonialCard
              quote="Quote placeholder — ideally from a cross-functional partner: engineer, designer, or commercial lead who worked with you directly."
              author="Name Placeholder"
              role="Title"
              company="Company"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
