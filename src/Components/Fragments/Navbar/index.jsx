import { CiGlobe } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="font-roboto">
      <ul className="w-full flex bg-[#480024] text-white text-base py-2 px-[3%] justify-end gap-8">
        <li>
          <Link to="" className="hover:underline">Tickets</Link>
        </li>
        <li>
          <Link to="" className="hover:underline">Shop</Link>
        </li>
        <li>
          <Link to="" className="hover:underline">Rewards</Link>
        </li>
        <li>
          <Link to="" className="hover:underline">Membership</Link>
        </li>
        <li>
          <Link to="" className="hover:underline">Login</Link>
        </li>
      </ul>
      <div className="px-[3%] absolute text-white w-full py-2 z-10 flex gap-5">
        <Link to="/">
          <img src="https://www.avfc.co.uk/logo.svg" alt="" className="w-[85px]" />
        </Link>

        <div className="flex flex-col w-full">
          <div className="flex p-0 justify-end border-b py-2 border-white">
            <Link className="flex gap-2 items-center text-base font-semibold ">
              <CiGlobe className="text-2xl" />
              EN
              <IoChevronDownOutline className="text-lg" />
            </Link>
          </div>

          <div className="flex justify-between py-4 border-t border-white mt-1">
            <ul className="flex gap-5 font-semibold items-center">
              <li>
                <Link to="/news" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">News</Link>
              </li>
              <li>
                <Link to="/tickets" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
                  Ticket News
                </Link>
              </li>
              <li>
                <Link to="/matches" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">
                  Matches
                </Link>
              </li>
              <li>
                <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Teams</Link>
              </li>
              <li>
                <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">VillaTv</Link>
              </li>
              <li>
                <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Hospitalily</Link>
              </li>
              <li>
                <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Concerts</Link>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <img src="https://www.avfc.co.uk/sponsors/header/adidas.png" alt="" className="w-[40px]" />
              {/* <Search />
              <Menu /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar