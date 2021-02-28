const Intern = require("../lib/Intern");

test("can set school", () => {
    const school = "SNHU";
    const employee = new Intern("Bryan Miller", "1", "bmiller@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("can get school name with getSchool()", () => {
    const school = "SNHU";
    const employee = new Intern("Bryan Miller", "1", "bmiller@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern("Bryan Miller", "1", "bmiller@gmail.com");

    expect (employee.getRole()).toBe(role);
})