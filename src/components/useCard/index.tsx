import { Layout } from '../layouts'
import {
  UseCardContainer,
  UseCardContent,
  UseCardNameContainer
} from './styles'

export function UseCard() {
  return (
    <Layout>
      <UseCardContainer response={{
        "@initial" : "rowGap",
        "@md" : "columnGap",
        }}>
        <img src="https://github.com/EvanderInacio.png" alt="Foto de perfil" />
        <UseCardContent>
          <UseCardNameContainer>
            <h2>Evander Inácio</h2>
          </UseCardNameContainer>
        </UseCardContent>
      </UseCardContainer>
    </Layout>
  )
}
