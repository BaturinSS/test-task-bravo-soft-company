import './ChoiceUser.css';

function ChoiceUser({ title }) {
  return (
    <>
      <option value={title}>{title}</option>
    </>
  );
}

export default ChoiceUser;