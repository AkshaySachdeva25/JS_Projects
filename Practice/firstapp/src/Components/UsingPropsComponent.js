export default function UsingPropsComponent(prop){
    // prop.username = "Hell"  => Cannot assign to read only property
    prop.detail.username = "gsfg"
    const defa = {
        name : "Heelo"
    }
    defa.name = "asda"
    console.log(defa.name)
    return (
        <div>
            <h1>Hello {prop.username}</h1>
        </div>
    )
}