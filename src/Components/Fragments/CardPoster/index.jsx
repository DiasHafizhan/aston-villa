const CardPoster = (props) => {
  const {image} = props
  return (
    <div className="w-[32%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      <img
        src={image}
        className="rounded-lg"
        alt=""
      />
    </div>
  )
}

export default CardPoster