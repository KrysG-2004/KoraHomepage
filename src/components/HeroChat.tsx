import { motion } from 'framer-motion'

const messages = [
    {
        from: 'user',
        text: "Hey Kora, I'm looking for new opportunities — something flexible and at the frontier of AI."
    },
    {
        from: 'kora',
        text: "Hi there! Let's unlock your real strengths — and match you with the jobs or gigs that fit you best. Ready to begin?"
    },
    {
        from: 'user',
        text: "Absolutely — let's go find something exciting and impactful."
    },
    {
        from: 'kora',
        text: 'On it — linking you to roles that move AI forward with human insight.'
    }
]

const progress = [
    'Search for open positions',
    'Found 20 matched positions',
    'Assess suitability for each role',
    'Narrowed down to 17 positions',
    'Send job applications to all'
]

export default function HeroChat() {
    return (
        <motion.div 
            className="mx-auto w-full max-w-lg rounded-3xl border-2 border-blue-200/50 bg-gradient-to-br from-slate-50/95 to-blue-50/95 backdrop-blur-sm p-4 shadow-xl transition-all duration-500 cursor-pointer"
            whileHover={{ 
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="space-y-4">
                {messages.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.4 }}
                        className={`flex items-start gap-2 ${m.from === 'user' ? 'justify-end' : ''}`}
                    >
                        {m.from === 'kora' && (
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                K
                            </div>
                        )}
                        <motion.div
                            className={`rounded-2xl p-3 text-sm shadow-sm transition-all duration-300 cursor-pointer ${
                                m.from === 'kora'
                                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 text-slate-700 hover:from-blue-500/15 hover:to-purple-500/15 hover:border-blue-300/50'
                                    : 'bg-white border border-slate-200/50 text-slate-600 hover:bg-slate-50/80 hover:border-slate-300/60'
                            }`}
                            whileHover={{ 
                                y: -1
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {m.text}
                        </motion.div>
                        {m.from === 'user' && (
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                U
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
            <div className="mt-6 space-y-3 text-sm">
                {progress.map((p, i) => (
                    <motion.div
                        key={p}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: messages.length * 0.4 + i * 0.3, duration: 0.4 }}
                        className="flex items-center gap-3 transition-all duration-300 cursor-pointer"
                        whileHover={{ 
                            y: -1,
                            backgroundColor: "rgba(148, 163, 184, 0.05)"
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: messages.length * 0.4 + i * 0.3 + 0.2,
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="relative flex-shrink-0"
                        >
                            <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center">
                                <svg 
                                    className="w-3 h-3 text-white" 
                                    viewBox="0 0 12 12" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        d="M2.5 6L4.5 8L9.5 3"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            delay: messages.length * 0.4 + i * 0.3 + 0.4,
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                    />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping" 
                                 style={{ animationDelay: `${messages.length * 0.4 + i * 0.3 + 0.3}s`, animationDuration: '0.6s', animationIterationCount: '1' }}>
                            </div>
                        </motion.div>
                        <span className="text-slate-600 font-medium">{p}</span>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: messages.length * 0.4 + progress.length * 0.3, duration: 0.4 }}
                    className="flex items-center gap-3 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                        y: -1,
                        backgroundColor: "rgba(59, 130, 246, 0.05)"
                    }}
                >
                    <motion.div
                        className="relative flex-shrink-0"
                    >
                        <div className="w-5 h-5 border-2 border-blue-400/60 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center">
                            <motion.div
                                className="w-2 h-2 bg-blue-500 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                        <motion.div 
                            className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                            animate={{
                                scale: [1, 1.4],
                                opacity: [0.6, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                    </motion.div>
                    <div className="flex items-center justify-between flex-1">
                        <span className="text-slate-600 font-medium">Awaiting for response</span>
                        <span className="px-2 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-lg text-xs font-mono text-blue-600 shadow-sm">
                            01/17
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        delay: messages.length * 0.4 + progress.length * 0.3 + 0.1,
                        duration: 0.4
                    }}
                    className="mt-2 ml-8"
                >
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gradient-to-r from-slate-100 to-slate-200 shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '6%' }}
                            transition={{
                                delay: messages.length * 0.4 + progress.length * 0.3 + 0.3,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-sm"
                            style={{
                                boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

