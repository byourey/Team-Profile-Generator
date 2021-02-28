const Manager = require("../lib/Manager");

test("can set office number", () => {
    const officeNumber = "123";
    const employee = new Manager("Bryan Miller", "10", "bmiller@gmail.com", officeNumber);

    expect(employee.officeNumber).toBe(officeNumber);

});


test("getRole() returns Manager", () => {
    const role = "Manager";
    const employee = new Manager("Bryan Miller", "10", "bmiller@gmail.com");

    expect (employee.getRole()).toBe(role);
})