import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
export const config = {
    projectId: 'f8hj1eoj',
    dataset: 'production',
    apiVersion: '2023-03-04',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export async function getPets() {
  return sanityClient.fetch(
    groq`*[_type == "pet"]{
      _id,
      name,
      type,
      title,
      _createdAt
    }`
  )
}

export async function getCollections() {
  const collections = sanityClient.fetch(
    groq`*[_type == "collection"]{
      _id,
      title,
      description,
      address,
      nftCollectionName,
      mainImage {
        asset
      },
      slug {
        current
      },
      creator->{
        _id,
        name,
        address,
        slug {
          current
        }
      }
    }`
  )
  return collections
}

export async function getNFT(slug: string) {
  const collection = sanityClient.fetch(
    groq`*[_type == "collection" && slug.current == $id][0]{
      _id,
      title,
      description,
      address,
      nftCollectionName,
      mainImage {
        asset
      },
      slug {
        current
      },
      creator->{
        _id,
        name,
        address,
        slug {
          current
        }
      }
    }`,
    { id: slug })
  if (!collection) {
    return {
      notFound: true,
    }
  }
  return collection
}

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source) 