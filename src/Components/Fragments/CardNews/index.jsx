import { Volleyball } from "lucide-react"

const CardNews = (props) => {
  const { gender, image, time, title } = props

  return (
    <div className="w-[32%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <div className="h-full">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="px-[4%] w-full py-5 absolute bottom-0 bg-white">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <Volleyball className="w-4" />
              {time}
            </p>
            <p>{gender}</p>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardNews