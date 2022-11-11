import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import CRUD from './components/CRUD';

const usuario = [
  {
    email: 'saulkjh1227@gmail.com',
    password: 'admin'
  },

  {
    email: 'saulm.f12@gmail.com',
    password: '12345'
  },

  {
    email: 'JuanPedro@gmail.com',
    password: '12345'
  }
];

function App() {

  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: 'Saul',
      lastName: 'Marte',
      email: 'saulm.f12@gmail.com',
      mobile: '809458993',
    },
    {
      id: 1,
      name: 'Bernardino',
      lastName: 'Marte Romero',
      email: 'bmarte05@gmail.com',
      mobile: '8096048555',
    },
    {
      id: 2,
      name: 'Juana',
      lastName: 'Tavarez',
      email: 'aTavarez@gmail.com',
      mobile: '8095678993',
    },
    {
      id: 3,
      name: 'Lily',
      lastName: 'Montero',
      email: 'Lily_Motero@gmail.com',
      mobile: '8497539512',
    },
  ])
  const [isLogged, setisLogged] = useState(false)
  const handleIsLogged = () => {

  }

  return (
    <div className="App">
      {
        isLogged
          ?
          <CRUD contacts={contacts} setContacts={setContacts} />
          :
          <Login
            setisLogged={setisLogged}
            user={usuario}
          />
      }
    </div>
  )
}

export default App
