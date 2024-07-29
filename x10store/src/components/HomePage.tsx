import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/ui/button';
import { Dialog, DialogTrigger } from "@/ui/dialog";
import ContactUs from './ContactUs';

const HomePage = () => {
    const [loader, setLoader] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 text-gray-100 font-sans">
            <header className="py-6">
                <Logo />
            </header>

            <main className="container mx-auto px-4">
                <section className="my-16 text-center">
                    <h1 className="text-5xl font-bold mb-6 text-yellow-300">Innovating for Tomorrow</h1>
                </section>

                <div className="grid md:grid-cols-2 gap-12 my-24">
                    <div className="bg-emerald-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Our Vision</h2>
                        <p className="text-lg">
                            Discover our innovative food containers designed to keep your meals fresh, secure, and effortlessly organized. Combining sleek aesthetics with practical functionality, our containers are perfect for meal prepping, work lunches, or outdoor adventures. Experience the future of meal management with our state-of-the-art solutions.
                        </p>
                    </div>
                    <div className="bg-emerald-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-semibold mb-4 text-yellow-300">The Journey</h2>
                        <p className="text-lg">
                            As an innovative startup, we're currently in our market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders. Please note that the process from confirming your interest to receiving your delivered product typically takes 6-8 weeks.
                        </p>
                    </div>
                </div>

                <div className="text-center my-16">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="px-8 py-4 text-xl bg-yellow-500 hover:bg-yellow-600 text-emerald-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => setLoader(true)}
                            >
                                Express Your Interest
                            </Button>
                        </DialogTrigger>
                        <ContactUs loader={loader} setLoader={setLoader} />
                    </Dialog>
                </div>
            </main>

            <footer className="bg-emerald-900 py-8 text-center">
                <p className="text-sm text-emerald-300">&copy; 2024 X10Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;