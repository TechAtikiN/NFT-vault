import Navbar from '@/components/global/Navbar'

const NFTDropPage = () => {

  return (
    <div className=''>
      <Navbar />

      <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* left  */}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6 h-full mt-6'>

          {/* content  */}
          <div className='flex flex-col text-left leading-tight pb-10'>
            <p className='text-red-100 text-xl font-semibold'>Unevil</p>
            <p className='text-white font-bold text-[30px] lg:text-[75px]'>The Ultimate NFT Drop Experience</p>
            <p
              className='text-gray-200 text-lg mt-5'
            >
              Embark on the ultimate NFT drop experience and unlock a world of rare digital treasures, where art, technology, and ownership converge.
            </p>
            <p className='text-yellow-500 text-xl mx-auto my-10 font-bold'>13 / 21 NFTs claimed</p>

            {/* mint button  */}
            <button className='sign-in w-full'>Mint NFT (0.01 ETH)</button>
          </div>
        </div>


        {/* right */}
        <div className='lg:col-span-4'>
          <div className='flex flex-col items-center justify-center py-2'>
            <div className='bg-gradient-to-br from-yellow-400 to-red-500 p-2 rounded-xl'>
              <img
                className='w-44 rounded-xl object-cover lg:h-[450px] lg:w-[350px]'
                alt='thumbnail'
                src='https://media.voguebusiness.com/photos/61b8dfb99ba90ab572dea0bd/2:3/w_1920,c_limit/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg'
              />
            </div>
            <div className='text-center p-5 space-y-2'>
              <h2 className='text-3xl font-bold text-white'>VAULT Apes</h2>
              <h2 className='text-lg text-pink-200 font-semibold'>A collection of NFTVault Apes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage
