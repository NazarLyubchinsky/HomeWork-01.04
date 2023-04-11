
class Employee {
	constructor(firstName, lastName, position) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
	}
}

class EmpTable {
	constructor(employees) {
		this.employees = employees;
	}

	getHtml() {
		let tableHtml = "<table>";
		tableHtml += "<tr><th>First Name</th><th>Last Name</th><th>Position</th></tr>";
		for (let i = 0; i < this.employees.length; i++) {
			let employee = this.employees[i];
			tableHtml += `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.position}</td></tr>`;
		}
		tableHtml += "</table>";
		return tableHtml;
	}
}

export class StyledEmpTable extends EmpTable {
	getStyles() {
		return "<style>table {border-collapse: collapse;} th, td {border: 1px solid black; padding: 5px;}</style>";
	}

	getHtml() {
		return this.getStyles() + super.getHtml();
	}
}


const employees = [
	new Employee("John", "Doe", "Manager"),
	new Employee("Jane", "Smith", "Teller"),
	new Employee("Mark", "Johnson", "Accountant"),
];


const styledEmpTable = new StyledEmpTable(employees);

const tableHtml = styledEmpTable.getHtml();
document.getElementById("table-container").innerHTML = tableHtml;