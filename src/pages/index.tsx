import axios from 'axios'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Layout } from '../components/Layouts'
import { UseCard } from '../components/useCard'
import { InputContainer, InputHeader } from '../styles/pages/home.styles'

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
      <Layout>
        <UseCard user={user}/>
        <InputContainer>
          <InputHeader>
            <h3>Publicações</h3>

            <span>6 publicações</span>
          </InputHeader>

          <input type="text" placeholder='Buscar conteúdo' />
        </InputContainer>
      </Layout>
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
