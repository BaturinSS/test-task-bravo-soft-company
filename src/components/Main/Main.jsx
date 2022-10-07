import './Main.css';
import React from 'react';
import { TranslationContext } from '../../contexts/TranslationContext';
import MainInfo from '../MainInfo/MainInfo';
import { manuals } from '../../db/manuals';

function Main() {
  const { currentUser } = React.useContext(TranslationContext);

  return (
    <>
      <main className='main'>
        {(currentUser === '')
          ? <p className='main__title'>{"Welcome !!!"}</p>
          : <MainInfo manuals={manuals} />}
      </main>
    </>
  );
}

export default Main;