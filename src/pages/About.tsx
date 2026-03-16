import { Briefcase, Award, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Global Relay',
      role: 'Senior Product Manager',
      duration: 'Aug 2025 - Present',
      description: 'Leading product strategy for compliant communication and archiving platform serving regulated financial institutions.',
    },
    {
      company: 'Global Relay',
      role: 'Product Manager',
      duration: 'May 2021 - Aug 2025',
      description: 'Owned product delivery for enterprise SaaS platform, shipping features that scaled user base from 30k to 80k YoY.',
    },
    {
      company: 'IRIS Software Group',
      role: 'Product Manager',
      duration: 'May 2020 - May 2021',
      description: 'Led cloud migration of tax compliance platform serving 10,000+ UK accountants.',
    },
    {
      company: 'Infosys (BT/Openreach)',
      role: 'Product Owner',
      duration: 'Jul 2018 - Apr 2020',
      description: 'Designed integration solutions for national-scale telecom infrastructure.',
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
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                I specialize in the "heavy lifting" of product management: building mission-critical
                infrastructure where failure is not an option. I build products where regulatory
                complexity intersects with user experience.
              </p>
              <p>
                Most Product Managers see regulation as a blocker. I see it as a product problem to
                solve. My career is defined by making complex ecosystems work: vendor orchestration,
                regulatory navigation (FCA, SEC, A2P 10DLC, and UK tax law), and legacy modernization
                to keep the user experience simple.
              </p>
              <p>
                I have shipped platforms that grew from 30k to 80k users while keeping thousands of
                financial firms compliant. At Global Relay, I own product strategy for a compliant
                communication and archiving platform serving regulated financial institutions,
                ensuring more than 2 million text messages per month are captured and audit-ready
                for banks, broker-dealers, and wealth managers.
              </p>
              <p>
                What I bring: the ability to sit in a room with a vendor product manager, a compliance
                officer, and an engineering lead, understand all three perspectives, and make a
                product decision that works for everyone.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="font-medium text-gray-900">London, UK</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Experience</div>
                  <div className="font-medium text-gray-900">12 Years</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Role</div>
                  <div className="font-medium text-gray-900">Senior Product Manager</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Industries</div>
                  <div className="font-medium text-gray-900">Fintech, RegTech, Telecom</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 pl-6 py-2"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <span className="text-sm text-gray-600">{job.duration}</span>
                </div>
                <div className="text-blue-600 font-medium mb-2">{job.company}</div>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-600" />
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Domain Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.domain.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-blue-600" />
            Beyond Work
          </h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Outside of product management, I'm passionate about environmental conservation. I've
              been a fundraising volunteer for The Ocean Cleanup since 2019, using my social media
              networks to raise awareness and funds for ocean cleaning initiatives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe the same systems thinking and problem-solving skills that make me effective
              in product management can contribute to solving larger global challenges.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
