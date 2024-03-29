import React from 'react'
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <a href="/posts">Posts</a>
      <p>You can navigate to posts to see access other pages.</p>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  h1{
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
  a{
    text-decoration: none;
    font-weight: bold;
    color: #9e9eff;
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }
  p{
    font-size: .9em;
  }
`