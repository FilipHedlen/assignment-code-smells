import { Product, Student, Temp, User } from "../ts/models/Classes"



/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längdhoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLengthForHighjump(jumpings: number[]): number {
  
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

function getStudentStatus(student: Student): string {
  if (student.handedInOnTime == true) {
    student.passed = true;
    return `${student.name}, your result is VG`;
  } else if(student.handedInOnTime == false) {
    student.passed = false;
    return `${student.name}, your result is IG`;
  }
  return 'No result can be given';
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

function weeklyTempInStockholm(temp: Temp) {
  const MILLISECONDS_PER_WEEK = 604800000;
  return temp.place === "Stockholm" && temp.date.getTime() > Date.now() - MILLISECONDS_PER_WEEK;
}
  
function averageWeeklyTemperature(temp: Temp[]) {
  const DAYS_IN_WEEK = 7;
  const totalTemperatureForOneWeek = 
  temp.filter(weeklyTempInStockholm).reduce((totalTemperatureForOneWeek, temp) => totalTemperatureForOneWeek + temp.temperature, 0);

  return totalTemperatureForOneWeek / DAYS_IN_WEEK;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

function showProduct(product: Product, parent: HTMLElement) {
  const container = document.createElement("div");
  container.innerHTML = `
    <h4>${product.name}</h4>
    <img src="${product.image}">
    <strong>${product.price.toString()}</strong>
  `;
  
  parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

function createStudentHtml(student: Student): HTMLElement {
  const container = document.createElement("div");
  const passedStudents = document.createElement("ul");
  const failedStudents = document.createElement("ul");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.checked = student.handedInOnTime;

  passedStudents.id = "passedstudents";
  failedStudents.id = "failedstudents";

  container.appendChild(checkbox);
  container.appendChild(failedStudents);
  container.appendChild(passedStudents);
  
  return container;
}

function presentStudents(students: Student[]) {
  const passedStudentsList = document.getElementById("passedstudents");
  const failedStudentsList = document.getElementById("failedstudents");

  for (const student of students) {
    const studentHTML = createStudentHtml(student);

    if (student.handedInOnTime) {
      passedStudentsList?.appendChild(studentHTML);
    } else {
      failedStudentsList?.appendChild(studentHTML);
    }
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateTexts() {
  const texts: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  return texts.join('');
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

function createUser(user: User) {
  const ageDiff = Date.now() - user.birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);


  if (userAge >= 20) {
    return "Ditt konto har skapats";
  } else {
    return "Du är under 20 år";
  }
}
