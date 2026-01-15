export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                            VeriHire
                        </span>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            The standard for blockchain-based credential verification. Secure, instant, and borderless.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Verify</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Issue</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Dashboard</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Github</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} VeriHire. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
