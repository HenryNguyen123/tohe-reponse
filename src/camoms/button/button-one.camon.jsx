import './button.css.scss'
const ButtonOne = (props) => {
    return(
        <>
            <div className='button-context-box'>
                <button className='button-item'>
                    <span>{props.title}</span>
                </button>
            </div>
        </>
    )
}
export default ButtonOne;