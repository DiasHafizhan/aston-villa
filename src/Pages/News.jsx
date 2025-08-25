import Footer from "@/Components/Fragments/Footer"
import Navbar from "@/Components/Fragments/Navbar"
import { ScrollText } from "lucide-react"
import { Link } from "react-router-dom"

const NewsPages = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 px-[3%] bg-[#480024]">
        <h1 className="text-6xl font-Medula font-medium text-white mb-7">FEATURED</h1>
        <div className="flex flex-wrap gap-5">
          <div className="w-[49%] relative cursor-pointer rounded-xl">
            <img
              src="https://i.guim.co.uk/img/media/e2badacab5e820b50399045a6375226bd4fb7655/11_93_2495_1496/master/2495.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6748a8f0f06010c3ff9a886783e61fbe"
              alt=""
              className="w-full object-cover h-[570px] rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t pl-4 top-[30rem] rounded-xl text-white from-black/90 to-transparent">
              <div className="flex items-center gap-8">
                <p className="flex items-center text-sm gap-2">
                  <ScrollText className="w-4" />
                  19 minutes ago
                </p>
                <Link to="" className="text-[#94BEE5] text-sm">Club</Link>
              </div>
              <h1 className="font-bold text-xl mt-2">Win a personalised 2025/26 third shirt!</h1>
            </div>
          </div>


          <div className="w-[49%] h-[570px] flex flex-col gap-4 ">
            <div className="w-full rounded-lg relative cursor-pointer">
              <img
                src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/41/2025/08/16/Olie-Watkins-2210270935.jpg"
                alt=""
                className="w-full object-cover h-[300px] rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t pl-4 rounded-xl text-white from-black/90 to-transparent">
                <div className="absolute top-56">
                  <div className="flex items-center gap-8">
                    <p className="flex items-center text-sm gap-2">
                      <ScrollText className="w-4" />
                      19 minutes ago
                    </p>
                    <Link to="" className="text-[#94BEE5] text-sm">Men</Link>
                  </div>
                  <h1 className="font-bold text-xl">Gauci debuts for Port Vale</h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="h-[252px] relative rounded-xl">
                <img
                  src="https://assets.goal.com/images/v3/getty-2211480442/crop/MM5DINRVGM5DENRRG45G433XMU5DAORUHE======/GettyImages-2211480442.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt=""
                  className="w-full h-[252px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t pl-4 rounded-xl text-white from-black/90 to-transparent">
                  <div className="absolute top-44">
                    <div className="flex items-center gap-8">
                      <p className="flex items-center text-sm gap-2">
                        <ScrollText className="w-4" />
                        19 minutes ago
                      </p>
                      <Link to="" className="text-[#94BEE5] text-sm">Men</Link>
                    </div>
                    <h1 className="font-bold text-xl">Gauci debuts for Port Vale</h1>
                  </div>
                </div>
              </div>
              <div className="h-[252px] relative rounded-xl">
                <img
                  src="https://assets.goal.com/images/v3/getty-2211480442/crop/MM5DINRVGM5DENRRG45G433XMU5DAORUHE======/GettyImages-2211480442.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt=""
                  className="w-full h-[252px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t pl-4 rounded-xl text-white from-black/90 to-transparent">
                  <div className="absolute top-44">
                    <div className="flex items-center gap-8">
                      <p className="flex items-center text-sm gap-2">
                        <ScrollText className="w-4" />
                        19 minutes ago
                      </p>
                      <Link to="" className="text-[#94BEE5] text-sm">Men</Link>
                    </div>
                    <h1 className="font-bold text-xl">Gauci debuts for Port Vale</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPages