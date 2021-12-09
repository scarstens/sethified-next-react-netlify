import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Seth</b>. I'm a software engineer and manager. You can find me on <a href="https://github.com/scarstens">Github</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h2>
          <Link href="/posts/first-post/">My First Blog Post</Link>
        </h2>
      </section>
    </Layout>
  )
}
