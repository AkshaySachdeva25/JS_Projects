function Employee(name, sallary, age, designation) {
    var name = name;
    var sallary = sallary;
    var age = age;
    var designation = designation;

    function getSallary(){
        return sallary;
    }
    return {
        employeeName : name,
        employeeAge : age,
        empDesignation : designation
    }
}

var employee = new Employee("Patrik",87000,32,"SDE");
console.log(employee);
console.log(employee.getSallary);
