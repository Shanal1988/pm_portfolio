import { Mail, Linkedin, MapPin, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open to connecting with teams building in Banking, Fintech, RegTech, CPaaS, UCaaS,
            or Platform Infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="https://www.linkedin.com/in/shanalagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 hover:bg-blue-100 rounded-xl p-8 transition-colors border-2 border-transparent hover:border-blue-600"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-700 mb-3">
                  Connect with me on LinkedIn to see my full professional background and stay
                  updated with my latest work.
                </p>
                <span className="text-blue-600 font-medium">
                  linkedin.com/in/shanalagrawal →
                </span>
              </div>
            </div>
          </a>

          <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700 mb-3">
                  For direct inquiries, collaboration opportunities, or if you'd like to discuss
                  how I can help your team.
                </p>
                <p className="text-gray-600 font-medium">
                  Available via LinkedIn messaging
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What I'm Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Target Roles</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Senior Product Manager</li>
                  <li>• Lead Product Manager</li>
                  <li>• Group Product Manager</li>
                  <li>• AI Product Manager</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Location & Work Style</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Based in London, UK</li>
                  <li>• Open to hybrid arrangements</li>
                  <li>• Open to remote roles</li>
                  <li>• UK & international opportunities</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Industries & Domains of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Banking & Financial Services',
                  'Fintech',
                  'RegTech',
                  'CPaaS & UCaaS',
                  'Platform Infrastructure',
                  'Enterprise SaaS',
                  'AI/ML Products',
                  'Cloud Infrastructure',
                ].map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                I bring the ability to sit in a room with a vendor product manager, a compliance
                officer, and an engineering lead, understand all three perspectives, and make a
                product decision that works for everyone. If your team is building mission-critical
                infrastructure where failure is not an option, let's talk.
              </p>
              <a
                href="https://www.linkedin.com/in/shanalagrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            12 years of experience in product management • Currently Senior Product Manager at Global Relay
          </p>
        </div>
      </div>
    </div>
  );
}
