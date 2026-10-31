import React from 'react'
import { motion } from 'motion/react'
import { Award, CalendarDays } from 'lucide-react'

const certifications = [
  { title: 'AWS Certified Cloud Practitioner (CLF-C02) Cert Prep', issuer: 'AWS', year: '2026' },
  { title: 'Learning SQL Programming', issuer: 'Training', year: '2026' },
  { title: 'Microsoft Power Automate Essential Training', issuer: 'Microsoft', year: '2026' },
  { title: 'ServiceNow: Basic Administration', issuer: 'ServiceNow', year: '2026' },
  { title: 'SQL Practice: Basic Queries', issuer: 'Training', year: '2026' },
  { title: 'Endpoint Security', issuer: 'Cisco', year: '2024' },
  { title: 'Introduction to Data Science', issuer: 'Cisco', year: '2024' },
  { title: 'JavaScript Algorithms and Data Structures', issuer: 'FreeCodeCamp', year: '2024' },
  { title: 'Responsive Web Design', issuer: 'FreeCodeCamp', year: '2024' },
  { title: 'Enterprise Design Thinking Co-Creator', issuer: 'IBM', year: '2023' },
]

const Certification = () => {
  return (
    <section
      id="certifications"
      className="border-t border-slate-100 bg-white px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium text-blue-600">
            Continuous Learning
          </p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Certifications & Training
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                A collection of professional certifications and specialized training programs completed to stay current with industry standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-6"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Award size={20} />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
                  {cert.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-slate-500">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                    <CalendarDays size={12} />
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certification