import React from 'react'
import {Helmet} from 'react-helmet';

const SEO = () => {
    return (
        <div>
            <Helmet>
            <title> Calculatoare Științifice </title>
             <meta
             name="description"
             content="Calculatoare concepute pentru învățare, nu doar verificare!"/>
             <meta name="keywords"
             content="Pitagora, Gauss, Medie, Derivate, Funcții, Grafice"/>
            </Helmet>
        </div>
    )
}

export default SEO
