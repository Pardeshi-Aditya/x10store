import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import ContactUs from './ContactUs';
import { useState } from 'react';

const HomePage = () => {

    const [loader, setLoader] = useState(true)

    return (
        <div className=' max-h-screen flex flex-col gap-1'>
            <div className='top-0 left-0 right-0 mb-3'>
                <Logo />
            </div>
            <div className='border-accent text-primary text-[24px] text-center border-s-4 mx-[20%] px-8 font-semibold italic'>
                "Being a startup, we are in the interest gathering phase, which would eventually convert to orders.
                The interest to order conversion and delivery of such orders would take 6-8 weeks."<br />
                <div className='flex justify-end'>
                    - Founders at X10
                </div>
            </div>

            <div className='flex h-[100vh]'>
                <div className='m-[40px] w-full rounded-[100px] p-[100px] border-x-4 border-accent font-black text-4xl italic text-center items-center flex justify-center'>
                    ANIMATED VIDEO
                </div>
                <div className='m-[40px] w-full rounded-[100px] p-[100px] border-x-4 border-accent font-black text-4xl italic text-center items-center flex justify-center'>
                    ABOUT THE PRODUCT
                </div>
            </div>
            <div className='m-[40px] rounded-[100px] p-[5px] flex justify-center '>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='p-[35px] rounded-[10px] text-2xl bg-green-600' onClick={() => setLoader(true)}>
                            Please express your interest here...
                        </Button>
                    </DialogTrigger>
                    <ContactUs loader={loader} setLoader={setLoader} />
                </Dialog>
            </div>
        </div>
    );
};

export default HomePage;
