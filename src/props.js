
function Contact(props) {
    console.log(props)
    return (
        <div style={{border: "1px solid white"}} >
            <img width="150px" src={ props.img }></img>
            <h1>{ props.name }</h1>
            <p>{ props.phone }</p>
            <p>{ props.email }</p>
        </div>
    )
}

function App() {

    const Person = {
        name: "Jim Hopper",
        home: "Hawkins, IN"
    }
    var {name, home} = Person; // Object Destructuring
    console.log(name);
    console.log(home);

    return (
        <div className="contacts">
            <Contact 
                img="https://static.displate.com/280x392/displate/2021-06-17/bdf383c73c15bb82e030a9f7ea01f4e0_90f0b8d9ec7b2193528caa84f0fa325e.jpg"
                name="Chris Griffin"
                phone="0364-372-747"
                email="griffin123@ymail.com"
            />
            <Contact 
                img="https://townsquare.media/site/341/files/2012/01/meg.jpg?w=980&q=75"
                name="Meg Griffin"
                phone="0263-372-321"
                email="megladon@gmail.com"    
            />
            <Contact 
                img="http://images.shoutwiki.com/familyguy/1/12/Brian_Griffin.png"
                name="Brian Grffin"
                phone="0435-324-578"
                email="bgbg@gf.net"
            />
            <Contact 
                img="https://m.media-amazon.com/images/M/MV5BMDMyMTg3OTctYzA2NC00NzA2LWIyYjgtMDEwMGU0MTU3NGM1XkEyXkFqcGdeQXVyODc5NjY4MzU@._V1_.jpg"
                name="Stewie Griffin"
                phone="0476-212-345"
                email="stewartbaby@gmail.com"
            />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('props'))