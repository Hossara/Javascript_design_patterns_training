import { test, describe, expect } from "@jest/globals"
import person from "./Proxy.js"

describe("person proxy", () =>
{
    // Test get proxy method
    test("get data", () => {
        expect(person.name).toBe("Hossein Araghi")
    })

    // Test set proxy method
    test("set data", () => {
        try {
            person.age = 20
        }
        finally {
            expect(person.age).toBe(20)
        }
    })
})