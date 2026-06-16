import './box.css.scss';

const BoxImage = (props) => {
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
                        <button className='box-img-button'>{props.title}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxImage;