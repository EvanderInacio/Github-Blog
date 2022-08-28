import { FaGithub, FaBuilding, FaExternalLinkAlt, FaUserFriends } from 'react-icons/fa'

import { Layout } from '../Layouts'
import {
  InfoCard,
  UserCardContainer,
  UserCardContent,
  UserCardNameContainer
} from './styles'

interface User {
  name: string;
  company: string;
  bio: string;
  followers: number,
  url: string;
  avatar: string;
  login: string;
}

interface UserCardProps {
  user: User;
}

export function UseCard({ user }: UserCardProps) {
  return (
    <Layout>
      <UserCardContainer response={{
        "@initial" : "rowGap",
        "@md" : "columnGap",
        }}>
        <img src={user.avatar} alt={user.name} />
        
        <UserCardContent>
          <UserCardNameContainer response={{
            "@initial" : "rowGap",
            "@md": "columnGap",
            }}
          > 
            <h2>{user.name}</h2>

            <a href={user.url} target="_blank" rel="noopener noreferrer">
              Github <FaExternalLinkAlt color="#3294F8" size="12px"/>
            </a>
          </UserCardNameContainer>

            <p>{user.bio}</p>

            <InfoCard
              response={{
                "@initial" : "rowGap",
                "@md" : "columnGap",
                }}
            >
              <span>
                <FaGithub size="18px" color="#3A536B"/>
                {user.name}
              </span>
              <span>
                <FaBuilding size="18px" color="#3A536B"/>
                {user.company}
              </span>
              <span>
                <FaUserFriends size="18px" color="#3A536B"/>
                {user.followers}
              </span>
            </InfoCard>
         
        </UserCardContent>
      </UserCardContainer>
    </Layout>
  )
}
