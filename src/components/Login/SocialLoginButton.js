import React from 'react';
import {authenticate} from "../../Api/AuthApi";
import {inject, observer} from "mobx-react";
import Button from "@material-ui/core/Button";
import decode from 'jwt-decode'
let existingWindow = null;

function SocialLoginButton(props) {

    function handleAuthentication() {
        window.socialProviderCallback = async function (socialProvider, queryParams) {
            console.log(socialProvider, queryParams)
            let user = await authenticate(socialProvider, queryParams);
            window.localStorage.setItem("user", JSON.stringify(user))
            console.log(new Date(user['expiry+time']).getUTCDate())
            let confirm = user.token && decode(user.token)
            console.log(confirm)
            console.log(new Date(new Date() + confirm.exp).toISOString())
            props.userStore.setUser(user);
        };

        if (existingWindow) {
            existingWindow.close();
        }


        existingWindow = window.open(
            `http://localhost:9000/authenticate/${props.provider}`,
            'Authentication',
            'scrollbars=yes'
        );
    }

    return (
        <Button style={{margin: "1rem"}} variant="contained" color="secondary"
                onClick={handleAuthentication}
        >
            {props.title}
        </Button>
    );
}

export default inject(stores => ({
    userStore: stores.userStore
}))(observer(SocialLoginButton))