import './MainInfo.css';
import React from 'react';
import MainButton from '../MainButton/MainButton';
import MainForm from '../MainForm/MainForm';
import MainTable from '../MainTable/MainTable';
import { TranslationContext } from '../../contexts/TranslationContext'

function MainInfo({ manuals }) {
  const [isClickButton, setIsClickButton] = React.useState(false);
  const [docs, setDoc] = React.useState(manuals);
  const { currentUser } = React.useContext(TranslationContext);
  const [message, setMessage] = React.useState('');

  function sortArray(arr) {
    const sortFunction =
      function SortArray(x, y) {
        if (x.quantity > y.quantity) return -1;
        if (x.quantity < y.quantity) return 1;
        return 0;
      };

    return arr.sort(sortFunction);
  }

  function countingNumberIdentical(arr) {
    arr.forEach((doc) => {
      doc.quantity = arr.filter((el) => el.manual === doc.manual).length;
    })
  }

  function removingDuplicates() {
    let newDocs = [];

    manuals.forEach((doc) => {
      if (newDocs.length === 0) {
        newDocs.push(doc);
      } else {
        if (newDocs.find(el => el.manual === doc.manual)) return;
        newDocs.push(doc);
      }
    })

    return newDocs;
  }

  React.useEffect(() => {
    countingNumberIdentical(docs);
    setDoc(sortArray(removingDuplicates()));
  }, [])

  function happenedSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const input = form[0].value;
    if (manuals.find(el => ((el.designer === currentUser) & (el.manual === input)))) {
      setMessage('Вы уже отправляли заявку на этот документ, она уже была учтена.')
      setTimeout(() => setMessage(''), 3000)
      return;
    };
    const newRequest = { id: manuals.length + 1, designer: currentUser, manual: input, quantity: 1 }
    if (input !== '') manuals.push(newRequest);
    countingNumberIdentical(manuals);
    setDoc(sortArray(removingDuplicates()));
    form.reset();
  }

  return (
    <>
      <MainButton
        isClickButton={isClickButton}
        setIsClickButton={setIsClickButton} />
      {(!isClickButton)
        ? <MainForm
          message={message}
          happenedSubmit={happenedSubmit} />
        : <MainTable manuals={docs} />}
    </>
  );
}

export default MainInfo;