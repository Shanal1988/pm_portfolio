import { ArrowRight, Building2, TrendingUp, Users, Shield } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Platform Growth',
      description: 'Scaled user base from 30k to 80k YoY while maintaining regulatory compliance',
    },
    {
      icon: Shield,
      title: 'Regulatory Expertise',
      description: 'Navigated FCA, SEC, A2P 10DLC, and UK tax law compliance requirements',
    },
    {
      icon: Users,
      title: 'Enterprise Scale',
      description: '2M+ messages/month processed for banks, broker-dealers, and wealth managers',
    },
    {
      icon: Building2,
      title: 'Infrastructure Focus',
      description: 'Built mission-critical platforms where failure is not an option',
    },
  ];

  const caseStudies = [
    {
      id: 'global-relay',
      title: 'Compliant Multi-Party Messaging',
      company: 'Global Relay',
      impact: 'Shipped platform\'s #1 requested feature in 6 months',
      metric: '30% MoM messaging volume growth',
      tags: ['CPaaS', 'Regulatory Compliance', 'Enterprise SaaS'],
    },
    {
      id: 'iris-element',
      title: 'Cloud Migration & Workflow Optimization',
      company: 'IRIS Software Group',
      impact: 'Reduced core workflow time by 49%',
      metric: '33 minutes → 17 minutes',
      tags: ['Cloud Migration', 'Tax Compliance', 'Fintech'],
    },
    {
      id: 'openreach',
      title: 'National Infrastructure Integration',
      company: 'BT/Openreach',
      impact: 'Reduced project delivery time by 20%',
      metric: '15% reduction in SLA penalties',
      tags: ['Telecom', 'Platform Infrastructure', 'API Integration'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              Senior Product Manager | Fintech & RegTech
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building mission-critical infrastructure where failure is not an option
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I specialize in the "heavy lifting" of product management: building platforms where regulatory
              complexity intersects with user experience. 12 years shipping products that keep thousands
              of financial firms compliant while serving millions of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600">
              Real products, real impact, real metrics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {study.company}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium">
                    {study.impact}
                  </p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {study.metric}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate(`case-study-${study.id}`)}
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Read case study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Open to connecting with teams building in Banking, Fintech, RegTech, or Platform Infrastructure
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I bring the ability to sit in a room with a vendor product manager, a compliance officer,
            and an engineering lead, understand all three perspectives, and make a product decision
            that works for everyone.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Connect
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
