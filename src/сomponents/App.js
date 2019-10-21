import React from "react";
import Article from "./Article";
import articles from "./fixtures";

function App() {
    return(
        <div>
            <div>
                <h1>App name</h1>
            </div>
                <Article article={articles[0]}/>
            </div>
    )
}
export default App