import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(selector: string) {
    useEffect(() => {
        const targets = gsap.utils.toArray<HTMLElement>(selector)
        targets.forEach(target => {
            gsap.fromTo(
                target,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: target,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [selector])
}
