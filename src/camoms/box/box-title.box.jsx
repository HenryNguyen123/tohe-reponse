import { useNavigate } from 'react-router-dom';
import ButtonArrowRight from '../button/button-arrow-right.camon copy';
import './box.css.scss';

const BoxTitle = ({ Icon, title, description, items, page }) => {
    const navigate = useNavigate()
    const handleToPage = () => {
        navigate(`/partnership-model/${page}`)
    }
    return (
        <div className="box-title-container">
            <div className="box-title-content">
                <div className="box-title-icon">
                    <Icon className='box-title-icon-item' />
                </div>

                <div className="div-box-title">
                    <p className='box-title'>
                        {title}
                    </p>
                </div>

                <p>
                    {description}
                </p>

                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>

            </div>
                <div className="button-title-box">
                    <a onClick={handleToPage}><ButtonArrowRight title={'Xem chi tiết'} /></a>
                </div>
        </div>
    );
};

export default BoxTitle;