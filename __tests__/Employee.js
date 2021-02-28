const Employee = require('../lib/Employee');
  test('can set employee name', () => {
   const name = 'bj';
   const employee = new Employee(name);
    expect(employee.name).toBe(name);   // scale to compare 
})

test('can set employee email', () => {
  const email = 'bj@gmail.com';
const employee  = new Employee('bj', 1, email);

expect(employee.getEmail()).toBe('bj@email.com');
})
