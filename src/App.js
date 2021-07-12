import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Chat from './components/Chat';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import SumaGauss from './components/SumaGauss';





function App() {
  return (
    <>
<Navbar></Navbar>
<Header></Header>
<MessengerCustomerChat pageId="107222084970997" appId="1244219119364963"/>
<Chat></Chat>
    </>
  );
}

export default App;