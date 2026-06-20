import { useNavigate } from 'react-router-dom';
import './box.css.scss';

const BoxImage = (props) => {
    const navigate = useNavigate()
    const handleToPage = () => {
        navigate(`/${props.page}`)
    }
    return(
        <>
            {/* <div className="box-image-container">
                <div className="box-image-content">
                    <img src="/img/tohe/trang-chu/v72_14.png" alt="" className='box-image-item-one'/>
                    <div className="box-image-context">
                        <img src="/img/tohe/trang-chu/v76_2.png" alt='' className="box-image-context-item-two" />
                        <button className='box-img-button'>chi tiet</button>
                    </div>
                </div>
            </div> */}
            <div className="box-image-container">
                <div className="box-image-content">
                    <img src={props.img} alt="" className='box-image-item-one'/>
                    <div className="box-image-context">
                        <img src={props.branch} alt='' className="box-image-context-item-two" />
                        <a onClick={handleToPage}><button className='box-img-button'>{props.title}</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxImage;