

import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-8" id="contact">
      <div className="mx-auto max-w-7xl">

        {/* Contact Information */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Raymart Santiago
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Web Developer & Graphic Designer
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">

            <a
              href="mailto:rtsantiago620@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-blue-600"
            >
              <Mail size={16} className="shrink-0 text-blue-600" />
              rtsantiago620@gmail.com
            </a>

            <a
              href="tel:+639364778680"
              className="flex items-center gap-2 transition-colors hover:text-blue-600"
            >
              <Phone size={16} className="shrink-0 text-blue-600" />
              +63 936 477 8680
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-blue-600" />
              <span>Marikina Heights, Marikina City, Philippines</span>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-100" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Raymart Santiago. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/raymart-santiago620/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            <FaLinkedin size={17} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>

            <a
            href="https://github.com/xxemat20xx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            <FaGithub size={17} />
            GitHub
            <ArrowUpRight size={14} />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
