import styled from 'styled-components';
import { shop } from "../data1";
import { mobile } from "../responsive";
import Shope from "./Shope";

const Container = styled.div`
    padding: 20px;
    display:flex;
    justify-content: space-between;
    width: 100%;
    ${mobile({ marginTop: "80px" })}
`

const ShopCards = () => {
  return (
    <Container>
      {shop.map(item => (
        <Shope item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default ShopCards;