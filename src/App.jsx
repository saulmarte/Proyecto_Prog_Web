import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';

const user = [
  {
    email: 'hamiltonevertz99@gmail.com',
    password: 'hola123'
  },

  {
    email: 'evertzhamilton@gmail.com',
    password: '12345'
  },

  {
    email: 'evertzhamilton1326@gmail.com',
    password: '123456'
  }
];
function App() {

  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: 'Evertz',
      lastName: 'Hamilton',
      email: 'Evertzhamilton1326@gmail.com',
      mobile: '0000000000',
    },
    {
      id: 1,
      name: 'Milsis',
      lastName: 'Sanchez',
      email: 'mssz123@gmail.com',
      mobile: '',
    },
    {
      id: 2,
      name: 'Ana',
      lastName: 'Vasquez',
      email: 'aNavasqueZ@gmail.com',
      mobile: '',
    },
    {
      id: 3,
      name: 'Norma',
      lastName: 'Montero',
      email: 'norma.otero@gmail.com',
      mobile: '',
    },
    {
      id: 4,
      name: 'evertz',
      lastName: 'Hamilton',
      email: 'Evertzhamilton1326@gmail.com',
      mobile: '',
    },
    {
      id: 5,
      name: 'Luis',
      lastName: 'Hernandez',
      email: 'hernan22@gmail.com',
      mobile: '',
    },
    {
      id: 6,
      name: 'evertz',
      lastName: 'Hamilton',
      email: 'Evertzhamilton1326@gmail.com',
      mobile: '',
    },
    {
      id: 7,
      name: 'Juan',
      lastName: 'Mateo',
      email: 'mateo57@gmail.com',
      mobile: '',
    }
  ])
  const [isLogged, setisLogged] = useState(false)
  const handleIsLogged = () => {

  }

  return (
    <div className="App">
      {
        isLogged
          ?
          <Home contacts={contacts} setContacts={setContacts}/>
          :
          <Login
            setisLogged={setisLogged}
            user={user}
          />
      }
    </div>
  )
}

export default App
