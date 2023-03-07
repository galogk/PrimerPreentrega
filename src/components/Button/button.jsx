const Button = ({text, number, handleClick}) => {
    return <button onClick= {() => {handleClick(props.text)}}>{text} {number}</button>
}

export default Button;