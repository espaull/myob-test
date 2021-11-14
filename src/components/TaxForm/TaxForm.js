import { useState } from 'react';
import './TaxForm.css';

const TaxForm = ({ handleFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', salary: 0 });

  const handleChange = (inputName) => (e) => {
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          aria-label="name-input"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </label>
      <label>
        Salary:
        <input
          type="number"
          aria-label="salary-input"
          value={formData.salary}
          onChange={handleChange('salary')}
        />
      </label>
      <input
        className="submit-button"
        type="submit"
        aria-label="form-submit"
        value="Submit"
      />
    </form>
  );
};

export default TaxForm;
