/*
https://github.com/igornfaustino/aula-backend-2024
*/

const filtrarArray = (arr, filtro) => {
    const newArr = []
    for (let element of arr) {
        const vaiFicar = filtro(element)
        if (vaiFicar) newArr.push(element)
    }
    return newArr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ehPar = (e) => e % 2 === 0
const newArr = filtrarArray(arr, ehPar)
console.log(newArr)

console.log(ehPar())

/*****************/
console.log("--------------------------------------")

let user;
console.log("1")
// funcão de delay, vai exibir o 2 apos 1000ms (1 segundo)
setTimeout(() => {
    user = {
        name: "Hemerson"
    }
    console.log("dentro do timeout: ", user);
}, 0)
console.log("3")

/******************** */
const buscarUser = (callback) => {
    setTimeout(() => {
        callback({
            name: "Hemerson"
        })
    }, 300)
}

const buscarCompras = (user, callback) => {
    setTimeout(() => {
        callback([
            {
                user: user.name,
                produto: 1
            },
            {
                user: user.name,
                produto: 2
            },
            {
                user: user.name,
                produto: 3
            }
        ])
    }, 300)
}

buscarUser((user) => {
    buscarCompras(user, (compras) => {
        console.log(compras)
    })
})


const buscarUserPromise = () => {

    return new Promise((callback) => {
        setTimeout(() => {
            callback({
                name: "Hemerson"
            })
        }, 300)
    })
}

const buscarComprasPromise = () => {
    return new Promise((callback) => {
        setTimeout(() => {
            callback([
                {
                    user: user.name,
                    produto: 1
                },
                {
                    user: user.name,
                    produto: 2
                },
                {
                    user: user.name,
                    produto: 3
                }
            ])
        }, 300)
    })
}


buscarUserPromise().then(user => {
    console.log("Promise")
    console.log(user)
    return buscarComprasPromise(user)
}).then(compras => {
    console.log(compras)
}).then(() => {
    console.log("Terminei de executar")
}).then(() => {
    console.log("1")
}).then(() => {
    console.log("2")
})



const main = async () => {
    try {
        const user = await buscarComprasPromise()
        console.log("Async/await")
        console.log(user)
        const compras = await buscarComprasPromise(user)
        console.log(compras)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Finally")
    }
}

