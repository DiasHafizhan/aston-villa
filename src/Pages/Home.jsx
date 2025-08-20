import Footer from "@/Components/Fragments/Footer"
import HeroLayout from "@/Components/Fragments/Hero"
import Legacy from "@/Components/Fragments/Legacy"
import Navbar from "@/Components/Fragments/Navbar"
import CardLayout from "@/Components/Layouts/NewsLayout"
import ShopLayout from "@/Components/Layouts/ShopLayout"



const HomePages = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroLayout />
        <Legacy />
        <CardLayout />
        <ShopLayout />
      </div>
      <Footer />
    </>
  )
}

export default HomePages