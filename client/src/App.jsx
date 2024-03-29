import { Routes, Route } from 'react-router-dom'
import styled from "styled-components"
import Home from './pages/Home'
import UserPosts from './pages/UserPosts'
import PostDetail from './pages/PostDetail'
import PostsOverview from './pages/PostsOverview'

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/user/:userId" element={<UserPosts />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/posts" element={<PostsOverview />} />
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div``
