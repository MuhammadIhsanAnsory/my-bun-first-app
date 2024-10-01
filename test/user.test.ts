import { describe, it, expect } from "bun:test";
import { User } from "../packages/user/user";

describe("User Package", () => {
  it("Should accessed from main package", async () => {
    const user = new User("Intan");
    expect(user.name).toBe("Intan");
  });
});
