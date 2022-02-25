import EmployeeDetailComponent from "./EmployeeDetailComponent";

export default function EmployeeListComponent(props){
    debugger;
    return(
        <div>        
            {props.userList.map(function (emp){
                return(
                    <EmployeeDetailComponent details = {emp}></EmployeeDetailComponent>
                );
            })}

        </div>
    )

}