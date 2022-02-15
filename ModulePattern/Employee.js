export class Employee{
    constructor(name,age,phoneNumber,sallary){
        this.name = name
        this.age = age
        this.phoneNumber = phoneNumber
        this.sallary = sallary
    }
}
export function getEmployeeDetails(employee) {

    console.log("User name is :"+employee.name);
    console.log("User name is :"+employee.age);
    console.log("User name is :"+employee.phoneNumber);
    console.log("User name is :"+employee.sallary);
    
}

//export default User
//exprt {getEmployeeDetails}
