
import React from 'react'
import { motion } from 'motion/react'
import pic1 from '../assets/pic1.png'

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiGoogle,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiCloudinary,
  SiRender,
  SiVercel,
  SiRailway,
} from 'react-icons/si'

import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Settings,
  ShieldCheck,
  Activity,
  Headset,
  FileCode2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'

// Animation variants
const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

type Skill = {
  name: string
  icon?: React.ElementType
}

type SkillCardProps = {
  icon: LucideIcon
  title: string
  skills: Skill[]
}

// Skill Card Component
const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => (
  <motion.div
    variants={fade}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg sm:p-6"
  >
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
        <Icon size={21} />
      </div>

      <h3 className="text-sm font-semibold text-slate-900">
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map(({ name, icon: SkillIcon }) => (
        <span
          key={name}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          {SkillIcon && (
            <SkillIcon className="h-4 w-4 shrink-0" />
          )}
          {name}
        </span>
      ))}
    </div>
  </motion.div>
)

const Hero = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO SECTION */}
      <section
        id="home"
        className="px-5 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px] md:gap-16">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 mx-auto w-full max-w-42.5 sm:max-w-50 md:order-2 md:max-w-70"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-lg shadow-slate-200/50">
              <img
                src={pic1}
                alt="Raymart T. Santiago"
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>

          {/* INTRODUCTION */}

          
{/* INTRODUCTION */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left"
>
  <p className="mb-4 text-sm font-semibold tracking-wide text-blue-600">
    Hello, I'm
  </p>

  <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
    Raymart T. Santiago
  </h1>

  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base md:mx-0">
    Full Stack Developer with hands-on experience building
    web applications using the MERN and PERN stacks.
    Skilled in developing responsive interfaces, RESTful APIs,
    authentication systems, and database integrations.
    Bringing over 5 years of IT experience in enterprise
    environments, with a strong foundation in troubleshooting,
    system monitoring, and technical support.
  </p>

  <div className="mt-8 flex w-full flex-wrap justify-center gap-3 md:justify-start">
    <motion.a
      href="#projects"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
    >
      View Projects
      <ArrowUpRight size={16} />
    </motion.a>

    <motion.a
      href="#contact"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
    >
      Contact Me
    </motion.a>
  </div>
</motion.div>

        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section
        id="skills"
        className="border-t border-slate-100 bg-slate-50/70 px-5 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-5xl">

          {/* SECTION HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
            className="mb-10 text-center md:text-left"
          >
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600">
              Technical Expertise
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Skills & Technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:mx-0">
              Technologies and tools I use to build web applications,
              develop backend services, and support enterprise IT
              environments.
            </p>
          </motion.div>

          {/* SKILL CARDS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            <SkillCard
              icon={Code2}
              title="Programming Languages"
              skills={[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'HTML5', icon: SiHtml5 },
                { name: 'CSS3' },
              ]}
            />

            <SkillCard
              icon={Monitor}
              title="Frontend Development"
              skills={[
                { name: 'React.js', icon: SiReact },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Responsive Design' },
                { name: 'Zustand' },
                { name: 'Axios', icon: SiAxios },
              ]}
            />

            <SkillCard
              icon={Server}
              title="Backend Development"
              skills={[
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express.js', icon: SiExpress },
                { name: 'REST APIs', icon: FileCode2 },
                { name: 'JWT Authentication', icon: SiJsonwebtokens },
                { name: 'Google OAuth', icon: SiGoogle },
                { name: 'Socket.IO', icon: SiSocketdotio },
              ]}
            />

            <SkillCard
              icon={Database}
              title="Databases & Caching"
              skills={[
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'Mongoose', icon: SiMongoose },
                { name: 'Redis', icon: SiRedis },
              ]}
            />

            <SkillCard
              icon={Wrench}
              title="Tools & Platforms"
              skills={[
                { name: 'Git', icon: SiGit },
                { name: 'GitHub', icon: SiGithub },
                { name: 'Postman', icon: SiPostman },
                { name: 'Cloudinary', icon: SiCloudinary },
                { name: 'Render', icon: SiRender },
                { name: 'Vercel', icon: SiVercel },
                { name: 'Railway', icon: SiRailway },
              ]}
            />

            <SkillCard
              icon={Settings}
              title="IT & Enterprise Skills"
              skills={[
                { name: 'ServiceNow Administration', icon: Settings },
                { name: 'Incident Management', icon: ShieldCheck },
                { name: 'System Monitoring', icon: Activity },
                { name: 'IT Support', icon: Headset },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Hero
