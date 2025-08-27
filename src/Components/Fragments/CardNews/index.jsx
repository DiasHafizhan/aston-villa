import { IoFootball } from "react-icons/io5";

const CardNews = (props) => {
  const { gender, image, time, title, classname } = props

  return (
    <div className="w-[32%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl relative cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <div className="h-full">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-2xl rounded-t-lg"
        />
        <div className={`px-[4%] w-full py-5 absolute rounded-b-2xl bottom-0 ${classname}`}>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <IoFootball className="text-lg" />
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