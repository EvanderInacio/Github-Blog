/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaComment,
  FaArrowLeft,
  FaCalendarDay
} from 'react-icons/fa'

import {
  InfoCard,
  UserCardContainer,
  UserCardContent,
  UserCardNameContainer
} from './styles'

interface PostCardProps {
  title: string
  url: string
  comments: number
  date: string
  username: string
}

export function PostCard({
  title,
  url,
  comments,
  date,
  username
}: PostCardProps) {
  return (
    <UserCardContainer
      response={{
        '@initial': 'rowGap',
        '@md': 'columnGap'
      }}
    >
      <UserCardContent>
        <Link href="/">
          <a>
          <FaArrowLeft color="#3294F8" size="12px" /> Voltar 
          </a>
        </Link>

        <UserCardNameContainer
          response={{
            '@initial': 'rowGap',
            '@md': 'columnGap'
          }}
        >
          <h2>{title}</h2>

          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver no Github <FaExternalLinkAlt color="#3294F8" size="12px" />
          </a>
        </UserCardNameContainer>

        <InfoCard
          response={{
            '@initial': 'rowGap',
            '@md': 'columnGap'
          }}
        >
          <span>
            <FaGithub size="18px" color="#3A536B" />
            {username}
          </span>
          <span>
            <FaCalendarDay size="18px" color="#3A536B" />
            {date}
          </span>
          <span>
            <FaComment size="18px" color="#3A536B" />
            {`${comments} comentário(s)`}
          </span>
        </InfoCard>
      </UserCardContent>
    </UserCardContainer>
  )
}
