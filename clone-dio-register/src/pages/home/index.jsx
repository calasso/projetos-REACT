import React from 'react'
import { useNavigate  } from "react-router-dom";

import Header from '../../components/Header'
import bannerImage from '../../assets/banner.png'
import { Container, Title, TitleHighlight, TitletContent } from './style'
import Button from '../../components/Button'



function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br/>
            </TitleHighlight>
            o seu futuro global agora!             
          </Title>
          <TitletContent>
            Domine as tecnlogias usadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo com os melhores experts.
          </TitletContent>
          <Button title={'Começar agora'} variant='sec' onClick={handleClickSignIn}/>
        </div>
        <div>
          <img src={bannerImage} alt='Imagem Princial' />
        </div>
      </Container>
    </>
  )
}

export default Home