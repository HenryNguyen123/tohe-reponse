import ButtonArrowRight from '../button/button-arrow-right.camon copy';
import './box.css.scss'
import { FiGift } from "react-icons/fi";

const BoxTitle = () => {
    return(
        <>
            <div className="box-title-container">
                <div className="box-title-content">
                    <div className="box-title-icon">
                        <FiGift className='box-title-icon-item'/>
                    </div>
                    <div className="div-box-title">
                        <h4 className='box-title'>
                            Đồng hành phát triển 
                            quà tặng doanh nghiệp
                        </h4>
                    </div>
                    <p>
                        Tòhe cung cấp giải pháp tư vấn, thiết kế độc bản và sản xuất trọn gói các tặng phẩm doanh nghiệp tích hợp giá trị xã hội
                    </p>
                    <ul>
                        <li>
                            Thiết kế quà tặng doanh nghiệp ứng dụng tranh vẽ của trẻ em đặc biệt
                        </li>
                        <li>
                            Ứng dụng câu chuyện thương hiệu vào sản phẩm độc bản, không sao chép
                        </li>
                        <li>
                            Tối ưu hóa toàn bộ quy trình sản xuất
                        </li>
                    </ul>
                    <div className="button-title-box">
                        <ButtonArrowRight title={'Xem chi tiết'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxTitle;