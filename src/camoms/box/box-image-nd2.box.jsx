import { useNavigate } from 'react-router-dom';
import ButtonArrowRight from '../button/button-arrow-right.camon copy';
import './box.css.scss';

const BoxIImageNd2 = ({
    img,
    logo,
    title1,
    title2,
    titleButton,
    desc1,
    desc2,
    iconCheck,
    page
}) => {
    const navigate = useNavigate();

    const handlePage = () => {
        navigate(`/${page}`);
    };

    return (
        <div className="box-image-nd2-container">
            <div className="box-image-nd2-content">
                <img src={img} alt="" className="logo-item-1" />

                <div className="box-image-nd2-content-container">
                    <div className="box-image-nd2-content-item">
                        <p className="font-uvn-b text-item-1">
                            <span className="text-pink">{title1}</span>
                            <span>{title2}</span>
                        </p>

                        <p className="text-item-2">
                            <span className="text-blue">
                                {desc1}
                                <br />
                            </span>
                            {desc2}
                        </p>
                    </div>

                    <div className="box-image-nd2-logo-button">
                        <div className="logo">
                            <img
                                src={logo}
                                alt=""
                                className={
                                    iconCheck
                                        ? "icon-logon-rectangular"
                                        : "icon-logon-round"
                                }
                            />
                        </div>

                        <div className="box-button" onClick={handlePage}>
                            <ButtonArrowRight title={titleButton} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxIImageNd2;