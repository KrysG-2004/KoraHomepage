import { motion } from 'framer-motion'

const messages = [
    {
        from: 'user',
        text: "Hey Kora, I'm looking for new opportunities — something flexible and at the frontier of AI."
    },
    {
        from: 'kora',
        text: 'Hi there! Let\u2019s unlock your real strengths \u2014 and match you with the jobs or gigs that fit you best. Ready to begin?'
    },
    {
        from: 'user',
        text: "Absolutely \u2014 let's go find something exciting and impactful."
    },
    {
        from: 'kora',
        text: 'On it \u2014 linking you to roles that move AI forward with human insight.'
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
        <div className="mx-auto w-full max-w-lg space-y-4 rounded-xl border border-white/70 bg-white/90 p-4 shadow-lg">
            {messages.map((m, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.4 }}
                    className={`flex items-start gap-2 ${m.from === 'user' ? 'justify-end' : ''}`}
                >
                    {m.from === 'kora' && (
                        <img src="/kora-avatar.png" alt="Kora" className="h-8 w-8 flex-none rounded-full" />
                    )}
                    <div
                        className={`rounded-xl p-3 text-sm shadow ${
                            m.from === 'kora'
                                ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-slate-800'
                                : 'bg-white'
                        }`}
                    >
                        {m.text}
                    </div>
                    {m.from === 'user' && (
                        <img src="/user-avatar.png" alt="User" className="h-8 w-8 flex-none rounded-full" />
                    )}
                </motion.div>
            ))}
            <div className="mt-6 space-y-1 text-sm">
                {progress.map((p, i) => (
                    <motion.p
                        key={p}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: messages.length * 0.4 + i * 0.3 }}
                        className="flex items-center gap-2 text-slate-700"
                    >
                        <span className="text-green-600">√</span>
                        {p}
                    </motion.p>
                ))}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: messages.length * 0.4 + progress.length * 0.3 }}
                    className="text-slate-700"
                >
                    Awaiting for response <span className="font-mono">01/17</span>
                </motion.p>
                <div className="h-2 w-full overflow-hidden rounded bg-slate-200">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '12%' }}
                        transition={{
                            delay: messages.length * 0.4 + progress.length * 0.3 + 0.2,
                            duration: 0.6
                        }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </div>
    )
}

