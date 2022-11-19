import MainLayout from 'components/layouts/MainLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { allDocs, Doc } from 'contentlayer/generated'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Preview from 'components/Preview'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc: Doc | undefined = allDocs.find((doc) => doc._raw.flattenedPath === params?.slug)
  return {
    props: {
      doc
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allDocs.map((doc) => doc.url)
  return {
    paths,
    fallback: false
  }
}

type Props = {
  doc: Doc
}

const Docs: NextPageWithLayout<Props> = ({ doc }) => {
  const MDXContent = useMDXComponent(doc.body.code)
  return (
    <>
      <Head>
        <title>{doc.title}</title>
      </Head>
      <article className="prose-slate max-w-full prose">
        <span>{doc.section?.title}</span>
        <h1>{doc.title}</h1>
        <MDXContent components={{ Preview }} />
      </article>
    </>
  )
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Docs
