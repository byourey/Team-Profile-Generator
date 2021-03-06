const Employee = require("../lib/Employee");

test('sets employee name', () => {
   const name = 'bj';
   const employee = new Employee(name, "10", "bmiller@gmail.com");

    expect(employee.name).toBe(name);   // scale to compare 
});

test('sets employee email', () => {
 const email = 'bmiller@gmail.com';
 const employee  = new Employee('Brian Miller', 10, email);

expect(employee.email).toBe('bmiller@gmail.com');
});

test("sets employee ID", () => {
  const id = "200";
  const employee = new Employee("Bryan Miller", id, "bmiller@gmail.com");

  expect(employee.id).toBe(id);
});

test("can get employee Name with getName()", () => {
  const name = "Bryan Miller";
  const employee = new Employee(name, "14", "bmiller@gmail.com");

  expect(employee.getName()).toBe(name);

});

test("can get employee Id with getId()", () => {
  const id = "200";
  const employee = new Employee("Bryan Miller", id, "bmiller@gmail.com");

  expect(employee.getId()).toBe(id);

});


test("can get employee email with getEmail()", () => {
  const email = "bmiller@gmail.com";
  const employee = new Employee("Bryan Miller", "2", email);

  expect (employee.getEmail()).toBe(email);
})

test("getRole() returns Employee", () => {
  const role = "Employee";
  const employee = new Employee("Bryan Miller", "2", "bmiller@gmail.com");

  expect (employee.getRole()).toBe(role);
})
