import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DivContainerTwo = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DivContainerThree = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid black;
`;

const H3 = styled.h3`
  font-weight: bold;
`;

const P = styled.p`
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivAvatar = styled.div`
  width: 300px;
  & img {
    margin: 0 auto;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    object-fit: cover;
  }
`;

function UserDetails() {
  const { username } = useParams();

  const [data, setData] = useState({});

  // Async await
  const fetchDetail = useCallback(async () => {
    const url = await `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }, [username]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return (
    <div>
      <DivContainerTwo>
        <DivAvatar>
          <img src={data.avatar_url} alt="Avatar" />
          <H3>{data.name}</H3>
          <P>{data.bio}</P>
        </DivAvatar>
      </DivContainerTwo>
      <DivContainerThree>
        <Column>
          <H3> {data.followers}</H3>
          <P>Followers:</P>
        </Column>
        <Column>
          <H3>{data.public_repos}</H3>
          <P>Repositoris:</P>
        </Column>
        <Column>
          <H3>{data.following}</H3>
          <P>Following:</P>
        </Column>
      </DivContainerThree>
    </div>
  );
}

export default UserDetails;
