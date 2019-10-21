import React from 'react';

function Article(props) {
    const {article} = props
    const body=<section>{article.body}</section>
    return(
        <div>
            <h3>{article.id}</h3>
            <h2>{article.title}</h2>
            {body}
        </div>
    )
}
export default Article