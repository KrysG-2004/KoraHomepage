import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur"
        >
            <div className="section-container py-3">
                <img src="/koralogo.svg" alt="Kora Logo" className="h-8" />
            </div>
        </motion.header>
    )
}
