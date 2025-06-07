import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingOverlay() {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1500)
        return () => clearTimeout(timer)
    }, [])
    if (!visible) return null
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#021C69] to-[#012A7A]"
        >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-primary" />
        </motion.div>
    )
}
