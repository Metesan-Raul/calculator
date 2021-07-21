import { render } from '@testing-library/react'
import React from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends React.Component {
    render(){
        let fbContent;
            fbContent = (
            <FacebookLogin
            appId="1244219119364963"
            autoLoad={true}/>
            )
        
    return (
    <div>
    {fbContent}    
    </div>
    )
}
}


export default Facebook
