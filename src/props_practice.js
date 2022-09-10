
function Joke(props) {
    console.log(props)
    return (
        <div style={{border: "0.5px solid white"}}>
            <p>{ props.setup }</p>
            <p>{ props.punchline }</p>
            <p>Funny: { props.funny ? "yes haha" : "nope"}</p>
            <p>Likes: { props.likes }</p>
            <p>Comments: { props.comments }</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Joke 
                setup="Why did the chicken cross the road?"
                punchline="To get to the other side!"
                funny={ false }
                likes={ 25 }
                comments={["frick", "classic bro!", "nahhh"]}
            />
            <Joke 
                setup="Why did the Italian go to the restaurant"
                punchline="Because he A' wants to A' Eat A'!"
                funny={ false }
                likes={ 15 }
            />
            <Joke 
                setup="Why did Napoleon die?"
                punchline="Because he is history!"
                funny={ true }
                likes={ 142 }
            />
            <Joke 
                setup="Why did the Mexican lose his car"
                punchline="Because he is Carlos!"
                funny={ true }
                likes={ 85 }
            />
        </div>
    )
    
}



ReactDOM.render(
    <App />,
    document.getElementById('props_practice')
)
