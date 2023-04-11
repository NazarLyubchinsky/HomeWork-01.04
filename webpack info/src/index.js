// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";


// import modules
import { Marker, RefillableMarker } from "./scripts/modules/HM-01.04/Task1";
import { ExtendedDate } from "./scripts/modules/HM-01.04/Task2";
import { Employee, EmpTable } from "./scripts/modules/HM-01.04/Task3";
import { StyledEmpTable } from "./scripts/modules/HM-01.04/Task4";
// TASK 1
const simpleMarker = new Marker("blue", 50);
simpleMarker.print("ldwdwwd dwdwasv");


const refillableMarker = new RefillableMarker("red", 30, 100);
refillableMarker.print("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, voluptas?wdwdwwdwdw");

refillableMarker.refill();
refillableMarker.print("dolor, sit amet consectetur adipisicing elit");
/**
 * виведе на екрані
 */
//  Написаний текст: ldwdwwd dwdwasv (колір: blue, проценти: 43%)
// Написаний текст: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, volup (колір: red, проценти: 0%)
// Маркер поповнено (колір: red, проценти: 100%)
// Написаний текст: dolor, sit amet consectetur adipisicing elit (колір: red, проценти: 80.5%)

// TASK 2
const extendedDate = new ExtendedDate();
document.getElementById("dateOutput").textContent = `Дата: ${extendedDate.getFormattedDate()}`;
document.getElementById("pastOrFutureOutput").textContent = `Статус дати: ${extendedDate.isPastOrFuture()}`;
document.getElementById("leapYearOutput").textContent = `Високосний рік: ${extendedDate.isLeapYear()}`;
document.getElementById("nextDateOutput").textContent = `Наступна дата: ${extendedDate.getNextDate().getFormattedDate()}`;
/**
 * виведе на екран
 */
// Дата: 11 квітня
// Статус дати: поточна
// Високосний рік: false

// TASK 3
/**
 * виведе в консоль
 */

// First Name	Last Name	Position
// John	Doe	Manager
// Jane	Smith	Teller
// Mark	Johnson	Accountant

// TASK 4
/**
 * виведе в консоль
 * ту саму таблицю що і в task3 але добавляться стилі
 */

