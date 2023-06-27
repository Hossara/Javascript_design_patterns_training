const person = {
    name: "Hossein Araghi",
    age: 17,
    nationality: "Persian",
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        const value = Reflect.get(obj, prop)

        console.log(`The value of ${prop} is ${value}`)

        return value
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
        return Reflect.set(obj, prop, value)
    },
})

export default personProxy