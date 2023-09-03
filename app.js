'use strict'

const prompt = require("prompt-sync")()

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

// winning multiplyer
const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}


const deposit = function () {
    while (true) {
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
    while (true) {
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
    while (true) {
        const bet = prompt("Enter the bet per line")
        const NumberBet = parseFloat(bet)

        if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
            console.log("Invalid bet, try again");
        } else {
            return NumberBet
        }
    }
}

const spin = () => {
    const symbols = []
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++){
        reels.push([])
        const reelSymbols = [...symbols];
        for (let x = 0; x < ROWS; x++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex, 1)
        }
    }
    return reels
};

const reels = spin()
console.log(reels);

let balance = deposit()
const NumberOfLines = getNumberOfLines()
const bet = getBet(balance, NumberOfLines)