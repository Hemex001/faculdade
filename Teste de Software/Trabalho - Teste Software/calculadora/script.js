let lastResult = null;

function insert(num) {
    document.getElementById("result").value += num;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("result").value;

    expression = expression.replace(/(\d+(\.\d+)?)([\+\-\*\/])(\d+(\.\d+)?)([%])/, function(match, p1, p2, p3, p4) {
        return `${p1}${p3}(${p1}*${p4}/100)`;
    });

    try {
        let result = eval(expression);
        if (!isFinite(result)) {
            throw new Error("Divisão por zero não permitida.");
        }
        document.getElementById("result").value = result;
        lastResult = result;
    } catch (error) {
        document.getElementById("result").value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}


function useLastResult() {
    if (lastResult !== null) {
        document.getElementById("result").value += lastResult;
    }
}

// add suporte para teclas do teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '+') {
        insert('+');
    } else if (key === '-') {
        insert('-');
    } else if (key === '*') {
        insert('*');
    } else if (key === '/') {
        insert('/');
    } else if (key === '%') {
        insert('%');
    } else if (key === '.') {
        insert('.');
    } else if (key === 'Enter') {
        event.preventDefault(); // impedir que o Enter faça outra coisa
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
