import { useQuery } from '@apollo/client';
import { GetPosts } from "../configs/queries"; // Assume queries are defined externally
import styled from 'styled-components';
import PostBlock from '../components/PostBlock';

const PostsOverview = () => {
  const { loading, error, data } = useQuery(GetPosts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {":("}</p>;

  return (
    <Container>
      <h1>Posts</h1>
      <ul>
        {data.feed.map((post) => (
          <PostBlock {...post} key={post.id} />
        ))}
      </ul>
    </Container>
  );
};

export default PostsOverview;

const Container = styled.div`
  h1{
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
  ul {
    list-style: none;
    padding: 0;
    width: 80vw;
    margin: 0 auto;
  }
`
