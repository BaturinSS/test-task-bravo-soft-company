import './MainTable.css';


function MainTable({
  manuals,
}) {

  return (
    <>
      <table className='mail__table'>
        <caption>Сводная таблица запросов документов</caption>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Наименование</th>
          <th scope="col">Кол-во запросов</th>
        </tr>
        {manuals.map((el, i) => {
          return (
            <tr key={el.id * 15}>
              <th scope="row">{`${i + 1}`}</th>
              <td>{`${el.manual}`}</td>
              <td>{`${el.quantity}`}</td>
            </tr>
          )
        })}
      </table>
    </>
  );
}

export default MainTable;