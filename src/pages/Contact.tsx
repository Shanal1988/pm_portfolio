import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            CONTACT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's talk.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            I'm best reached on LinkedIn. If you're working on platform or API products in a regulated environment, I'd enjoy the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a
            href="https://www.linkedin.com/in/shanalagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border-2 border-gray-200 hover:border-navy-900 rounded-xl p-8 transition-all duration-200 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              The best place to see the full picture — work history, recommendations, and current focus.
            </p>
            <span className="text-sm font-semibold text-navy-900 group-hover:underline">
              linkedin.com/in/shanalagrawal →
            </span>
          </a>

          <a
            href="mailto:shanal.agrawal@gmail.com"
            className="group bg-white border-2 border-gray-200 hover:border-navy-900 rounded-xl p-8 transition-all duration-200 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              The best way to reach me directly for opportunities, introductions, or questions about my work.
            </p>
            <span className="text-sm font-semibold text-navy-900 group-hover:underline">
              shanal.agrawal@gmail.com →
            </span>
          </a>
        </div>

        <div className="border-l-4 border-navy-900 bg-navy-50 rounded-r-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Background</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                heading: 'Domain',
                body: 'Fintech infrastructure, payments, RegTech, compliance platforms, regulated enterprise SaaS.',
              },
              {
                heading: 'Specialism',
                body: 'Multi-party API ecosystems, regulatory complexity, vendor negotiation, platform activation at scale.',
              },
              {
                heading: 'Experience',
                body: '12 years in product management across telecom infrastructure, tax compliance, and financial communications.',
              },
            ].map((item) => (
              <div key={item.heading}>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{item.heading}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/shanalagrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Senior Product Manager · Global Relay · London
          </p>
        </div>
      </div>
    </div>
  );
}
