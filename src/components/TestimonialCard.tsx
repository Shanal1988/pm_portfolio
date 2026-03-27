interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-navy-900 hover:shadow-lg transition-all duration-200">
      <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
        "{quote}"
      </p>
      <div>
        <div className="text-sm font-semibold text-navy-900">{author}</div>
        <div className="text-sm text-gray-600">{role}, {company}</div>
      </div>
    </div>
  );
}
