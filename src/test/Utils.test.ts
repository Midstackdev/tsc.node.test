import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  test("first test", () => {
    const result = Utils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("parse simple URL", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:6550/user/set-contact-preferences"
    );
    expect(parsedUrl.href).toBe(
      "http://localhost:6550/user/set-contact-preferences"
    );
    expect(parsedUrl.port).toBe("6550");
    expect(parsedUrl.protocol).toBe("http:");
    expect(parsedUrl.query).toEqual({});
  });

  test("parse URL with query", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:6550?user=user&password=pass"
    );
    const expextedQuery = {
      user: "user",
      password: "pass",
    };
    expect(parsedUrl.query).toEqual(expextedQuery);
  });

  test("Invalid Url", () => {
    function expectError() {
      Utils.parseUrl("");
    }
    expect(expectError).toThrow("Empty url");
  });

  test("Invalid Url with arrow function", () => {
    expect(() => Utils.parseUrl("")).toThrow("Empty url");
  });

  test("Invalid Url with try catch", () => {
    try {
      Utils.parseUrl("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Empty url");
    }
  });
});
