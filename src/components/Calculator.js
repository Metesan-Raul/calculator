import React from 'react';
import Iframe from 'react-iframe';

 
const Calculator = () => {
    return (
<>
<section id='I-IV'>
    <Iframe
    src="unitatidemasura.html"
    className="iframe"/>
    <Iframe
    src="sumagauss.html"
    className="iframe"/>
</section>
<section  id='V-VIII'>
    <Iframe
    src="mediascolara.html"
    className="iframe"/>
    <Iframe
    src="ipotenuza.html"
    className="iframe"/>
</section>
<section  id='IX-XII'>
    <Iframe
    src="studiereafunctiilor.html"
    className="iframederivata"/>
    <Iframe
    src="derivata.html"
    className="iframe"/>
</section>
<section  id='XII+'>
    <Iframe
    src="RSAcalculator.html"
    className="iframe"/>
</section>
<section  id='jocuri'>
    <Iframe
    src="snake.html"
    className="iframesnake"/>
</section>
</>
    )
}


export default Calculator