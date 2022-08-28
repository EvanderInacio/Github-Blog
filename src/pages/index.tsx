import axios from 'axios'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { UseCard } from '../components/useCard'

const GITHUB_USER_NAME = "EvanderInacio"
interface User {
  name: string;
  company: string;
  bio: string;
  followers: number,
  url: string;
  avatar: string;
  login: string;
}

interface HomeProps {
  user: User;
}

export default function Home({ user }: HomeProps) {
  return (
    <div>
      <Header />
      <UseCard user={user}/>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`https://api.github.com/users/${GITHUB_USER_NAME}`)

  const user = {
    name: data.name,
    company: data.company,
    bio: data.bio,
    followers: data.followers,
    url: data.html_url,
    avatar: data.avatar_url,
    login: data.login
  }

  return {
    props: {
      user
    },
    revalidate: 60 * 60 * 3  // 3 hours
  }
}
