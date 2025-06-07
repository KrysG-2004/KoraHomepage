import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const svgs = [
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="paint0_linear_feature1" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24ABFF" />
                <stop offset="0.52" stopColor="#4B84FF" />
                <stop offset="1" stopColor="#0144F2" />
            </linearGradient>
        </defs>
        <circle cx="16" cy="13" r="2" stroke="url(#paint0_linear_feature1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path
            d="M10,15.9 c-1.9,1.5-3.4,3.6-4,6.1 h2.3 c1.5,0,2.6-1.4,2.2-2.8 c-0.4-1.4-0.6-2.8-0.6-4.3 C10,9.4,12.5,4.7,16,3 c3.5,1.7,6,6.4,6,11.8 c0,1.5-0.2,3-0.6,4.3 c-0.4,1.4,0.7,2.8,2.2,2.8 H26 c-0.6-2.5-2.1-4.7-4-6.1"
            stroke="url(#paint0_linear_feature1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="22" x2="16" y2="30" stroke="url(#paint0_linear_feature1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="24" x2="13" y2="28" stroke="url(#paint0_linear_feature1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="19" y1="24" x2="19" y2="28" stroke="url(#paint0_linear_feature1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg width="28" height="28" fill="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color">
        <defs>
            <linearGradient id="paint0_linear_feature1" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24ABFF" />
                <stop offset="0.52" stopColor="#4B84FF" />
                <stop offset="1" stopColor="#0144F2" />
            </linearGradient>
        </defs>
        <path d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>,
    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color">
        <defs>
            <linearGradient id="paint0_linear_feature1" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24ABFF" />
                <stop offset="0.52" stopColor="#4B84FF" />
                <stop offset="1" stopColor="#0144F2" />
            </linearGradient>
            <linearGradient id="paint1_linear_feature1" x1="3.27" y1="9.485" x2="20.73" y2="9.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24ABFF" />
                <stop offset="0.52" stopColor="#4B84FF" />
                <stop offset="1" stopColor="#0144F2" />
            </linearGradient>
            <linearGradient id="paint2_linear_feature1" x1="12" y1="17.04" x2="13" y2="17.04" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24ABFF" />
                <stop offset="0.52" stopColor="#4B84FF" />
                <stop offset="1" stopColor="#0144F2" />
            </linearGradient>
        </defs>
        <polyline points="15 12 16 10 14 10 15 8" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5,9V20a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M20,16V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V16a1,1,0,0,0,1,1h8A1,1,0,0,0,20,16ZM4,8H6V5H4Z" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
]

const points = [
    'Moves beyond synthetic or crowdsourced labels',
    'Captures high-context, expert-level workflows',
    'Powers agent training, evaluation & post-training tuning'
]

export default function WhyHumanData() {
    useScrollReveal('[data-reveal="why"]')

    return (
        <section
            className="relative bg-cover bg-center py-20 min-h-screen flex items-center"
            id="human-data"
            style={{ backgroundImage: "url('/background5.png')" }}
        >
            <div className="section-container relative z-10 text-center">
                <h2 className="text-3xl font-bold">
                    Human Data That&nbsp;<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Actually&nbsp;Improves&nbsp;AI</span>
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-slate-700">
                    The most impactful AI systems aren’t just trained on code or content — but on how real people reason, decide, and solve problems. <br/>
                    Kora specializes in Human Data — to help AI learn from how great people work.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Why Human Data?
                    </span>
                </h3>
                <ul className="mt-4 grid gap-6 md:grid-cols-3">
                    {points.map((p, i) => (
                        <motion.li
                            key={p}
                            data-reveal="why"
                            whileHover={{ y: -6 }}
                            className="rounded-md border p-6 shadow-sm transition-shadow hover:shadow-md flex items-center gap-4 md:flex-col md:text-center"
                        >
                            {svgs[i]}
                            <p className="mt-0 text-lg font-medium text-slate-800 md:mt-4">
                                {p}
                            </p>
                        </motion.li>
                    ))}
                </ul>
                <button className="mt-10 rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90">
                    → Learn more about Human Data
                </button>
            </div>
        </section>
    )
}