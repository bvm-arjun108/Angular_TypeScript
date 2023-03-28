import { Login, Student } from './interface'

class Employee {
  #id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    // return this.name + " " + this.address;
    // You can use string literals (`) instead
    return `${this.name} stays at ${this.address}`;
  }

  static getEmpCount(): number{
    return 50;
  }
}


class Manager extends Employee {
  constructor(id: number, name: string, address: string) 
  {
    super(id, name, address);
  }
}


let john = new Employee(1,"john","Highway 71");
    let addresswithName = john.getNameWithAddress();
    // john.id =1;
    // john.name = "John";
    // john.address = "Kennesaw, GA";
    console.log(john);
    console.log(addresswithName);
    console.log(Employee.getEmpCount());

    let man = new Manager(1,"Mike","Highway 71");
    let address = man.getNameWithAddress();
    console.log(address);
 
  class Students implements Login{
    login(): Student {
      return { name: "Arjun", id: 1, email: "arjun@gmail.com" };
    }
    
  }