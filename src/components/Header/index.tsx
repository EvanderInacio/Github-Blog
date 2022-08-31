import Image from "next/image";
import { HeaderContainer } from "./styles";
import Logo from "../../../public/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Github Blog" width={'150px'}/>
    </HeaderContainer>
  )
}