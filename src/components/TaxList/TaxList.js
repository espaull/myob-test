import './TaxList.css';

const TaxList = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gross Monthly Income</th>
          <th>Monthly Income Tax</th>
          <th>Net Monthly Income</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr
              key={`${item.name}-${item.income.net}`}
              aria-label={`${item.name}-${item.income.net}`}
            >
              <td>{item.name}</td>
              <td>${item.income.gross}</td>
              <td>${item.income.tax}</td>
              <td>${item.income.net}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TaxList;
