import { motion } from 'framer-motion'

export default function DesktopRequired() {
    const handleGoBack = () => {
        // 触发自定义事件来隐藏Desktop Required页面
        const event = new CustomEvent('hideDesktopRequired');
        window.dispatchEvent(event);
    }

    return (
                <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-6">
            {/* Close Button */}
             <button 
                 onClick={handleGoBack}
                 className="absolute top-6 left-6 text-gray-600 hover:text-gray-900 text-xl"
             >
                 ✕
             </button>
            
            {/* Menu Button */}
            <button className="absolute top-6 right-6 text-gray-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                </svg>
            </button>

            {/* Website URL */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                www.koraai.cn  
            </div>

            {/* Kora Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 mt-8"
            >
                <h1 className="text-5xl font-black text-primary">Kora</h1>  
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center space-y-8"
            >
                <h2 className="text-3xl font-bold text-primary">
                    Desktop View<br />Required
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    For the best experience, please<br />visit this site on a desktop<br />computer.
                </p>
            </motion.div>

            {/* Go Back Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={handleGoBack}
                className="mt-8 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
                Go Back
            </motion.button>

            {/* Home Indicator (bottom bar like iOS) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
        </div>
    )
} 