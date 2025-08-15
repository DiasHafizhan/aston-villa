import Button from "../Elements/Button"
import CardNews from "../Fragments/CardNews"
import CardPoster from "../Fragments/CardPoster"

const CardLayout = () => {
  return (
    <div className="px-[3%] mb-20 w-full">
      <h1 className="font-Medula font-medium text-5xl mb-14">
        Latest from Aston Villa Football Club
      </h1>
      <div className="flex flex-wrap gap-4">
        <CardNews
          image="https://img.gc.avfcservices.co.uk/fit-in/1400x1400/c1c7ee50-7697-11f0-b4c9-55861495fbc7.jpg "
          gender="Men"
          time="7 Days ago"
          title="Training | New Villan, Evan Guessand"
        />
        <CardNews
          image="https://i2-prod.birminghammail.co.uk/article32247701.ece/ALTERNATES/s1200c/0_CC_FRANKFURTvASTON_VILLA_4043.jpg"
          gender="Men"
          time="7 Days ago"
          title="Training | New Villan, Evan Guessand"
        />
        <CardPoster image="https://img.gc.avfcservices.co.uk/fit-in/750x750/f6b57a40-6dfc-11f0-9eb8-0f7c37f85090.jpg" />
        <CardPoster image="https://img.gc.avfcservices.co.uk/fit-in/750x750/0270ef20-710b-11f0-a324-5b1c8204ad6b.jpg" />
        <CardNews
          image="https://cdn.antaranews.com/cache/1200x800/2023/12/10/2023-12-09T194116Z_1987556956_UP1EJC91D52Q6_RTRMADP_3_SOCCER-ENGLAND-AVA-ARS-REPORT.jpg"
          gender="Men"
          time="7 Days ago"
          title="Training | New Villan, Evan Guessand"
        />
        <CardNews
          image="https://img.gc.avfcservices.co.uk/fit-in/1000x1000/5e55b090-06eb-11ef-9e7d-7bf3c1fde430.jpg"
          gender="Women"
          time="7 Days ago"
          title="Training | New Villan, Evan Guessand"
        />
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="px-7 py-3 hover:px-8 transition ease-in-out duration-700 rounded-full text-lg mx-auto bg-[#480024] text-white">
          Load More
        </button>
      </div>
    </div>
  )
}

export default CardLayout