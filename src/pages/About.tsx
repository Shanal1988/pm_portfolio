import { Briefcase, Award, GraduationCap, Heart, Lightbulb, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('technical');
  const experience = [
    {
      company: 'Global Relay',
      role: 'Senior Product Manager',
      duration: 'Aug 2025 - Present',
      description: 'Shipping enterprise communication and archiving infrastructure for regulated financial institutions. Doubled platform ARR in 24 months.',
    },
    {
      company: 'Global Relay',
      role: 'Product Manager',
      duration: 'May 2021 - Aug 2025',
      description: 'Built multi-party messaging infrastructure under evolving A2P 10DLC regulations. Scaled platform from 30k to 80k users, processed 2M+ messages monthly.',
    },
    {
      company: 'IRIS Software Group',
      role: 'Product Manager',
      duration: 'May 2020 - May 2021',
      description: 'Shipped desktop-to-cloud migration for tax compliance platform serving 10,000+ UK accountants. Reduced core workflow time by 49% under fixed 8-month deadline.',
    },
    {
      company: 'Infosys (BT/Openreach)',
      role: 'Product Owner',
      duration: 'Jul 2018 - Apr 2020',
      description: 'Built integration platform for national telecom infrastructure serving 30M+ UK premises. Translated competing requirements from Sky, Vodafone, and BT into single architecture. Cut SLA costs 15%, reduced delivery time 20%.',
    },
  ];

  const skills = {
    technical: [
      'Product Management',
      'Enterprise SaaS',
      'API Development',
      'Vendor Management',
      'Regulatory Compliance',
      'Platform Architecture',
      'CPaaS/UCaaS',
      'Financial Services',
    ],
    soft: [
      'Cross-functional Leadership',
      'Stakeholder Management',
      'Strategic Thinking',
      'Roadmap Planning',
      'Requirements Definition',
      'Data-driven Decision Making',
    ],
    domain: [
      'Fintech & Banking',
      'RegTech',
      'Telecom Infrastructure',
      'Tax Compliance',
      'Cloud Migration',
      'FCA/SEC Regulations',
      'A2P 10DLC',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Philosophy & Approach
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              About Me
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl text-gray-600">
                Regulatory complexity isn't something to work around. It defines what's shippable. I build
                product where vendor limitations, compliance frameworks, and enterprise requirements determine
                architecture before features.
              </p>
              <p>
                My track record spans three regulated environments: telecom infrastructure at BT/Openreach,
                tax compliance at IRIS Software, and financial communications at Global Relay. Different sectors,
                different regulations, same infrastructure challenge — orchestrating vendor dependencies and
                regulatory constraints into platforms that scale.
              </p>
              <p className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                The pattern repeats across domains. Multi-party API platforms in regulated markets follow identical
                architectural logic whether you're managing messaging compliance, tax filing infrastructure, or
                payment processing. The skill is shipping when what's technically possible has to be discovered
                before product decisions can be made.
              </p>
              <p className="font-medium text-gray-900 text-lg">
                Looking for Senior or Staff PM roles where regulatory constraints, API orchestration, and enterprise
                scale aren't nice-to-haves — they're the core product problem.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Quick Facts
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-medium">Location</div>
                  <div className="font-semibold text-gray-900 text-lg">London, UK</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-medium">Experience</div>
                  <div className="font-semibold text-gray-900 text-lg">12 Years</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-medium">Current Role</div>
                  <div className="font-semibold text-gray-900 text-lg">Senior Product Manager</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-medium">Industries</div>
                  <div className="font-semibold text-gray-900 text-lg">Fintech, RegTech, Telecom</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-700 font-medium">Successful Platform Migrations</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
            <Briefcase className="w-9 h-9 mr-3 text-blue-600" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                      <span className="text-sm text-gray-500 font-medium bg-slate-100 px-3 py-1 rounded-lg mt-2 md:mt-0">{job.duration}</span>
                    </div>
                    <div className="text-blue-600 font-semibold mb-3 text-lg">{job.company}</div>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
            <Award className="w-9 h-9 mr-3 text-blue-600" />
            Skills & Expertise
          </h2>

          <div className="flex gap-4 mb-8">
            {['technical', 'soft', 'domain'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeSkillCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300'
                }`}
              >
                {category === 'technical' && 'Technical'}
                {category === 'soft' && 'Leadership'}
                {category === 'domain' && 'Domain'}
              </button>
            ))}
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            {activeSkillCategory === 'technical' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {activeSkillCategory === 'soft' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2.5 bg-green-50 text-green-700 text-sm font-semibold rounded-xl hover:bg-green-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {activeSkillCategory === 'domain' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Domain Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.domain.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                PGDM in Marketing
              </h3>
              <div className="text-blue-600 font-medium mb-2">
                Balaji Institute of Technology & Management
              </div>
              <div className="text-sm text-gray-600">2010 - 2012</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Product Focus Certified Product Manager
              </h3>
              <div className="text-blue-600 font-medium mb-2">
                Product Focus
              </div>
              <div className="text-sm text-gray-600">February 2023</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
            <Heart className="w-9 h-9 mr-3 text-blue-600" />
            Beyond Work
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-2xl p-10 hover:shadow-xl transition-all">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Conservation</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Outside of product management, I'm passionate about environmental conservation. I've
                  been a fundraising volunteer for The Ocean Cleanup since 2019, using my social media
                  networks to raise awareness and funds for ocean cleaning initiatives.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I believe the same systems thinking and problem-solving skills that make me effective
                  in product management can contribute to solving larger global challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
