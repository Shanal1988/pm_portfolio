import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyGlobalRelayProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyGlobalRelay({ onNavigate }: CaseStudyGlobalRelayProps) {
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
            Global Relay · Product Manager → Senior Product Manager · May 2021 – Present
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Closing the compliance gap native carriers wouldn't touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How I identified a regulatory blind spot exposing thousands of financial firms to risk,
            negotiated API capabilities directly with a CPaaS vendor's product team, and shipped
            compliant multi-party messaging in 6 months through live regulatory ambiguity — doubling
            ARR and growing paid seats by 167%.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-100">
          {[
            { value: '2×', label: 'ARR growth in 24 months' },
            { value: '167%', label: 'Paid seat growth' },
            { value: '6 months', label: 'Time to market' },
            { value: '0', label: 'Client disruption events' },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{m.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Section 1: Context & Problem */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            01 · Context and Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The compliance gap nobody else had formally owned
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Global Relay is enterprise SaaS for financial compliance — the infrastructure that lets
            banks, broker-dealers, and wealth managers capture, archive, and stay audit-ready across
            every communication their employees send. Clients are regulated by FCA, SEC, and FINRA.
            Failure to archive a business communication isn't a product issue; it's a regulatory
            violation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The problem: native carriers (AT&T, T-Mobile, Verizon) don't provide access hooks for
            archiving SMS messages. When regulated employees sent text messages, those messages
            vanished from the compliance record. Firms were exposed to regulatory risk without
            knowing it, and most didn't realise they had a gap.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This was the platform's number one requested feature. It had been on the roadmap for
            over a year without a credible path to delivery. The technical dependency on carrier
            API access made it look like an external blocker — not a product problem. That framing
            was wrong.
          </p>
        </section>

        {/* Section 2: Why This Problem */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            02 · Why This Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The biggest product opportunities sit at the intersection of a regulatory gap and customer pain
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I used three inputs to make the prioritisation call.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            First, customer signal was unambiguous. Enterprise client conversations kept returning
            to the same theme: they assumed the platform was archiving everything. When I mapped the
            gap explicitly, the reaction was immediate — this wasn't a nice-to-have, it was active
            regulatory risk they were carrying. The urgency was already there; they just hadn't
            quantified it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Second, competitive position. Closing this gap would make Global Relay the only viable
            compliance platform for regulated firms needing SMS coverage. Any firm that discovered
            their exposure would have one credible option. The commercial case for prioritisation
            wrote itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Third, the framing needed to change. The prevailing view inside the company was that
            carrier API access was a blocker. I reframed it: CPaaS vendors (Twilio, Bandwidth) had
            already built the carrier access layer. The question was whether we could negotiate the
            right API capabilities on top of it. That reframe turned an external dependency into a
            vendor product conversation — which is a different kind of problem, and one I knew how
            to run.
          </p>
        </section>

        {/* Section 3: Discovery & Research */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            03 · Discovery and Research
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mapping a three-sided constraint: vendor roadmap, live regulation, compliance certainty
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The discovery phase identified three interlocking problems, each with its own
            stakeholder who needed a different answer before they could commit.
          </p>
          <div className="space-y-4 mb-6 pl-4 border-l-2 border-blue-100">
            <div>
              <div className="font-semibold text-gray-900 mb-1">The vendor constraint</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Twilio's standard API didn't natively expose the message delivery hooks we needed
                for guaranteed archiving. This wasn't a documentation gap — it was a capability
                that didn't exist yet. I engaged Twilio's product team directly, using our client
                base data to build a business case for why this API capability was commercially
                worth building. This was a vendor negotiation, not a support ticket.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">The regulatory ambiguity</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A2P 10DLC — the regulatory framework governing application-to-person messaging in
                the US — was still being written. Carriers were implementing requirements
                inconsistently. Building to any single interpretation risked costly rework. I
                mapped the most likely regulatory scenarios across carriers and with external
                regulatory guidance, and designed the architecture to be configurable across
                multiple outcomes simultaneously rather than hardcoding to one. Waiting for
                certainty wasn't an option — by the time the framework settled, we'd have missed
                the window.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">The compliance requirement</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Global Relay's compliance team needed absolute certainty that every message would
                be captured and audit-ready before any client could be onboarded. I worked with
                them to define the exact archiving guarantee requirements upfront, so engineering
                could build to a clear bar rather than revisiting the requirement post-launch.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The key insight from discovery: this wasn't a single product problem. It was three
            parallel conversations that needed to converge on a single technical architecture. The
            PM role here was to run all three simultaneously and prevent any one from blocking the
            others.
          </p>
        </section>

        {/* Section 4: Solution & Strategy */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            04 · Solution and Strategy
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A configurable architecture built to absorb multiple regulatory outcomes
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The solution had three components that had to be designed together.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At the vendor layer, I worked with Twilio's product team to co-develop the API
            capabilities we needed — specifically the delivery receipt and message content hooks
            required for guaranteed archiving. I defined the integration requirements from our side
            and built the internal case for why this was worth Twilio's engineering time. The
            result was API capability that didn't previously exist in their product.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At the architecture layer, I worked with engineering to design a configurable product
            layer that could support multiple A2P regulatory interpretations without requiring
            rework as the framework evolved. Instead of building for the most likely outcome, we
            built for adaptability — with configuration switches that could absorb carrier-level
            inconsistencies as they emerged.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The alternative I explicitly rejected was waiting for regulatory certainty before
            starting build. That approach would have pushed delivery 12+ months out and handed
            the window to any competitor willing to ship through ambiguity. The configurable
            architecture meant we could ship on the aggressive timeline and adapt, rather than
            waiting and losing the market position.
          </p>
        </section>

        {/* Section 5: Execution */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            05 · Execution
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Aligning three groups with different priorities, none reporting to me
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Delivery required sustained alignment across Twilio's product team (external, with their
            own roadmap priorities), Global Relay's compliance team (internal, risk-averse,
            requiring regulatory certainty before sign-off), and engineering (capacity-constrained
            with competing priorities). None of these groups reported to me.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The tactic that unlocked this: I ran joint sessions where each party could see the
            others' constraints. Compliance understood why the configurable architecture was the
            right risk posture. Engineering understood why the vendor negotiation was worth
            investing time in. Twilio's team understood the commercial scale of the client base
            they'd be unlocking. Mutual visibility replaced the sequential approval process that
            had been stalling progress.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I also defined the phased spec for engineering deliberately — breaking the work into
            stages so we could prove the archiving guarantee technically before expanding to the
            full A2P campaign management capability. This reduced engineering risk and gave
            compliance an earlier validation point.
          </p>
        </section>

        {/* Section 6: Impact */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            06 · Impact and Results
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The gap we closed became the platform's primary growth driver
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: '2×', detail: 'ARR in 24 months post-launch' },
              { value: '167%', detail: 'Paid seat growth (30K → 80K)' },
              { value: '2× volume', detail: 'Monthly archived messages' },
              { value: '0 events', detail: 'Client compliance disruptions through full A2P transition' },
            ].map((m) => (
              <div key={m.value} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-sm text-gray-600">{m.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            By closing the compliance gap that native carriers couldn't address, Global Relay
            became the only credible solution for regulated financial institutions needing
            multi-party messaging coverage. The growth in paid seats and ARR reflected firms
            that had no viable alternative once they identified their exposure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The configurable architecture also proved its value during the A2P 10DLC transition.
            As the regulatory framework solidified and carriers updated their requirements, the
            platform adapted without client disruption or significant engineering rework. Zero
            compliance disruption events through the full transition.
          </p>
        </section>

        {/* Section 7: Learnings */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            07 · Learnings and Reflection
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Waiting for regulatory certainty is itself a product risk
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The main thing I'd do differently: start the vendor negotiation earlier. By the time
            I engaged Twilio's product team, we'd already spent months treating the carrier API
            access as an external blocker rather than a negotiable constraint. Earlier engagement
            would have moved the vendor timeline forward and given engineering more lead time on
            the configurable architecture.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The broader learning: in regulated product work, building for adaptability across
            multiple outcomes is almost always more valuable than building for precision against
            a moving target. The instinct to wait for certainty before committing to an
            architecture is understandable, but in environments where the regulatory landscape
            is actively settling, waiting is a decision — and usually the wrong one.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This pattern transfers directly to AI product work in regulated environments. AI
            regulation, data residency requirements, and model governance frameworks are all
            still being written. The same approach — map the most likely scenarios, build for
            configurability, ship through ambiguity — is the right posture.
          </p>
        </section>

        {/* Navigation */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('case-study-iris-element')}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Next: IRIS Software case study
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
