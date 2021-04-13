import styled from "styled-components";
import Head from 'next/head';
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {
    const signIn = () => {
            auth.signInWithPopup(provider).catch(alert);
    }
    return (
        
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
                <Button variant="outlined" onClick={signIn}>Sign in with google</Button>
                <Button variant="outlined">Sign in with email</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height:100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
     
`;

const Logo = styled.img`
    height: 200px;
    width: 300px;
`;