import { FamilyGuyData } from "./familyguydata"


export default function DisplayFamGuy() {
    return (
        FamilyGuyData.map(function(item) {
            return (
                <div style={{border: "1px solid black"}}>
                    {(item.name == "Brian Griffin") && <h1>It's Brian!</h1>}
                    <img src={item.img} style={{width: "150px"}} />
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                    <p>{item.email}</p>
                </div>
            )
        })
    )
}