import "./TTAAL.css"
// So we haven't added any CSS files yet, but for this component we're running into an issue with the word 'class'
// Class is a keyword is TS/JS but it's used for something else in HTML
// So if we want to style we use className

function TTAAL() {
  return (
    <main>
        <h3>Two Truths and a Lie</h3>

        <table>
            <tr className="truth">
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
            </tr>
        </table>
        
    </main>
  )
}

export default TTAAL
