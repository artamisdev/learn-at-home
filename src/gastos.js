const family = {
    incomes: [100, 1800, 350],
    expenses: [34.99, 795, 22, 150]

};

function sum(arrays){
    let total = 0
    
    for (let value of arrays) {
        total += value
    }
    return total
}


function calculate() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIncomes - calculateExpenses
    
    const positive = total >= 0

    let balancetotal = "negativo"

    if (positive) {
        balancetotal = "positivo"
    }

    console.log(`Seu saldo é ${balancetotal}: ${total.toFixed(2)}R$`)
}

calculate()


