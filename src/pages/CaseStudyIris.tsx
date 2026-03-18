import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyIrisProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyIris({ onNavigate }: CaseStudyIrisProps) {
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
            IRIS Software Group · Product Manager · May 2020 – Apr 2021
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Desktop-to-cloud migration that cut the core workflow by 49%
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How I led the cloud migration of a tax compliance platform for 10,000+ UK accountants,
            made the build-versus-cut calls under a fixed 8-month timeline, navigated live HMRC
            regulatory constraints, and shipped a product that was meaningfully better — not just
            cloud-hosted — for the users who depended on it.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-100">
          {[
            { value: '49%', label: 'Workflow time reduction' },
            { value: '33→17 min', label: 'Core filing time' },
            { value: '1,500', label: 'Beta users at launch' },
            { value: '8 months', label: 'Time to MVP, on schedule' },
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
            A migration with a hard deadline and no room to disrupt tax season
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            IRIS Element was a desktop tax compliance application used by 10,000+ UK accountants to
            file self-assessment returns for their clients. It was deeply embedded in daily
            workflows — an accountant at a mid-size firm might process hundreds of returns through
            it in a single tax season. Any meaningful disruption would cost their clients time,
            money, and potentially missed HMRC deadlines.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            IRIS needed to move the product to the cloud. The desktop architecture was constraining
            scalability, making update deployments slow and complex, and creating friction in
            workflows that had grown up around its limitations. The business case was clear. The
            challenge was delivery: a fixed 8-month timeline, a 12-person cross-functional team,
            and live HMRC regulatory constraints on how tax data could be stored, accessed, and
            processed in a cloud environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My role was to own scope, prioritisation, and MVP definition — making the explicit
            build-versus-cut calls that would determine whether we shipped on time and whether
            the product was worth using when we did.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            02 · Why This Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The migration was the strategic bet — the constraint was what made the thinking matter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The prioritisation call for this project wasn't whether to migrate — that was a business
            decision already made. The product prioritisation questions were harder: which workflows
            were genuinely essential to the MVP, and which were legacy complexity that had survived
            in the desktop version because nobody had ever had to justify them?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I used two frameworks to cut scope without cutting value. First, frequency and
            criticality: which workflows did accountants use daily during tax season versus
            occasionally throughout the year? High-frequency, high-criticality workflows made
            the MVP. Everything else was explicitly deferred with a rationale. Second, HMRC
            constraint as a natural filter: certain features that relied on flexible data handling
            couldn't make the cloud architecture within the regulatory boundary. Rather than
            treating this as a problem, I used it as a forcing function — if a feature couldn't
            be built compliantly in 8 months, it wasn't in scope.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The goal I set wasn't feature parity. It was a cloud product that was meaningfully
            faster and less friction-heavy than the desktop version for the workflows that
            mattered most. That reframe changed the design brief entirely.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            03 · Discovery and Research
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The 33-minute workflow contained friction that had been invisible for years
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I mapped the existing 33-minute core filing workflow step by step — working with
            accountants and the internal tax SME to understand what each step was actually for,
            versus what it had become through years of accumulated workarounds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Three categories of friction emerged:
          </p>
          <div className="space-y-4 mb-6 pl-4 border-l-2 border-blue-100">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Unnecessary manual steps</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Several screens in the existing flow existed because the desktop architecture
                required sequential file handling that a cloud backend could eliminate entirely.
                These weren't features — they were workarounds for a technical limitation that
                would no longer exist in the cloud version.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Manual file upload friction</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Most accountancy firms already stored client files in cloud storage (Google Drive,
                SharePoint, Dropbox). The desktop version required manual downloads and re-uploads
                for every filing. API-driven integration with their existing storage would eliminate
                the entire step — but it required design decisions about which storage providers
                to support and how to handle the HMRC data residency requirements that applied
                to where those files lived.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Regulatory constraints as architectural boundaries</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                HMRC imposes strict rules on data residency and access for cloud-hosted tax data.
                Rather than discovering these late and reworking architecture, I brought legal and
                compliance in at the start of the design phase. Their input shaped the cloud
                architecture directly — which added constraint but also prevented the kind of
                late-stage redesign that kills delivery timelines.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The research conclusion: roughly 30% of the existing workflow time was friction that
            could be eliminated entirely in the cloud version. The remaining 70% was genuine task
            work — filing logic, validation, submission. That gave me a concrete redesign target.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            04 · Solution and Strategy
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Build a fundamentally better workflow, not a cloud-hosted replica
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The solution was a redesigned accountant workflow with two material changes from the
            existing desktop product.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            First, API-driven file storage integration. I designed a direct connection from the
            IRIS Element cloud product to the firm's existing file storage, so the manual
            download-and-upload step disappeared entirely. This required defining which storage
            providers to support in the MVP, how authentication would work, and how to handle
            the HMRC data residency requirement for firms using US-hosted storage. Decisions were
            documented with explicit rationale so they could be revisited in future phases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Second, a stripped workflow that removed the screens that had only existed as
            workarounds for the desktop architecture. The design brief was: every step in this
            workflow should exist because an accountant needs to do it, not because the previous
            product needed them to manage a technical constraint.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Feature parity with the desktop product was explicitly not the target. I made a
            prioritised cut list with rationale for everything deferred, shared it with
            stakeholders, and documented expected follow-on phases. This let us defend the
            MVP scope without constant renegotiation as the deadline approached.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            05 · Execution
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hard constraints clarify scope — the HMRC boundary removed debates that would have delayed delivery
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 12-person cross-functional team included frontend and backend engineers, UX, a
            Tax SME, architects, and legal/compliance. The coordination challenge wasn't
            technical — it was keeping the scope locked against the natural pressure to add
            features as the cloud platform took shape and stakeholders could see what was
            possible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I maintained a single prioritised backlog with written rationale for every cut and
            every deferral. When scope expansion requests came in — and they did — the response
            was always the same: here's the rationale for the current cut, here's which phase
            this would go into, here's what we'd have to push to accommodate it. That structure
            turned scope negotiations into conversations with a documented outcome rather than
            repeated debates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            HMRC's regulatory constraints functioned as an unexpected forcing function. Features
            that couldn't be built compliantly within the architectural boundaries couldn't ship
            regardless of how much anyone wanted them. That removed a category of scope debate
            entirely — the constraint made the call for us.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            06 · Impact and Results
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            On schedule, meaningfully better, and a foundation the product could build on
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: '49%', detail: 'Reduction in core filing workflow time' },
              { value: '33→17 min', detail: 'Filing time per return' },
              { value: '1,500', detail: 'Beta users onboarded at launch, on schedule' },
              { value: '8 months', detail: 'End-to-end delivery under regulatory constraint' },
            ].map((m) => (
              <div key={m.value} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-sm text-gray-600">{m.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reducing filing time from 33 to 17 minutes has direct commercial value for an
            accountancy firm — a firm handling 500 returns in a tax season recovers roughly
            130 hours of fee-earning time. That framing made adoption straightforward to justify
            internally at client firms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The cloud migration also unblocked IRIS's product roadmap. The desktop architecture
            had constrained what could be built for years. Moving to cloud opened the path to
            faster deployment cycles, cross-platform access, and integrations that weren't
            possible in the desktop model.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            07 · Learnings and Reflection
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Constraints clarify when you use them as filters rather than fighting them as blockers
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The thing I'd do differently: run the workflow mapping exercise earlier. I started
            the detailed step-by-step analysis of the 33-minute workflow about three weeks into
            the project. Starting that in week one would have given the design team more lead
            time on the new workflow before architecture decisions were made.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The broader learning from this project is that hard regulatory constraints are a
            product design input, not just a compliance sign-off step. Bringing HMRC requirements
            into the architecture conversations early — rather than running them in parallel
            with engineering — prevented rework and gave the team clearer boundaries to design
            within.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The prioritisation discipline — a maintained cut list with written rationale, not just
            a backlog — is the thing I've carried forward most directly. It doesn't prevent
            stakeholders from wanting more features. It prevents that pressure from becoming
            scope creep.
          </p>
        </section>

        {/* Navigation */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('case-study-openreach')}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Next: Openreach case study
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
