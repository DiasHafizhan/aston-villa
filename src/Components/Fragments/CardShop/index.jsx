import { Shirt } from "lucide-react"
import { Link } from "react-router-dom"

const CardShop = (props) => {
  const {title, image} = props
  return (
    <div className="w-1/4">
      <img
        src={image}
        className=""
        alt=""
      />
      <div className="text-white flex flex-col gap-3 justify-center items-center w-full">
        <p className="text-lg font-bold">25/26 {title}</p>
        <span className="flex items-center gap-2">
          <Shirt className="w-7" />
          <Link to="" className="text-base font-bold hover:underline">SHOP NOW</Link>
        </span>
      </div>
    </div>
  )
}

export default CardShop