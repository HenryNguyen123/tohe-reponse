import { useEffect } from 'react';
import './p-n-all.css.scss';
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';
import BoxIImageNd2 from '../../camoms/box/box-image-nd2.box';

const PartnerShipModelTh4 = () => {
    useEffect(() => {
        document.title = 'Hình thức đồng hành';
    }, [])

    const boxList = [
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_593.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_624.png",
            title1: "TÒHE",
            title2: " X TOKIO MARINE",
            titleButton: "Xem Chi tiết",
            desc1: 'Dự án: “Yêu trọn niềm vui”',
            desc2: "Dự án giáo dục nghệ thuật mang đến cơ hội học tập và phát triển cho các bạn nhỏ rối loạn phổ tự kỷ",
            iconCheck: true,
        },
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_608.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_626.png",
            title1: "",
            title2: "KHOE CREATIVE FESTIVAL",
            titleButton: "Xem Chi tiết",
            desc1: 'Lễ hội sáng tạo khỏe',
            desc2: 'Ngày hội vui chơi - Xem sáng tạo. Chơi sáng tạo. Mua sáng tạo!',
            iconCheck: true,
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
                                    ĐỒNG HÀNH GIÁO DỤC<br/> VÀ SÂN CHƠI SÁNG TẠO
                                </h1>
                                {/* <p>
                                    Từ quà tặng doanh nghiệp, chương trình giáo dục sáng tạo đến các dự án cộng đồng, Tòhe mang đến nhiều mô hình hợp tác giúp doanh nghiệp tạo tác động xã hội thực tế và bền vững.
                                </p>
                                <div className='home-button-left-hm1'>
                                    <ButtonArrowRight title={'LIÊN HỆ NGAY'}/>
                                </div> */}
                            </div>
                            <div className="box-img-box-right-hm1">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v286_1178.png" alt="" className='home-img-box'/>
                            </div>
                        </div>

                        {/* tohe background */}
                        <div className="partnership-model-content-bg-nd2">
                            <div className="partnership-model-content-bg-item-text-nd2">
                                <h1 className='text-blue'>
                                    HỢP TÁC <span className='text-pink'>GIÁO DỤC VÀ SÂN CHƠI SÁNG TẠO</span> LÀ GÌ?
                                </h1>
                                <div className="text">
                                    <p>
                                        Doanh nghiệp/Tổ chức đồng hành cùng <span className='text-pink'>Tòhe</span> với vai trò nhà tài trợ chiến lược, đơn vị đồng tổ chức hoặc đối tác đối ứng chi phí để xây dựng, vận hành các mô hình giáo dục sáng tạo phi lợi nhuận hướng tới đối tượng cốt lõi là trẻ em, trẻ em đặc biệt và gia đình:
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
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v347_556.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Tài trợ độc quyền/đồng hành<br/> tổ chức sự kiện/hoạt động
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức tài trợ chi phí để Tòhe lên ý tưởng, thiết kế không gian sắp đặt thị giác và vận hành các ngày hội sáng tạo, sân chơi trải nghiệm nghệ thuật quy mô lớn cho gia đình và trẻ em.
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v347_558.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Tài trợ vận hành lớp học và<br/> sân chơi chuyên biệt
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức hỗ trợ ngân sách (chi phí giáo viên, họa phẩm, giáo trình, không gian) để duy trì các lớp học Art Coaching chuyên sâu dài hạn, các sân chơi nghệ thuật trực tiếp/trực tuyến hoặc trại hè nghệ thuật dành riêng cho trẻ em đặc biệt (tự kỷ, khuyết tật, mồ côi).
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v347_559.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Đối ứng nguồn lực và<br/> mạng lưới chuyên gia
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức đồng hành bằng cách cung ứng cơ sở vật chất (địa điểm, hạ tầng công nghệ) hoặc kết nối mạng lưới nhân sự, chuyên gia nhân đạo để cùng Tòhe chuẩn hóa nội dung giáo dục đặc biệt.
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
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v349_555.png" alt="" />
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
                                                    <span>Công ty có quỹ CSR/ESG hướng tới giáo dục, trẻ em, môi trường.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="partnership-model-pm1-top-item">
                                            <div className="item-number">
                                                <h1>2</h1>
                                            </div>
                                            <div className="item-text">
                                                <div>
                                                    <span>Các khu đô thị, chủ đầu tư muốn tổ chức sự kiện cộng đồng thu hút gia đình trẻ.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="partnership-model-impact-content">
                                <h1 className='text-blue'>DẤU ẤN HỢP TÁC DOANH NGHIỆP</h1>
                                <p>Lan tỏa những <span className='text-pink'>trải nghiệm sáng tạo</span></p>
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
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v356_628.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-text">
                                        <h1 className='text-pink text-h1-top'>LỢI ÍCH GIÀNH CHO </h1>
                                        <h1 className='text-h1-bottom'>DOANH NGHIỆP, TỔ CHỨC</h1>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                               Cam kết giá trị số liệu thực tế
                                            </h4>
                                            <p>
                                                Doanh nghiệp/Tổ chức được cung cấp báo cáo đo lường tác động định lượng rõ ràng (Số lượng trẻ tham gia, số buổi trải nghiệm, số địa điểm tiếp cận,...) để làm minh chứng thuyết phục cho các hoạt động đầu tư cộng đồng.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Tăng cường chỉ số gắn kết nội bộ
                                            </h4>
                                            <p>
                                                Cơ hội để nhân sự doanh nghiệp/ tổ chức tham gia trực tiếp với vai trò tình nguyện viên, cùng lên ý tưởng, lắp đặt sân chơi, tối ưu hiệu quả hoạt động.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Gia tăng độ phủ và nhận diện thương hiệu tự nhiên
                                            </h4>
                                            <p>
                                                Thương hiệu của doanh nghiệp/ tổ chức được xuất hiện nổi bật tại các không gian nghệ thuật sắp đặt ấn tượng, độc đáo, có khả năng tạo hiệu ứng lan truyền mạnh mẽ trên truyền thông và mạng xã hội. 
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
                                                Bình đẳng hóa cơ hội tiếp cận giáo dục
                                            </h4>
                                            <p>
                                                Mang lại cơ hội trải nghiệm giáo dục nghệ thuật và khám phá bản thân miễn phí cho hàng nghìn trẻ em đặc biệt, trẻ thiệt thòi tại các vùng sâu, vùng xa hoặc các trung tâm bảo trợ.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Hỗ trợ tâm lý và kết nối gia đình
                                            </h4>
                                            <p>
                                                Tạo ra không gian an toàn, tôn trọng sự khác biệt để trẻ đặc biệt phát triển kỹ năng vận động tinh, khả năng giao tiếp; xây dựng niềm tin và sự thấu hiểu giữa phụ huynh và trẻ.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                               Đóng gói và chuyển giao tri thức
                                            </h4>
                                            <p>
                                                Xây dựng các bộ tài liệu chuẩn hóa về hoạt động nghệ thuật hỗ trợ phát triển, tập huấn năng lực chuyên môn để các trung tâm can thiệp tự vận hành sân chơi định kỳ.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-bg">
                                        <div className="background-content"></div>
                                        <div className="partnership-model-business-content-bg-item">
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v356_632.png" alt="" />
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
export default PartnerShipModelTh4;