class SavingCalculator{
    constructor(initialAmount, interestRate, period){
        this._initialAmount = initialAmount
        this._interestRate = interestRate
        this._period = period
    }

    get initialAmount(){
        return this._initialAmount
    }

    set initialAmount(value){
        this._initialAmount = value
    }

    get interestRate(){
        return this._interestRate
    }

    set interestRate(value){
        this._interestRate = Rate
    }

    get period(){
        return this._period
    }

    set period(value){
        this._period = value
    }

    calculateInterest(){
    // Implement the interest calculation logic here
    // Formula: Interest = P*r*t

        return (this._initialAmount * this._interestRate*this._period)
    }
    
}