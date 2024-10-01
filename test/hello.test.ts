import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun Test Runner", () => {
  it("shoult response unit test", async () => {
    const response = sayHello("Intan");
    expect(response).toBe("Hello : Intan");
  });
});
