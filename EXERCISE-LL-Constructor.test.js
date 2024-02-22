const LinkedList = require("./EXERCISE-LL-Constructor");

describe("LinkedList constructor", () => {
  test("should create a linked list with initial values", () => {
    const myLinkedList = new LinkedList("4");
    expect(myLinkedList.head.value).toBe("4");
    expect(myLinkedList.tail.value).toBe("4");
    expect(myLinkedList.length).toBe(1);

    myLinkedList.printList();
  });
});
