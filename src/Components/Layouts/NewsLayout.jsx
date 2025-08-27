
const NewsLayout = (props) => {
  const {children, title, classname} = props
  return (
    <div className="px-[3%] mb-20 w-full">
      <h1 className={`${classname}`}>
        {title}
      </h1>
      <div className="flex flex-wrap gap-4">
        {children}
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="px-7 py-3 hover:px-8 transition ease-in-out duration-700 rounded-full text-lg mx-auto bg-[#480024] text-white">
          Load More
        </button>
      </div>
    </div>
  )
}

export default NewsLayout