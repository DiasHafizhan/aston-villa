import Footer from "@/Components/Fragments/Footer"
import Navbar from "@/Components/Fragments/Navbar"

const NewsPages = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 px-[3%] bg-[#480024]">
        <h1 className="text-6xl font-Medula font-medium text-white mb-7">FEATURED</h1>
        <div className="flex flex-wrap gap-5">
          <div className="w-[49%] relative border border-white">
            <img
              src="https://i.guim.co.uk/img/media/e2badacab5e820b50399045a6375226bd4fb7655/11_93_2495_1496/master/2495.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6748a8f0f06010c3ff9a886783e61fbe"
              alt=""
              className=""
            />
            <div className="absolute top-0 bg-black/40 w-full h-">
            <h1>Hallo</h1>
            </div>
          </div>


          <div className="w-[49%] border h-[100px] border-white"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPages