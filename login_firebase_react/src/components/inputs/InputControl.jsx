import Style from "./InputControl.module.css"
export function InputControl(props){
    return(
    <div className={Style.container}>
        {props.label && 
            <label> {props.label} </label>}
        <input type="text" {...props}></input>
    </div>)
}