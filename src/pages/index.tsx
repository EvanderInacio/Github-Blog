import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { UseCard } from '../components/useCard'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <UseCard />
    </div>
  )
}

export default Home
