"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        // You can use string literals (`) instead
        return `${this.name} stays at ${this.address}`;
    }
    static getEmpCount() {
        return 50;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let john = new Employee(1, "john", "Highway 71");
let addresswithName = john.getNameWithAddress();
// john.id =1;
// john.name = "John";
// john.address = "Kennesaw, GA";
console.log(john);
console.log(addresswithName);
console.log(Employee.getEmpCount());
let man = new Manager(1, "Mike", "Highway 71");
let address = man.getNameWithAddress();
console.log(address);
class Students {
    login() {
        return { name: "Arjun", id: 1, email: "arjun@gmail.com" };
    }
}
