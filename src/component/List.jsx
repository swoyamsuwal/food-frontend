import React from "react";
function List(){
    const food=['pizza','eggs'];
    return(
        <dev>
            <h1>Food list</h1>

            <ul>
                <li>{food[0]}</li>
            </ul>
        </dev>
    )
}
export default List