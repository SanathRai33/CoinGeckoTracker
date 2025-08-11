import BannerImg from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className='relative w-full'>
      <div className='w-full h-120'>
        <img src={BannerImg} alt="banner" className='object-cover w-full h-full' />
      </div>
      <div className='absolute inset-0 flex flex-col items-center pt-10 text-white'>
        <h1 className='text-6xl font-bold'>Crypto Tracker</h1>
        <p>Get all information regarding Crypto Coins</p>
      </div>
    </div>

  )
}

export default Banner
