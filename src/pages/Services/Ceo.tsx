import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

export default function Ceo() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">CEO OF MEDIA LEO TECH</h1>

            {/* CEO Introduction Section */}
            <section className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* CEO Image - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-xl">
                            <img
                                src="https://picsum.photos/id/1076/800/1000"
                                alt="CEO Portrait"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* CEO Details - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Jonathan Harrington
                            </h2>
                            <p className="text-xl text-primary mt-1">Chief Executive Officer</p>
                        </div>

                        <div className="h-1 w-20 bg-primary rounded"></div>

                        <p className="text-lg text-muted-foreground">
                            With over 15 years of industry experience, Jonathan has transformed our company
                            into a market leader through his visionary leadership and innovative approach.
                        </p>

                        <p className="text-muted-foreground">
                            Jonathan founded our company with a simple mission: to deliver exceptional
                            solutions that exceed client expectations. His background in both technology
                            and business strategy gives him a unique perspective that has proven invaluable
                            in navigating the complex challenges of today's market.
                        </p>

                        <div className="pt-4">
                            <Button variant="outline" className="mr-4">
                                Read Full Bio
                            </Button>
                            <Button>
                                Contact Directly
                            </Button>
                        </div>

                        <div className="flex items-center space-x-4 pt-2">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                </a>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"> <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </a> </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}