import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import debounce from 'lodash.debounce'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Layout } from '../components/Layouts'
import { PostList } from '../components/PostList'
import { UseCard } from '../components/useCard'
import useDebounce from '../hooks/useDebounce'
import { InputContainer, InputHeader } from '../styles/pages/home.styles'

const GITHUB_USER_NAME = "EvanderInacio"
const GITHUB_REPOSITORY = "EvanderInacio/Github-Blog"
interface User {
  name: string;
  blog: string;
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
  const [search, setSearch] = useState('')
  const debounceSearch = useDebounce(search)
  async function fetchPosts(q: string) {
    const { data } = await axios.get(`https://api.github.com/search/issues`, {
      params: { q: `repo:${GITHUB_REPOSITORY} ${q}` },
    })
    return data
  }

  const { data } = useQuery(["post", debounceSearch], () => fetchPosts(debounceSearch))

  return (
    <div>
      <Header />
      <Layout>
        <UseCard user={user}/>
        <InputContainer>
          <InputHeader>
            <h3>Publicações</h3>

            <span>{data?.total_count} publicações</span>
          </InputHeader>

          <input 
            type="text" 
            placeholder='Buscar conteúdo' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputContainer>

        <PostList posts={data?.items} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`https://api.github.com/users/${GITHUB_USER_NAME}`)

  const user = {
    name: data.name,
    blog: data.blog,
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
