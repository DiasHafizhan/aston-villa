import CardNews from "@/Components/Fragments/CardNews"
import Footer from "@/Components/Fragments/Footer"
import List from "@/Components/Fragments/List"
import Navbar from "@/Components/Fragments/Navbar"
import NewsLayout from "@/Components/Layouts/NewsLayout"

const TicketsPages = () => {
  return (
    <>
      <Navbar />
      <List classname="pt-28 px-[3%] bg-primary mb-10" />
      <NewsLayout title="Tikets" classname="text-5xl font-semibold font-roboto mb-8">
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
      <Footer />
    </>
  )
}

export default TicketsPages