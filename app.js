document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('savings-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const initialAmount = parseFloat(document.getElementById('initialAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const period = parseFloat(document.getElementById('period').value);

        const calculator = new SavingsCalculator(initialAmount, interestRate, period);
        const interest = calculator.calculateInterest();

        resultDiv.textContent = `Total interest earned: $${interest.toFixed(2)}`;
    });
});

