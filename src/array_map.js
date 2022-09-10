
export default function ArrayMap() {

    var jokesObjectArray = [
        {
            setup: "Why did the chicken cross the road?",
            punchline: "To get to the other side!"
        },
        {
            setup: "Why did the Ogre cross the road?",
            punchline: "To sleep on the other side!"
        },
        {
            setup: "Why did the elephant cross the road?",
            punchline: "To eat on the other side!"
        }
    ]


    var mappedJokes = jokesObjectArray.map(
        (item) => { 
            return (
                <div>
                    <p>{ item.setup }</p>
                    <p>{ item.punchline }</p>
                </div>
                )
        }
    )

    //console.log(jokesObjectArray)
    return (
        
        <div>
            { mappedJokes }
        </div>
    )
}


