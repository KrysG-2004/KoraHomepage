import { handleMobileClick, handleAllowedMobileClick } from '../utils/mobileUtils'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer id="contact" className="relative bg-white border-t py-12 text-black">
            {/* 顶部渐变过渡 - 从上页过渡到白色 */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-white z-0"></div>
            
            <div className="section-container relative z-10 grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                    <img src="/koralogo.svg" alt="Kora logo" className="h-8" />
                    <p className="max-w-xs text-sm">
                        Kora AI is the AI-native talent platform connecting top talent with frontier teams.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Navigate</h3>
                    <nav className="flex flex-col gap-2 text-sm">
                        <a href="#opportunity" className="hover:text-primary">Opportunity</a>
                        <a href="#community" className="hover:text-primary">Community</a>
                        <a href="#hire" className="hover:text-primary">Hire</a>
                        <button 
                            onClick={() => handleMobileClick()}
                            className="hover:text-primary text-left text-sm"
                        >
                            Join as Talent
                        </button>
                        <button 
                            onClick={() => handleAllowedMobileClick(() => {
                                console.log('Learn more about Human Data clicked');
                            })}
                            className="hover:text-primary text-left text-sm"
                        >
                            Learn more about Human Data
                        </button>
                    </nav>
                </div>
            </div>
            <p className="mt-8 text-center text-xs relative z-10">&copy; {year} Kora AI. All rights reserved.</p>
        </footer>
    )
}
