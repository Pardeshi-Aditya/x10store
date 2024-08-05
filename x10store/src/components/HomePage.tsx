import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/ui/button';
import { Dialog, DialogTrigger } from "@/ui/dialog";
import ContactUs from './ContactUs';
import Model from './Model';

const HomePage = () => {
    const [loader, setLoader] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-100 text-gray-100 font-sans justify-between flex flex-col">
            <div>
                <Logo />
                <div className="container mx-auto grid grid-cols-2 shadow-lg p-4 rounded-lg">
                    <div className='flex flex-col p-4'>
                        <div className="rounded-3xl p-[25px] transition-shadow duration-300">
                            <h2 className="text-3xl font-semibold mb-4 text-[#000]">Disclaimer</h2>
                            <p className="text-xl text-[#000] font-sans italic">
                                "As an innovative startup, we're currently in market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders and will update you accordingly about the progress. Please note that the process from confirming your interest to dispatching your order would take 6-8 weeks. Also, the images in the website are graphical representation and would differ marginally from actual product."
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
                    </div>
                    <div className='hover:cursor-pointer w-full h-full'>
                        <div className="text-white text-center h-full flex items-center justify-center">
                            <Model/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-screen w-full'>

            </div>

            <footer className="bg-blue-900 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Company</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Support</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Shipping Info</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Facebook</a></li>
                                <li><a href="#" className="hover:underline">Twitter</a></li>
                                <li><a href="#" className="hover:underline">Instagram</a></li>
                                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
                            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                            <form>
                                <input type="email" placeholder="Your email" className="p-2 rounded-md w-full mb-2" />
                                <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm">&copy; 2024 X10Store. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;