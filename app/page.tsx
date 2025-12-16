import ShopNowButton from "@/components/ShopNowButton"
import Image from "next/image"

export default function Home() {
  return (
    <div className=" bg-zinc-50 dark:bg-black">
      <div className="flex flex-row justify-between bg-blue-100 mb-10">
        <div className=" mt-50 ml-10">
          <h3 className="text-6xl font-bold">FIND CLOTHES THAT <br /> MATCHES YOUR STYLE</h3>
          <p className="text-xl text-muted-foreground py-6">Browse through our diverse range of meticulously crafted garments, designed to bring out
            <br />your individuality and cater to your sense of style.
          </p>
          <ShopNowButton />
          <div className="flex flex-row pt-6">
            <div>
              <p className="text-3xl font-bold pb-3">200+</p>
              <p className="text-xl text-muted-foreground">International Brands</p>
            </div>
            <div className="w-px h-auto bg-gray-300 mx-4" />
            <div>
              <p className="text-3xl font-bold pb-3">2,000+</p>
              <p className="text-xl text-muted-foreground">High-Quality Products</p>
            </div>
            <div className="w-px h-auto bg-gray-300 mx-4" />
            <div>
              <p className="text-3xl font-bold pb-3">30,000+</p>
              <p className="text-xl text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/images/ladyAndGuy.png" alt="Lady and Guy" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}
