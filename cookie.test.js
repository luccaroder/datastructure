const { cookieOne, cookieTwo } = require("./cookie");

describe("Cookie", () => {
  test("getColor should return the color of the cookie", () => {
    expect(cookieOne.getColor()).toBe("green");
    expect(cookieTwo.getColor()).toBe("blue");
  });

  test("setColor should update the color of the cookie", () => {
    cookieOne.setColor("red");
    expect(cookieOne.getColor()).toBe("red");

    cookieTwo.setColor("yellow");
    expect(cookieTwo.getColor()).toBe("yellow");
  });
});
