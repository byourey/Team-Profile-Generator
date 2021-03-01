const Intern = require("../lib/Intern");

test("sets school", () => {
    const school = "SNHU";
    const employee = new Intern("Bryan Miller", "2", "bmiller@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("gets school name with getSchool()", () => {
    const school = "SNHU";
    const employee = new Intern("Bryan Miller", "2", "bmiller@gmail.com", school);

    expect(employee.school).toBe(school);

});

test("getRole() returns Intern", () => {
    const role = "Intern";
    const employee = new Intern("Bryan Miller", "2", "bmiller@gmail.com");

    expect (employee.getRole()).toBe(role);
})