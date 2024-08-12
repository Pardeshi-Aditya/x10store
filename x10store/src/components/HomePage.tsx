// import { useState } from 'react';
// import Logo from './Logo';
// import { Button } from '@/ui/button';
// import { Dialog, DialogTrigger } from "@/ui/dialog";
// import ContactUs from './ContactUs';
// import GLBViewer from './GLBViewer';
// import Footer from './Footer';

// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const [loader, setLoader] = useState(true);

//     const navigate = useNavigate();

//     const handleContainerClick = () => {
//         navigate("/container")
//     }

//     const handleLunchboxClick = () => {
//         navigate("/lunchbox")
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-100 text-gray-100 justify-between flex flex-col">
//             <div>
//                 {/* <div className='flex'>
//                     <Logo />
//                     <div className='h-[40px]'>
//                         <video
//                             src={"/logoVideo.mp4"}
//                             autoPlay
//                             loop
//                             muted
//                             style={{ width: '100%', height: 'auto' }} // Adjust styling as needed
//                         />
//                     </div>
//                 </div> */}
//                 <div className='flex items-center justify-center w-full h-[200px] overflow-hidden'>
//             <Logo />
//             <div className='flex-shrink-0 h-full w-full'>
//                 <video
//                     src={"/logoVideo.mp4"}
//                     autoPlay
//                     loop
//                     muted
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Adjust styling as needed
//                 />
//             </div>
//         </div>
//                 <div className="container mx-auto p-4 rounded-lg">
//                     <div className='flex flex-col'>
//                         <div className="rounded-3xl pb-[25px]">
//                             <h2 className="text-4xl font-semibold mb-4 text-[#000] text-center font-sans">Disclaimer</h2>
//                             <p className="text-3xl text-[#000] font-sans italic">
//                                 "As an innovative startup, we're currently in market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders and will update you accordingly about the progress. Please note that the process from confirming your interest to dispatching your order would take 6-8 weeks. Also, the images in the website are graphical representation and would differ marginally from actual product."
//                             </p>
//                         </div>
//                     </div>
//                     {/* <div className='hover:cursor-pointerChore: improve file organization by grouping related files w-full h-full'>
//                         <div className="text-white text-center h-full flex items-center justify-center">
//                             <div className='flex h-full w-full justify-center'>
//                                 <GLBViewer
//                                     modelPath="/360-lunchbox.glb"
//                                     scale={[3, 3, 3]}
//                                 />
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>

//             <div className='h-[400px] w-full flex justify-between px-10'>
//                 <div className='flex flex-col justify-center items-center bg-[#fff] w-[45%] h-full rounded-3xl'>
//                     <div className='text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a]'> Lunchbox</div>
//                     <GLBViewer
//                         modelPath="/360-lunchbox.glb"
//                         scale={[3, 3, 3]}
//                         isActive={true}
//                     />
//                     <button
//                         onClick={handleLunchboxClick}
//                         className='text-lg p-2 mb-2 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200'> View more</button>
//                 </div>
//                 <div className='flex flex-col justify-center items-center bg-[#fff] w-[45%] h-full rounded-3xl'>
//                     <div className='text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a]'> Container</div>
//                     <GLBViewer
//                         modelPath="/360-container.glb"
//                         scale={[3, 3, 3]}
//                         isActive={true}
//                     />
//                     <button
//                         onClick={handleContainerClick}
//                         className='text-lg p-2 mb-2 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200'> View more</button>

//                 </div>
//             </div>
//             {/* <PartsModels /> */}
//             <div className="text-center my-16">
//                 <Dialog>
//                     <DialogTrigger asChild>
//                         <Button
//                             className="px-8 py-4 text-xl bg-white hover:bg-blue-600 text-blue-900 hover:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                             onClick={() => setLoader(true)}
//                         >
//                             Express Your Interest
//                         </Button>
//                     </DialogTrigger>
//                     <ContactUs loader={loader} setLoader={setLoader} />
//                 </Dialog>
//             </div>
//             <Footer />
//         </div >
//     );
// };

// export default HomePage;

import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/ui/button';
import { Dialog, DialogTrigger } from "@/ui/dialog";
import ContactUs from './ContactUs';
import GLBViewer from './GLBViewer';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

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
        <div className="min-h-screen bg-[#a7cefe] flex flex-col">
            {/* Header Section */}
            <div className='flex items-start justify-center w-full h-fit overflow-hidden'>
                {/* <div className='flex justify-center items-center w-full max-w-6xl'> */}
                <Logo />
                <div className='flex justify-center items-center'>
                    <video
                        src={"/logo_latest.mp4"}
                        autoPlay
                        loop
                        muted
                        className='w-1/2 h-1/2 object-cover'
                    />
                </div>
                {/* </div> */}
            </div>

            {/* Disclaimer Section */}
            <div className="container mx-auto p-4 rounded-lg">
                <div className='flex flex-col'>
                    <div className="rounded-3xl pb-[25px]">
                        <h2 className="text-4xl font-semibold mb-4 text-[#000] text-center font-sans">Disclaimer</h2>
                        <p className="text-3xl text-[#000] font-sans italic">
                            "As an innovative startup, we're currently in market validation phase. We're actively collecting expressions of interest from potential customers like you. Once we've gathered sufficient interest, we'll begin accepting formal orders and will update you accordingly about the progress. Please note that the process from confirming your interest to dispatching your order would take 6-8 weeks. Also, the images in the website are graphical representation and would differ marginally from actual product."
                        </p>
                    </div>
                </div>
            </div>

            <div className='h-screen grid grid-cols-3 gap-3 w-[80%] mx-auto'>
                {/* <div className='flex justify-center items-center col-span-2'>
                    <video
                        // src={"/productVideo.mp4"}
                        src="https://youtu.be/7mjvGtVparQ"
                        autoPlay
                        loop
                        muted
                        className='w-full h-fit object-contain'
                        controls
                    />
                </div> */}
                <div className='flex justify-center items-center col-span-2 m-9'>
                    <iframe
                        width="80%"
                        height="50%"
                        src="https://www.youtube.com/embed/7mjvGtVparQ"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        allowTransparency
                        className='w-full h-full object-contain overflow-hidden'
                    ></iframe>
                </div>
                <div className='text-xl col-span-1 flex items-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis corporis sed iure velit qui veritatis maiores minima amet quod! Id eveniet iste magni. Ut expedita inventore necessitatibus fugiat aliquam!
                </div>
            </div>

            {/* Product Display Section */}
            <div className='h-[400px] w-full flex justify-between px-10'>
                <div className='flex flex-col justify-center items-center bg-[#fff] w-[45%] h-full rounded-3xl shadow-lg'>
                    <div className='text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a]'> Lunchbox</div>
                    <GLBViewer
                        modelPath="/360-lunchbox.glb"
                        scale={[3, 3, 3]}
                        isActive={true}
                    />
                    <button
                        onClick={handleLunchboxClick}
                        className='text-lg p-2 mb-2 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200'> View more</button>
                </div>
                <div className='flex flex-col justify-center items-center bg-[#fff] w-[45%] h-full rounded-3xl shadow-lg'>
                    <div className='text-2xl p-3 w-full text-center rounded-3xl text-[#fff] font-semibold bg-[#1e3a8a]'> Container</div>
                    <GLBViewer
                        modelPath="/360-container.glb"
                        scale={[3, 3, 3]}
                        isActive={true}
                    />
                    <button
                        onClick={handleContainerClick}
                        className='text-lg p-2 mb-2 text-center rounded-3xl text-[#000] hover:bg-black hover:text-white font-semibold border border-black bg-slate-200'> View more</button>
                </div>
            </div>

            {/* Call to Action Section */}
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

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;