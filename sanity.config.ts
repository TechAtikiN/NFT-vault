import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'f8hj1eoj',
  dataset: 'production',
  title: 'NFTVault',
  apiVersion: '2023-03-04',
  basePath: '/admin',
  useCdn: process.env.NODE_ENV === 'production',
  plugins: [deskTool(), visionTool()],
  schema: {types: schemas}
})

export default config