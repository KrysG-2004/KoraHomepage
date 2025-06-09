import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CommunityVisualization from './CommunityVisualization'
import NetworkBackground from './NetworkBackground'

const points = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
        title: 'Work your way — part-time native',
        desc: 'Contribute on your own terms — even just one hour at a time'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
        title: 'Earn like the top 1%',
        desc: 'Work with top AI labs, startups and frontier teams to earn exceptional pay'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
        title: 'Show who you really are',
        desc: '360° profiles + AI-native testing — built to reflect your real capabilities'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
        title: 'A new kind of talent community',
        desc: 'Join the top minds shaping work, identity, and meaning in the AI age'
    }
]

export default function TalentCommunity() {
    useScrollReveal('[data-reveal="community"]')

    return (
        <section
            className="relative bg-gradient-to-br from-[#F8F9FF] to-[#EEF2FF] py-20 min-h-screen flex items-center overflow-hidden"
            id="community"
        >
            {/* 背景组件 */}
            <NetworkBackground />
            
            <div className="section-container relative z-10 flex flex-col-reverse items-center gap-6 md:gap-10 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <h1 className="mb-6 text-3xl md:text-4xl font-black text-[#1E293B] flex flex-col gap-2 text-center lg:text-left">
                        <span>AI-native talent</span>
                        <span>community for</span>
                        <span className="text-[#3B82F6]">a new work era</span>
                    </h1>
                    <ul className="grid gap-4 md:gap-6">
                        {points.map(p => (
                            <motion.li
                                key={p.title}
                                data-reveal="community"
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-3"
                            >
                                <span className="text-lg md:text-xl text-[#3B82F6] flex-shrink-0">{p.icon}</span>
                                <div>
                                    <p className="font-semibold text-[#1E293B] text-sm md:text-base">{p.title}</p>
                                    <p className="text-[#64748B] text-sm md:text-base">{p.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                    <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
                        <CommunityVisualization />
                    </div>
                </div>
            </div>
        </section>
    )
}
