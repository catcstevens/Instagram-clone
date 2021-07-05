import React from 'react'
import { firebase, FieldValue } from './lib/firebase'
import FirebaseContext from './context/firebase'
import './App.css';

function App() {
  return (
    
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
       <h1 className='text-red-500'>“Like everything else, Fletcher. Practice.”</h1>
    </FirebaseContext.Provider>
     
    
  );
}

export default App;
