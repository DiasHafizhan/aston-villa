import Footer from "@/Components/Fragments/Footer"
import MatchesList from "@/Components/Fragments/MatchesList"
import Navbar from "@/Components/Fragments/Navbar"


const MatchesPages = () =>{
  return(
    <>
    <Navbar />
    <MatchesList title="Matches" />
    <Footer />
    </>
  )
}

export default MatchesPages