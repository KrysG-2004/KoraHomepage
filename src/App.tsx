import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import TalentCommunity from './components/TalentCommunity'
import HireSmart from './components/HireSmart'
import WhyHumanData from './components/WhyHumanData'
import Footer from './components/Footer'
import LoadingOverlay from './components/LoadingOverlay'
import Header from './components/Header'
import DesktopRequired from './components/DesktopRequired'

export default function App() {
    const [showDesktopRequired, setShowDesktopRequired] = useState(false)

    useEffect(() => {
        const handleShowDesktopRequired = () => {
            setShowDesktopRequired(true)
        }

        const handleHideDesktopRequired = () => {
            setShowDesktopRequired(false)
        }

        window.addEventListener('showDesktopRequired', handleShowDesktopRequired)
        window.addEventListener('hideDesktopRequired', handleHideDesktopRequired)
        
        return () => {
            window.removeEventListener('showDesktopRequired', handleShowDesktopRequired)
            window.removeEventListener('hideDesktopRequired', handleHideDesktopRequired)
        }
    }, [])

    if (showDesktopRequired) {
        return <DesktopRequired />
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <LoadingOverlay />
            <Header />
            <Hero />
            <FeatureGrid />
            <TalentCommunity />
            <HireSmart />
            <WhyHumanData />
            <Footer />
        </motion.div>
    )
}
