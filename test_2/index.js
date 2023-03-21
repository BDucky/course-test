const numberOneTriangle = () => {
    const input = document.getElementById('input').value
    let line = ''

    const result = document.getElementById('result')
    result.innerHTML = ''
    if (input > 10) {
        alert('Please enter a number between 1 and 10');
        return;
    }
    else if (input < 1) {
        alert('Please enter a number between 1 and 10');
        return;
    }
    else {
        for (let i = 0; i < input; i++) {
            line += '*'
            const newDiv = document.createElement('div')
            newDiv.innerHTML = line
            result.appendChild(newDiv)
        }
    }
}