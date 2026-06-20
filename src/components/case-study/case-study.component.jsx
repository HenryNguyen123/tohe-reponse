import './case-study.scss'
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy'
import { FiGift } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import { useEffect } from 'react';
import BoxIImageNd2 from '../../camoms/box/box-image-nd2.box';
// import {ToClickPage} from '../../camoms/function/to-click-page'
// import { useNavigate } from 'react-router-dom';

const CaseStudyComponent = () => {
    // const navigate = useNavigate();
    // const page = new ToClickPage(navigate);
    const background = '/img/tohe/case-study/st1/v357_1128.png';
    useEffect(() => {
        document.title = 'Case study';
    }, [])
    const boxList1 = [
        {
            img: "/img/tohe/trang-chu/v72_14.png",
            logo: "/img/tohe/trang-chu/v76_2.png",
            title1: "TÒHE",
            title2: " X CANIFA",
            titleButton: "Xem Chi tiết",
            desc1: '"Dự án: “Yêu thương có tất”',
            desc2: "Bộ sưu tất nhằm tầm tôn vinh khả năng sáng tạo độc đáo của các trẻ đặc biệt.",
            iconCheck: true,
            page: 'canifa',
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

    const boxList2 = [
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v307_641.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/v307_667.png",
            title1: "TÒHE",
            title2: " X CANIFA",
            titleButton: "Xem Chi tiết",
            desc1: '2 Bộ Board Game giáo dục cho trẻ em',
            desc2: "Trò chơi giáo dục về biến đổi khí hậu và vệ sinh cộng đồng cho trẻ em.",
            iconCheck: true,
            page: 'canifa'
        },
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v307_654.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/th3-icon2.png",
            title1: "TÒHE",
            title2: " X VCCA",
            titleButton: "Xem Chi tiết",
            desc1: 'Dự án: Triển lãm “Hành tinh nhựa”',
            desc2: 'Không gian triển lãm tái hiện một thế giới nơi đất, nước, gió và các yếu tố tự nhiên bị “nhựa hóa”',
            iconCheck: true,
            page: 'vcca'
        },
    ];
    const boxList3 = [
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_593.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_624.png",
            title1: "TÒHE",
            title2: " X TOKIO MARINE",
            titleButton: "Xem Chi tiết",
            desc1: 'Dự án: “Yêu trọn niềm vui”',
            desc2: "Dự án giáo dục nghệ thuật mang đến cơ hội học tập và phát triển cho các bạn nhỏ rối loạn phổ tự kỷ",
            iconCheck: true,
            page: 'tokio-marine'
        },
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v356_608.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/th4-icon2.png",
            title1: "",
            title2: "KHOE CREATIVE FESTIVAL",
            titleButton: "Xem Chi tiết",
            desc1: 'Lễ hội sáng tạo khỏe',
            desc2: 'Ngày hội vui chơi - Xem sáng tạo. Chơi sáng tạo. Mua sáng tạo!',
            iconCheck: true,
            page: 'khoe'
        },
    ];
    return(
        <>
            <div className="case-study-container-home">
                <div className="case-study-context">
                    <div className="case-study-background">
                        <div className="case-study-background-item">
                            <div className='case-study-background-image' style={{ backgroundImage: `url(${background})` }}></div>
                            <div className="case-study-background-nav">
                                <div className="case-study-background-nav-item">
                                    <h1>
                                        <span className='text-pink'>TÒHE</span> CÓ THỂ GIÚP GÌ CHO BẠN
                                    </h1>
                                    <div className="case-study-background-button">
                                        <ButtonArrowRight title={'LIÊN HỆ ĐỂ NHẬN TƯ VẤN MIỄN PHÍ'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-study-box-top">
                        <div className="case-study-box-item-flex">
                            <div className="case-study-box-item">
                                <span><FiGift className='text-pink icon-gift'/></span>
                                <div className="text-item-case-study">
                                    <p className='font-uvn-b text-top'>QUÀ TẶNG DOANH NGHIỆP</p>
                                    <p className='text-bottom'>200+ dự án</p>
                                </div>
                            </div>
                            <div className="case-study-box-item">
                                <span><BsBook className='text-pink icon-gift'/></span>
                                <div className="text-item-case-study">
                                    <p className='font-uvn-b text-top'>SÂN CHƠI SÁNG TẠO</p>
                                    <p className='text-bottom'>200+ dự án</p>
                                </div>
                            </div>
                            <div className="case-study-box-item">
                                <span><TbMessageCircleStar className='text-pink icon-gift'/></span>
                                <div className="text-item-case-study">
                                    <p className='font-uvn-b text-top'>QPHÁT TRIỂN DỰ ÁN XÃ HỘI</p>
                                    <p className='text-bottom'>200+ dự án</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="partnership-model-content-item-pm1">
                        <div className="partnership-model-impact-content">
                            <h1 className='text-blue'>DỰ ÁN <span className='text-pink'>QUÀ TẶNG DOANH NGHIỆP </span></h1>
                            <p><span className='text-pink'>Tòhe</span> cung cấp giải pháp tư vấn, thiết kế độc bản và sản xuất trọn gói các tặng phẩm<br/> doanh nghiệp tích hợp giá trị xã hội</p>
                        </div>
                        <div className="partnership-model-impact-content-box">
                            {
                                boxList1 && boxList1.map((item, index) => (
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
                    <div className="partnership-model-content-item-pm1">
                        <div className="partnership-model-impact-content">
                            <h1 className='text-blue'>DỰ ÁN <span className='text-pink'>GIÁO DỤC VÀ SÂN CHƠI SÁNG TẠO</span></h1>
                            <p><span className='text-pink'>Tòhe</span> cung cấp giải pháp tư vấn, tổ chức chương trình giáo dục nghệ thuật, kết nối trải<br/> nghiệm sáng tạo</p>
                        </div>
                        <div className="partnership-model-impact-content-box">
                            {
                                boxList3 && boxList3.map((item, index) => (
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
                    <div className="partnership-model-content-item-pm1">
                        <div className="partnership-model-impact-content">
                            <h1 className='text-blue'>DỰ ÁN <span className='text-pink'>PHÁT TRIỂN DỰ ÁN XÃ HỘI </span></h1>
                            <p><span className='text-pink'>Tòhe</span> cung cấp giải pháp nghiên cứu, chuyển hoá các chủ đề phức tạp thành trải nghiệm</p>
                        </div>
                        <div className="partnership-model-impact-content-box">
                            {
                                boxList2 && boxList2.map((item, index) => (
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


                    <div className="case-study-footer"></div>

                </div>
            </div>
        </>
    )
}
export default CaseStudyComponent;