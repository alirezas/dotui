import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

const Category = defineNestedType(() => ({
  name: 'Category',
  fields: {
    slug: { type: 'string', required: true },
    title: { type: 'string', required: true }
  }
}))

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/[^_]*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    section: {
      type: 'nested',
      of: Category
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/docs/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism]
  }
})
