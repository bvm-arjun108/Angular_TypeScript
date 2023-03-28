export interface Student {
    name: string;
    age?: number;
    id: number;
    email: string;
}

// let user: Student = { name: "Arjun", id: 1, email: "arjun@gmail.com" };
//or we can use the Object Destructuring
// let {name, email} : Student = { name: "Arjun", id: 1, email: "arjun@gmail.com" };
//or we can use the Object Destructuring and also rename the objects variables accordingly
let { name: userName, email: userEmail }: Student = { name: "Arjun", id: 1, email: "arjun@gmail.com" };

console.log(userName, userEmail);

interface Employees extends Student {
    salary: number;
}
let employee: Employees = { name: "John", id: 2, email: "john@gmail.com", salary: 10000 };
console.log(employee);

export interface Login {
    login(): Student;
}

// Array Destructuring
let [user1, user2, user3]: Student[] = [{ name: "Arjun", id: 1, email: "arjun@gmail.com" }
    , { name: "Arjun2", id: 2, email: "arjun2@gmail.com" }
    , { name: "Arjun3", id: 2, email: "arjun3@gmail.com" }];

    console.log(user1, user2, user3);


let [student1, student2, ...restUsers]: Student[] = [{ name: "Arjun", id: 1, email: "arjun@gmail.com" }
    , { name: "Arjun2", id: 2, email: "arjun2@gmail.com" }
    , { name: "Arjun3", id: 2, email: "arjun3@gmail.com" }];
console.log(student1, student2, restUsers);

let result = restUsers.filter(user1 => student1.id > 3);