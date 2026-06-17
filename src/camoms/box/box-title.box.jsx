import ButtonArrowRight from '../button/button-arrow-right.camon copy';
import './box.css.scss';

const BoxTitle = ({ Icon, title, description, items }) => {
    return (
        <div className="box-title-container">
            <div className="box-title-content">
                <div className="box-title-icon">
                    <Icon className='box-title-icon-item' />
                </div>

                <div className="div-box-title">
                    <h4 className='box-title text-bold-height'>
                        {title}
                    </h4>
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
                    <ButtonArrowRight title={'Xem chi tiết'} />
                </div>
        </div>
    );
};

export default BoxTitle;