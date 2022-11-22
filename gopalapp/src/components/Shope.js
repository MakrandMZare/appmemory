import React from 'react';
import { shop } from "../data1";
import { mobile } from "../responsive";
import styled from 'styled-components';

const Container = styled.div`
    flex; 1;
    margin: 5px;
    min-width: 400px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: relative;
`;

const Card = styled.div`
overflow: hidden;
box-shadow: 0 2px 20px $clr-gray300;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
transition: transform 200ms ease-in;

&:hover{
  transform:scale(1.02);
}
`;

const Wrapper = styled.div`
display: grid;
grid-template-colums: repeat(auto-fit,minmax(320px, 280px));
gap: 30px;
justify-content: center;
`;
const ShopImg = styled.image`
height: 280px;
width: 100%;
object-fit: cover;
`;

const Info = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({ position: "relative", width: "100px" })}
`;
const ShopTitle = styled.h1`
padding: 20px;
${mobile({ marginBottom: "10px", fontSize: "12px" })}
`;

const ShopArea = styled.div`
padding: 0 20px;
${mobile({ marginBottom: "10px", fontSize: "12px" })}
`;
const Button = styled.button`
padding: 20px;
font-family: inherit;
font-weight: bold;
font-size: 14px;
margin: 20px;
border: 2px solid color: black;
background: transparent;
color: black;
border-radius: 25px;
transition: background 200ms ease-in, color 200ms ease-in;

&:hover{
background: gray;
color:white;
}
${mobile({ fontSize: "12px", marginBottom: "20px" })}
`;

const Shope = ({ item }) => {
  return (
    <Container>
      <Image src={item.ShopImg} />
            <Info>
                <Icon>
                    <ShoppingCartRounded />
                </Icon>
                <Icon>
                    <SearchRounded />
                </Icon>
                <Icon>
                    <FavoriteBorderRounded />
                </Icon>
            </Info>
    </Container>
  )
}

export default Shope;