import React from 'react';


function Cell(props){

    const className = props.fixed ? 'fixed-cell' : 'cell'

    const style = props.height ? {height: `${props.height}px`} : undefined


    return(
        props.header ? (
            <th className={className} style={style}>
                {props.content}
            </th>
        ) : (
            <td className={className} style={style}>
                {props.content}
            </td>
        )
    )
}


export default Cell;