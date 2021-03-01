const Engineer = require("../lib/Engineer");

test("sets GitHub account", () => {
    const github = "githubuser";
    const employee = new Engineer("Bryan Miller", "2", "bmiller@gmail.com", github);

    expect(employee.github).toBe(github);

});

test("gets Github account with getGithub()", () => {
    const github = "githubuser";
    const employee = new Engineer("Bryan Miller", "2", "bmiller@gmail.com", github);

    expect(employee.getGithub()).toBe(github);

});

test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Bryan Miller", "2", "bmiller@gmail.com");

    expect (employee.getRole()).toBe(role);
})