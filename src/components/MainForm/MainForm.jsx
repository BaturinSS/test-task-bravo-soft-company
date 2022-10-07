import './MainForm.css';

function MainForm({ happenedSubmit, message }) {
  return (
    <>
      <form
        className='main__form'
        onSubmit={happenedSubmit}
      >
        <p>{message}</p>
        <input
          className='main__form-input'
          type={'text'} />
        <button
          className='main__form-button'
          type={'submit'}
        >
          {'Отправить'}
        </button>
      </form>
    </>
  );
}

export default MainForm;