import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date-formatter'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>블로그</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => {
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
          })}
        </ul>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}