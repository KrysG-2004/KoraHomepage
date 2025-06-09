export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer id="contact" className="bg-white border-t py-12 text-black">
            <div className="section-container grid gap-8 md:grid-cols-3">
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
                        <a href="#talent" className="hover:text-primary">Join as Talent</a>
                        <a href="#human-data" className="hover:text-primary">Learn more about Human Data</a>
                    </nav>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Follow</h3>
                    <div className="flex gap-4">
                        <a aria-label="Twitter" href="https://twitter.com" className="hover:text-primary">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.44.42a4.48 4.48 0 00-4.1 6.31A12.94 12.94 0 013 1s-4 9 5 13a13.05 13.05 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a aria-label="GitHub" href="https://github.com" className="hover:text-primary">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.73.09-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.54 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.54 11.54 0 016 0C17 5.06 18 5.38 18 5.38c.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.62-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-center text-xs">&copy; {year} Kora AI. All rights reserved.</p>
        </footer>
    )
}
