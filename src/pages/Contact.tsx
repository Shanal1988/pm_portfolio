import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        <div className="mb-12">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            CONTACT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's talk.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Open to Senior and Staff PM roles in fintech infrastructure, payments, and compliance SaaS in London.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <a
            href="mailto:shanal.agrawal@gmail.com"
            className="flex items-center gap-4 hover:opacity-70 transition-opacity"
          >
            <Mail className="w-5 h-5 text-gray-900" />
            <div>
              <div className="text-sm font-medium text-gray-500">Email</div>
              <div className="text-gray-900">shanal.agrawal@gmail.com</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shanalagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-5 h-5 text-gray-900" />
            <div>
              <div className="text-sm font-medium text-gray-500">LinkedIn</div>
              <div className="text-gray-900">linkedin.com/in/shanalagrawal</div>
            </div>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Based in London
        </p>

      </div>
    </div>
  );
}
