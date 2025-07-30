import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BlanchardOrtho',

  projectId: 'sln6nq50',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Articles sorted by publishedAt date (newest first)
            S.listItem()
              .title('Articles')
              .child(
                S.documentTypeList('article')
                  .title('Articles')
                  .filter('_type == "article"')
                  .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
              ),
            // Media library
            S.listItem()
              .title('Media')
              .child(
                S.documentTypeList('sanity.imageAsset')
                  .title('Media Library')
                  .filter('_type == "sanity.imageAsset"')
                  .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
              ),
            // Other document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['article'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
