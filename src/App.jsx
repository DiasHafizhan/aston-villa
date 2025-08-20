import HeroLayout from "./Components/Fragments/Hero"
import Navbar from "./Components/Fragments/Navbar"
import Legacy from "./Components/Fragments/Legacy"
import CardLayout from "./Components/Layouts/NewsLayout"
import ShopLayout from "./Components/Layouts/ShopLayout"
import Footer from "./Components/Fragments/Footer"


function App() {

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

export default App
