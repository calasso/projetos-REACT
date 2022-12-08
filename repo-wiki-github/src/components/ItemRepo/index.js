import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <div className='div-img'>
        <img src={repo.owner.avatar_url}></img>
      </div>
      <div>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" rel='noreferrer' >Ver repositório</a>
        <a href='#' className='remover' rel='noreferrer'>Remover</a>
      </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
