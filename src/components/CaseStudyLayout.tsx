import { ArrowLeft, ArrowRight, Clock, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Section {
  number: string;
  title: string;
  heading: string;
  content: React.ReactNode;
}

interface NavigationButton {
  label: string;
  page: string;
  primary?: boolean;
}

interface CaseStudyLayoutProps {
  onNavigate: (page: string) => void;
  company: string;
  role: string;
  duration: string;
  title: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  sections: Section[];
  navigation: NavigationButton[];
  tags?: string[];
}

export default function CaseStudyLayout({
  onNavigate,
  company,
  role,
  duration,
  title,
  description,
  metrics,
  sections,
  navigation,
  tags,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('case-studies')}
            className="group inline-flex items-center text-gray-600 hover:text-gray-900 mb-10 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            All case studies
          </button>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
              {company} · {role}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{description}</p>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
            {metrics.map((m, idx) => (
              <div key={m.label} className="text-center group cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3 group-hover:bg-blue-200 transition-colors">
                  {idx === 0 && <TrendingUp className="w-6 h-6 text-blue-600" />}
                  {idx === 1 && <Target className="w-6 h-6 text-blue-600" />}
                  {idx === 2 && <Clock className="w-6 h-6 text-blue-600" />}
                  {idx === 3 && <TrendingUp className="w-6 h-6 text-blue-600" />}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{m.value}</div>
                <div className="text-xs text-gray-600 leading-snug font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <section
                key={index}
                onMouseEnter={() => setActiveSection(section.number)}
                onMouseLeave={() => setActiveSection(null)}
                className={`relative transition-all duration-300 ${
                  activeSection === section.number ? 'transform scale-[1.01]' : ''
                }`}
              >
                <div
                  className={`absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded-full transition-opacity duration-300 ${
                    activeSection === section.number ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">
                      {section.number}
                    </div>
                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {section.title}
                    </h2>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {section.heading}
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t-2 border-gray-200 flex flex-col sm:flex-row gap-4">
            {navigation.map((nav, index) => (
              <button
                key={index}
                onClick={() => onNavigate(nav.page)}
                className={`flex-1 inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all ${
                  nav.primary
                    ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-900'
                }`}
              >
                {nav.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
