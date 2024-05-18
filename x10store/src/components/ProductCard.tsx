
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from './ui/button';
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';

interface ProductCardProps {
    title: string,
    desc: string,
    children: React.ReactNode;
}

const ProductCard = ({ title, desc, children }: ProductCardProps) => {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <Card className="w-[350px] flex flex-col h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="product-image flex justify-center items-center">
                    {children}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" className='hover:bg-green-600 hover:text-[#fff]'>Buy Now</Button>
                <Button variant="ghost" className={liked ? 'hover:bg-[#ff4d4d] hover:text-[#fff]' : 'bg-[#ff4d4d] text-[#fff]'} onClick={handleLike}>
                    <FaRegHeart size='24px' />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard