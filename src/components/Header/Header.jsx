import './Header.css';
import React from 'react';
import ChoiceUser from '../ChoiceUser/ChoiceUser';
import { TranslationContext } from '../../contexts/TranslationContext'

function Header({
  listUsers,
  setCurrentUser,
}) {
  const { currentUser } = React.useContext(TranslationContext);

  function handleClickButton(evt) {
    if (currentUser === '') {
      const form = evt.target.form;
      const user = form.querySelector('.header__select').value;
      setCurrentUser(user);
    } else setCurrentUser('');
  }

  return (
    <>
      <header className="header">
        <form className='header__form'>
          {(!currentUser)
            ? <p><select className="header__select">
              {listUsers.map(user => {
                return (<ChoiceUser
                  key={user.id * 12}
                  title={user.title}
                />)
              })}
            </select></p>
            : <p>{currentUser}</p>}
          <button
            className='header__button'
            type={'button'}
            onClick={handleClickButton}
          >{(currentUser === '') ? "Войти" : "Выйти"}</button>
        </form>
      </header>
    </>
  );
}

export default Header;