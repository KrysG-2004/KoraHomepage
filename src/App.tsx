import { motion } from 'framer-motion'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import TalentCommunity from './components/TalentCommunity'
import HireSmart from './components/HireSmart'
import WhyHumanData from './components/WhyHumanData'
import Footer from './components/Footer'
import LoadingOverlay from './components/LoadingOverlay'
import Header from './components/Header'

export default function App() {
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
