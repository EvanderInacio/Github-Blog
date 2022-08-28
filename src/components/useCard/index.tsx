import { FaGithub, FaBuilding, FaExternalLinkAlt, FaUserFriends } from 'react-icons/fa'

import { Layout } from '../layouts'
import {
  InfoCard,
  UserCardContainer,
  UserCardContent,
  UserCardNameContainer
} from './styles'

export function UseCard() {
  return (
    <Layout>
      <UserCardContainer response={{
        "@initial" : "rowGap",
        "@md" : "columnGap",
        }}>
        <img src="https://github.com/EvanderInacio.png" alt="Foto de perfil" />
        
        <UserCardContent>
          <UserCardNameContainer response={{
            "@initial" : "rowGap",
            "@md": "columnGap",
            }}
          > 
            <h2>Evander Inácio</h2>

            <a href="https://github.com/EvanderInacio" target="_blank" rel="noopener noreferrer">
              Github <FaExternalLinkAlt color="#3294F8" size="12px"/>
            </a>
          </UserCardNameContainer>

            <p>Desenvolvedor Front End.</p>

            <InfoCard
              response={{
                "@initial" : "rowGap",
                "@md" : "columnGap",
                }}
            >
              <span>
                <FaGithub size="18px" color="#3A536B"/>
                Evander Inácio
              </span>
              <span>
                <FaBuilding size="18px" color="#3A536B"/>
                NaN
              </span>
              <span>
                <FaUserFriends size="18px" color="#3A536B"/>
                175
              </span>
            </InfoCard>
         
        </UserCardContent>
      </UserCardContainer>
    </Layout>
  )
}
