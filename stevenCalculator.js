class SavingsCalculator{
    constructor(initialAmount, InterestRate, period){
        this._initialAmount = initialAmount 
        this._interestRate = this.interestRate
        this._period = period 
    }

    get initialAmount(){
        return this._initialAmount 
    }

    set initialAmount(value){
        this.initialAmount = value 
    }
    get interestRate()
{
    return this._interestRate  
}
    set interestRate(value){
        this._interestRate = value
    }
    get period(){
        return this._period 
    }
set period(value){
    this._period = value 
}

calculateInterest(){
    return(this._initialAmount * this.interestRate * this._period)
}

}
