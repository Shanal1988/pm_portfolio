import { ArrowLeft, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

interface CaseStudyGlobalRelayProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyGlobalRelay({ onNavigate }: CaseStudyGlobalRelayProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('case-studies')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Case Studies
        </button>

        <div className="mb-8">
          <div className="text-sm font-semibold text-blue-600 mb-2">
            Global Relay • Senior Product Manager
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Shipping Compliant Multi-Party Messaging in 6 Months
          </h1>
          <p className="text-xl text-gray-600">
            How I navigated evolving A2P 10DLC regulations and vendor API limitations to deliver
            the platform's most requested feature while maintaining zero compliance disruption.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Compliant messaging platform"
          className="w-full h-96 object-cover rounded-xl mb-12"
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
            <div className="text-sm text-gray-700">MoM Messaging Volume Growth</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-sm text-gray-700">Messages Processed Monthly</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">6 mo</div>
            <div className="text-sm text-gray-700">Time to Market</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-sm text-gray-700">Client Disruption Events</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              The Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Global Relay's compliant communication platform serves banks, broker-dealers, and wealth
              managers who are required by regulators (FCA, SEC) to archive all business communications.
              Multi-party messaging was the #1 requested feature, but there was a critical problem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Native carriers couldn't provide the message archiving guarantees our regulated clients
              needed. Meanwhile, A2P 10DLC regulations were still being written by carriers, creating
              uncertainty about what would even be technically possible.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-600" />
            My Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I identified that this wasn't just a product problem, it was a three-sided negotiation:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-gray-700">
              <span className="font-semibold">Engineering:</span> Needed clear technical specifications
              in an environment where carrier rules were changing weekly
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">CPaaS Vendor:</span> Had their own product roadmap and
              priorities that didn't initially align with our timeline
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Compliance Team:</span> Required absolute certainty that
              every message would be captured and audit-ready
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            I negotiated API capabilities directly with our CPaaS partner's product team, built a
            configurable product layer that could adapt to multiple regulatory outcomes, and analyzed
            partner data to identify the optimal technical approach.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
            What I Delivered
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Shipped compliant multi-party messaging feature in 6 months, meeting our aggressive deadline
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Maintained zero client disruption through the full A2P 10DLC regulatory transition
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Drove 30% month-over-month growth in messaging volume post-launch
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Built a flexible architecture that adapted as carrier rules evolved, preventing costly rework
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            Business Impact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The feature's success extended beyond the initial launch metrics. By closing the compliance
            gap that native carriers couldn't address, we established Global Relay as the only viable
            solution for regulated financial institutions needing multi-party messaging capabilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The platform now processes 2M+ messages monthly for banks, broker-dealers, and wealth
            managers, with the user base growing from 30,000 to 80,000 year-over-year. This growth
            was enabled by the compliant messaging infrastructure I led.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
          <p className="text-gray-700 leading-relaxed">
            Most PMs see regulation as a blocker. I see it as a product problem to solve. This project
            required me to sit in a room with a vendor product manager, a compliance officer, and an
            engineering lead, understand all three perspectives, and make decisions that worked for
            everyone. That's the kind of "heavy lifting" I specialize in.
          </p>
        </div>

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => onNavigate('case-study-iris-element')}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Case Study →
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="flex-1 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
          >
            Let's Discuss Your Challenges
          </button>
        </div>
      </div>
    </div>
  );
}
