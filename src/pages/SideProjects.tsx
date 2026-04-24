import { ArrowRight } from 'lucide-react';

export default function SideProjects() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Side Projects
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4 leading-tight tracking-tight">
            Building in the problem space.
          </h1>
          <p className="text-lg text-gray-500 mb-16 max-w-3xl">
            Applying regulated market product thinking to AI-powered compliance tooling.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-navy-900 hover:shadow-lg transition-all duration-200">
            <div className="px-6 sm:px-8 py-6 sm:py-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="inline-block px-3 py-1.5 bg-navy-900 text-white text-xs font-semibold rounded-md">
                  AI Prototype
                </span>
                <span className="inline-block px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-md">
                  In Development
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 leading-tight">AddressGuard</h2>
              <p className="text-base text-gray-500 mb-6">
                An AI-powered address verification layer for UK neobank onboarding, using risk-based scoring to catch implausible KYC submissions before they create regulatory exposure.
              </p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  The FCA fined Monzo &pound;21.1M in July 2025 and Starling &pound;28.9M in 2024 for AML control failures. Both cases involved accounts opened with addresses that should never have passed a basic plausibility check.
                </p>
                <p>
                  AddressGuard is a prototype that demonstrates what an AI-enhanced verification layer looks like in practice. It applies a four-layer scoring model across address existence, property type, identity linking, and risk signals to produce a plausibility score for each onboarding submission. The score routes the application automatically: auto-approve, request proof of address, or block and escalate to compliance.
                </p>
                <p>
                  The problem it addresses sits at the intersection of onboarding UX and AML compliance, exactly where regulated fintechs cannot afford to get it wrong.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://addressguard.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-5 py-2.5 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm"
                >
                  View prototype
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/Shanal1988/addressguard-prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-medium hover:text-navy-900 transition-colors text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            More side projects in development. This page will be updated as work progresses.
          </p>
        </div>
      </section>
    </div>
  );
}
