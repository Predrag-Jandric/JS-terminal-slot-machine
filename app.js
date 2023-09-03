'use strict'

const prompt = require("prompt-sync")()

const deposit = function () {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount, try again");
        } else {
            return numberDepositAmount
        }
    }
}

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const NumberOfLines = parseFloat(lines)
    
        if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
            console.log("Invalid number of lines, try again");
        } else {
            return NumberOfLines
        }
    }
}

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet per line")
        const NumberBet = parseFloat(bet)
    
        if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
            console.log("Invalid bet, try again");
        } else {
            return NumberBet
        }
    }
}

let balance = deposit()
const NumberOfLines = getNumberOfLines()
const bet = getBet(balance, NumberOfLines)