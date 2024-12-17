import Fact, { FactProps } from "../fact/Fact"
import "./TTAAL.css"
// So we haven't added any CSS files yet, but for this component we're running into an issue with the word 'class'
// Class is a keyword is TS/JS but it's used for something else in HTML
// So if we want to style we use className

function TTAAL() {

    const facts : FactProps[] = [
        {
            id: 1,
            fact: "I've competed for the US National Team for Karate in multiple international competitions",
            isTrue: true
        },
        {
            id: 2,
            fact: "I drink 2 cups of coffee every morning before training starts",
            isTrue: false
        },
        {
            id: 3,
            fact: "I once completed a semester of school at Harvard University",
            isTrue: true
        }
    ]

  return (
    <main>
        <h3>Two Truths and a Lie</h3>

        <table>
            {/* GOAL: Turn these pieces below into their own component */}
            {/* <tr className="truth">
                <th>1st</th>
                <td>I've competed for the US National Team for Karate in multiple international competitions</td>
            </tr>
            <tr className="lie">
                <th>2nd</th>
                <td>I drink 2 cups of coffee every morning before training starts</td>
            </tr>
            <tr className="truth">
                <th>3rd</th>
                <td>I once completed a semester of school at Harvard University</td>
            </tr> */}
            {/* <Fact id={facts[0].id} fact={facts[0].fact} isTrue={facts[0].isTrue}></Fact>
            <Fact id={facts[1].id} fact={facts[1].fact} isTrue={facts[1].isTrue}></Fact>
            <Fact id={facts[2].id} fact={facts[2].fact} isTrue={facts[2].isTrue}></Fact> */}

            {
                facts.map( (fact) => {
                    return <Fact
                        // id={fact.id}
                        // fact={fact.fact}
                        // isTrue={fact.isTrue}
                        {...fact}
                    ></Fact>
                })
            }
            
        </table>
        
    </main>
  )
}

export default TTAAL
