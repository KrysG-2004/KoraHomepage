import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { handleMobileClick } from '../utils/mobileUtils'

const items = [
    {
        img: '/homepage4_01.png',
        title: 'AI-Structured Matching',
        desc: 'Smart, context-aware algorithms match you with the right talent — fast and accurately'
    },
    {
        img: '/homepage4_02.png',
        title: 'Verified and Vetted',
        desc: 'We test what matters — with real tasks that show what talent can do, not just say'
    },
    {
        img: '/homepage4_03.png',
        title: 'Flexible Access to Top Minds',
        desc: 'Hire the smartest brains — top university students, elite freelancers, domain experts, and AI-native talent — on your terms'
    }
]

export default function HireSmart() {
    useScrollReveal('[data-reveal="hire"]')

    return (
        <section
            id="hire"
            className="relative flex items-center py-20 min-h-screen bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-white before:to-blue-50"
            style={{ backgroundImage: "url('/background4.png')" }}
        >
            {/* 顶部渐变过渡 - 从TalentCommunity页面的蓝色过渡 */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/80 via-blue-50/50 via-white/20 to-transparent z-5"></div>
            
            {/* 中间增强层 - 增加过渡的流畅性 */}
            <div className="absolute top-1/4 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/15 to-transparent z-3"></div>
            
            {/* 底部渐变过渡 - 向WhyHumanData页面的过渡 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-blue-50/40 to-blue-50/70 z-5"></div>
            
            <div className="relative z-10 mx-auto max-w-6xl px-4 space-y-12">
                {/* 标题区域 */}
                <div data-reveal="hire" className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                        Hire smarter with AI-vetted, execution-ready talent
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Still struggling to find the right people to train your models or build your AI product? Kora makes it simple — just tell us your need. We'll match you with top talent, fast
                    </p>
                </div>

                {/* 卡片列表 */}
                <motion.ul
                    data-reveal="hire"
                    className="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center"
                >
                    {items.map((item, idx) => (
                        <motion.li
                            key={item.title}
                            whileHover={{ y: -6 }}
                            data-reveal="hire"
                            data-reveal-delay={idx * 100}
                            className="flex-none w-full max-w-xs mx-auto md:flex-1 md:max-w-none md:mx-0"
                        >
                            <div className="flex h-full flex-col items-center bg-white p-8 text-center rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
                                <div className="relative mb-6 w-48 h-24">
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50"></div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="relative w-48 h-24 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* 按钮与说明 */}
                <div data-reveal="hire" className="text-center">
                    <button 
                        onClick={() => handleMobileClick()}
                        className="btn-shimmer mt-8 rounded-md px-8 py-3 font-medium text-white shadow-md"
                    >
                        Start Hiring
                    </button>
                    <p className="mt-4 font-semibold text-gray-900">
                        Work smarter. Match faster. Grow together.
                    </p>
                </div>
            </div>
        </section>
    )
}
