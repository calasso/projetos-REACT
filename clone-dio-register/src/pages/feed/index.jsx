import React from 'react'
import Header from '../../components/Header'
import { Container, Column, Title, TitleHighlight } from './style'
import Card from './../../components/Card';
import UserInfo from '../../components/UserInfo';


function Feed() {
   return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
           <UserInfo nome="Raphael Calasso" image="https://avatars.githubusercontent.com/u/19286049?v=4" percentual={97} />
           <UserInfo nome="Raphael Calasso" image="https://avatars.githubusercontent.com/u/19286049?v=4" percentual={83} />
           <UserInfo nome="Raphael Calasso" image="https://avatars.githubusercontent.com/u/19286049?v=4" percentual={63} />
           <UserInfo nome="Raphael Calasso" image="https://avatars.githubusercontent.com/u/19286049?v=4" percentual={34} />
           <UserInfo nome="Raphael Calasso" image="https://avatars.githubusercontent.com/u/19286049?v=4" percentual={75} />
        </Column>

      </Container>
    </>
  )
}

export default Feed
