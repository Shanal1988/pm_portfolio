import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  company: string;
  typeTag: string;
  outcomeTags: string[];
  title: string;
  hook: string;
  sections: {
    context: string;
    why: string;
    discovery: string;
    solution: string;
    execution: string;
    impact: string;
    learnings: string;
  };
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-navy-900 hover:shadow-lg transition-all duration-200"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-start justify-between gap-4 sm:gap-6"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="inline-block px-3 py-1.5 bg-navy-50 text-navy-900 text-xs font-semibold rounded-md border border-navy-100">
                  {item.company}
                </span>
                <span className="inline-block px-3 py-1.5 bg-gray-50 border border-gray-300 text-gray-700 text-xs font-medium rounded-md">
                  {item.typeTag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.outcomeTags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-3 py-1.5 bg-navy-900 text-white text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 leading-tight">{item.title}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.hook}</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 mt-1 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? 'max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-8 border-t-2 border-gray-100 pt-6 sm:pt-8 bg-gray-50">
              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Context
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.context}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Why this problem
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.why}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Discovery
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.discovery}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Solution
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Execution
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.execution}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Impact
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.impact}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                  Learnings
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">{item.sections.learnings}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
