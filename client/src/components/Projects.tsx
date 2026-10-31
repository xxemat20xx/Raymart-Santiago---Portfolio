
import React from 'react'
import { motion } from 'motion/react'
import {
  ExternalLink,
  Code2,
  ArrowUpRight,
  Layers3,
  Sparkles,
} from 'lucide-react'

// Image Imports
import Email from '../assets/project-imgs/Email-scheduler.png'
import Ecommerce from '../assets/project-imgs/ecom-app.png'
import FoodOrdering from '../assets/project-imgs/restaurant.jpg'
import RealEstate from '../assets/project-imgs/realestate.png'
import HRManagement from '../assets/project-imgs/HRApp.png'
import InventoryApp from '../assets/project-imgs/InventoryApp.png'
import ResponsiveWeb from '../assets/project-imgs/responsiveLandingPageImage.jpg'
import MemoryGame from '../assets/project-imgs/memorycard.jpg'
import BattleShip from '../assets/project-imgs/battleship.jpg'
import WeatherApp from '../assets/project-imgs/weather-app.jpg'
import TodoList from '../assets/project-imgs/Todolist.jpg'
import TicTacToe from '../assets/project-imgs/tictactoe.jpg'

const projects = [
  {
    title: 'Email Scheduler App',
    category: 'Full-Stack Application',
    description:
      'A full-stack email scheduling application designed to automate custom reminders. Built to solve a personal need, it features secure authentication and reliable email delivery.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'Resend'],
    link: 'https://email-scheduler-app-five.vercel.app/',
    image: Email,
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Application',
    description:
      'A comprehensive e-commerce platform featuring a custom Admin CMS for product management. Integrated with Xendit for secure payments, Cloudinary for media, and Google OAuth.',
    techStack: ['MERN', 'TypeScript', 'Zustand', 'Xendit', 'Cloudinary', 'OAuth'],
    link: 'https://ts-ecommerce-project.vercel.app/',
    image: Ecommerce,
  },
  {
    title: 'Food Ordering System',
    category: 'Full-Stack Application',
    description:
      'An online food ordering system built to practice full-stack architecture. Features a seamless checkout process with PayMongo integration and efficient image management.',
    techStack: ['MERN', 'PayMongo', 'Cloudinary', 'Tailwind'],
    link: 'https://food-delivery-app-green-eight.vercel.app/',
    image: FoodOrdering,
  },
  {
    title: 'Real Estate Website',
    category: 'Frontend Development',
    description:
      'A modern real estate listing website proposed as a digital solution for a real estate company. Designed to showcase property listings with a clean, user-friendly interface.',
    techStack: ['React','Cloudinary', 'CRUD', 'Tailwind', 'Responsive Design'],
    link: 'https://www.ematsproject.store/',
    image: RealEstate,
  },
  {
    title: 'HR Management System',
    category: 'Full-Stack Application',
    description:
      'A comprehensive HR management dashboard built to streamline employee data tracking, administrative tasks, and organizational workflows.',
    techStack: ['MERN', 'Tailwind', 'Dashboard'],
    link: 'https://mern-employee-management-oe7p.onrender.com/',
    image: HRManagement,
  },
  {
    title: 'Inventory App',
    category: 'Full-Stack Application',
    description:
      'A full-stack inventory management dashboard that allows users to efficiently track, add, and manage stock across different categories.',
    techStack: ['MERN', 'Tailwind', 'CRUD'],
    link: 'https://mern-inventory-app-i0bh.onrender.com/dashboard',
    image: InventoryApp,
  },
  {
    title: 'Responsive Landing Page',
    category: 'Frontend Development',
    description:
      'A fully responsive landing page built from scratch using vanilla HTML, CSS, and JavaScript as part of The Odin Project curriculum.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'The Odin Project'],
    link: 'https://xxemat20xx.github.io/Old-Project---Responsive-Website/',
    image: ResponsiveWeb,
  },
  {
    title: 'Memory Game',
    category: 'JavaScript Project',
    description:
      'An interactive memory card game built with vanilla web technologies to practice advanced DOM manipulation, state management, and game logic.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'The Odin Project'],
    link: 'https://xxemat20xx.github.io/Memory-card/',
    image: MemoryGame,
  },
  {
    title: 'Battleship Game',
    category: 'JavaScript Project',
    description:
      'A classic Battleship game implementation using vanilla web technologies, focusing on complex grid logic, turn-based mechanics, and interactive UI.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'The Odin Project'],
    link: 'https://xxemat20xx.github.io/OdinProject-Battleship/',
    image: BattleShip,
  },
  {
    title: 'Weather App',
    category: 'JavaScript Project',
    description:
      'A weather application built with vanilla JavaScript, integrating a third-party API to fetch and display real-time weather data dynamically.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
    link: 'https://xxemat20xx.github.io/OdinProject--WeatherApp/',
    image: WeatherApp,
  },
  {
    title: 'Todo List App',
    category: 'JavaScript Project',
    description:
      'A local-storage-powered Todo List application built to practice CRUD operations, data persistence, and dynamic rendering with vanilla JavaScript.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    link: 'https://xxemat20xx.github.io/OdinProject-Todolist/',
    image: TodoList,
  },
  {
    title: 'Tic Tac Toe',
    category: 'JavaScript Project',
    description:
      'A classic Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript, focusing on game state management, win conditions, and clean UI.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
    link: 'https://xxemat20xx.github.io/TicTacToe/',
    image: TicTacToe,
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isFeatured = index < 3

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
    >
      {/* Project Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

        {isFeatured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
            <Sparkles size={12} className="text-blue-600" />
            Featured
          </span>
        )}

        <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/60 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
          {project.category}
        </span>

        <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </a>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
            {project.title}
          </h3>
        </div>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech: any) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-slate-100 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-all hover:gap-3 hover:text-blue-600"
          >
            View Live Project
            <ExternalLink
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-slate-200/70 bg-[#f8fafc] px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-indigo-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <Code2 size={14} />
              Personal Projects
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              A collection of web applications, creative experiments, and
              development projects showcasing my skills and continuous
              journey as a developer.
            </p>
          </div>

          {/* Project Counter */}
          <div className="flex items-center gap-4 self-start rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:self-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Layers3 size={23} />
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {projects.length.toString().padStart(2, '0')}
              </p>
              <p className="text-xs font-medium text-slate-500">
                Projects showcased
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Label */}
        <div className="mb-7 flex items-center gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800">
            Selected Work
          </h3>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">
            01 — {projects.length.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Code2 size={23} />
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
            I'm always open to discussing new projects, creative ideas,
            and opportunities to build something meaningful.
          </p>

          <a
            href="mailto:emat5252@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
