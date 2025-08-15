import Button from "@/Components/Elements/Button"

const Legacy = () => {
  return (
    <div className="px-[3%] mb-20">
      <div className="bg-[#480024] flex items-center px-5 py-3 justify-between text-white">
        <div className="flex gap-5 items-center">
          <img
            src="https://images.webapi.gc.avfcservices.co.uk/5e1080d0-b2fb-11ef-b980-8ff17efc0fcc.png"
            className="w-[80px]"
            alt=""
          />
          <div className="">
            <h2 className="text-3xl font-bold mb-2">Legacy Wall - From £80</h2>
            <p>Cement yourself in Aston Villa history with a personalised commemorative plaque.</p>
          </div>
        </div>
        <Button>Get Involved</Button>
      </div>

    </div>
  )
}

export default Legacy