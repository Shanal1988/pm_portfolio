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
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-8 py-6 text-left flex items-start justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-gray-100 text-navy-900 text-xs font-semibold rounded">
                  {item.company}
                </span>
                <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded">
                  {item.typeTag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.outcomeTags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-3 py-1 bg-navy-900 text-white text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.hook}</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? 'max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <div className="px-8 pb-6 space-y-6 border-t border-gray-100 pt-6">
              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Context
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.context}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Why this problem
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.why}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Discovery
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.discovery}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Solution
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Execution
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.execution}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Impact
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.impact}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-2">
                  Learnings
                </h4>
                <p className="text-base text-gray-700 leading-relaxed">{item.sections.learnings}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
