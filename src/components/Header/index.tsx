import logoImg from '../../assets/logo.svg';
import '../Header/styles';
import { Container, Content } from '../Header/styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" >
          Nova Transação
      </button>
      </Content>
    </Container>
  )
}