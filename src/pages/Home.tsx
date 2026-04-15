import { ArrowRight, Building2, Target, Layers, TrendingUp, Quote } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import Accordion from '../components/Accordion';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const caseStudies = [
    {
      company: 'Global Relay',
      typeTag: 'Platform Strategy',
      outcomeTags: ['167% growth', '2x ARR growth', '24 months'],
      title: 'The Compliance Pivot',
      navigateTo: 'case-study-global-relay',
      hook: 'A collaborative strategic reframing that moved the product toward secure multi-party messaging with full compliance archiving, ahead of the SEC and FCA off-channel enforcement wave.',
      sections: {
        context: 'Global Relay\'s enterprise communication platform served 1,000+ regulated financial institution clients. The archiving perimeter needed to expand as communication channels proliferated. Clients were using channels outside the firm\'s supervised perimeter, creating growing regulatory exposure.',
        why: 'Multi-party messaging across channels fell outside supervised archiving perimeters. SEC and FCA off-channel enforcement was accelerating. Firms were being fined for communication outside their compliance perimeter. The product needed to enable secure multi-party messaging while ensuring every conversation was captured and available for regulatory discovery.',
        discovery: 'Structured conversations with compliance officers revealed the pain was regulatory exposure, not missing features. They needed to answer whether every conversation was captured, searchable, and producible on regulatory request. Competitive analysis confirmed no CPaaS provider had built configurable multi-channel compliance archiving at enterprise scale.',
        solution: 'Multi-party messaging built directly into the platform with compliance from the start. Users could initiate group conversations across channels with full capture of content, media, and metadata. Vendor API negotiation with our primary vendor partner was critical — their API lacked native support at the level required. Result was a configurable compliance layer across the channel mix each client needed to supervise.',
        execution: 'The cross-functional delivery involved engineering, legal, and finance. The vendor API negotiation was a partnership conversation presenting mutual commercial benefit to our primary vendor partner\'s product team. The commercial team had concerns about deprioritising existing commitments; the case was made on projected volume uplift and the size of the compliance gap in the market. The hardest constraint was timing. The vendor APIs were not yet generally available, which created a direct dependency on their GA release date before we could ship to clients. The A2P regulatory landscape also shifted mid-build; the configurable architecture absorbed the change without requiring a core redesign.',
        impact: '167% paid seat growth and 2× ARR over 24 months. Growth driven by solving regulatory exposure financial institutions could not leave unaddressed. Multi-party messaging with full compliance archiving became the primary commercial differentiator.',
        learnings: 'Qualify vendor API readiness earlier — the dependency on our primary vendor partner\'s timeline introduced delivery risk. In regulated product work, architecture needs configurability from the start. Building for multiple potential outcomes was the right call.',
      },
    },
    {
      company: 'IRIS Software',
      typeTag: 'Regulated Migration',
      outcomeTags: ['49% faster workflow', '1,500 beta users', '8 months'],
      title: 'Making Tax Digital — Desktop to Cloud',
      navigateTo: 'case-study-iris-element',
      hook: 'Led the migration of a locally-installed tax filing platform to cloud under a live HMRC regulatory deadline — shipped on schedule to 1,500 beta users in 8 months.',
      sections: {
        context: 'IRIS Element was a locally-installed desktop application used by 10,000+ UK accountants and tax professionals for individual and business tax filing. The product had no cloud presence and no omnichannel capability at a moment when HMRC\'s Making Tax Digital initiative was fundamentally changing how tax data could be submitted, stored, and accessed.',
        why: 'HMRC\'s Making Tax Digital regulatory shift created a hard external deadline for compliance. Staying on desktop-only architecture would have left IRIS clients directly exposed to regulatory non-compliance — the same pattern as off-channel enforcement in financial communications. The migration wasn\'t optional; the question was what to build, what to cut, and how to ship it before the deadline.',
        discovery: 'The HMRC constraints on cloud-hosted tax data defined the outer boundary of what was architecturally possible before a single requirement was written. Understanding those constraints precisely — what data could move to the cloud, under what conditions, with what access controls — was the first product decision, not the last. Discovery ran in parallel with constraint mapping across legal, compliance, and the Tax SME team to define what "done" could actually mean within the regulatory envelope.',
        solution: 'A cloud-hosted MVP scoped tightly to the core tax filing workflow — the subset of functionality that 10,000+ accountants used most frequently and that HMRC\'s digital submission requirements touched directly. Non-essential features were deferred. The API-driven cloud storage integration that automated file uploads was the single highest-impact decision: it removed the manual step that accounted for the majority of the 33-minute baseline workflow.',
        execution: 'Coordinated a 12-person cross-functional team across frontend and backend engineering, UX, Tax SME, and architects, with legal and compliance sign-off required on the cloud data architecture before build could proceed. The Tax SME was the critical dependency — every workflow decision needed domain validation before engineering could act on it. Scope discipline under a fixed 8-month deadline required constant prioritisation pressure: if it didn\'t directly serve the core filing workflow or satisfy the HMRC constraint, it didn\'t make the cut.',
        impact: 'Shipped on schedule to 1,500 beta users within the 8-month window. The API-driven file upload automation reduced the core tax filing workflow from 33 to 17 minutes — a 49% improvement for 10,000+ professionals. Zero regulatory compliance issues on cloud data architecture at launch.',
        learnings: 'Hard regulatory constraints are a product design input, not a compliance sign-off step. Bringing HMRC requirements into architecture conversations early prevented rework and gave the team clearer boundaries to design within. The prioritisation discipline — a maintained cut list with written rationale — is what I\'ve carried forward most directly.',
      },
    },
    {
      company: 'BT / Openreach',
      typeTag: 'API Platform',
      outcomeTags: ['20% faster delivery', '15% SLA cost reduction'],
      title: 'Multi-Partner API Platform',
      navigateTo: 'case-study-openreach',
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
          <div className="flex flex-col lg:flex-row lg:items-start gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Senior Product Manager · London
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-tight tracking-tight animate-fade-in">
                I find the path forward when the constraint{' '}
                <span className="italic">is</span> the job.
              </h1>
              <div className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl animate-fade-in-delay space-y-6">
                <p>
                  I build platform products where the constraint is never just one thing. Regulatory frameworks, vendor ecosystems, and enterprise delivery deadlines arrive together.
                </p>
                <p>
                  Across financial communications, tax compliance, and telecom infrastructure, I've shipped products where the path forward required figuring out what was even architecturally possible before deciding what to build. My background is infrastructure-deep across regulated markets, and that is exactly what fintech platform problems require.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-shrink-0">
              <div className="w-[180px] h-[180px] rounded-full border-4 border-gray-200 overflow-hidden shadow-lg">
                <img
                  src="/Gemini_Generated_Image_s3uo32s3uo32s3uo.png"
                  alt="Shanal Agrawal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center py-4 md:py-0 first:pt-0 last:pb-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="text-5xl font-bold text-navy-900 mb-2">167%</div>
              <div className="text-sm text-gray-600">Paid seat growth</div>
            </div>
            <div className="text-center py-4 md:py-0 md:px-8">
              <div className="text-5xl font-bold text-navy-900 mb-2">2x</div>
              <div className="text-sm text-gray-600">ARR growth</div>
            </div>
            <div className="text-center py-4 md:py-0 md:px-8">
              <div className="text-5xl font-bold text-navy-900 mb-2">20%</div>
              <div className="text-sm text-gray-600">Faster partner delivery</div>
            </div>
            <div className="text-center py-4 md:py-0 md:px-8">
              <div className="text-5xl font-bold text-navy-900 mb-2">12%</div>
              <div className="text-sm text-gray-600">MAU growth post-launch</div>
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
          <p className="text-lg text-gray-600 mb-4 max-w-3xl">
            Three regulated products. Three industries. Measurable outcomes each time.
          </p>
          <p className="text-base text-gray-600 mb-12 max-w-3xl">
            Each case study follows the same structure: the regulatory or ecosystem constraint that defined the problem space, the discovery process that identified the right abstraction layer, and the measurable outcome that followed.
          </p>
          <Accordion items={caseStudies} onNavigate={onNavigate} />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 mb-3">How I work</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            The method that repeats across every regulated environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-navy-900 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-10 h-10 text-navy-900 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{card.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 mb-3">What colleagues say</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Recommendations from teammates at Global Relay.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-navy-900 hover:shadow-lg transition-all duration-200 flex flex-col">
              <Quote className="w-8 h-8 text-navy-900 mb-6 flex-shrink-0" />
              <p className="text-base text-gray-700 leading-relaxed mb-8 flex-1">
                I've been working with Shanal Agrawal at Global Relay for the past 3 years as an SDET in the same team, and he's been a strong Senior Product Manager to work with. He does a great job driving end-to-end execution across backend systems that require coordination between multiple engineering teams, UI dependencies, and external partners. What stands out is his ability to quickly break down ambiguity, identify risks early, and align all stakeholders so delivery stays on track. He is calm under pressure, easy to work with, and brings a strong sense of ownership to everything he drives.
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="text-sm font-semibold text-navy-900">Muhamamd Maaz Khalid</div>
                <div className="text-sm text-gray-600">SDET, Global Relay</div>
                <div className="text-xs text-gray-400 mt-1">April 2026</div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-navy-900 hover:shadow-lg transition-all duration-200 flex flex-col">
              <Quote className="w-8 h-8 text-navy-900 mb-6 flex-shrink-0" />
              <p className="text-base text-gray-700 leading-relaxed mb-8 flex-1">
                Shanal is a powerhouse Technical Product Manager who consistently turns complex requirements into actionable roadmaps. I've worked closely with him as he spearheaded the gathering and refining of feature requirements, ensuring total clarity for the engineering team. Beyond his technical acumen, Shanal's foresight is a massive asset; he stayed ahead of every 3rd-party provider update, allowing us to anticipate shifts and plan well in advance. His focus on team performance and his commitment to on-time delivery make him a vital asset to any product organization.
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="text-sm font-semibold text-navy-900">Abdelbacet Hachani</div>
                <div className="text-sm text-gray-600">Lead, Software Development, Global Relay</div>
                <div className="text-xs text-gray-400 mt-1">April 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Working on a product problem in a regulated environment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            12 years shipping platform and API products where regulatory ambiguity, vendor ecosystems, and delivery constraints intersect. Always happy to compare notes.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
