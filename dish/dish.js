import { useRef } from "react"

export function Dish(props){

    let someRef = useRef();

    return <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>
            <input ref={someRef} onChange={function(){

                props.fsd(someRef.current.checked);

            }} type="checkbox" />
        </td>
    </tr>

}