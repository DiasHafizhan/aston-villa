
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#480024] py-20">
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
        <div className="flex gap-1 mx-auto bg-white rounded-lg w-[650px] px-1 py-5 items-center mb-10">
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

        <div className="text-white text-center">
          <p className="text-xl font-bold ">Download our app</p>
          <div className="flex gap-3 items-center justify-center mt-5">
            <img src="https://www.avfc.co.uk/menu/feature-footer/app_store.png" className="w-[100px] cursor-pointer" alt="" />
            <img src="https://www.avfc.co.uk/menu/feature-footer/play_store.png" className="w-[100px] cursor-pointer" alt="" />
          </div>
        </div>

        <div className="text-white mt-20 border-t border-white py-10">
          <div className="">
            <p className="text-xl font-bold text-center">Principal Partners</p>
            <div className="flex gap-20 my-10 items-center justify-center">
              <img src="https://www.avfc.co.uk/sponsors/header/adidas.png" className="w-[120px]" alt="" />
              <img src="https://images.prismic.io/betlounge/ZqeaJB5LeNNTxkN3_betanologonew.png?auto=format,compress" className="w-[140px]" alt="" />
              <img src="https://images.prismic.io/tnfev2/Zk8msCol0Zci9YuK_tn-logo.png?auto=format,compress" className="w-[90px]" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-center">Official Partners</p>
              <div className="flex justify-center items-center gap-20 mt-10">
                <img src="https://rockoysterfestival.co.uk/wp-content/uploads/2025/07/Carlsberg-Britvic-Black-1.png" className="filter grayscale invert w-[130px]" alt="" />
                <img src="https://www.pagonxt.com/content/dam/pagonxt/images/ebury-logo.png" className="w-[90px]" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0786/7154/4653/files/eSentire_Logo_2021_White_480x480.png?v=1729526746" className="w-[130px]" alt="" />
              </div>
              <div className="flex justify-center items-center gap-10 mt-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fanatics_company_logo.svg/2560px-Fanatics_company_logo.svg.png" className="filter grayscale invert w-[100px]" alt="" />
                <img src="https://www.whitefriars.co.uk/wp-content/uploads/2018/08/JD.png" className="w-[200px]" alt="" />
                <img src="https://am.coca-colahellenic.com/content/dam/cch/am/media-gallery/images/corporate/nemiroff-logo-51BA93EF4E-seeklogo.com.png" className="filter grayscale invert w-[130px]" alt="" />
                <img src="https://ucontent.prdg.io/img/my-points/mg-logo/mg2413.png?v=1697666949000" className="w-[130px]" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Xapo_Bank_Logo.svg/2560px-Xapo_Bank_Logo.svg.png" className="filter grayscale invert w-[130px]" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-10">
              <p className="text-lg font-bold text-center">Charity Partners</p>
              <div className="flex justify-center items-center gap-10 ">
                <img src="https://images.seeklogo.com/logo-png/39/2/acorns-childrens-hospice-logo-png_seeklogo-396070.png" className="filter grayscale invert w-[120px]" alt="" />
                <img src="https://www.thegoodwillpartnership.co.uk/wp-content/uploads/2019/09/Birmingham-Childrens-Hospital_logo.png" className="filter grayscale invert w-[170px]" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <h4 className="font-bold text-base">QUICK LINKS</h4>
          <div className="w-full border-t border-white pt-2 flex justify-between">
            <ul>
              <li>
                <Link to='' className="text-sm">News</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Matches</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Teams</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Tickets</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Digital Account</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='' className="text-sm">VillaTV</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Pride Rewards</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Shop</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Hospitality</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Conferencing & Events</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Stadium Tours</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='' className="text-sm">History</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Villa Park</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Soccer Schools</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Lions Clubs</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Foundation</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Modern Slavery Statement</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='' className="text-sm">Safeguarding Policy</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Careers</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Contact Us</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Equality, Diversity & Inclusion</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Memberships</Link>
              </li>
              <li>
                <Link to='' className="text-sm">Football in the Community</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer