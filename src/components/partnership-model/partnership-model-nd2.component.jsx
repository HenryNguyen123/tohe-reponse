import { useEffect } from 'react';
import './p-n-all.css.scss';
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';
import BoxIImageNd2 from '../../camoms/box/box-image-nd2.box';

const PartnerShipModelNd2 = () => {
    useEffect(() => {
        document.title = 'Hình thức đồng hành';
    }, [])
    const boxList = [
        {
            img: "/img/tohe/trang-chu/v72_14.png",
            logo: "/img/tohe/trang-chu/v76_2.png",
            title1: "TÒHE",
            title2: " X CANIFA",
            titleButton: "Xem Chi tiết",
            desc1: '"Dự án: “Yêu thương có tất”',
            desc2: "Bộ sưu tất nhằm tầm tôn vinh khả năng sáng tạo độc đáo của các trẻ đặc biệt.",
            iconCheck: true,
            page: 'canifa'
        },
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/nd2/v300_2136.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/nd2/v342_659.png",
            title1: "TÒHE",
            title2: " X STARBUCKS VIỆT NAM",
            titleButton: "Xem Chi tiết",
            desc1: 'Dự án quà tặng doanh nghiệp',
            desc2: "6 năm kiến tạo quà tặng doanh nghiệp mang giá trị xã hội",
            iconCheck: false,
            page: 'starbuck'
        },
    ];
    return(
        <>
            <div className="partnership-model-container-nd2">
                <div className="partnership-model-context-nd2">
                    <div className="partnership-model-content-nd2">
                        <div className="home-context_box_item-box-hm1">
                            <div className="box-content-box-left-hm1">
                                {/* <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_4843.png" alt="" className='home-img-two-hm1'/> */}
                                <h1 className='text-blue'>
                                    ĐỒNG HÀNH PHÁT TRIỂN<br/> QUÀ TẶNG DOANH NGHIỆP
                                </h1>
                                {/* <p>
                                    Từ quà tặng doanh nghiệp, chương trình giáo dục sáng tạo đến các dự án cộng đồng, Tòhe mang đến nhiều mô hình hợp tác giúp doanh nghiệp tạo tác động xã hội thực tế và bền vững.
                                </p>
                                <div className='home-button-left-hm1'>
                                    <ButtonArrowRight title={'LIÊN HỆ NGAY'}/>
                                </div> */}
                            </div>
                            <div className="box-img-box-right-hm1">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/v342_687.png" alt="" className='home-img-box'/>
                            </div>
                        </div>

                        {/* tohe background */}
                        <div className="partnership-model-content-bg-nd2">
                            <div className="partnership-model-content-bg-item-text-nd2">
                                <h1 className='text-blue'>
                                    HỢP TÁC <span className='text-pink'>QUÀ TẶNG DOANH NGHIỆP</span> LÀ GÌ?
                                </h1>
                                <div className="text">
                                    <p>
                                        <span className='text-pink'>Tòhe</span> cung cấp giải pháp tư vấn, thiết kế độc bản và sản xuất trọn gói các tặng phẩm<br/> doanh nghiệp tích hợp giá trị xã hội
                                    </p>
                                </div>
                            </div>
                            <div className="tohe-bg-container">
                                <div className="background-content"></div>
                                <div className="tohe-bg-content">
                                    <div className="tohe-bg-content-flex">
                                        {/* <div className="tohe-content-item">
                                            <h1 className=''>
                                                <span className='text-pink'>TÒHE</span> ĐÃ TẠO RA BA GIÁ TRỊ SONG SONG
                                            </h1>
                                        </div> */}
                                        <div className="tohe-box-context">
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/st1-img1.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Thiết kế quà tặng ÁP dụng tranh vẽ của nghệ sĩ đặc biệt
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức đặt hàng các bộ quà tặng (lịch, sổ, túi, bình nước, cà vạt…) ứng dụng kho bản quyền chất liệu là nét vẽ hồn nhiên của trẻ em tự kỷ/khuyết tật.
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/v352_788.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Thiết kế câu chuyện <br/>
                                                    thương hiệu riêng
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Tòhe phát triển concept mỹ thuật độc quyền, chuyển hóa thông điệp, giá trị cốt lõi hoặc logo của doanh nghiệp/tổ chức thành ngôn ngữ nghệ thuật thông qua lăng kính của các nghệ sĩ bé, tạo ra sản phẩm độc bản, chống sao chép.
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/nd2-img3.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Ủy thác trọn gói <br/>
                                                    quy trình sản xuất
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức nghiệm thu sản phẩm cuối cùng; Tòhe chịu trách nhiệm toàn bộ từ khâu duyệt nguyên liệu thô, giám sát chất lượng gia công kỹ thuật cao đến vận chuyển và logistics, đáp ứng linh hoạt từ đơn hàng nhỏ đến hàng chục nghìn sản phẩm.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* title text */}
                        <div className="partnership-model-content-item-pm1">
                            <div className="partnership-model-item-pm1_item">
                                <div className="partnership-model-pm1-top">
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/v352_788.png" alt="" />
                                    <div className="partnership-model-pm1-top-right">
                                        <div className="partnership-model-pm1-top-title">
                                            <h1 className='text-blue'>
                                                ĐỐI TƯỢNG HỢP TÁC<br/> <span className='text-pink'>PHÙ HỢP</span>
                                            </h1>
                                        </div>
                                        <div className="partnership-model-pm1-top-item">
                                            <div className="item-number">
                                                <h1>1</h1>
                                            </div>
                                            <div className="item-text">
                                                <div>
                                                    <span>Doanh nghiệp/Tổ chức có nhu cầu quà tặng cá biệt hóa cao, mang dấu ấn nhân văn và truyền thông mạnh.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="partnership-model-pm1-top-item">
                                            <div className="item-number">
                                                <h1>2</h1>
                                            </div>
                                            <div className="item-text">
                                                <div>
                                                    <span>Các đơn vị cần quà tặng đối tác, khách hàng, nhân viên nhưng muốn khác biệt và có câu chuyện thương hiệu rõ ràng.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="partnership-model-impact-content">
                                <h1 className='text-blue'>DẤU ẤN HỢP TÁC DOANH NGHIỆP</h1>
                                <p>Biến quà tặng thành trải nghiệm mang <span className='text-pink'>ý nghĩa xã hội</span></p>
                            </div>
                            <div className="partnership-model-impact-content-box">
                                {
                                    boxList && boxList.map((item, index) => (
                                        <div className="box-item-model" key={index}>
                                            <BoxIImageNd2 
                                                img={item.img}
                                                logo={item.logo}
                                                title1={item.title1}
                                                title2={item.title2}
                                                titleButton={item.titleButton}
                                                desc1={item.desc1}
                                                desc2={item.desc2}
                                                iconCheck={item.iconCheck}
                                                page={item.page}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* business */}
                        <div className="partnership-model-business">
                            <div className="partnership-model-business-content">
                                <div className="partnership-model-business-content-top">
                                    <div className="partnership-model-business-content-bg">
                                        <div className="background-content"></div>
                                        <div className="partnership-model-business-content-bg-item">
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/v342_851.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-text">
                                        <h1 className='text-pink text-h1-top'>LỢI ÍCH GIÀNH CHO </h1>
                                        <h1 className='text-h1-bottom'>DOANH NGHIỆP, TỔ CHỨC</h1>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Sở hữu giải pháp quà tặng mang tính độc bản cao
                                            </h4>
                                            <p>
                                                Doanh nghiệp/Tổ chức nhận được các thiết kế quà tặng độc quyền, không thể sao chép nhờ ứng dụng kho dữ liệu tranh vẽ mang tính nghệ thuật tự do của các nghệ sĩ bé đặc biệt. Mỗi sản phẩm là một công cụ truyền thông sắc bén, tích hợp câu chuyện thương hiệu nhân văn để tạo sự khác biệt hóa vượt trội trong mắt khách hàng và đối tác.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Bảo chứng giá trị CSR/ESG minh bạch và thiết thực
                                            </h4>
                                            <p>
                                                Mọi đơn hàng quà tặng đều có số liệu tác động xã hội rõ ràng, cam kết trích trực tiếp 5% doanh thu gửi lại tận tay các nghệ sĩ nhí đặc biệt có tranh được ứng dụng.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Quy trình hợp tác chuẩn B2B, nhanh chóng và linh hoạt
                                            </h4>
                                            <p>
                                                Tòhe cam kết quy trình làm việc chuyên nghiệp, năng lực đáp ứng linh hoạt từ các đơn hàng nhỏ đến hàng chục nghìn sản phẩm. Toàn bộ chuỗi cung ứng  đều được tối ưu hóa, đảm bảo đúng tiến độ và tiêu chuẩn khắt khe của doanh nghiệp/tổ chức.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="partnership-model-business-content-bottom">
                                    <div className="partnership-model-business-content-text">
                                        <h1 className='text-pink text-h1-top'>GIÁ TRỊ</h1>
                                        <h1 className='text-h1-bottom'>CỘNG ĐỒNG TẠO RA</h1>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Trích trực tiếp 5% doanh thu từ sản phẩm
                                            </h4>
                                            <p>
                                                Trích trực tiếp 5% doanh thu từ sản phẩm gửi lại cho các nghệ sĩ nhí có tranh được ứng dụng, giúp tạo nguồn thu nhập thực tế để các em tự lập và cải thiện cuộc sống.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Nuôi dưỡng tài năng đặc biệt
                                            </h4>
                                            <p>
                                                Đóng góp nguồn tài lực vào việc duy trì vận hành xưởng hướng nghiệp và các lớp học nghệ thuật chuyên sâu, giúp chuyển hóa “Nghệ sĩ bé” thành những “Nghệ sĩ lớn” có khả năng sáng tác độc lập.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Thúc đẩy mô hình kinh tế tuần hoàn và toàn diện
                                            </h4>
                                            <p>
                                                Tạo cơ hội việc làm bình đẳng cho nhóm người có nhu cầu đặc biệt trong chuỗi cung ứng sản xuất của doanh nghiệp xã hội. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-bg">
                                        <div className="background-content"></div>
                                        <div className="partnership-model-business-content-bg-item">
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/nd2/v342_905.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}
export default PartnerShipModelNd2;