import React, {useState} from "react";

export default function Square({value, onClickSquare}) {

    //const [value, setValue] = useState(null);

    return (
        <button className="square" onClick={onClickSquare}>
            {value}
        </button>
    )
}