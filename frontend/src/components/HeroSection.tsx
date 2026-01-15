"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live on Polygon Amoy</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            Trust in every <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Hiring Decision
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                            VeriHire eliminates credential fraud using immutable blockchain technology.
                            Verify degrees, certifications, and work history instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="h-12 px-8 text-lg shadow-lg hover:shadow-primary/25">
                                Verify Credential
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-lg backdrop-blur-sm bg-background/30">
                                For Issuers
                            </Button>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Tamper-Proof</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-primary" />
                                <span>Instant Verify</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Graphic / 3D Element Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        {/* Glowing Shield Effect */}
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative z-10 w-full h-full bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-xl p-8 shadow-2xl">
                                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />

                                {/* Mock Card UI */}
                                <div className="space-y-4">
                                    <div className="h-4 w-1/3 bg-white/10 rounded relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                                    </div>
                                    <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5 relative flex items-center justify-center">
                                        <Image src="/logo.png" width={120} height={120} alt="Shield" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-full bg-white/10 rounded" />
                                        <div className="h-3 w-5/6 bg-white/10 rounded" />
                                    </div>
                                    <div className="pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div className="text-sm">
                                                <div className="text-white font-medium">Verified</div>
                                                <div className="text-xs text-muted-foreground">0x3f...8a21</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
