import HeroLayout from "./Components/Fragments/Hero"
import Navbar from "./Components/Fragments/Navbar"
import Legacy from "./Components/Fragments/Legacy"
import CardLayout from "./Components/Layouts/NewsLayout"
import ShopLayout from "./Components/Layouts/ShopLayout"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

function App() {

  return (
    <>
      <Navbar />
      <div>
        <HeroLayout />
        <Legacy />
        <CardLayout />
        <ShopLayout />
        <div className="bg-[#480024] py-20 mb-52">
          <div className="px-[7%]">
            <div class="flex items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-white font-bold text-3xl">
                #UpTheVilla!
              </span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-center items-center gap-5 text-white my-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </div>
            <div className="flex gap-1 mx-auto bg-white rounded-lg w-[650px] px-1 py-5 items-center">
              <div className="w-[70%] pr-3 border-r border-blue-500">
                <img src="./public/account.png" className="w-full" alt="" />
              </div>
              <div className="w-[90%] py-[1.2rem] text-center border-l border-blue-500">
                <p className="text-center text-sm mb-4">
                  Join now now to receive the latest news, purchase tickets and get exclusive access to Aston Villa content as well as a host of other benefits
                </p>
                <button className="px-3 py-2 hover:px-5 font-bold transition ease-in-out duration-700 rounded-full text-sm mx-auto bg-[#480024] text-white">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
