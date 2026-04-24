import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyOpenreachProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyOpenreach({ onNavigate }: CaseStudyOpenreachProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={() => onNavigate('case-studies')}
          className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-10 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          All case studies
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
            Infosys · Contracted to BT & Openreach · Technical Product Manager · 2016 – 2020
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Three partners, three requirement sets, one platform that worked for all of them
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How I translated competing integration requirements from Sky, Vodafone, and BT Retail
            into a single coherent API-driven scheduling platform - reducing partner delivery time
            by 20% and cutting SLA compensation costs by 15% year-on-year on national-scale
            telecom infrastructure.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-100">
          {[
            { value: '20%', label: 'Faster partner delivery time' },
            { value: '15%', label: 'SLA cost reduction YoY' },
            { value: '3', label: 'Major B2B partners on one platform' },
            { value: '30M+', label: 'UK premises served' },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{m.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Section 1 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            01 · Context and Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            National infrastructure, three different integration owners, and financial penalties for every missed SLA
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Openreach is the infrastructure arm of BT Group, responsible for the physical
            broadband and fibre network serving 30M+ UK premises. When a household or business
            orders broadband from Sky, Vodafone, or BT Retail, it's an Openreach field engineer
            who installs it. The scheduling of that engineer - which one, with which equipment,
            to which address, within which SLA window - is a matching problem at national scale.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The problem: the existing integration approach was causing delivery delays and
            increasing operational costs. Engineers were being dispatched without the right
            equipment for the network type at the address. Partner systems weren't getting
            reliable scheduling updates. SLA windows were being missed - and in telecom
            infrastructure contracts, missed SLAs carry direct financial penalties.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sky, Vodafone, and BT Retail each had their own scheduling systems, their own
            integration patterns, and their own contractual SLA obligations. The product
            challenge was whether to build three bespoke integrations - fast to start, expensive
            to maintain - or design a single platform architecture that all three could consume
            without bespoke builds. That call had significant long-term implications for
            Openreach's ability to onboard future partners.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            02 · Why This Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bespoke integrations were the default path - and the wrong one
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The case for tackling the integration architecture rather than building partner by
            partner came from two directions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Operationally, bespoke integrations compound in cost. Each one needs its own
            maintenance track, its own testing on schema changes, its own regression surface.
            With three partners already in scope and the expectation of more as Openreach
            expanded its partner network, the maintenance burden of bespoke builds would become
            unmanageable within two or three years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Commercially, the SLA penalty structure made every day of delay measurable. 15% of
            SLA compensation costs was a hard number. The investment in a coherent platform
            architecture had a direct ROI calculation against that baseline - which made the
            prioritisation case straightforward to make to stakeholders who were otherwise
            resistant to slowing down initial partner delivery for a longer-term architecture.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            03 · Discovery and Research
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding three sets of constraints well enough to find the common layer underneath
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The discovery phase involved structured deep dives with each partner's technical and
            operations teams to understand their integration requirements - not just what data
            they needed, but what their scheduling systems could consume, what update frequency
            they needed, and where their SLA obligations created hard latency requirements.
          </p>
          <div className="space-y-4 mb-6 pl-4 border-l-2 border-blue-100">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Engineer specialisation as a matching constraint</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Openreach engineers have different certifications for different network types -
                copper, FTTP, and FTTC each require different equipment and training. The
                scheduling algorithm had to match engineer capability to job type, not just
                geography and availability. This was the core technical constraint that made
                better matching hard.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Partner system heterogeneity</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sky, Vodafone, and BT Retail used different internal scheduling systems with
                different API patterns and different data models. The mapping exercise identified
                which differences were genuinely structural versus which were implementation
                choices that could be absorbed in an adapter layer - that distinction shaped
                the architecture decision.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">SLA trigger points</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Each partner's SLA clock started at different points in the scheduling flow -
                some at order creation, some at confirmation, some at engineer dispatch. Understanding
                exactly where the penalties triggered for each partner was essential to
                prioritising which parts of the integration had the tightest latency requirements.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The key discovery: about 70% of what each partner needed from the integration was
            structurally identical. The 30% that differed was mostly presentation logic and
            field mapping, not core scheduling logic. That meant a shared platform with
            partner-specific adapter configuration was technically viable - and the architecture
            decision became defensible.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            04 · Solution and Strategy
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A single platform with configurable partner adapters - built once, consumed differently
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I defined the integration architecture around a shared scheduling API that sat between
            Openreach's engineer management systems and each partner's downstream systems. Core
            scheduling logic - engineer matching, availability management, SLA window calculation
            - lived in the shared layer. Partner-specific field mappings and response formatting
            lived in lightweight adapters per partner.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This design meant each partner integration was primarily a configuration exercise
            rather than a bespoke build - reducing initial integration time and making future
            partner onboarding significantly faster. It also meant any improvement to the core
            scheduling algorithm would benefit all partners simultaneously.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The alternative I rejected was a partner-by-partner bespoke approach that would
            have been faster to launch with Sky but would have created three diverging
            codebases by the time Vodafone and BT Retail came online. That path looked faster
            at the start of the project and more expensive at every point after.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            05 · Execution
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Translating three sets of contractual obligations into a single engineering brief
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cross-functional delivery involved Openreach's engineering and operations teams,
            each partner's technical integration teams, and the commercial stakeholders managing
            the SLA contracts. The primary execution challenge was translating partner
            requirements - which arrived as contract language and business rules rather than
            technical specifications - into developer-ready API contracts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I owned the requirements definition process: taking the partner discovery inputs,
            mapping them to the shared architecture, and producing the API specifications that
            engineering could build to without needing to re-engage partners for every
            clarification. Reducing the back-and-forth between engineering and partner teams
            was itself a delivery accelerant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The phased rollout went Sky first - as the largest partner with the highest SLA
            exposure - followed by Vodafone, then BT Retail. Each partner's adapter was built
            against the shared API without requiring changes to the core scheduling logic.
            The architecture held.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            06 · Impact and Results
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Faster delivery, fewer penalties, and a platform that scaled without redesign
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: '20%', detail: 'Reduction in partner delivery time' },
              { value: '15% YoY', detail: 'Reduction in SLA delay compensation costs' },
              { value: '3 partners', detail: 'On one platform architecture, no bespoke builds' },
              { value: 'Scalable', detail: 'Future partners onboard as configuration, not rebuilds' },
            ].map((m) => (
              <div key={m.value} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-sm text-gray-600">{m.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 15% reduction in SLA compensation costs translated directly to bottom-line
            savings - these are contractual penalties with hard numbers attached, not proxy
            metrics. The 20% reduction in project delivery time meant faster partner onboarding
            and faster time-to-value on the engineering investment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The architecture decision proved its value most clearly when a fourth partner came
            into scope. Onboarding required building an adapter to the existing API, not a
            redesign of the scheduling platform. The pattern held.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            07 · Learnings and Reflection
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The fastest path to the first partner is rarely the fastest path to the fourth
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The main tension in this project was between stakeholders who wanted to move fast on
            the Sky integration and the argument for investing time upfront in the shared
            architecture. With hindsight, the architecture investment paid back within the first
            year. But at the start of the project, that case had to be made explicitly - it
            wasn't obvious to everyone that slower initial delivery was the right trade.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The thing I'd do differently: document the architecture trade-off decision more
            formally at the time, with the specific scenarios it was designed to handle and the
            assumptions it was based on. That documentation would have been useful when new
            partners came into scope and there were questions about whether to modify the core
            platform or build outside it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The broader learning: multi-party platform work requires making the architecture
            decision before you understand all the partners' requirements fully. You're designing
            for a constraint set that will expand. The discipline is building something flexible
            enough to absorb the requirements you don't know yet - without over-engineering for
            hypothetical ones.
          </p>
        </section>

        {/* Navigation */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('about')}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            About my background
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-500 transition-colors"
          >
            Get in Touch
          </button>
        </div>

      </div>
    </div>
  );
}
