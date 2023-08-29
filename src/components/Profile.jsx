import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState(undefined);
  const [userLogin, setUserLogin] = useState(false);
  function login(credential) {
    localStorage.setItem("google-auth", JSON.stringify({ token: credential }));
    setUserLogin(true);
  }

  function Details({ token }) {
    var decoded = jwt_decode(token);
    return (
      <div className="user-details">
        <h4>Name: {decoded.name}</h4>
        <h4>Email: {decoded.email}</h4>
      </div>
    );
  }

  useEffect(() => {
    if (localStorage.getItem("google-auth")) {
      async function Fetch() {
        setUser(await JSON.parse(localStorage.getItem("google-auth")));
      }
      Fetch();
    }
  }, [userLogin]);
  return (
    <Container>
      {user !== undefined ? (
        <Details className="user-details" token={user.token} />
      ) : (
        <>
          <div className="welcome">Welcome</div>
          <div className="login">
            <GoogleOAuthProvider clientId="521535153425-vk7c9lo2o9ip6m10edt7ej7evlit6nah.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  login(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  isolation: isolate;
  height: 92vh;
  display: flex;
  justify-content: center;
  z-index: -1;
  .welcome,
  .login {
    height: 20vh;
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 3rem;
    gap: 1rem;
    font-size: 1.8rem;
  }
  .welcome {
    background-color: #00152b;
    color: white;
    font-size: 1.3rem;
    border-bottom-left-radius: 0.5rem;
  }
  .login {
    background-color: yellow;
    border-bottom-right-radius: 0.5rem;
  }
`;
