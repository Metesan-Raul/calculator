import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Chat from './components/Chat';
import SumaGauss from './components/SumaGauss';
import AdSenseMonetization from './components/AdSense';
import Paypal from './components/Paypal';
import Analytics from './components/Analytics';
import SEO from './components/SEO'
import Facebook from './components/Facebook';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Calculator from './components/Calculator';
function App() {
return (
<>
<SEO></SEO>
<Navbar></Navbar>
<Header></Header>
<Calculator></Calculator>
<Chat></Chat>
<Paypal></Paypal>
<Facebook></Facebook>
<Analytics></Analytics>

</>
)}

export default App;