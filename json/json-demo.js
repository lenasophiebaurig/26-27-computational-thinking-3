const arrayObj = [
    { name: "Gmuend" }
]

const json = `[
    { "name": "Gmuend" }
]`

const jsonObj = JSON.parse(json);
console.log(jsonObj[0].name)