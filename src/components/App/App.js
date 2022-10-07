import './App.css';
import users from '../../db/users';
import React from 'react';
import { TranslationContext } from '../../contexts/TranslationContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [listUsers, setListUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    setListUsers(users);
  }, [])

  return (
    <>
      <TranslationContext.Provider value={{ currentUser }}>
        <Header
          listUsers={listUsers}
          setCurrentUser={setCurrentUser}
        />
        <Main />
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
