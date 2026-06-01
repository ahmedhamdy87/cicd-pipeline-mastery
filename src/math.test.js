import { describe, expect, test } from "bun:test";
import { add, subtract, multiply, divide } from "./math.js";

describe("math", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiply", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divide", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
