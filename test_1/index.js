// bài 1
const calculate = () => {
    const from = parseInt(document.getElementById('from').value)
    const to = parseInt(document.getElementById('to').value)

    let result = 0
    for (let i = from; i <= to; i++) {
        if (isPrime(i)) {
            result += i
        }
    }
    document.getElementById('result').innerHTML = `Result: ${result}`
}

const isPrime = (n) => {
    if (n <= 1) {
        return false
    }
    for (let j = 2; j <= Math.sqrt(n); j++) {
        if (n % j === 0) {
            return false
        }
    }
    return true
}

