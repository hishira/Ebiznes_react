import React from 'react';

import Container from '@material-ui/core/Container';
import {inject,observer} from "mobx-react";

import SocialLoginButton from "./SocialLoginButton";

function SignIn(props) {
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <SocialLoginButton provider={"google"} title="Login with google"/>
                    <SocialLoginButton provider={"facebook"} title="Login with facebook"/>
                <SocialLoginButton provider={"github"} title="Login with github"/>
            </div>
        </Container>
    );
}
export default inject(stores => ({
    userStore: stores.userStore
}))(observer(SignIn))