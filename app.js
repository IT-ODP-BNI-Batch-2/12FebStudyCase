// Definisikan kelas SavingsCalculator
class SavingsCalculator {
    constructor(initialAmount, interestRate, period) {
        this._initialAmount = initialAmount;
        this._interestRate = interestRate;
        this._period = period;
    }

    // Metode untuk menghitung bunga tabungan
    calculateInterest() {
        const totalInterest = this._initialAmount * (this._interestRate / 100) * this._period;
        return totalInterest;
    }
}

// Tangkap formulir kalkulator saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('savings-form');
    const resultDiv = document.getElementById('result');

    // Tangani pengiriman formulir
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Dapatkan nilai input dari formulir
        const initialAmount = parseFloat(document.getElementById('initialAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const period = parseFloat(document.getElementById('period').value);

        // Buat objek SavingsCalculator
        const calculator = new SavingsCalculator(initialAmount, interestRate, period);
        
        // Hitung bunga tabungan
        const interest = calculator.calculateInterest();

        // Tampilkan hasil perhitungan bunga
        resultDiv.textContent = `Total interest earned: $${interest.toFixed(2)}`;
    });
});
