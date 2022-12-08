import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

function Card() {
  return (
    <CardContainer>
          <ImageBackground src={'https://cdn.pixabay.com/photo/2020/06/12/19/02/artificial-intelligence-5291510_960_720.jpg'}/>
        <Content>
              <UserInfo>
                  <UserPicture src="https://avatars.githubusercontent.com/u/19286049?v=4" />
                  <div>
                      <h4>Raphael Calasso</h4>
                      <p>Há 18 minutos</p>
                  </div>
              </UserInfo>
            <PostInfo>
                <h4>Projeto curso HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp
                    Global avanade... <strong>Saiba mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 8
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card
