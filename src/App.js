import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyBFpoGpiWbhSw0LBaFJyI9RIr5Bl8XESLY",
  authDomain: "mrdonalds-3c6a6.firebaseapp.com",
  databaseURL: "https://mrdonalds-3c6a6-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-3c6a6",
  storageBucket: "mrdonalds-3c6a6.appspot.com",
  messagingSenderId: "244831872004",
  appId: "1:244831872004:web:dcf3cf53834dbb8bf90151"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
