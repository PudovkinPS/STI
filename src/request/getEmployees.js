import employees from '../employees/Employees.json'

const rejectByChance = () => {
  return Math.random() <= 0.35
}

export const getEmployeesAjax = () =>
  new Promise((resolve, reject) => {
    if (rejectByChance()) {
      return reject({
        error: 'Server error',
      });
    }
    setTimeout(() => {
      resolve(employees)
    }, 1500)
  })