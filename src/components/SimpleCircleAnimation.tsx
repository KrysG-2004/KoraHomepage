import { motion } from 'framer-motion'
import CircularText from '../blocks/TextAnimations/CircularText/CircularText.jsx'

// 简化的圆形动画组件，作为备用方案
const SimpleCircleAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative hidden md:flex justify-center items-center"
    >
      <div className="relative w-full max-w-[400px] aspect-square">
        {/* 背景渐变圆 */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-pulse opacity-20" />
        
        {/* 旋转的边框 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-purple-400 to-blue-400 opacity-60"
          style={{
            background: 'conic-gradient(from 0deg, #8B5CF6, #3B82F6, #06B6D4, #8B5CF6)',
            borderRadius: '50%',
            mask: 'radial-gradient(circle, transparent 48%, black 49%, black 51%, transparent 52%)',
            WebkitMask: 'radial-gradient(circle, transparent 48%, black 49%, black 51%, transparent 52%)'
          }}
        />
        
        {/* 中心文字 */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <CircularText
            text="AI-NATIVE TALENT COMMUNITY • "
            onHover="speedUp"
            spinDuration={20}
            className="text-white font-bold"
          />
        </div>
        
        {/* 额外的动态效果 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"
        />
      </div>
    </motion.div>
  )
}

export default SimpleCircleAnimation 