import React from 'react'
import { motion } from 'motion/react'
import {
  BriefcaseBusiness,
  CalendarDays,
  Building2,
  ArrowUpRight,
  GraduationCap,
} from 'lucide-react'

const experiences = [
  {
    position: 'Command Center Specialist',
    company: 'UBX Philippines Corporation',
    client: 'UnionBank of the Philippines',
    period: 'January 2025 – Present',
    type: 'Current',
    description:
      'Monitor enterprise systems and applications, manage ServiceNow incidents, configure platform components, and support technical teams in maintaining service availability and improving IT service management processes.',
    skills: ['ServiceNow', 'Incident Management', 'System Monitoring', 'IT Operations'],
  },
  {
    position: 'Command Center Specialist',
    company: 'Questronix Corporation',
    client: 'UnionBank of the Philippines',
    period: 'March 2022 – December 2024',
    description:
      'Monitored enterprise systems and infrastructure, investigated technical incidents, coordinated with support teams, and maintained incident documentation and operational reports.',
    skills: ['System Monitoring', 'Incident Management', 'Troubleshooting', 'Documentation'],
  },
  {
    position: 'Desktop Support Engineer',
    company: 'First Data Corporation',
    client: 'Metrobank & Makati Medical Center',
    period: 'January 2021 – February 2022',
    description:
      'Provided Level 1/2 technical support, troubleshot hardware and software issues, deployed workstations and Cisco IP phones, and managed service requests and incident documentation.',
    skills: ['Desktop Support', 'Hardware & Software', 'Cisco IP Phones', 'Technical Support'],
  },
  {
    position: 'Graphic Artist / IT Staff',
    company: 'Firebird Holdings Corporation',
    client: '',
    period: 'March 2020 – January 2021',
    description:
      'Provided IT support and equipment maintenance while creating digital marketing materials and maintaining accurate records across three business units.',
    skills: ['IT Support', 'Graphic Design', 'Equipment Maintenance'],
  },
]

const Experience = () => {
  // Split experiences into two arrays for the staggered side-by-side layout
  const leftColumn = experiences.filter((_, index) => index % 2 === 0)
  const rightColumn = experiences.filter((_, index) => index % 2 !== 0)

  // Reusable card rendering function
  const renderCard = (job: any, index: number) => (
    <motion.div
      key={job.company}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
    >
      {/* Card Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          <Building2 size={24} />
        </div>

        {job.type === 'Current' && (
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Current
          </span>
        )}
      </div>

      {/* Position */}
      <h3 className="text-xl font-bold text-slate-900">
        {job.position}
      </h3>

      {/* Company */}
      <p className="mt-1 text-sm font-semibold text-blue-600">
        {job.company}
      </p>

      {job.client && (
        <p className="mt-1 text-xs text-slate-500">
          Client: {job.client}
        </p>
      )}

      {/* Employment Period */}
      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
        <CalendarDays size={15} />
        {job.period}
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100" />

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-600">
        {job.description}
      </p>

      {/* Skills */}
      <div className="mt-auto pt-6 flex flex-wrap gap-2">
        {job.skills.map((skill: any) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-t-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  )

  return (
    <>
      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="border-t border-slate-100 bg-white px-6 py-20 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium text-blue-600">
              Career Journey
            </p>

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Professional Experience
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  My professional journey in IT operations, technical support,
                  system monitoring, and enterprise environments.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <BriefcaseBusiness size={17} />
                <span>4 Positions</span>
              </div>
            </div>
          </motion.div>

          {/* Staggered Layout */}
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              {leftColumn.map((job, index) => renderCard(job, index * 2))}
            </div>

            {/* Right Column - pushed down */}
            <div className="flex flex-col gap-6 md:gap-8 md:mt-40">
              {rightColumn.map((job, index) => renderCard(job, index * 2 + 1))}
            </div>
            
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-6 sm:flex-row"
          >
            <div>
              <p className="text-base font-semibold text-slate-900">
                5+ Years of Professional IT Experience
              </p>
              <p className="mt-1 text-sm text-slate-500">
                From technical support to enterprise IT operations.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:text-blue-800"
            >
              Let's connect
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="border-t border-slate-100 bg-slate-50/50 px-6 py-20 md:py-32"
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
              Academic Background
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Education
            </h2>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col items-start gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:flex-row sm:items-center sm:p-10"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <GraduationCap size={32} />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-2 text-base font-medium text-slate-600">
                Our Lady of Fatima University – Antipolo City
              </p>
            </div>

            <div className="mt-4 shrink-0 sm:mt-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Class of 2019
              </span>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-t-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Experience