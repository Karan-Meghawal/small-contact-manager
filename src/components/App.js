import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header'
import Contact from './Addcontact'
import Contactlist from './Contactlist'

function App() {
   const [contacts,setcontacts] = useState([])
   const LOCAL_STORAGE_KEY = "contact"
   
   const AddcontactHandler = (contact)=>{
    console.log(contact)
    setcontacts([...contacts,contact])

  }

   useEffect(()=>{
    const retContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retContact){ setcontacts(retContact)}
    
   },[])
   useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
   },[contacts])

  
  
 
  
  return (
    <div className='ui container'>
      <Header />
      <Contact contactHandler={AddcontactHandler} />
      <Contactlist contact={contacts} />
    </div>
  );
}

export default App;
