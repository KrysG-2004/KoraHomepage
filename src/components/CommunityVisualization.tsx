import { motion } from 'framer-motion'
import Orb from '../blocks/Backgrounds/Orb/Orb.jsx'
import CircularText from '../blocks/TextAnimations/CircularText/CircularText.jsx'

// 动画配置
const ANIMATION_CONFIG = {
  rightSlide: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  }
}

// 内容配置
const CONTENT = {
  circularText: 'AI-NATIVE TALENT COMMUNITY • '
}

const CommunityVisualization = () => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.rightSlide}
      className="relative flex justify-center items-center"
    >
      <div className="relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] aspect-square">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <CircularText
            text={CONTENT.circularText}
            onHover="speedUp"
            spinDuration={20}
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text font-bold 
                     w-[150px] h-[150px] text-sm
                     md:w-[180px] md:h-[180px] md:text-base
                     lg:w-[220px] lg:h-[220px] lg:text-xl"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default CommunityVisualization