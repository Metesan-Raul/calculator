import { render } from '@testing-library/react'
import React from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends React.Component {
    responseFacebook = (response)=>{
        console.log(response);
    }
    render(){
        let fbContent;
            fbContent = (
                <FacebookLogin
                appId="142650981237803"
                fields="name,email,picture"
                autoLoad={true}
                callback={this.responseFacebook}/>
            )
        
    return (
    <div>
    {fbContent}    
    </div>
    )
}
}


export default Facebook
