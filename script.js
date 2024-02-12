class SavingCalculator {
  constructor(initialAmount, interestRate, period) {
    this._initialAmount = initialAmount;
    this._interestRate = interestRate;
    this._period = period;
  }
  get initialAmount() {
    return this._initialAmount;
  }

  set initialAmount(value) {
    this._initialAmount = value;
  }
  get interestRate() {
    return this._interestRate;
  }
  set interestRate(value) {
    this._interestRate = value;
  }

  get period() {
    return this._period;
  }
  set period(value) {
    this._period = value;
  }

  calculateInterest() {
    let interest =
      (this._initialAmount * (this._interestRate / 100) * this._period) / 12;
    return interest;
  }
}

function formatNumber(value) {
  return Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

function getFormData(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const jumlahTabungan = parseInt(formData.get("jumlahTabungan"));
  const tingkatBunga = parseInt(formData.get("tingkatBunga"));
  const periodeTabungan = parseInt(formData.get("periodeTabungan"));

  const calculatorInstance = new SavingCalculator(
    jumlahTabungan,
    tingkatBunga,
    periodeTabungan
  );

  let result = calculatorInstance.calculateInterest();

  document.querySelector(".result").innerHTML = formatNumber(result);
}

document
  .getElementById("tabungan-form")
  .addEventListener("submit", getFormData);

function resetForm() {
  document.getElementById("tabungan-form").reset();
  document.querySelector(".result").innerHTML = "";
}
