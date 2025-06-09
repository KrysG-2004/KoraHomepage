import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import DisplayCards from './ui/display-cards'
import { handleAllowedMobileClick } from '../utils/mobileUtils'

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
        <path d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,1,1H20a1,1,0,0,1-1V12" fill="none" stroke="url(#paint0_linear_feature1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
    'Goes beyond synthetic or low-quality crowdsourced labels',
    'Captures high-context, expert-driven thinking and workflows',
    'Powers high-quality model training, alignment, and safety evaluation'
]

export default function WhyHumanData() {
    useScrollReveal('[data-reveal="why"]')

    return (
        <section
            className="relative bg-cover bg-center py-16 min-h-screen flex flex-col justify-center overflow-x-visible"
            id="human-data"
            style={{ backgroundImage: "url('/background5.png')" }}
        >
            {/* 顶部渐变过渡 - 从上页的蓝白渐变过渡到当前页 */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-transparent z-0"></div>
            
            {/* 底部渐变过渡 - 从当前页过渡到白色Footer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-white/40 to-transparent z-0"></div>
            
            <div className="section-container relative z-10 overflow-visible">
                {/* 顶部简洁标题部分 */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight mb-8"
                    >
                        Human Data That&nbsp;
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Actually&nbsp;Improves&nbsp;AI
                        </span>
                    </motion.h2>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="max-w-4xl mx-auto space-y-3"
                    >
                        <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            The most impactful AI systems aren't just trained on code or content — 
                            but on how real people reason, decide, and solve problems.
                        </p>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            Kora specializes in Human Data — to help AI learn from how great people work.
                        </p>
                    </motion.div>
                </div>

                {/* 核心内容：左右分离布局 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 max-w-none mx-auto px-2 lg:px-4">
                    {/* 左侧：Why Human Data 标题 - 往左对齐 */}
                    <div className="lg:w-1/3 flex justify-center lg:justify-start" data-reveal="why">
                        <div className="text-center lg:text-left">
                            <motion.h3 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight mb-4 sm:mb-6"
                            >
                                Why
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                                    Human
                                </span>
                                <br />
                                Data?
                            </motion.h3>
                            
                            {/* 装饰性描述 */}
                            <motion.p 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0"
                            >
                                Discover the three key advantages that make human data essential for next-generation AI systems.
                            </motion.p>
                        </div>
                    </div>

                    {/* 右侧：堆叠卡片 - 往右对齐 */}
                    <div className="lg:w-2/3 flex justify-center lg:justify-end overflow-visible">
                        <div className="relative w-full max-w-none" data-reveal="why">
                            <DisplayCards />
                        </div>
                    </div>
                </div>

                {/* 底部按钮 */}
                <div className="text-center mt-20">
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        onClick={() => handleAllowedMobileClick(() => {
                            // 这里可以添加Learn more about Human Data的实际逻辑
                            console.log('Learn more about Human Data clicked');
                        })}
                        className="rounded-md bg-primary px-8 py-4 font-medium text-white transition hover:bg-primary/90 hover:scale-105"
                    >
                        → Learn more about Human Data
                    </motion.button>
                </div>
            </div>
        </section>
    )
}