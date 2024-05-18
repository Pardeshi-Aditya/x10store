
import { BluetoothSpeakerImage, EarbudsImage, FitnessWatchImage, WalletImage, WaterBottleImage } from "@/assets/images";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Overview = () => {


    return (
        <>
            <Navbar />
            <div className="mx-[10%] flex gap-3 flex-wrap">
                <ProductCard title={"Sleek Wireless Earbuds"} desc={"High-quality sound, noise-cancellation, 20-hour battery life."}>
                    <EarbudsImage />
                </ProductCard>
                <ProductCard title={"Classic Leather Wallet"} desc={"Premium leather, multiple card slots, RFID protection."}>
                    <WalletImage />
                </ProductCard>
                <ProductCard title={"Smart Fitness Watch"} desc={"Heart rate monitor, GPS tracking, water-resistant."}>
                    <FitnessWatchImage />
                </ProductCard>
                <ProductCard title={"Portable Bluetooth Speaker"} desc={"Rich bass, 12-hour playtime, compact design."}>
                    <BluetoothSpeakerImage />
                </ProductCard>
                <ProductCard title={"Stainless Steel Water Bottle"} desc={"Insulated, keeps drinks cold for 24 hours, BPA-free."}>
                    <WaterBottleImage />
                </ProductCard>



            </div>
            <Footer />
        </>
    )
}

export default Overview