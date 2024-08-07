
import { DialogContent, DialogHeader, DialogTitle } from '@/ui/dialog'

const ContactUs = ({ loader, setLoader }: { loader: boolean, setLoader: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <DialogContent className="sm:max-w-[600px] sm:max-h-[80%] overflow-y-scroll">
            <DialogHeader className='flex justify-center items-center'>
                <DialogTitle className='text-xl'>Contact Us</DialogTitle>
            </DialogHeader>
            {loader && <div
                className={`flex items-center justify-center h-full`}>
                <div
                    className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                    role='status'>
                </div>
            </div>}

            <div className='flex justify-center items-center' onLoad={() => setLoader(false)}>
                <iframe src="https://forms.gle/Y5bTVokUdU9ov5tu9" width="500px" height="800px" />
            </div>
        </DialogContent>
    )
}

export default ContactUs