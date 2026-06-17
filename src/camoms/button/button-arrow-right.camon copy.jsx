import './button.css.scss'
import { FaAngleRight } from "react-icons/fa6";

const ButtonArrowRight = (props) => {
    return(
        <>
            <div className='button-arrow-right-box'>
                <button className='button-arrow-right-item'>
                    <span>{props.title}</span>
                    <div className="arrow-right-context">
                        <FaAngleRight className='arrow-right-item'/>
                    </div>
                </button>
            </div>
        </>
    )
}
export default ButtonArrowRight;