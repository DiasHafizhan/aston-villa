import { Button } from "@/Components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const MatchesList = (props) => {
  const { title } = props

  return (
    <div className="pt-28 px-[3%] bg-primary mb-10">
      <h3 className="text-6xl font-Medula font-medium text-white mb-7">
        {title}
      </h3>

      <div className="text-white flex justify-between">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Mens</Link>
          </li>
          <li>
            <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Womens</Link>
          </li>
          <li>
            <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Under21</Link>
          </li>
          <li>
            <Link to="" className="border-b-4 border-transparent hover:border-white duration-300 transition-all ease-in-out">Under18</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <div className="flex flex-col items-start">
            <span>Season</span>
            <DropdownMenu>
              <DropdownMenuTrigger>2025/2026</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          <Button><SlCalender /> Add to Calender</Button>
        </div>
      </div>
    </div>
  )
}

export default MatchesList