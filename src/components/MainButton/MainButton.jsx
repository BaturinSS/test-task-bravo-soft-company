import './MainButton.css';
import React from 'react';

function MainButton({
  isClickButton,
  setIsClickButton,
}) {
  function handleClickButtonForm() {
    setIsClickButton(false);
  }

  function handleClickButtonTable() {
    setIsClickButton(true);
  }

  return (
    <>
      <div className='main__block-button'>
        <button
          className={`main__button ${isClickButton ? '' : 'main__button_active'}`}
          type='button'
          onClick={handleClickButtonForm}
        >
          {'Подать заявку на документ'}
        </button>
        <button
          className={`main__button ${isClickButton ? 'main__button_active' : ''}`}
          type='button'
          onClick={handleClickButtonTable}
        >
          {'Посмотреть все заявки'}
        </button>
      </div>
    </>
  );
}

export default MainButton;