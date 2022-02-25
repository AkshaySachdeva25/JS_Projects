function higherOrderComponent(Component) {
    function HOC() {
        return (
            <div style={{ color: "black", "border": "1px solid black", margin: "10px", padding: "10px" }}>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                                <div className="header">
                                    Elliot Fu
                                </div>
                                <div className="meta">
                                    Friends of Veronika
                                </div>
                                <div className="description">
                                    Elliot requested permission to view your contact details
                                </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <Component></Component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return HOC;
}

function UpdateButton() {
    return <button className="ui red basic button">Delete</button>
}

function DeleteButton() {
    return <button className="ui yellow basic button">Update</button>
}

function DeleteUpdateButton() {
    return (
        <>
            <UpdateButton></UpdateButton>
            <DeleteButton></DeleteButton>
        </>
    )
}

var NewComponent = higherOrderComponent(UpdateButton)
export var NewOtherComponent = higherOrderComponent(DeleteButton)
export var NewOther = higherOrderComponent(DeleteUpdateButton)
export default NewComponent;