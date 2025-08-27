import Button from "@/Components/Elements/Button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { LuScrollText } from "react-icons/lu";
import { Link } from "react-router-dom"

const HeroLayout = () => {
  return (
    <Carousel className="w-full overflow-hidden cursor-grab" plugins={[
      Autoplay({
        delay: 3500,
      }),
    ]}>
      <CarouselContent className="mb-16">
        <CarouselItem className="relative">
          <img
            src="https://img.gc.avfcservices.co.uk/fit-in/1000x1000/4ea845a0-7cbc-11ed-b3fc-e5153cc90d3d.jpg"
            alt=""
            className="w-full object-cover h-[570px]"
          />
          <div className="absolute top-0 p-6 bg-black/40 w-full h-[570px] px-[3%]">
            <div className="absolute top-48 text-white">
              <div className="flex items-center gap-5">
                <p className="text-sm flex items-center gap-2">
                  <LuScrollText />
                  3 days ago
                </p>
                <Link className="text-[#94BEE5] text-sm" to="">Featured</Link>
              </div>
              <h1 className="font-Medula text-7xl my-5">
                Villareal 0-2 Aston Villa
              </h1>
              <p className="font-roboto font-normal">Match report from our final outing of pre-season</p>
              <Button>Continue Reading</Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="relative">
          <img
            src="https://ruang.co.id/wp-content/uploads/2025/02/transfer-1.png"
            alt=""
            className="w-full object-cover h-[570px]"
          />
          <div className="absolute top-0 p-6 bg-black/40 w-full h-[570px] px-[3%]">
            <div className="absolute top-48 text-white">
              <div className="flex items-center gap-5">
                <p className="text-sm flex items-center gap-2">
                  <LuScrollText />
                  3 days ago
                </p>
                <Link className="text-[#94BEE5] text-sm" to="">Featured</Link>
              </div>
              <h1 className="font-Medula text-7xl my-5">
                Villareal 0-2 Aston Villa
              </h1>
              <p className="font-roboto font-normal">Match report from our final outing of pre-season</p>
              <Button>Continue Reading</Button>
            </div>
          </div>
        </CarouselItem>


      </CarouselContent>
    </Carousel>
  )
}

export default HeroLayout