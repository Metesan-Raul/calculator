import { render } from '@testing-library/react'
import React from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends React.Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''

    }
    responseFacebook = response => {
        console.log(response);
    }
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
                fbContent = null;
        } else{
            <FacebookLogin
            appId="1244219119364963"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook} />
        }
    return (
    <div>
    {fbContent}    
    </div>
    )
}
}


export default Facebook
