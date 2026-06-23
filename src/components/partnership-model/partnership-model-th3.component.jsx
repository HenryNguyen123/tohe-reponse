import { useEffect } from 'react';
import './p-n-all.css.scss';
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';
import BoxIImageNd2 from '../../camoms/box/box-image-nd2.box';

const PartnerShipModelTh3 = () => {
    useEffect(() => {
        document.title = 'Đồng hành phát triển dự án xã hội';
    }, [])
    
    const boxList = [
        {
            img: "/img/tohe/hinh-thuc-dong-hanh/th4/v307_641.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/v307_667.png",
            title1: "TÒHE",
            title2: " X UNICEF",
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
    return(
        <>
            <div className="partnership-model-container-nd2">
                <div className="partnership-model-context-nd2">
                    <div className="partnership-model-content-nd2">
                        <div className="home-context_box_item-box-hm1">
                            <div className="box-content-box-left-hm1">
                                {/* <img src="/img/tohe/hinh-thuc-dong-hanh/st1/v310_4843.png" alt="" className='home-img-two-hm1'/> */}
                                <h1 className='text-blue'>
                                    ĐỒNG HÀNH PHÁT TRIỂN<br/> DỰ ÁN XÃ HỘI
                                </h1>
                                {/* <p>
                                    Từ quà tặng doanh nghiệp, chương trình giáo dục sáng tạo đến các dự án cộng đồng, Tòhe mang đến nhiều mô hình hợp tác giúp doanh nghiệp tạo tác động xã hội thực tế và bền vững.
                                </p>
                                <div className='home-button-left-hm1'>
                                    <ButtonArrowRight title={'LIÊN HỆ NGAY'}/>
                                </div> */}
                            </div>
                            <div className="box-img-box-right-hm1">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v344_555.png" alt="" className='home-img-box'/>
                            </div>
                        </div>

                        {/* tohe background */}
                        <div className="partnership-model-content-bg-nd2">
                            <div className="partnership-model-content-bg-item-text-nd2">
                                <h1 className='text-blue'>
                                    HỢP TÁC <span className='text-pink'>PHÁT TRIỂN DỰ ÁN XÃ HỘI</span> LÀ GÌ?
                                </h1>
                                <div className="text">
                                    <p>
                                        Doanh nghiệp/Tổ chức đồng hành cùng <span className='text-pink'>Tòhe</span> với tư cách là đối tác chiến lược toàn diện hoặc nhà tài trợ nền tảng để cùng 
                                        khởi xướng, triển khai các dự án xã hội có quy mô tác động vĩ mô, mang tính dài hạn và bền vững
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
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v344_604.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Đồng tổ chức các chiến dịch và <br/>triển lãm nâng cao nhận thức
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Phối hợp cùng Tòhe đầu tư sản xuất, truyền thông và tổ chức các chuỗi triển lãm nghệ thuật phi lợi nhuận (ví dụ: bảo vệ môi trường, nâng cao nhận thức về chứng tự kỷ) nhằm định hướng hành động và thay đổi tư duy cộng đồng.
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v344_606.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Tài trợ hạ tầng mô hình <br/>
                                                    giáo dục sáng tạo dài hạn
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/Tổ chức hỗ trợ, đóng góp ngân sách, tài nguyên, thiết bị để xây dựng các mô hình nền tảng kiên cố và bền vững.
                                                </p>
                                            </div>
                                            <div className="tohe-box-item">
                                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v344_605.png" alt="" />
                                                <p className='tohe-box-item-text-title font-uvn-b'>
                                                    Phối hợp liên kết liên tổ chức
                                                </p>
                                                <p className='tohe-box-item-text-desc'>
                                                    Doanh nghiệp/ Tổ chức cùng Tòhe và các tổ chức xã hội/quốc tế lập liên minh triển khai các dự án quốc gia về thích ứng biến đổi khí hậu, giáo dục hòa nhập hoặc thúc đẩy ngành công nghiệp sáng tạo và các lĩnh vực liên quan khác.
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
                                    <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v348_555.png" alt="" />
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
                                                    <span>Doanh nghiệp có chiến lược ESG dài hạn, muốn đầu tư vào các dự án liên quan đến chính sách, truyền thông rộng rãi.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="partnership-model-pm1-top-item">
                                            <div className="item-number">
                                                <h1>2</h1>
                                            </div>
                                            <div className="item-text">
                                                <div>
                                                    <span>Tập đoàn đa quốc gia, tổ chức tài chính, công ty công nghệ cần minh chứng tác động bền vững.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="partnership-model-pm1-top-item">
                                            <div className="item-number">
                                                <h1>3</h1>
                                            </div>
                                            <div className="item-text">
                                                <div>
                                                    <span>Các đơn vị muốn đồng hành cùng Chính phủ, Bộ, ngành về giáo dục, môi trường, hòa nhập xã hội.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="partnership-model-impact-content">
                                <h1 className='text-blue'>DẤU ẤN HỢP TÁC DOANH NGHIỆP</h1>
                                <p>Lan tỏa giá trị nhân văn qua các <span className='text-pink'>dự án nghệ thuật vì cộng đồng.</span></p>
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
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/th4/bg-pd-3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-text">
                                        <h1 className='text-pink text-h1-top'>LỢI ÍCH GIÀNH CHO </h1>
                                        <h1 className='text-h1-bottom'>DOANH NGHIỆP, TỔ CHỨC</h1>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Nâng tầm vị thế chiến lược của doanh nghiệp/tổ chức
                                            </h4>
                                            <p>
                                                Định vị doanh nghiệp/tổ chức đồng hành như một đơn vị tiên phong dẫn dắt các giải pháp phát triển bền vững tại Việt Nam, tạo dựng uy tín vững chắc với Chính phủ, các cơ quan, ban, ngành và các tổ chức quốc tế.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Tối ưu hóa hiệu quả truyền thông tích hợp
                                            </h4>
                                            <p>
                                                Các dự án xã hội quy mô lớn luôn là tiêu điểm thu hút sự đồng hành, bảo trợ truyền thông từ các đơn vị báo chí, truyền hình lớn, mang lại giá trị PR tự nhiên vượt trội cho doanh nghiệp.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Đảm bảo tính minh bạch, năng lực thực thi chuẩn quốc tế
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
                                                Giải quyết các vấn đề tiêu điểm của xã hội
                                            </h4>
                                            <p>
                                                Chuyển hóa các dữ liệu, nội dung giáo dục khô khan (về biến đổi khí hậu, rác thải nhựa, bình đẳng giới) thành ngôn ngữ nghệ thuật và trò chơi tương tác dễ tiếp cận, nâng cao nhận thức cho hàng triệu người.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Xóa bỏ định kiến, thúc đẩy hòa nhập
                                            </h4>
                                            <p>
                                                Tạo ra sự thấu cảm tự thân trong công chúng thông qua nghệ thuật thị giác, giảm bớt hiểu lầm về người tự kỷ, thu hẹp khoảng cách và kết nối các nguồn lực xã hội cùng chung tay hỗ trợ.
                                            </p>
                                        </div>
                                        <div className="partnership-model-business-box-item">
                                            <h4 className='text-blue'>
                                                Kiến tạo giải pháp hạ tầng bền vững
                                            </h4>
                                            <p>
                                                Đóng góp trực tiếp vào mục tiêu phát triển bền vững quốc gia thông qua việc bàn giao các sân chơi vật lý, các ứng dụng số hóa giáo dục tích hợp vào chương trình ngoại khóa của nhà trường.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="partnership-model-business-content-bg">
                                        <div className="background-content"></div>
                                        <div className="partnership-model-business-content-bg-item">
                                            <img src="/img/tohe/hinh-thuc-dong-hanh/th4/bg-pd-4.png" alt="" />
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
export default PartnerShipModelTh3;