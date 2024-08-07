import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/ui/button';
import { Dialog, DialogTrigger } from "@/ui/dialog";
import ContactUs from './ContactUs';
import GLBViewer from './GLBViewer';
import Footer from './Footer';
import PartsModels from './PartsModels';

const HomePage = () => {
    const [loader, setLoader] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-100 text-gray-100 justify-between flex flex-col">
            <div>
                <Logo />
                <div className="container mx-auto shadow-lg p-4 rounded-lg">
                    <div className='flex flex-col'>
                        <div className="rounded-3xl pb-[25px] transition-shadow duration-300">
                            <h2 className="text-4xl font-semibold mb-4 text-[#000] text-center font-sans">Disclaimer</h2>
                            <p className="text-3xl text-[#000] font-sans italic">
                                "As an innovative startup, we're currently in market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders and will update you accordingly about the progress. Please note that the process from confirming your interest to dispatching your order would take 6-8 weeks. Also, the images in the website are graphical representation and would differ marginally from actual product."
                            </p>
                        </div>
                    </div>
                    {/* <div className='hover:cursor-pointerChore: improve file organization by grouping related files w-full h-full'>
                        <div className="text-white text-center h-full flex items-center justify-center">
                            <div className='flex h-full w-full justify-center'>
                                <GLBViewer
                                    modelPath="/360-lunchbox.glb"
                                    scale={[3, 3, 3]}
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <PartsModels />
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
            <Footer />
        </div>
    );
};

export default HomePage;