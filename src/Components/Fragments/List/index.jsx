import { Link } from "react-router-dom"

const List = (props) => {
  const {classname} = props
  return (
    <>
      <div className={`flex items-center gap-7 text-white ${classname} pb-4`}>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          All
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Men
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Women
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          U21
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          U18
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Club
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Tikects
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Community
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          اللغة العربية
        </Link>
        <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
          Español
        </Link>
      </div>
    </>
  )
}

export default List