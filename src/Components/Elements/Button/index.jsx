const Button = (props) => {
  const {children, classname} = props
  return (
    <button className={`border-2 text-white border-white py-3 px-4 rounded-full text-base font-semibold mt-3 hover:bg-white hover:text-[#480024] transition-all duration-300 ${classname}`}>
      {children}
    </button>
  )
}

export default Button