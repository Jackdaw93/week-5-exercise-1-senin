import React, { useState } from "react";

import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  max-width: 500px;
  padding: 4px;
  margin-top: 20px;
  border: 1px solid green;
  border-radius: 5px;
  box-shadow: -3px -3px 2px rgba(0, 0, 0, 0.4);
  padding: 10px;
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 4px;
  margin-top: 20px;
  border: 1px solid green;
  border-radius: 4px;
  box-shadow: -3px -3px 2px rgba(0, 0, 0, 0.4);
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
`;

const Input = styled.input`
  ${media.lessThan("576px")`
    width: 300px;
  `}
  width: 500px;
  padding: 10px 20px;
  text-align: center;
  border: 1px solid green;
  border-radius: 5px;
  font-size: 15px;
`;

const Avatar = styled.div`
  & img {
    height: 200px;
    width: 200px;
    border-radius: 100%;
  }
`;

function UserGithub() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  function handleChange(event) {
    setUsername(event.target.value);
  }

  // Async await
  async function handleSubmit(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <h3 style={{ textAlign: "center" }}>Fetch Data User GitHub</h3>
        <form onSubmit={handleSubmit}>
          <Div>
            <Input
              type="text"
              name="username"
              id="username"
              value={username}
              placeholder="Input username github and press enter..."
              onChange={handleChange}
            ></Input>
          </Div>
          <Div>
            <Avatar>
              <img src={data.avatar_url} alt="Avatar"></img>
            </Avatar>
          </Div>
          <Div>
            <h3>{data.name}</h3>
          </Div>
          <Div>
            <p>{data.bio}</p>
          </Div>
          <hr />
          <Div style={{ flexWrap: "wrap" }}>
            <Content style={{ marginRight: "7px" }}>
              <Div style={{ flexDirection: "column" }}>
                <h3 style={{ textAlign: "center" }}>{data.followers}</h3>
                <h5>Followers</h5>
              </Div>
            </Content>
            <Content style={{ transform: "scale(1.09)" }}>
              <Div style={{ flexDirection: "column" }}>
                <h3 style={{ textAlign: "center" }}>{data.public_repos}</h3>
                <h5>Repository</h5>
              </Div>
            </Content>
            <Content style={{ marginLeft: "7px" }}>
              <Div style={{ flexDirection: "column" }}>
                <h3 style={{ textAlign: "center" }}>{data.following}</h3>
                <h5>Following</h5>
              </Div>
            </Content>
          </Div>
        </form>
      </Container>
    </div>
  );
}

export default UserGithub;
