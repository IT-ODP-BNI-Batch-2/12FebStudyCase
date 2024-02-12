class SavingsCalculator{
    constructor(initialAmount, interestRate, period){
        this._initialAmount = initialAmount;
        this.interestRate = interestRate;
        this._period = period;
    }
    get initialAmount(){
        return this._initialAmount;
    }

    get initialAmount(value){
        this._initialAmount = value;
    }

    get interestRate(){
        return this._interestRate;
    }

    set interestRate(value){
        this._interestRate = value;
    }

    get periode(){
        return this._period;
    }

    set periode(value){
        this._period = value;
    }

    calculateInterest(){
        return (this._initialAmount * this._interestRate * this._period)
    }
}