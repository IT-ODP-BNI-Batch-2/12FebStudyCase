let contextGraph;

class ChartManager {
  constructor() {}

  createChart(data) {
    const graphArea = document.getElementById("chart");

    if (contextGraph !== undefined) {
      contextGraph.destroy();
    }

    contextGraph = new Chart(graphArea, {
      type: "bar",
      data: {
        labels: data.map((entry) => `Year ${entry.year}`),
        datasets: [
          {
            label: "Yearly Interest",
            data: data.map((entry) => entry.interest),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

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

  calculateYearlyInterest() {
    const yearlyInterest = [];
    let totalAmount = this._initialAmount;

    for (let year = 1; year <= this._period; year++) {
      const interest = (totalAmount * this._interestRate) / 100;
      totalAmount += interest;
      yearlyInterest.push({
        year,
        interest: interest.toFixed(2),
        totalAmount,
      });
    }

    return yearlyInterest;
  }

  setCalculator() {
    resetChart();
    const chartInstance = new ChartManager();
    const yearlyInterest = this.calculateYearlyInterest();

    chartInstance.createChart(yearlyInterest);
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
  calculatorInstance.setCalculator();

  document.getElementById("result").innerHTML = formatNumber(result);
}

document
  .getElementById("tabungan-form")
  .addEventListener("submit", getFormData);

function resetChart() {
  if (contextGraph !== undefined) {
    contextGraph.destroy();
  }
}

function resetForm() {
  document.getElementById("tabungan-form").reset();
  document.getElementById("result").innerHTML = "";
  resetChart();
}
