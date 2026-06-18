import { useEffect } from 'react';
import './p-n-st1.css.scss';
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';
import { FiGift  } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import BoxTitle from '../../camoms/box/box-title.box';
import { FiCheckSquare } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const PartnerShipModelSt1 = () => {
    useEffect(() => {
        document.title = 'Hình thức đồng hành';
    }, [])

        const partnerList = [
            {
                Icon: FiGift,
                title: "Đồng hành phát triển quà tặng doanh nghiệp",
                description:
                    "Tòhe cung cấp giải pháp tư vấn, thiết kế độc bản và sản xuất trọn gói các tặng phẩm doanh nghiệp.",
                items: [
                    "Thiết kế quà tặng ứng dụng tranh trẻ em đặc biệt",
                    "Xây dựng sản phẩm độc bản",
                    "Tối ưu quy trình sản xuất"
                ]
            },
            {
                Icon: BsBook ,
                title: "Đồng hành giáo dục và sân chơi sáng tạo",
                description:
                    "CDoanh nghiệp/Tổ chức đồng hành cùng Tòhe với vai trò tài trợ, đồng tổ chức hoặc đối tác đối ứng chi phí cho các mô hình giáo dục sáng tạo dành cho trẻ em đặc biệt và gia đình.",
                items: [
                    "Đồng hành tổ chức sự kiện, sân chơi và hoạt động trải nghiệm nghệ thuật cho trẻ em và gia đình",
                    "Tài trợ, hỗ trợ lớp học, trại hè và sân chơi nghệ thuật cho trẻ em đặc biệt",
                    "Kết nối tổ chức, chuyên gia và nguồn lực"
                ]
            },
            {
                Icon: TbMessageCircleStar ,
                title: "Đồng hành phát triển dự án xã hội",
                description:
                    "Doanh nghiệp/Tổ chức đồng hành cùng Tòhe với vai trò đối tác chiến lược hoặc nhà tài trợ nhằm triển khai các dự án xã hội dài hạn và bền vững.",
                items: [
                    "Đồng tổ chức triển lãm và chiến dịch nâng cao nhận thức cộng đồng",
                    "Hỗ trợ xây dựng sân chơi và mô hình giáo dục sáng tạo dài hạn",
                    "Phối hợp triển khai các dự án cộng đồng cùng tổ chức xã hội/quốc tế"
                ]
            }
        ];
    return(
        <>
            <div className="partership-model-container-st1">
                <div className="partership-model-context-st1">
                    <div className="partership-model-box-st1">
                        <div className="home-context_box_item-box-hm1">
                            <div className="box-content-box-left-hm1">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_4843.png" alt="" className='home-img-two-hm1'/>
                                <h1 className='text-blue'>
                                    CÁC HÌNH THỨC <br/>
                                    ĐỒNG HÀNH CÙNG <span className='text-pink'>TÒHE</span>
                                </h1>
                                <p>
                                    Từ quà tặng doanh nghiệp, chương trình giáo dục sáng tạo đến các dự án cộng đồng, Tòhe mang đến nhiều mô hình hợp tác giúp doanh nghiệp tạo tác động xã hội thực tế và bền vững.
                                </p>
                                <div className='home-button-left-hm1'>
                                    <ButtonArrowRight title={'LIÊN HỆ NGAY'}/>
                                </div>
                            </div>
                            <div className="box-img-box-right-hm1">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_4846.png" alt="" className='home-img-box'/>
                            </div>
                        </div>
                        <div className="partership-model-box-item-st1">
                            <div className="partership-model-box-content-item-st1">
                                <div className="partership-model-box-item_item-left-st1">
                                    <h1 className='text-pink'>TÒHE</h1>
                                    <h4 className='text-blue'>ĐỐI TÁC CSR/ESG </h4>
                                    <p className='text-blue'>
                                        ĐỒNG HÀNH CÙNG DOANH NGHIỆP KIẾN TẠO<br/> 
                                        GIÁ TRỊ XÃ HỘI BỀN VỮNG
                                    </p>
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_4854.png" alt="" />
                                </div>
                                <div className="partership-model-box-item_item-right-st1">
                                    <ul>
                                        <li>400+ đối tác doanh nghiệp và tổ chức</li>
                                        <li>400+ tình nguyện viên/ cộng tác viên,<br/> 6000+ trẻ em đặc biệt tham gia</li>
                                        <li>3000+ buổi học nghệ thuật</li>
                                        <li>50+ địa điểm thuộc nhiều tình thành</li>
                                        <li>13 triển làm đã được tổ chức</li>
                                        <li>2 tỷ + tiền bản quyền đã được trao...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* parter */}
                    <div className="home-content-parter-hm1">
                        <div className="home-content-parter-text-hm1">
                            <h1 className="text-tetle">
                                <span className='text-blue'>CÁC HÌNH THỨC ĐỒNG HÀNH CÙNG</span> <span className='text-pink'>TÒHE</span>
                            </h1>
                            <p>
                                Với niềm tin rằng sáng tạo có thể tạo ra tác động xã hội bền vững, Tòhe đồng hành cùng doanh nghiệp xây dựng <br>
                                </br> các hoạt động CSR/ESG thông qua nghệ thuật sáng tạo dành cho trẻ em đặc biệt.
                            </p>
                        </div>
                        <div className="home-parter-box-content-hm1">
                            {
                                partnerList.map((item, index) => (
                                    <BoxTitle
                                        key={index}
                                        Icon={item.Icon}
                                        title={item.title}
                                        description={item.description}
                                        items={item.items}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    
                    {/*  */}
                    <div className="partership-model-panda-conent">
                        <div className="partership-model-panda-title">
                            <div className="partership-model-panda-title-item">
                                <h4 className='text-blue'>LÝ DO MÀ HƠN</h4>
                                <div className='partership-model-panda-title-item_item'>
                                    <h1 className='text-pink'>400+</h1>
                                    <h4 className='text-blue'>doanh nghiệp/ tổ chức<br/> chọn <span className='text-pink'>TÒHE</span> để đồng hành</h4>
                                </div>
                            </div>
                        </div>
                        <div className="partership-model-panda-bg">
                            <div className="partership-model-panda-bg-content">
                                <img src="/img/tohe/logo/v307_667.png" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/wwf-panda-logo.jpg" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/british-council-1-logo-png-transparent.png" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/images.png" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/images.png" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/uniqlo-seeklogo.png" alt="" className='partership-model-panda-bg-conten-img'/>
                                <img src="/img/tohe/logo/ve-eco-retreat.png" alt="" className='partership-model-panda-bg-conten-img'/>
                            </div>
                        </div>
                        <div className="partership-model-panda-list">
                            <div className="partership-model-panda-list-left">
                                <h5 className='text-pink'>
                                    DOANH NGHIỆP XÃ HỘI TÒHE
                                </h5>
                                <h4 className='text-blue'>
                                    KIẾN TẠO GIẢI PHÁP CSR/ESG <br/>
                                    THÔNG QUA CÁC HOẠT ĐỘNG <br/>
                                    SÁNG TẠO BỀN VỮNG
                                </h4>
                            </div>
                            <div className="partership-model-panda-list-right">
                                <div className='partership-model-panda-list-one'>
                                    <span><FiCheckSquare className='partership-model-item-icon'/></span>
                                    <span>Quy trình triển khai trọn gói từ ý tưởng, thiết kế đến sản xuất và vận hành thực tế.</span>
                                </div>
                                <div className='partership-model-panda-list-two'>
                                    <span><FiCheckSquare className='partership-model-item-icon'/></span>
                                    <span>Sở hữu kho tranh sáng tạo độc quyền từ trẻ em đặc biệt, tạo dấu ấn khác biệt cho dự án.</span>
                                </div>
                                <div className='partership-model-panda-list-one'>
                                    <span><FiCheckSquare className='partership-model-item-icon'/></span>
                                    <span>Hoạt động CSR/ESG minh bạch, có số liệu tác động xã hội và dễ truyền thông thương hiệu.</span>
                                </div>
                                <div className='partership-model-panda-list-two'>
                                    <span><FiCheckSquare className='partership-model-item-icon'/></span>
                                    <span>Đội ngũ sáng tạo và chuyên môn cao, có kinh nghiệm triển khai các dự án nghệ thuật cộng đồng.</span>
                                </div>
                            </div>
                        </div>
                        <div className="partership-model-diagram">
                            <div className="partership-model-diagram-content">
                                <div className="partership-model-diagram-item-top">
                                    <h1 className='text-blue'>QUY TRÌNH HỢP TÁC CHẶT CHẼ</h1>
                                    <p>
                                        CÙNG <span className='text-pink'>TÒHE</span> ĐỒNG HÀNH TRONG CÁC HOẠT ĐỘNG XÃ HỘI BỀN VỮNG
                                    </p>
                                </div>
                                <div className="partership-model-diagram-item-bottom">
                                    <div className="partership-model-diagram-item-button">
                                        <p>
                                            Quy trình tư vấn
                                        </p>
                                    </div>
                                    <span className='arrow-right arrow_item-icon-right'></span>
                                    <p className='text-pink text_item-title-text'>ký kết hợp đồng</p>
                                    <span className='arrow-left arrow_item-icon-right'></span>
                                    <div className="partership-model-diagram-item-button">
                                        <p>
                                            Quy trình triển khai
                                        </p>
                                    </div>
                                    <div className="partership-model-diagram-item-arrow">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="partership-model-arrow">
                            <div className="partership-model-arrow-left">
                                <div className='arrow-right-dashed partership-model-arrow-left-item'></div>
                            </div>
                            <span className='icon-beetwen-arrow'><FaPenNib /></span>
                            <div className="partership-model-arrow-right">
                                <div className='arrow-left-dashed'></div>
                            </div>
                        </div>
                    </div>     
                    <div className="partership-model-bg-top">
                        <div className="background-content"></div>
                        <div className="partership-model-bg-top-content">
                            <div className="partership-model-bg-top-content-item">
                                <h1>QUY TRÌNH TƯ VẤN</h1>
                                <div className="partership-model-bg-top-content-item">
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_5000.png" alt="" />
                                    <div className="partership-model-bg-top-content-item-list">
                                        <div className="content-list">
                                            <p>Bước 1: Tiếp nhận yêu cầu ban đầu</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 2: Phân tích bài toán thương hiệu</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 3: Khảo sát và lựa chọn tư liệu mỹ thuật độc quyền</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 4: Thiết kế giải pháp sơ bộ </p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 5: Thuyết trình phương án và lấy ý kiến phản hồi</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 6: Xây dựng cấu trúc giá linh hoạt cho đối tác/đại lý</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 7: Hoàn thiện bảng báo giá chi tiết</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partership-model-bg-bottom">
                        <div className="background-content"></div>
                        <div className="partership-model-bg-top-content">
                            <div className="partership-model-bg-top-content-item">
                                <h1>QUY TRÌNH TƯ VẤN</h1>
                                <div className="partership-model-bg-top-content-item">
                                    <div className="partership-model-bg-top-content-item-list">
                                        <div className="content-list">
                                            <p>Bước 1: Tiếp nhận yêu cầu ban đầu</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 2: Phân tích bài toán thương hiệu</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 3: Khảo sát và lựa chọn tư liệu mỹ thuật độc quyền</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 4: Thiết kế giải pháp sơ bộ </p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 5: Thuyết trình phương án và lấy ý kiến phản hồi</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 6: Xây dựng cấu trúc giá linh hoạt cho đối tác/đại lý</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        <div className="content-list">
                                            <p>Bước 7: Hoàn thiện bảng báo giá chi tiết</p>
                                            <p><IoIosArrowDown className='icon-arrow-bottom font-uvn-b'/></p>
                                        </div>
                                        
                                    </div>
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_5003.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="partership-model-button">
                        <ButtonArrowRight title={'Case study'}/>
                    </div>
                            

                </div>
            </div>
        </>
    )
}
export default PartnerShipModelSt1;