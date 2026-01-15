"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Will create this next
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="VeriHire Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                                VeriHire
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                Features
                            </Link>
                            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                How it Works
                            </Link>
                            <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Sign In
                            </Link>
                            <Button variant="default" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                Get Started
                            </Button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Features</Link>
                        <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                        <Button className="w-full mt-4">Get Started</Button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
