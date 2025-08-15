import { ChevronRight } from "lucide-react"
import Button from "../Elements/Button"
import CardShop from "../Fragments/CardShop"

const ShopLayout = () => {
  return (
    <div className="bg-[#480024]">
      <div className="px-[3%] py-10 cursor-pointer">
        <h3 className="font-Medula text-5xl font-medium text-white mb-10">Official Club Store</h3>
        <div className="flex flex-wrap">
          <CardShop
            image="https://img.gc.avfcservices.co.uk/fit-in/400x400/8fc87110-6227-11f0-8999-4b55fccacb3d.png"
            title="HOME KIT"
          />
          <CardShop
            image="https://img.gc.avfcservices.co.uk/fit-in/400x400/df7f1560-36df-11f0-876c-dd15cde69c7e.png"
            title="AWAY KIT"
          />
          <CardShop
            image="https://img.gc.avfcservices.co.uk/fit-in/400x400/8f08ca90-6227-11f0-aeeb-551e4d6624d6.png"
            title="GOALKEEPER KIT"
          />
          <CardShop
            image="https://img.gc.avfcservices.co.uk/fit-in/400x400/88e4dc70-7114-11f0-9147-07bcf3aba5b6.png"
            title="TRANING KIT"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button classname="flex gap-2 items-center">Visit the Official Online Aston Villa Store <ChevronRight className="w-7" /></Button>
        </div>
      </div>
    </div>
  )
}

export default ShopLayout