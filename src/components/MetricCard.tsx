interface MetricCardProps {
  value: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function MetricCard({ value, label, size = 'lg' }: MetricCardProps) {
  const sizeClasses = {
    sm: 'text-4xl',
    md: 'text-5xl',
    lg: 'text-6xl',
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-navy-900 hover:shadow-lg transition-all duration-200">
      <div className={`${sizeClasses[size]} font-bold text-navy-900 mb-2`}>
        {value}
      </div>
      <div className="text-sm font-semibold text-gray-700 leading-tight">
        {label}
      </div>
    </div>
  );
}
