import React from 'react'
import './style/Product.scss'
const Product = ({data}) => {

  return (
    <div className="product-box">
      <h1 className="title">{data.nome}</h1>
      <div className="images-box">
        {data.fotos.map(image => (
            <img className="image" style={{
              width: '100%',
              maxWidth: '300px',
            }} key={image.titulo} src={image.src} alt={image.titulo}/>
        ))}
      </div>
      <p>{data.descricao}</p>
      <h3> R$ {data.preco}</h3>
    </div>
  )
}

export default Product
