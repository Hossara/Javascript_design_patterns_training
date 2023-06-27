import Counter from "./Singleton.js"
import { test, describe, expect } from "@jest/globals"

describe('counter', () =>
{
    // instances
    const counter1 = Counter.getInstance()
    const counter2 = Counter.getInstance()

    // Test instance creation
    test('test init', () => {
        expect(counter1).toBe(counter2)
    })

    // Test counter
    test("test counter", () => {
        for (let i = 0; i < 5; i++)
            Counter.increment()

        expect(Counter.getCount()).toBe(5)
    })

    // Test singleton
    test("test singleton", () =>
        expect(Counter.getCount()).toBe(5))
})