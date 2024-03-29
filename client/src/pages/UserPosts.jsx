import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetPostsByUser } from '../configs/queries'; // Assume the query is defined externally
import styled from 'styled-components';

const UserPosts = () => {
  const params = useParams();
  const userId = params.userId;
  const { loading, error, data } = useQuery(GetPostsByUser, {
    variables: { userId },
  });

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
      <h1>{data.draftsByUser[0]?.author?.name}'s Profile</h1>
      <p>Email: {data.draftsByUser[0]?.author?.email}</p>
      <h2>User Posts</h2>
      <ul>
        {data.draftsByUser.map(({ id, title, viewCount, updatedAt, author }) => (
          <li key={id}>
            <a href={`/post/${id}`}>{title}</a>
            <div className='meta'>
              <p>{viewCount} upvotes</p>
              <p>{formatDate(updatedAt)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UserPosts;

const Container = styled.div`
  h1, h2, > p{
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
