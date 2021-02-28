const Engineer = require("../lib/Engineer");

test("can set GitHub account", () => {
    const github = "githubuseraccount";
    const employee = new Engineer("Bryan Miller", "5", "bmiller@gmail.com", github);

    expect(employee.github).toBe(github);

});

test("can get Github account with getGithub()", () => {
    const github = "githubuseraccount";
    const employee = new Engineer("Bryan Smith", "5", "bmiller@gmail.com", github);

    expect(employee.getGithub()).toBe(github);

});

test("getRole() returns Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Bryan Miller", "1", "bmiller@gmail.com");

    expect (employee.getRole()).toBe(role);
})