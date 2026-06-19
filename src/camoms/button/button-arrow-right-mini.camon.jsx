import './button.css.scss'
import { FaAngleRight } from "react-icons/fa6";

const ButtonArrowRightMini = (props) => {
    return(
        <>
            <div className='button-arrow-right-box-mini'>
                <button className='button-arrow-right-item-mini'>
                    <span>{props.title}</span>
                    <div className="arrow-right-context-mini">
                        <FaAngleRight className='arrow-right-item-mini'/>
                    </div>
                </button>
            </div>
        </>
    )
}
export default ButtonArrowRightMini;