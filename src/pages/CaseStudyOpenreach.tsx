import { ArrowLeft, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

interface CaseStudyOpenreachProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudyOpenreach({ onNavigate }: CaseStudyOpenreachProps) {
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
            BT/Openreach • Product Owner
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Designing Integration for National Telecom Infrastructure
          </h1>
          <p className="text-xl text-gray-600">
            How I designed the integration solution for a field engineer scheduling platform serving
            30M+ UK premises and major B2B partners including Sky and BT Retail.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Telecom infrastructure"
          className="w-full h-96 object-cover rounded-xl mb-12"
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
            <div className="text-sm text-gray-700">Faster Project Delivery</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-sm text-gray-700">SLA Penalty Reduction</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">30M+</div>
            <div className="text-sm text-gray-700">Premises Served</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-sm text-gray-700">Major B2B Partners</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              The Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Openreach's engineer scheduling platform needed to coordinate hundreds of field engineers
              with specialized equipment across multiple network types (fiber, copper, FTTP) while
              serving major B2B partners like Sky and BT Retail.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This was a complex matching problem at national scale. The wrong engineer at the wrong
              location with the wrong equipment meant missed SLAs, customer complaints, and financial
              penalties. The existing integration approach was causing project delays and increasing
              operational costs.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-600" />
            My Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I designed the integration solution by first understanding the constraints across three
            critical dimensions:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-gray-700">
              <span className="font-semibold">Engineer Specialization:</span> Different network types
              required different expertise and specialized instruments
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Partner Platform Requirements:</span> Sky and BT Retail
              had different scheduling systems and integration patterns
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Scale & Reliability:</span> The system needed to handle
              scheduling across 30M+ premises without failure
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            I defined product roadmaps and requirements for the web, mobile, and SaaS platforms,
            translating complex business needs into technical specifications that engineering and
            B2B partner teams could execute against. The key was creating a flexible integration
            layer that could accommodate different partner requirements without creating a maintenance
            nightmare.
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
                  Reduced project delivery time by 20% through better integration architecture
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Cut SLA delay compensation by 15% through improved engineer-to-job matching
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Designed integration solution serving major B2B partners at national scale
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Led API integration strategy for pricing and invoicing systems, enabling automation
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            Business Impact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The integration solution I designed became the foundation for Openreach's B2B partner
            ecosystem. By creating a flexible architecture that could accommodate different partner
            requirements, we reduced both initial integration time and ongoing maintenance costs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 20% reduction in project delivery time meant faster partner onboarding and quicker
            time-to-value. The 15% reduction in SLA penalties translated directly to bottom-line
            savings, as missed SLAs carry significant financial penalties in telecom infrastructure
            contracts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            More importantly, the solution scaled. The same integration patterns supported expansion
            to additional partners without requiring fundamental redesign, proving the architectural
            decisions were sound.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
          <p className="text-gray-700 leading-relaxed">
            Platform infrastructure work requires balancing multiple stakeholders with competing needs.
            Success comes from understanding the constraints deeply enough to design solutions that
            work for everyone: engineering teams, B2B partners, and the business. That's exactly the
            kind of "heavy lifting" I specialize in.
          </p>
        </div>

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => onNavigate('about')}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More About My Background →
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
