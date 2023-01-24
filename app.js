/*const employee1 = {"id": 123, name: "Vasya", birthYear: 2000, salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {"id": 123, name: "Vasya", birthYear: 2000, salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee3 = employee1;
employee3.salary = 20000;
console.log(`empl1 salary = ${employee1.salary}`);*/

function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")];

const index = employees.findIndex(function(empl) {
    return empl.id === 126;
});
const employee = employees.find(function(empl) {
    return empl.id === 126;
});

//HW-18

function getEmployee(employees, id) {
    return employees.find(empl => empl.id === id);
}

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
}

function getEmployeesByCity(employees, city) {
    return employees.filter(empl => empl.address.city == city);
}

function getEmployeeNames(employees) {
    return employees.map(empl => empl.name)
}

function sortEmployeesByAge(employees) {
    employees.sort((e1, e2) => e2.birthYear - e1.birthYear);
}

function computeSalaryBudget(employees) {
    employees.reduce((res, empl) => res + empl.salary, 0);
}

let field = "salary";
function displayFieldValue(employees, index, field) {
    console.log(employees[index][field]);
}
/*displayFieldValue(employees, 3, "birthYear");
employees[0].salary = 20000;
employees[0].department = "QA";
displayFieldValue(employees, 0, "department");
delete employees[0].department;
displayFieldValue(employees, 0, "department");*/

function computeMinMaxAvgSalary(employees) {
    const res = employees.reduce((res, empl) => {
        if(res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if (res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;
    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary /= employees.length;
    return res;
}
function displayValue(minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
};
const minMaxAvg = computeMinMaxAvgSalary(employees);
/*displayValue(minMaxAvg,"avgSalary");
displayValue(minMaxAvg,"minSalary");
displayValue(minMaxAvg,"maxSalary");*/

const strings =["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if(res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1;
    }
    return res;
}
displayStringOccurrences(strings);


