import { useNavigate } from 'react-router-dom';
import ButtonArrowRightMini from '../button/button-arrow-right-mini.camon';
import './box.css.scss'

const BoxIImageNd2Mini = ({img, logo, title1, title2, titleButton, desc1, desc2, iconCheck, page}) => {
    const navigate = useNavigate();

    const handlePage = () => {
        navigate(`/${page}`);
    };
    return(
        <>
            <div className="box-image-nd2-container-mini">
                <div className="box-image-nd2-content-mini">
                    <img src={img}alt="" className='logo-item-1-mini'/>
                    <div className="box-image-nd2-content-container-mini">
                        <div className="box-image-nd2-content-item-mini">
                            <p className='font-uvn-b text-item-1-mini'>
                                <span className='text-pink'>{title1}</span>
                                <span>{title2}</span>
                            </p>
                            <p className='text-item-2-mini'>
                                <span className='text-blue'>{desc1}<br/></span>
                                {desc2}
                            </p>
                        </div>
                        <div className="box-image-nd2-logo-button-mini">
                            <div className="logo-mini">
                                <img src={logo} alt="" className={iconCheck ? 'icon-logon-rectangular-80' : 'icon-logon-round-40'}/>
                            </div>
                            <div className="box-button-mini">
                                <a onClick={handlePage}>
                                    <ButtonArrowRightMini title={titleButton}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxIImageNd2Mini;