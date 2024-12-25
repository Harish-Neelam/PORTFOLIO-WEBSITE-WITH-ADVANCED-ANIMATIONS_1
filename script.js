function calculateAffordability() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    
    const downPayment = 0.2 * vehiclePrice; // 20% of the vehicle price as down payment
    const monthlyIncome = annualIncome / 12;
    const monthlyExpenseLimit = 0.1 * monthlyIncome; // 10% of monthly income for car expenses

    const loanAmount = vehiclePrice - downPayment;
    const monthlyEMI = loanAmount / (loanTerm * 12);

    const insuranceEstimate = 0.01 * vehiclePrice / 12; // Rough estimate for monthly insurance
    const fuelEstimate = 100; // Example fixed monthly fuel cost, adjust as necessary

    const totalMonthlyCarExpense = monthlyEMI + insuranceEstimate + fuelEstimate;

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>Result</h2>
        <p>Vehicle Price: $${vehiclePrice.toFixed(2)}</p>
        <p>Down Payment: $${downPayment.toFixed(2)}</p>
        <p>Monthly EMI: $${monthlyEMI.toFixed(2)}</p>
        <p>Insurance Estimate: $${insuranceEstimate.toFixed(2)}</p>
        <p>Fuel Estimate: $${fuelEstimate.toFixed(2)}</p>
        <p>Total Monthly Car Expense: $${totalMonthlyCarExpense.toFixed(2)}</p>
        <p>Monthly Expense Limit (10% of monthly income): $${monthlyExpenseLimit.toFixed(2)}</p>
        <p>Can you afford it? ${totalMonthlyCarExpense <= monthlyExpenseLimit ? 'Yes' : 'No'}</p>`;
}
