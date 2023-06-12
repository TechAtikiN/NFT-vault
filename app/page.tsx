import { getCollections, urlFor } from '@/sanity/sanity-utils'

import Navbar from '@/components/global/Navbar'
import Link from 'next/link'

const Home = async () => {

  const collections: Collection[] = await getCollections()

  return (
    <div className='max-w-7xl mx-auto flex flex-col'>
      <Navbar />

      <main className='p-10 mt-5 shadow-2xl shadow-rose-400'>
        <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-4'>
          {collections.map((collection) => (
            <Link href={`/nft/${collection.slug.current}`}>
              <div className='flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105'>
                <img className='h-96 w-60 rounded-2xl object-cover' src={urlFor(collection.mainImage).url()} alt='main-image' />

                <div className='p-5'>
                  <h2 className='text-3xl'>{collection.title}</h2>
                  <p className='mt-2 text-sm text-gray-200'>{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
