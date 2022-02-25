export default function EmployeeCard(props) {
    
    return (
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                <div className="user-image"> <img src={props.employee.imageUrl} className="rounded-circle" width="80"/> </div>
                <div className="user-content">
                    <h5 className="mb-0">{props.employee.name}</h5> <span>{props.employee.designation}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
    )
}