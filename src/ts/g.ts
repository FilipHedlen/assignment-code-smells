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

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  if (student.handedInOnTime == true) {
    student.passed = true;
    return `${student.name}, your result is VG`;
  } else if(student.handedInOnTime == false) {
    student.passed = false;
    return `${student.name}, your result is IG`;
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
  constructor(
    public place: string, 
    public date: Date, 
    public temperature: number
  ) {}
}

function dailyTempInStockholm(temp: Temp) {
  return temp.place === "Stockholm" && temp.date.getTime() > Date.now() - 604800000;
}
  
function averageWeeklyTemperature(temp: Temp[]) {
  const totalTemperatureForOneWeek = 
  temp.filter(dailyTempInStockholm).reduce((totalTemperatureForOneWeek, temp) => totalTemperatureForOneWeek + temp.temperature, 0);
  return totalTemperatureForOneWeek / 7;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */
class Product {
  constructor(
    public name: string,
    public price: number,
    public amount: number,
    public description: string,
    public image: string,
    public parent: HTMLElement
  ) {}
}

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
function presentStudents(students: Student[]) {
  for (const student of students) {
    if (student.handedInOnTime) {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#passedstudents");
      listOfStudents?.appendChild(container);
    } else {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = false;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#failedstudents");
      listOfStudents?.appendChild(container);
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
class User {
  constructor (
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}
} 

function createUser(user: User) {
  const ageDiff = Date.now() - user.birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (userAge >= 20) {
    return "Ditt konto har skapats";
  } else {
    return "Du är under 20 år";
  }
}
