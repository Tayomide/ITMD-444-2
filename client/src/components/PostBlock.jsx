import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client';
import { UpdateViewCount } from '../configs/mutations';
import styled from 'styled-components';

const PostBlock = ({ id, title, viewCount, updatedAt, author }) => {
  const formatDate = (date) => {
    const dateObj = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const niceDate = dateObj.toLocaleDateString('en-US', options);
    return niceDate;
  };

  const [vote, setVote] = useState(viewCount)
  const [updateViewCount] = useMutation(UpdateViewCount, {
    variables: { id },
    onCompleted: () => setVote(prev => prev+1),
  })

  return (
    <Container>
      <a href={`/post/${id}`}>{title}</a>
      <span> by <a href={`/user/${author?.id}`}>{author?.name || 'Unknown'}</a></span>
      <div className='meta'>
        <p>
          {vote}
          <button className='up' onClick={() => updateViewCount()}>
            &#9207;
          </button>
        </p>
        <p>{formatDate(updatedAt)}</p>
      </div>
    </Container>
  )
}

export default PostBlock

const Container = styled.li`
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
    button{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 2em;
      width: 2em;
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: #9e9eff;
      font-size: 1em;
      &.down{
        transform: translateY(-0.08em);
        color: #ff9e9e;
      }
      &.up{
        transform: rotate(180deg) translateY(-0.25em);
      }
    }
  }
`