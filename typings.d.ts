interface Image {
  asset: {
    url: string
  }
}

type Creator = {
  _id: string,
  name: string,
  address: string,
  slug: {
    current: string
  },
  image: Image,
  bio: string
}

type Collection = {
  _id: string,
  title: string,
  description: string,
  address: string,
  nftCollectionName: string,
  mainImage: Image,
  slug: {
    current: string
  },
  creator: Creator,
  mainImage: Image
}