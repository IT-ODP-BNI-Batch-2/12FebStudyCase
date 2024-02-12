class SavingCalculator {
    constructor(initialAmount, interestRate, period){
        this._initialAmount = initialAmount;
        this._interestRate = interestRate;
        this._period = period;

    }
    get initialAmount(){
        return this._initialAmount;
    }
    set initialAmount(value){
        this._initialAmount = value;

    }
    get interestRate(){
        return this._interestRate;

    }
    set interestRate(value){
        this._interestRate = value;
    }

    get period(){
        return this._period;
    }
    set period(value){
        this._period=value;

    }
    calculateInterest(){
        const totalInterest = this._initialAmount * (this._interestRate / 100) * this._period;
        return totalInterest;
    }
}

