import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopCards from '../components/ShopCards';

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
`;

const ShopCard = styled.div`
    box-shadow: 0 2px 20px color:gray300;
    border-radius: 20px;
    display: flex;
    flex-direction: absolute;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;

    &:hover{
      transform:scale(1.02);
    }
`;

const Wrapper = styled.div`
    display: grid;
    gap: 10px;
    justify-content: center;
`;
const ShopImg = styled.image`
  height: 50%;
  width: 50%;
  object-fit: cover;
`;


const Info = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex:
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
    border: 2px solid color:grey;
    background: transparent;
    color: black;
    border-radius: radius;
    transition: background 200ms ease-in, color 200ms ease-in;
  
    &:hover{
    background: black;
    color:white;
  }
    ${mobile({ fontSize: "12px", marginBottom: "20px" })}
`;

const ShopperStore = () => {
  return (
    <Container>
      <Navbar />
      <Title>Our Stores</Title>
      <Wrapper>
        <ShopCards />
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default ShopperStore
