import { useState } from 'react';

import './App.css';
import TaxList from './components/TaxList';
import TaxForm from './components/TaxForm';

import { calcTax } from './utils/utils';

function App() {
  const [taxRecords, setTaxRecords] = useState([]);

  const handleFormSubmit = ({ name, salary }) => {
    setTaxRecords((oldRecords) => [
      ...oldRecords,
      { name, income: calcTax(Number(salary)) },
    ]);
  };

  return (
    <div className="App">
      <TaxForm handleFormSubmit={handleFormSubmit} />
      <TaxList items={taxRecords} />
    </div>
  );
}

export default App;
