import Lottie from "lottie-react"
import BannerBG from "../../assets/JSON/Banner.json"
import Coins from "../../assets/JSON/CryptoCoin.json"

const Banner = () => {
  return (
    <div className='relative flex flex-col w-full gap-3 overflow-hidden'>
      <div className='flex flex-col items-center justify-center gap-4 pt-10 text-white lg:justify-start sm:justify-center'>
        <h1 className='text-6xl font-bold text-center'>Crypto Tracker</h1>
        <p>Get all information regarding Crypto Coins</p>
      </div>
      <div className='relative w-full h-120'>
        <div className="">
          <Lottie animationData={Coins} loop={true} className='absolute left-0 z-10 w-full h-full bottom-35' style={{ height: 400 }} />
        </div>
        <div className="flex items-end justify-center h-full overflow-hidden">
          <Lottie animationData={BannerBG} loop={true} className="absolute top-9 h-150" />
        </div>
      </div>
    </div>

  )
}

export default Banner
