import { Mail } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center background-color-[#fff] mb-[100px] mx-[10%]">
            <div>
                <Button variant="ghost" >Home</Button >
                <Button variant="ghost">Products</Button >
                <Button variant="ghost">Contact Us</Button >
                <Button variant="ghost">About</Button >
            </div>
            <div className="flex justify-between items-center">
                <div></div>
                <Button className="m-4 justify-end">
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
            </div>
        </div>
    )
}

export default Navbar