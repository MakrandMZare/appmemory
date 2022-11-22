import styled from 'styled-components';
import { product } from "../data1";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    ${mobile({ marginTop: "80px" })}
`

const Products = () => {
  return (
    <Container>
      {product.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products;
