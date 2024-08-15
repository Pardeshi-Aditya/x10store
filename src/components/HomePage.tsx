import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Logo from './Logo';
import GLBViewer from './GLBViewer';
import { Dialog, DialogTrigger } from '../ui/dialog';

const HomePage = () => {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const handleContainerClick = () => {
        navigate("/container");
    }

    const handleLunchboxClick = () => {
        navigate("/lunchbox");
    }

    return (
        <div className="select-none min-h-screen bg-[#a7cefe] flex flex-col">
            {/* Header Section */}
            {/* <div className='flex items-center justify-center w-full h-auto overflow-hidden py-4'>
                <video
                    src="/logo.gif"
                    autoPlay
                    loop
                    muted
                    className='w-full max-w-md h-auto object-cover'
                />
            </div> */}
            <div className='flex items-center justify-center w-full h-auto overflow-hidden py-4'>
                <img
                    src="/logo.gif"
                    alt="Logo Animation"
                    className='w-full max-w-md h-auto object-cover'
                    loading="lazy"
                />
            </div>

            {/* Disclaimer Section */}
            <div className="container mx-auto px-4 py-8">
                <div className='flex flex-col'>
                    <div className="rounded-3xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-satisfy mb-4 text-[#000] text-center">Disclaimer</h2>
                        <p className="text-sm md:text-lg lg:text-2xl tracking-widest text-[#000] font-satisfy italic">
                            "As an innovative startup, we're currently in market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders and will update you accordingly about the progress. Please note that the process from confirming your interest to dispatching your order would take 6-8 weeks. Also, the images in the website are graphical representation and would differ marginally from actual product."
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 py-8'>
                <div className='flex justify-center items-center col-span-1 lg:col-span-2 aspect-video'>
                    <iframe
                        title='Demo Video'
                        src="https://www.youtube.com/embed/7mjvGtVparQ"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className='w-full h-full object-contain'
                    ></iframe>
                </div>
                <div className='text-sm md:text-base lg:text-lg col-span-1 flex items-center'>
                    X10STORE presents to you an innovative approach to store items (edible and non-edible). The boxes are designed to offer increase in capacity and size of the conventional lunch boxes while maintaining the thermal and air-tight seal. The patent pending feature of extending the capacity and size by adding as many hollow extender modules on top of the base container makes the product unique in the market in its segment. We ensure that edibles do not come in contact with plastic while maintaining the sturdiness of the structure. The height of the holder which encases the stacked and packed lunch boxes can also be extended based on the height of the lunch box.
                </div>
            </div>

            {/* Product Display Section */}
            <div className='w-full flex flex-col md:flex-row justify-between px-4 md:px-10 py-8 gap-8'>
                <div className='flex flex-col justify-center items-center bg-[#fff] w-full md:w-[45%] rounded-3xl shadow-lg p-4'>
                    <div className='text-xl md:text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a] mb-4'> Lunchbox</div>
                    <div className='h-64 md:h-80'>
                        <GLBViewer
                            modelPath="/360-lunchbox.glb"
                            scale={[3, 3, 3]}
                            isActive={true}
                        />
                    </div>
                    <button
                        onClick={handleLunchboxClick}
                        className='text-base md:text-lg p-2 mt-4 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200 transition duration-300'> View more</button>
                </div>
                <div className='flex flex-col justify-center items-center bg-[#fff] w-full md:w-[45%] rounded-3xl shadow-lg p-4'>
                    <div className='text-xl md:text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a] mb-4'> Container</div>
                    <div className='h-64 md:h-80'>
                        <GLBViewer
                            modelPath="/360-container.glb"
                            scale={[3, 3, 3]}
                            isActive={true}
                        />
                    </div>
                    <button
                        onClick={handleContainerClick}
                        className='text-base md:text-lg p-2 mt-4 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200 transition duration-300'> View more</button>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center my-12">
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className="px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl bg-white hover:bg-blue-600 text-blue-900 hover:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setLoader(true)}
                        >
                            Express Your Interest
                        </button>
                    </DialogTrigger>
                    <ContactUs loader={loader} setLoader={setLoader} />
                </Dialog>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;