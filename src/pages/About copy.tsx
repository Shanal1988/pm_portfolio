import { Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Global Relay',
      role: 'Senior Product Manager',
      duration: 'Aug 2025 – Present',
      description:
        'Leading experimentation and growth for the compliant communication platform. Redesigned onboarding flow, improving activation by 10% and contributing to 12% MAU growth. Delivered A2P Brand and Campaign submission capability, improving campaign acceptance rate by 20%.',
    },
    {
      company: 'Global Relay',
      role: 'Product Manager',
      duration: 'May 2021 – Aug 2025',
      description:
        'Owned product strategy for virtual number provisioning and text messaging across the unified communications platform. Doubled ARR and grew paid seats by 167% over four years. Negotiated API capabilities directly with Twilio\'s product team to ship compliant multi-party messaging in 6 months through live A2P regulatory ambiguity.',
    },
    {
      company: 'IRIS Software Group',
      role: 'Product Manager',
      duration: 'May 2020 – Apr 2021',
      description:
        'Led desktop-to-cloud migration of IRIS Element, owning MVP scope and prioritisation under an 8-month deadline with live HMRC regulatory constraints. Shipped on schedule to 1,500 beta users. Reduced core filing workflow from 33 to 17 minutes (49% improvement) for 10,000+ UK accountants.',
    },
    {
      company: 'Infosys · Contracted to BT & Openreach',
      role: 'Technical Product Manager',
      duration: '2016 – 2020',
      description:
        'Defined integration architecture for Openreach\'s field engineer scheduling platform, serving Sky, Vodafone, and BT Retail. Reduced partner delivery time by 20% and SLA compensation costs by 15% YoY. Defined API requirements for BT Plus three-service bundling — product reached 1M subscribers in year one.',
    },
    {
      company: 'Infosys · Contracted to Telstra',
      role: 'Solution Designer',
      duration: '2014 – 2016',
      description:
        'Designed omnichannel ordering and provisioning for Telstra\'s broadband expansion across web, retail, and partner channels. Reduced activation from 5–7 days to 2–3 days and onboarded 25,000 customers in the first 3 months.',
    },
  ];

  const skills = [
    { label: 'Product Management', items: ['Product strategy', 'Roadmapping', 'OKR setting', 'A/B experimentation', 'Funnel analysis', 'User research', 'Agile/scrum', 'GTM'] },
    { label: 'Platform & APIs', items: ['REST APIs', 'OAuth 2.0', 'Webhooks', 'CPaaS (Twilio, Bandwidth, Vonage)', 'UCaaS', 'Cloud architecture'] },
    { label: 'Tools', items: ['Jira', 'Confluence', 'Figma', 'Miro', 'Amplitude'] },
    { label: 'Regulated Domains', items: ['A2P 10DLC', 'FINRA', 'FCA / SEC', 'HMRC', 'Financial services compliance'] },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Bio */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About
            </h1>
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                I'm a Senior PM with 12 years shipping platform and infrastructure products across
                regulated ecosystems — financial compliance, tax, and telecom. The through-line
                across every role is the same: I find the path forward in environments where the
                constraints are what make the problem hard.
              </p>
              <p>
                My background spans three distinct regulated industries, each requiring full domain
                fluency before shipping: telecom infrastructure at BT and Openreach, tax compliance
                at IRIS Software, and financial communications at Global Relay. The pattern that
                emerges isn't deep specialisation in one domain — it's a repeatable ability to
                master constrained environments at speed and deliver before the domain fully settles.
              </p>
              <p>
                What I specialise in specifically: vendor and partner orchestration as a product
                capability, shipping through regulatory ambiguity rather than waiting for certainty,
                and translating multi-party requirements into coherent platform architectures that
                scale beyond the first partner.
              </p>
              <p>
                The next chapter is AI-powered communication and platform products. The infrastructure
                complexity I've spent 12 years building expertise in — multi-party API ecosystems,
                regulated data handling, configurable architecture — is exactly what's required to
                make AI work reliably in regulated environments. That's the problem I want to own next.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-xl p-7 border border-slate-100">
              <div className="space-y-5">
                {[
                  { label: 'Location', value: 'London, UK' },
                  { label: 'Experience', value: '12 years' },
                  { label: 'Current', value: 'Senior PM, Global Relay' },
                  { label: 'Domains', value: 'Financial compliance, Tax SaaS, Telecom infrastructure' },
                  { label: 'Targeting', value: 'CPaaS, compliance platforms, AI-powered products, growth-stage fintech' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-gray-900 font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 py-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.duration}</span>
                </div>
                <div className="text-blue-600 font-medium text-sm mb-2">{job.company}</div>
                <p className="text-gray-600 leading-relaxed text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills & tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.label} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <h3 className="font-bold text-gray-900 mb-1">PGDM, Marketing & Finance</h3>
              <div className="text-blue-600 text-sm font-medium mb-1">Sri Balaji Society, BITM Pune</div>
              <div className="text-xs text-gray-500">2010 – 2012</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <h3 className="font-bold text-gray-900 mb-1">Bachelor of Engineering, Computer Science</h3>
              <div className="text-blue-600 text-sm font-medium mb-1">Swami Vivekananda University</div>
              <div className="text-xs text-gray-500">2006 – 2010</div>
            </div>
          </div>
        </section>

        {/* Beyond work */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-600" />
            Beyond work
          </h2>
          <div className="bg-slate-50 rounded-xl p-7 border border-slate-100">
            <p className="text-gray-700 leading-relaxed mb-3">
              Outside of product work, I've been a fundraising volunteer for The Ocean Cleanup
              since 2019 — using my networks to raise awareness and funds for ocean cleaning
              initiatives. It's a different kind of systems problem, but the approach is similar:
              understand the constraints, find the path through, make progress before the perfect
              solution exists.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
