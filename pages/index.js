import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Enncode IT Consultants</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Enncode IT Consultants" />
        <p className="description">
          <code>Site under construction</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
