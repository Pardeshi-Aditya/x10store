import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/ui/button';
import { Dialog, DialogTrigger } from "@/ui/dialog";
import ContactUs from './ContactUs';

const HomePage = () => {
    const [loader, setLoader] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-100 text-gray-100 font-sans justify-between flex flex-col">
            <div>
                <header className="py-6">
                    <Logo />
                </header>

                <main className="container mx-auto px-4">
                    <section className="my-16 text-center">
                        <div className="bg-blue-800 rounded-3xl p-[25px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-3xl font-semibold mb-4 text-[#f9f9f9]">Disclaimer</h2>
                            <p className="text-2xl">
                                "As an innovative startup, we're currently in our market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders. Please note that the process from confirming your interest to receiving your delivered product typically takes 6-8 weeks."
                            </p>
                            </div>
                        <div className="text-center my-16">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="px-8 py-4 text-xl bg-white hover:bg-blue-600 text-blue-900 hover:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                        onClick={() => setLoader(true)}
                                    >
                                        Express Your Interest
                                    </Button>
                                </DialogTrigger>
                                <ContactUs loader={loader} setLoader={setLoader} />
                            </Dialog>
                        </div>
                    </section>
                </main>
            </div>

            <footer className="bg-blue-900 py-8 text-center">
                <p className="text-sm text-blue-300">&copy; 2024 X10Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;