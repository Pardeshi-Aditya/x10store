import { Button } from '@/components/ui/button'
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormFields = {
    name: string,
    contact: string,
    mailId: string,
    city: string,
    pincode: string,
    gender: string,
}

const ContactUs = ({ loader, setLoader }: { loader: boolean, setLoader: any }) => {

    const methods = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (formData) => {
        console.log("data", formData);
    }

    return (
        <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
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


            {/* <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                    <Label>Name</Label>
                    <Input {...methods.register("name")} />
                    <DialogClose>
                        <Button>
                            Submit
                        </Button>
                    </DialogClose>
                </form>
            </FormProvider> */}
        </DialogContent>
    )
}

export default ContactUs