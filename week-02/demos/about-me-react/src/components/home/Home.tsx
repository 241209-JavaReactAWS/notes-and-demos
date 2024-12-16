import "./Home.css"
/*
This is our first functional component, they are the new way of creating react components. Through the use of
hooks they can do all the same things that class components can do and what they return is the same as the 
render method from a class component
*/

function Home() {

    // This return statement below is exactly the same as the render method in a class component
  return (
    <main>
        <h3>Introduction</h3>

        <figure>
            <img id="pic" src="src/assets/PXL_20231101_204147017.jpg" />
            <figcaption>Me and my fiance</figcaption>
        </figure>

        <p>
            My name is Bryan Serfozo. I'm a java full stack engineer teaching at Revature. I like various things
            like Karate, hiking and visiting national parks. Most recently I spent a week exploring Mt Rainier and
            Olympic National Parks in Washington state.
        </p>
    </main>
  )
}

export default Home
