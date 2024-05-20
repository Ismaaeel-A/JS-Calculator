 let visual = document.querySelector('[visual]')

 function display (value) {
     visual.value += value 
 }


function merge() {
    let ans = visual.value
    ans = ans.replace(/%/g, '/100')
    let calc1 = eval(ans)
    visual.value = calc1
}

function veryclear(){
    visual.value = ''
}

function del(){
    let currentValue = visual.value
    visual.value = currentValue.slice(0, -1)

}