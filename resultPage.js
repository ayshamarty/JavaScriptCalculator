function calculator() {
    let a = parseInt(sessionStorage.getItem('first'));
    let b = parseInt(sessionStorage.getItem('second'));

    return {
        add: function () {
            let res = a + b;
            result.innerText = `${a} +  ${b} = ${res}`;
        },
        subtract: function () {
            let res = a - b;
            result.innerText = `${a} -  ${b} = ${res}`;
        },
        multiply: function () {
            let res = a * b;
            result.innerText = `${a} x  ${b} = ${res}`;
        },
        divide: function () {
            let res = a / b;
            result.innerText = `${a} /  ${b} = ${res}`;
        },
    };
}

const op = sessionStorage.getItem('op');
calculator()[op]();
