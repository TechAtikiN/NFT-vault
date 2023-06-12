const collection = {
  name: 'collection',
	title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      description: 'Enter title of the NFT Drop',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      description: 'Enter description of the NFT Drop',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'nftCollectionName',
      description: 'Enter name of the NFT Collection',
      title: 'NFT Collection Name',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nftCollectionName',
        maxLength: 96,
      }
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: [{ type: 'creator' }]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
     },
    // {
    //   name: 'previewImage',
    //   title: 'preview Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true
    //   }
    // },
  ]
}
export default collection