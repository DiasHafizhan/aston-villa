import { ChevronDown, Globe, Menu, Search } from "lucide-react"
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
        <img src="https://www.avfc.co.uk/logo.svg" alt="" className="w-[80px]" />

        <div className="flex flex-col w-full">
          <div className="flex p-0 justify-end border-b py-2 border-white">
            <Link className="flex gap-2 items-center text-base font-semibold ">
              <Globe className="text-base font-semibold " />
              EN
              <ChevronDown className="text-base " />
            </Link>
          </div>

          <div className="flex justify-between py-4 border-t border-white mt-1">
            <ul className="flex gap-5 font-semibold items-center">
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Ticket News</Link>
              </li>
              <li>
                <Link>Matches</Link>
              </li>
              <li>
                <Link>Teams</Link>
              </li>
              <li>
                <Link>VillaTv</Link>
              </li>
              <li>
                <Link>Hospitalily</Link>
              </li>
              <li>
                <Link>Concerts</Link>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <img src="https://www.avfc.co.uk/sponsors/header/adidas.png" alt="" className="w-[40px]" />
              <Search />
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar