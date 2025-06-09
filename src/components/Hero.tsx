import { motion } from 'framer-motion'
import HeroChat from './HeroChat'
import { handleMobileClick } from '../utils/mobileUtils'

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center"
            style={{ backgroundImage: "url('/background1.png')" }}
        >
            {/* 顶部渐变过渡 - 从Header的半透明白色过渡到Hero背景 */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 via-white/30 to-transparent z-0"></div>
            
            {/* 底部渐变过渡 - 向FeatureGrid页面过渡 */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/60 via-slate-50/20 to-transparent z-0"></div>
            
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
                <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
            </div>
            <div className="section-container relative z-10 py-28 flex flex-col items-center gap-12 md:flex-row">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black leading-tight text-black"
                    >
                        Smarter&nbsp;Teams.<br />
                        Smarter&nbsp;Work.<br />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">— with&nbsp;Kora&nbsp;AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-black"
                    >
                        Kora is the AI‑native talent platform — connecting top talent with the
                        world’s fastest‑growing AI companies and labs
                    </motion.p>
                    <div className="mt-10 flex justify-center gap-4 md:justify-start">
                        <button 
                            onClick={() => handleMobileClick()}
                            className="rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
                        >
                            Join as Talent
                        </button>
                        <button 
                            onClick={() => handleMobileClick()}
                            className="flex items-center gap-2 rounded-md border border-primary bg-white px-6 py-3 font-medium text-primary transition hover:bg-slate-100"
                        >
                            Find Experts
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <HeroChat />
                </div>
            </div>
        </section>
    )
}
