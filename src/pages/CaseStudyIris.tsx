import { ArrowLeft, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

interface CaseStudyIrisProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyIris({ onNavigate }: CaseStudyIrisProps) {
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
            IRIS Software Group • Product Manager
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Cloud Migration That Reduced Workflow Time by 49%
          </h1>
          <p className="text-xl text-gray-600">
            How I led the desktop-to-cloud migration of a tax compliance platform serving 10,000+
            UK accountants while cutting the core filing workflow from 33 minutes to 17 minutes.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Tax compliance platform"
          className="w-full h-96 object-cover rounded-xl mb-12"
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">49%</div>
            <div className="text-sm text-gray-700">Workflow Time Reduction</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">17 min</div>
            <div className="text-sm text-gray-700">New Filing Time (from 33)</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,500</div>
            <div className="text-sm text-gray-700">Beta Users at Launch</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">8 mo</div>
            <div className="text-sm text-gray-700">Time to MVP</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              The Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IRIS Element was a legacy desktop application used by 10,000+ UK accountants for tax
              compliance filings. The desktop architecture was limiting scalability, made updates
              cumbersome, and created friction in accountants' workflows.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The migration needed to happen under an aggressive 8-month timeline while maintaining
              compliance with strict UK tax regulations on cloud-hosted data. Any disruption to
              accountants during tax season would be catastrophic.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-600" />
            My Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I owned MVP scope and prioritization, making hard trade-off calls on what to build versus
            cut. The key insight was that migration success wasn't just about feature parity, it was
            about making the workflow fundamentally better.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I analyzed the existing 33-minute workflow and identified pain points:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-gray-700">
              <span className="font-semibold">Unnecessary manual steps:</span> Accountants were
              clicking through screens that could be eliminated
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">File upload friction:</span> Manual file management
              when most firms already used cloud storage
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Regulatory constraints:</span> UK tax law requirements
              on data residency and security needed to be baked into the architecture
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            I partnered with legal and compliance teams early to ensure the cloud architecture would
            meet all regulatory requirements without slowing product velocity. Then I drove a complete
            workflow redesign that eliminated unnecessary steps and automated file uploads through
            direct integration with customer file storage solutions.
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
                  Shipped MVP on schedule to 1,500 beta users within the aggressive 8-month timeline
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Reduced core tax filing workflow from 33 minutes to 17 minutes (49% improvement)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Navigated UK tax regulation constraints while maintaining product development velocity
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Automated file uploads through customer storage integration, eliminating manual steps
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            Business Impact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The migration transformed IRIS Element from a legacy desktop application into a modern
            cloud platform. But more importantly, we didn't just achieve feature parity, we made the
            product fundamentally better for users.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reducing filing time from 33 to 17 minutes meant accountants could process nearly twice
            as many filings in the same time. For a firm handling hundreds of tax returns, this
            translated directly to revenue and client satisfaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The successful migration also positioned IRIS for future scalability and faster feature
            development, unblocking the product roadmap that had been constrained by the legacy
            desktop architecture.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
          <p className="text-gray-700 leading-relaxed">
            Cloud migration isn't just about moving functionality, it's an opportunity to fundamentally
            rethink workflows. By focusing on user pain points and making hard prioritization calls,
            I delivered a product that was both on time and significantly better than what we were
            replacing.
          </p>
        </div>

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => onNavigate('case-study-openreach')}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Case Study →
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="flex-1 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}
