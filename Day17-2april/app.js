




// local storage start here

const str = "jhgsf"
const num = 20;
const data = {
    name: 'rani',
    age: 60,
    childeren: [
        { name: 'alex', age: 34 }
    ]
}
localStorage.setItem("key1",num)
localStorage.setItem("key2",str)
localStorage.setItem("key3",JSON.stringify(data))

console.log(localStorage.getItem("key1"))
console.log(localStorage.getItem("key2"))
console.log(json.parse(localStorage.getItem("key3")));

localStorage.removeItem("key2");