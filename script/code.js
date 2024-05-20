let visual = document.querySelector('[visual]')
let storage = [0]
let output

function display(value) {
    visual.value += value
}

/* function merge() {
    let ans = visual.value
    ans = ans.replace(/%/g, '/100')
    let calc1 = eval(ans)
    visual.value = calc1
} */

function operator(value) {
    let sign = value
    storage.push(+visual.value)

    switch (sign) {
        case '+': // +
            storage.push('+')
            output += visual.value + '+'
            alert(output)
            break

        case '-': // -
            storage.push('-')
            alert(storage)
            break

        case '/': // /
            storage.push('/')
            alert(storage)
            break

        case '*': // *
            storage.push('*')
            alert(storage)
            break

        case 'del': // del
            let currentValue = visual.value
            visual.value = currentValue.slice(0, -1)
            break

        case 'ce': // ce
            visual.value = ''
            storage = []
            break

        case '=': // =

/*             for (let i = 0; i < storage.length; i++) {
                output += storage[i]

            }
            alert(output) */
            output = eval(output)
            alert(output)
            break

        default:
            alert('An error has occured. Try Again.')
            break
    }

    visual.value = ''
}

