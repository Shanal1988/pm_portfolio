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

        <div className="mb-12">
          <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
            Global Relay · Product Manager · May 2021 – Aug 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The compliance pivot that changed what the platform was for
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How a collaborative strategic reframing moved the product toward secure multi-party messaging with full compliance archiving, ahead of the SEC and FCA off-channel enforcement wave.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-100">
          {[
            { value: 'Significant', label: 'Paid seat growth' },
            { value: 'Strong YoY', label: 'ARR growth' },
            { value: '24 months', label: 'Delivery window' },
            { value: '1,000+', label: 'Regulated clients served' },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{m.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            01 · Context and Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A compliance platform with a growing gap in its archiving perimeter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Global Relay's enterprise communication platform served 1,000+ regulated financial institution clients across banking, asset management, and broker-dealer firms. The platform captured, archived, and surfaced communications across multiple channels for regulatory discovery and surveillance, a critical compliance function for firms operating under FCA and SEC oversight.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The product challenge was scope. As communication channels proliferated, including messaging apps, voice, and collaboration tools, the archiving perimeter needed to expand to match. Clients were using channels outside the firm's supervised perimeter. The regulatory exposure was growing faster than the product's ability to cover it.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            02 · Why This Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Multi-party messaging was creating regulatory exposure firms could not ignore
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regulated financial institutions were facing a specific and growing compliance gap: multi-party messaging across channels that fell outside their supervised archiving perimeter. High-profile incidents in 2024 and 2025, including cases where sensitive information was shared in group conversations with unintended participants, brought regulatory scrutiny directly to how firms were managing communication oversight.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The SEC and FCA off-channel enforcement wave was already accelerating. Firms were being fined for communication that occurred outside their compliance perimeter. The gap was not theoretical. It was creating direct, measurable regulatory exposure for the clients we served.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The product needed to solve a specific problem: enable secure multi-party messaging across channels while ensuring every conversation was captured, archived, and available for regulatory discovery and surveillance. That capability did not exist in the market at enterprise scale.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            03 · Discovery
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The pain was regulatory exposure, not missing features
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Discovery centred on structured conversations with compliance officers and IT administrators at regulated financial institution clients. The consistent signal across those conversations was that the pain was not missing product features. It was regulatory exposure that was becoming harder to defend to auditors and regulators.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compliance officers were specifically concerned about multi-party messaging: group conversations that crossed channel boundaries, included external participants, or occurred on personal devices outside the firm's supervised perimeter. The question they needed to answer was not whether the platform had good features. It was whether every conversation their employees had was captured, searchable, and producible on regulatory request.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Competitive analysis confirmed the gap. No CPaaS provider had built configurable multi-channel compliance archiving at enterprise scale that covered the full range of channels clients needed to supervise. The market gap and the client pain were pointing in the same direction.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            04 · Solution and Strategy
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Secure multi-party messaging with compliance built in from the start
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The solution was a multi-party messaging feature built directly into the Global Relay platform. Users could initiate group conversations from within the GR app, across channels, with full capture of message content, media, and metadata. Every conversation was automatically archived and indexed for regulatory discovery and surveillance, including external participants and cross-channel threads.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This was not a bolt-on archiving layer applied after the fact. The compliance capability was built into the messaging architecture from the start, which meant the archiving perimeter expanded with the feature rather than lagging behind it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The vendor API integration was the critical technical dependency. Our primary vendor partner's API lacked native support for multi-party messaging at the level required for compliant archiving. Closing that gap required direct negotiation with their product team to define and prioritise the missing capabilities, and building the integration architecture around those expanded API contracts once they were agreed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The result was a configurable compliance layer that could be applied across the channel mix each regulated client needed to supervise, without requiring bespoke builds per client or per regulatory jurisdiction.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            05 · Execution
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Aligning three teams around a delivery that depended on a vendor timeline we did not control
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cross-functional delivery involved engineering, legal, and finance. Each had a distinct dependency on the outcome: engineering on the vendor API contracts, legal on the regulatory framework interpretation, finance on the commercial case for the investment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The vendor API negotiation was a partnership conversation rather than a formal procurement process. We presented the use case and the mutual commercial benefit to our primary vendor partner's product team, making the case that enabling compliant multi-party messaging would expand the addressable market for both parties. Getting the missing API capabilities prioritised required demonstrating the volume opportunity clearly enough that it competed with their existing roadmap commitments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The commercial team had concerns about deprioritising existing delivery commitments. The case was made on projected volume uplift and the size of the regulatory compliance gap in the market. That framing moved the conversation from "what are we giving up" to "what is the cost of not moving."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The hardest constraint in delivery was timing. The vendor APIs we depended on were not yet generally available, which created a direct dependency between their GA release date and our own launch timeline. We could build and test against the pre-GA API but could not ship to clients until the vendor confirmed general availability. That waiting period required keeping the internal team aligned and the launch plan flexible without losing momentum.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Separately, the A2P regulatory landscape shifted during delivery. Firms using the platform were required to register with the relevant regulatory body, which changed the onboarding and compliance workflow mid-build. The configurable architecture absorbed the change without requiring a redesign of the core messaging layer.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            06 · Impact and Results
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Platform growth driven by a compliance capability the market was not offering
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: 'Significant', detail: 'Paid seat growth' },
              { value: 'Strong YoY', detail: 'ARR growth over 24 months' },
              { value: '24 months', detail: 'Delivery window' },
              { value: '1,000+', detail: 'Regulated clients served' },
            ].map((m) => (
              <div key={m.value} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-sm text-gray-600">{m.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Significant growth in paid seats and strong ARR performance over 24 months. The growth was not driven by winning feature comparisons. It was driven by being the platform that solved the regulatory exposure problem financial institutions could not leave unaddressed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The multi-party messaging feature with full compliance archiving became the primary commercial differentiator. The configurable architecture that absorbed regulatory framework changes without client disruption became the technical proof point that the product had been built for regulatory ambiguity, not around a single point-in-time interpretation of it.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            07 · Learnings and Reflection
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Qualify vendor API readiness before committing to a delivery timeline
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The thing I would do differently: qualify vendor API readiness earlier. The dependency on our primary vendor partner's API timeline introduced delivery risk that could have been mapped more explicitly upfront. The pre-GA API access gave us build time, but the lack of control over the GA release date created a waiting period that was harder to communicate internally than the actual build work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The broader learning: in regulated product work, the architecture needs to be built for configurability from the start. The A2P regulatory shift mid-build validated that decision. Waiting for regulatory certainty before committing to an architecture would have cost time and created rework. Building for multiple potential outcomes was the right call.
          </p>
        </section>

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
