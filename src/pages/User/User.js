import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// import avatar from "logo.svg";

const DivContainerOne = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid black;
`;

const Button = styled.button`
  background-color: aqua;
  border: none;
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
  a {
    text-decoration: none;
    color: black;
  }
`;

function User() {
  const [username, setUser] = useState("");

  function handleChange(event) {
    setUser(event.target.value);
  }
  //   console.log(username);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(username);
  }

  return (
    <div style={{ margin: "40px" }}>
      <DivContainerOne>
        <form onSubmit={handleSubmit}>
          <Input
            id="username"
            name="username"
            placeholder="Type username here .."
            onChange={handleChange}
          />
          <Button>
            <Link to={`/user-detail/${username}`}>Search</Link>
          </Button>
        </form>
      </DivContainerOne>
    </div>
  );
}

export default User;
