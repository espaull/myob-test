const taxBrackets = [
  { upper: 40000, lower: 20000, rate: 0.1 },
  { upper: 80000, lower: 40000, rate: 0.2 },
  { upper: 180000, lower: 80000, rate: 0.3 },
  { upper: null, lower: 180000, rate: 0.4 },
];

const roundValue = (val) => Math.round(val * 100) / 100;

const calcGrossMonthly = (salary) => {
  return roundValue(salary / 12);
};

const calcNetMonthly = (gross, tax) => {
  return roundValue(gross - tax);
};

const calcIncomeTax = (salary, taxConfig) => {
  let taxableSalary = salary - taxConfig[0].lower; // Remove tax free allowance
  let tax = 0;

  for (let i = 0; i < taxConfig.length; i++) {
    const { upper, lower, rate } = taxConfig[i];

    if (
      taxableSalary - lower > 0 &&
      rate !== taxConfig[taxConfig.length - 1].rate
    ) {
      // Can tax the full amount in this bracket
      taxableSalary -= upper - lower;
      tax += (upper - lower) * rate;
    } else {
      // We can only tax the remaining amount
      tax += taxableSalary * rate;
      break;
    }
  }

  return roundValue(tax / 12);
};

const calcTax = (salary) => {
  if (salary === undefined || typeof salary !== 'number')
    throw new Error('Please enter a numeric value.');

  const gross = calcGrossMonthly(salary);
  const tax = calcIncomeTax(salary, taxBrackets);
  const net = calcNetMonthly(gross, tax);

  return {
    gross,
    tax,
    net,
  };
};

export { calcGrossMonthly, calcNetMonthly, calcIncomeTax, calcTax };
