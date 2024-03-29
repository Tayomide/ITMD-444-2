import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GetPostById } from '../configs/queries';
import { DeletePostById } from '../configs/mutations';

import styled from 'styled-components';

const PostDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const postId = params.postId;
  const { loading, error, data } = useQuery(GetPostById, {
    variables: { id: postId },
  });
  const [deletePost] = useMutation(DeletePostById, {
    variables: { id: postId },
    onCompleted: () => navigate('/posts'),
  })
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {":("}</p>;
  const { title, content, author } = data.postById;

  return (
    <Container>
      <h1>{title}</h1>
      <p>by <a href={`/user/${author.id}`}>{author.name}</a></p>
      <p>{content}</p>
      <button onClick={deletePost}>Delete</button>
      <a href='/posts' className='small'>Back to posts</a>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  a{
    text-decoration: none;
    font-weight: bold;
    color: #9e9eff;
    &:hover {
      text-decoration: underline;
    }
    &.small{
      font-size: .9em;
      display: block;
      margin-top: 1em;
    }
  }
  div{
    margin-top: 1em;
  }
  button{
    font-size: 1em;
    border: 1px solid rgba(255, 255, 255, 0.87);
    padding: .5em;
    border-radius: 0.5em;
    color: #ff9e9e;
    background-color: transparent;
    cursor: pointer;
    display: block;
    margin-top: 1em;
    &:hover{
      background-color: #ff9e9e;
      color: black;
    }
  }
`
