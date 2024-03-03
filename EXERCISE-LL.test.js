const LinkedList = require("./EXERCISE-LL");

describe("LinkedList", () => {
  test("should push first element", () => {
    const myLinkedList = new LinkedList("5");
    expect(myLinkedList.length).toEqual(1);
    expect(myLinkedList.tail.value).toEqual(myLinkedList.head.value);
  });

  test("should push more elements", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.push("6");
    expect(myLinkedList.head.value).toEqual("5");
    expect(myLinkedList.head.next.value).toEqual("6");
    expect(myLinkedList.tail.value).toEqual("6");
    expect(myLinkedList.length).toEqual(2);
  });

  test("should pop when there are more than one element", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.push("6");
    myLinkedList.pop();
    expect(myLinkedList.head.value).toEqual("5");
    expect(myLinkedList.length).toEqual(1);
  });

  test("should pop when there is one element", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.pop();
    expect(myLinkedList.head).toEqual(null);
    expect(myLinkedList.length).toEqual(0);
  });

  test("should unshift first element", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.pop();
    myLinkedList.unshift("10");
    expect(myLinkedList.head).toEqual(myLinkedList.tail);
    expect(myLinkedList.length).toEqual(1);
  });

  test("should unshift more than one element", () => {
    const myLinkedList = new LinkedList("5");
    expect(myLinkedList.head.value).toEqual("5");
    expect(myLinkedList.length).toEqual(1);
    myLinkedList.unshift("15");
    expect(myLinkedList.head.value).toEqual("15");
    expect(myLinkedList.length).toEqual(2);
  });

  test("should shift array more than one element", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.unshift("15");
    myLinkedList.shift();
    expect(myLinkedList.head.value).toEqual("5");
    expect(myLinkedList.length).toEqual(1);
  });

  test("should shift array one element", () => {
    const myLinkedList = new LinkedList("5");
    myLinkedList.shift();
    console.log(myLinkedList);
    expect(myLinkedList.head).toEqual(myLinkedList.tail);
    expect(myLinkedList.length).toEqual(0);
  });
});
