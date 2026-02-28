import { test, expect } from "vitest";
import { getServer } from "../src/index.ts";

test('GET / should return the sum of the numbers', async () => {
    const server = getServer();
    const response = await server.inject({
        method: "POST",
        url: '/sum',
        body: { a: 1, b: -1 }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toBe(0);
});