import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetPostById } from '../configs/queries'; // Assume the query is defined externally
import styled from 'styled-components';

const PostDetail = () => {
  const params = useParams();
  const postId = params.postId;
  const { loading, error, data } = useQuery(GetPostById, {
    variables: { id: postId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {":("}</p>;
  const { title, content, author } = data.postById;

  return (
    <Container>
      <h1>{title}</h1>
      <p>by <a href={`/user/${author.id}`}>{author.name}</a></p>
      <p>{content}</p>
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
  }
`
