import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date-formatter'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'
import useSWR, { SWRConfig } from 'swr'

const fetcher = (url: string) => fetch(url).then(response => response.json())

const Contents = () => {
  const { data } = useSWR('/', fetcher);
  return (
    data.map(({ id, date, title }) => {
      return (
        <li key={id}>
          <Link href='/posts/[id]' as={`/posts/${id}`}>
            {title}
          </Link>
          <br />
          {id}
          <br />
          <Date dateString={date}></Date>
        </li>
      )
    })
  )
}


const Home: NextPage = ({ fallback }) => {

  return (
    <SWRConfig value={{ fallback }}>
      <div className={styles.container}>
        <Head>
          <title>블로그</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Markdown Blog
          </h1>
          <ul>
            <Contents />
          </ul>
        </main>
      </div>
    </SWRConfig>
  )
}

export default Home

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      fallback: {
        '/': allPostsData
      }
    }
  }
}
