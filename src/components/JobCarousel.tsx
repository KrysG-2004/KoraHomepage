import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
    {
        id: 1,
        title: 'Domain Expert for AI Training & Consulting (No coding required)',
        rate: '$35–150/hour (Part-time)',
        company: 'Top AI Lab',
        location: 'Remote (CN preferred)'
    },
    {
        id: 2,
        title: 'AI Training Intern — Top University Students Only',
        rate: '$5–80/hour (Part-time/Full-time)',
        company: 'Fortune 500 tech firm',
        location: 'Remote'
    },
    {
        id: 3,
        title: 'AI Product Manager',
        rate: '$100K–150K/year',
        company: 'Global AI Startup',
        location: 'Remote / Hybrid'
    },
    {
        id: 4,
        title: 'UI/UX Design Advisor',
        rate: '$25–100/hour (Part-time)',
        company: 'Early-stage AI product studio',
        location: 'Remote / Hybrid (Shanghai)'
    }
]

export default function JobCarousel() {
    useScrollReveal('[data-reveal="job"]')

    return (
        <section className="bg-slate-50 py-20 min-h-screen flex items-center">
            <div className="section-container">
                <h3 className="mb-10 text-center text-3xl font-bold">
                    AI‑native Work You Can Join Today
                </h3>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {jobs.map(job => (
                        <motion.article
                            key={job.id}
                            data-reveal="job"
                            whileHover={{ y: -8 }}
                            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <h4 className="mb-1 text-lg font-semibold">{job.title}</h4>
                            <p className="text-sm text-slate-600">Rate: {job.rate}</p>
                            <p className="text-sm text-slate-600">Company: {job.company}</p>
                            <p className="text-sm text-slate-600">Location: {job.location}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
