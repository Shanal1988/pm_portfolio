import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyGlobalRelayOnboardingProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyGlobalRelayOnboarding({ onNavigate }: CaseStudyGlobalRelayOnboardingProps) {
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
            Global Relay · Senior Product Manager · May 2021 – Present
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Onboarding Redesign
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Funnel analysis identified mid-flow abandonment as the primary activation blocker —
            not the step everyone assumed. Simplifying activation touchpoints lifted completion
            from ~70% to ~85% and drove 12% MAU growth post-launch.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-100">
          {[
            { value: '~70% → ~85%', label: 'Onboarding completion rate' },
            { value: '12%', label: 'MAU growth post-launch' },
            { value: 'Mid-flow', label: 'Primary drop-off identified' },
            { value: '0', label: 'Assumed cause was correct' },
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
            Enterprise SaaS onboarding with a hidden activation problem
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Global Relay serves regulated financial institutions — banks, broker-dealers, and
            wealth managers who require compliance archiving across every communication channel.
            Onboarding these clients is high-stakes: configuration errors create compliance gaps,
            and friction in the activation flow directly delays time-to-value for enterprise
            accounts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            MAU growth had plateaued despite healthy top-of-funnel performance. Acquisition wasn't
            the bottleneck. The question was what was happening between signup and active use.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The prevailing view internally was that drop-off was happening at specific steps that
            stakeholders had flagged as complex. No one had mapped the actual funnel at step level.
            Assumptions about where users were abandoning were being treated as facts.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            02 · Why This Problem
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Activation is the silent growth lever in enterprise SaaS
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In an enterprise compliance platform, new seat growth is meaningless if users aren't
            activating. Each inactive account is a compliance risk for the client — a user whose
            communications aren't being captured because they never completed onboarding. The
            problem was product and commercial simultaneously.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The MAU signal was the entry point. Flat active user numbers in the presence of seat
            growth meant activation was failing somewhere. Fixing onboarding would unlock growth
            already paid for by sales — without requiring any increase in acquisition spend.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I prioritised this because the ROI was structural: the seats existed, the users were
            starting the flow, the problem was in the product experience between start and
            activation. That's a product problem with a product solution.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            03 · Discovery and Research
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The drop-off point was not where anyone thought it was
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The first step was building a step-level funnel view — something that hadn't existed
            before this project. Mapping completion rates at each stage of the onboarding flow
            produced an immediate finding: the primary abandonment point was mid-flow, not at the
            steps stakeholders had assumed were causing friction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The mid-flow drop-off point was a configuration step that required users to have
            information they frequently didn't have on hand. Rather than pausing and returning,
            users were abandoning the flow entirely. The fix wasn't simplifying a form — it was
            rethinking when that information was required and whether the sequence of steps was
            creating a false dependency.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Qualitative sessions with recently onboarded users confirmed the friction pattern.
            Users described the mid-flow step as a blocker they hadn't anticipated. Several had
            needed to loop in colleagues before they could proceed — a coordination overhead that
            wasn't visible in the funnel data alone, but explained the abandonment spike.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            04 · Solution and Strategy
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Remove friction that added no compliance value, resequence what remained
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The redesign focused on two interventions. First, remove steps that added onboarding
            friction without adding compliance certainty or trust signal. Several prompts in the
            original flow collected information that was either duplicated elsewhere or not required
            for the initial activation milestone. These were cut.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Second, resequence the configuration requirements. The mid-flow blocker — the step
            requiring information users didn't have available — was moved later in the flow and
            made deferrable. Users could reach the activation milestone and return to complete
            advanced configuration in a subsequent session. This eliminated the coordination
            dependency that was causing abandonment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The constraint throughout was compliance integrity: nothing in the onboarding flow
            could be removed if it was load-bearing for the archiving guarantee. Every cut was
            reviewed against this bar. The goal was reducing friction, not reducing rigour.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            05 · Execution
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Cross-functional delivery with measurement gates at each phase
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Delivery was cross-functional across Engineering, UX, and Marketing — three teams with
            different success metrics and different views on what the onboarding flow should
            optimise for. Engineering cared about implementation feasibility. UX cared about the
            experience quality. Marketing cared about time-to-first-value and activation rate.
            Aligning on a shared definition of "done" before build started was the first
            execution task.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The rollout was staged with measurement gates after each phase. Rather than shipping
            the full redesign and measuring the aggregate outcome, each intervention was deployed
            incrementally so the contribution of each change could be isolated. This gave us a
            cleaner read on which changes were driving the completion rate improvement and which
            were neutral.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The compliance team reviewed the revised flow before each phase shipped to confirm the
            archiving guarantee remained intact. Their sign-off was a gate, not a retrospective
            check — which compressed the review cycle and prevented last-minute changes from
            disrupting the delivery timeline.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            06 · Impact and Results
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Completion improved, MAU followed, compliance integrity held
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: '~70% → ~85%', detail: 'Onboarding completion rate' },
              { value: '12%', detail: 'MAU growth post-launch' },
              { value: '0', detail: 'Compliance integrity incidents' },
              { value: 'Mid-flow', detail: 'Primary blocker successfully removed' },
            ].map((m) => (
              <div key={m.detail} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{m.value}</div>
                <div className="text-sm text-gray-600">{m.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 15-percentage-point improvement in onboarding completion — from approximately 70%
            to 85% — represented a material increase in activated accounts from the existing seat
            base. The 12% MAU growth post-launch reflected users who had previously abandoned the
            flow now completing it and reaching active use.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The measurement gate structure also produced a secondary benefit: a clearer model of
            which steps in the onboarding flow were highest-friction. That model has informed
            subsequent onboarding improvements.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            07 · Learnings and Reflection
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enterprise onboarding friction is invisible until you map it at step level
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most useful thing about this project was how clearly it demonstrated the gap
            between what stakeholders assume about a funnel and what the data shows. Every team
            had a view on where users were dropping off. None of them were right. The actual
            drop-off point was in a part of the flow no one had flagged as problematic — precisely
            because no one had looked at step-level completion rates before.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The broader lesson: in enterprise SaaS, the onboarding flow is usually owned loosely
            across multiple teams, which means no single team has full visibility into completion
            rates at step level. Building that visibility is a prerequisite for fixing anything.
            The funnel mapping was the first thing I did and the most valuable thing I produced.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'd run measurement gates from the start on any future onboarding project. Phased
            rollout with per-change attribution is more work to set up but produces a much cleaner
            read on what's actually driving improvement — and builds institutional knowledge about
            the flow that aggregate metrics never capture.
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
