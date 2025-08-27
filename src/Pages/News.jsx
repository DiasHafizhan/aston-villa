import CardNews from "@/Components/Fragments/CardNews"
import CardPoster from "@/Components/Fragments/CardPoster"
import Footer from "@/Components/Fragments/Footer"
import Navbar from "@/Components/Fragments/Navbar"
import NewsLayout from "@/Components/Layouts/NewsLayout"
import { ScrollText } from "lucide-react"
import { Link } from "react-router-dom"

const NewsPages = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-4 px-[3%] bg-[#480024] mb-14">
        <h1 className="text-6xl font-Medula font-medium text-white mb-7">FEATURED</h1>
        <div className="flex flex-wrap gap-5 mb-10">
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
            <div className="w-full rounded-2xl relative cursor-pointer">
              <img
                src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/41/2025/08/16/Olie-Watkins-2210270935.jpg"
                alt=""
                className="w-full object-cover h-[280px] rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t pl-4 rounded-xl text-white from-black/90 to-transparent">
                <div className="absolute top-52">
                  <div className="flex items-center gap-8">
                    <p className="flex items-center text-sm gap-2">
                      <ScrollText className="w-4" />
                      19 minutes ago
                    </p>
                    <Link to="" className="text-[#94BEE5] text-sm">Sport</Link>
                  </div>
                  <h1 className="font-bold text-xl">Gauci debuts for Port Vale</h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="h-[270px] relative rounded-xl">
                <img
                  src="https://assets.goal.com/images/v3/getty-2211480442/crop/MM5DINRVGM5DENRRG45G433XMU5DAORUHE======/GettyImages-2211480442.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt=""
                  className="w-full h-[270px] object-cover rounded-xl"
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
              <div className="h-[270px] relative rounded-xl">
                <img
                  src="https://assets.goal.com/images/v3/getty-2211480442/crop/MM5DINRVGM5DENRRG45G433XMU5DAORUHE======/GettyImages-2211480442.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt=""
                  className="w-full h-[270px] object-cover rounded-xl"
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

        <div className="flex items-center gap-7 text-white">
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
      </div>

      <div className="px-[3%]">
        <div className="border border-black w-[980px] mb-20 mx-auto">
          <img
            src="https://img.gc.avfcservices.co.uk/fit-in/750x750/79f915a0-8a3d-11ef-a034-1da4200ab242.jpg"
            className="w-full"
            alt=""
          />
        </div>


        <NewsLayout title="All News">
          <CardNews
            classname="bg-white"
            image="https://img.gc.avfcservices.co.uk/fit-in/1400x1400/c1c7ee50-7697-11f0-b4c9-55861495fbc7.jpg "
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-[#480024] text-white"
            image="https://cdn.antaranews.com/cache/1200x800/2023/12/10/2023-12-09T194116Z_1987556956_UP1EJC91D52Q6_RTRMADP_3_SOCCER-ENGLAND-AVA-ARS-REPORT.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-white"
            image="https://i2-prod.birminghammail.co.uk/article32247701.ece/ALTERNATES/s1200c/0_CC_FRANKFURTvASTON_VILLA_4043.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-white"
            image="https://i2-prod.birminghammail.co.uk/article32247701.ece/ALTERNATES/s1200c/0_CC_FRANKFURTvASTON_VILLA_4043.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-white"
            image="https://i2-prod.birminghammail.co.uk/article32247701.ece/ALTERNATES/s1200c/0_CC_FRANKFURTvASTON_VILLA_4043.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="text-white inset-0 bg-gradient-to-t top-[18rem] from-black/90 to-transparent"
            image="https://img.gc.avfcservices.co.uk/fit-in/1000x1000/5e55b090-06eb-11ef-9e7d-7bf3c1fde430.jpg"
            gender="Women"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-[#480024] text-white"
            image="https://cdn.antaranews.com/cache/1200x800/2023/12/10/2023-12-09T194116Z_1987556956_UP1EJC91D52Q6_RTRMADP_3_SOCCER-ENGLAND-AVA-ARS-REPORT.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="bg-white"
            image="https://i2-prod.birminghammail.co.uk/article32247701.ece/ALTERNATES/s1200c/0_CC_FRANKFURTvASTON_VILLA_4043.jpg"
            gender="Men"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
          <CardNews
            classname="text-white inset-0 bg-gradient-to-t top-[18rem] from-black/90 to-transparent"
            image="https://img.gc.avfcservices.co.uk/fit-in/1000x1000/5e55b090-06eb-11ef-9e7d-7bf3c1fde430.jpg"
            gender="Women"
            time="7 Days ago"
            title="Training | New Villan, Evan Guessand"
          />
        </NewsLayout>
      </div>

      <Footer />
    </>
  )
}

export default NewsPages