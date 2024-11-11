import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardSubtitle from 'react-bootstrap/esm/CardSubtitle';

const CardProduto = (props) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-DICjxVLBicBW_OyPWK10sikWzu5KHOPCw&s" />
      <Card.Body>
        <Card.Title>Nome Produtos: {props.nome} </Card.Title>
        <CardSubtitle className="mb-2 text-muted">Preço: {props.preco} 
        </CardSubtitle>
        <Card.Text> Descrição: {props.descricao} </Card.Text>
        <Card.Text> Categoria: {props.categoria} </Card.Text>

        <Card.Link href={`produtos/edicao/${props.id}`}>
        <Button variant="warning">Editar</Button>
        </Card.Link>

        <Card.Link href={`produtos/excluir/${props.id}`}>
        <Button variant="danger">Excluir</Button>
        </Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduto
