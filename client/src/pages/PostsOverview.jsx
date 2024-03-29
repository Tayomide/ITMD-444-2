import { useQuery } from '@apollo/client';
import { GetPosts } from "../configs/queries"; // Assume queries are defined externally
import styled from 'styled-components';

const PostsOverview = () => {
  const { loading, error, data } = useQuery(GetPosts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {":("}</p>;

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const niceDate = dateObj.toLocaleDateString('en-US', options);
    return niceDate;
  };

  return (
    <Container>
      <h1>Posts</h1>
      <ul>
        {data.feed.map(({ id, title, viewCount, updatedAt, author }) => (
          <li key={id}>
            <a href={`/post/${id}`}>{title}</a>
            <span> by <a href={`/user/${author?.id}`}>{author?.name || 'Unknown'}</a></span>
            <div className='meta'>
              <p>{viewCount} views</p>
              <p>{formatDate(updatedAt)}</p>
            </div>
          </li>
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
    li {
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.87);
      padding: 1em;
      border-radius: 0.5em;
      & + li {
        margin-top: 1em;
      }
      a {
        text-decoration: none;
        font-weight: bold;
        color: #9e9eff;
        &:hover {
          text-decoration: underline;
        }
      }
      p{
        margin: 0;
      }
      .meta {
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin: 5px 0;
        gap: 1em;
      }
  }
  }
`
