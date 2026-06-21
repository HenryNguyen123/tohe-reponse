import { FiGift  } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import BoxImage from '../../camoms/box/box-image.box'
import BoxTitle from '../../camoms/box/box-title.box';
import ButtonOne from '../../camoms/button/button-one.camon'
import './home.scss'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
    const navigate = useNavigate()
    
    const boxList = [
        {
            img: "/img/tohe/trang-chu/v72_14.png",
            branch: "/img/tohe/trang-chu/v76_2.png",
            title: "Xem Chi tiết",
            page: 'canifa'
        },
        {
            img: "/img/tohe/trang-chu/v74_3.png",
            branch: "/img/tohe/trang-chu/v76_3.png",
            title: "Xem thêm",
            page: 'unicef'
        },
        {
            img: "/img/tohe/trang-chu/v74_4.png",
            branch: "/img/tohe/trang-chu/v76_4.png",
            title: "Mua ngay",
            page: 'tokio-marine'
        }
    ];
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
            ],
            page: 'page2'
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
            ],
            page: 'page4'
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
            ],
            page: 'page3'
        }
    ];

    const handleToPageContact = () => {
        navigate('/contact')
    }
    const handleToPageCaseStudy = () => {
        navigate('/case-study')
    }
    useEffect(() => {
        document.title = 'Trang Chủ';
    }, [])
    return (
        <>
            <div className='home-container'>
                <div className="home-context_box-hm1">
                    <div className="home-context_box_item-hm1">
                        <div className="home_item-box-img-one-hm1">
                            <img src="/img/tohe/trang-chu/v39_43.png" alt="" className='home-img-one-hm1'/>
                        </div>
                        <div className="home_item-box-img-two-hm1">
                            <img src="/img/tohe/trang-chu/v41_3.png" alt="" className='home-img-two-hm1'/>
                        </div>
                        <div className="home_item-box-text-hm1">
                            <p><span className='text-blue-weight'>20 năm</span> đồng hành cùng hơn <span className='text-blue-weight'>400 đối tác</span> <br/>
                            trong các dự án xã hội bền vững cho trẻ em đặc biệt.</p>
                        </div>
                        {/* image baackground */}
                        <div className="home-context_box-background-hm1">
                            <img src="/img/tohe/trang-chu/v39_36.png" alt="" />
                        </div>
                    </div>
                    <div className="home-context_box_item-box-hm1">
                        <div className="box-content-box-left-hm1">
                            <img src="/img/tohe/trang-chu/v41_3.png" alt="" className='home-img-two-hm1'/>
                            <p>Tòhe là doanh nghiệp xã hội thành lập năm 2006 với sứ mệnh đem đến cơ hội giáo dục sáng tạo bình đẳng cho mọi trẻ em thông qua các sân chơi sáng tạo, các lớp học và dự án cộng đồng. <br/>
                                Trên hành trình đó, Tòhe kết nối và đồng hành cùng doanh nghiệp, tổ chức và các đối tác xã hội để mở rộng thêm nhiều không gian sáng tạo ý nghĩa cho trẻ em đặc biệt thông qua các dự án cộng đồng, giáo dục và hoạt động hợp tác, phát triển quà tặng bền vững.
                                Tòhe dành 5% doanh số bán sản phẩm để tạo thu nhập cho các nghệ sĩ đặc biệt có tranh được sử dụng.
                            </p>
                            <div className='home-button-left-hm1'>
                                <a onClick={handleToPageContact}><ButtonOne title={'LIÊN HỆ NGAY'}/></a>
                            </div>
                        </div>
                        <div className="box-img-box-right-hm1">
                            <img src="/img/tohe/trang-chu/v74_2.png" alt="" className='home-img-box'/>
                        </div>
                    </div>
                </div>

                {/*  all branch*/}
                <div className="home-context_box-branch-hm1">
                    <h1 className="text-title">
                        <span className='text-pink'>TÒHE</span> <span className='text-blue'>- Đối tác của những <br/>
                        tổ chức/ doanh nghiệp lớn tại Việt Nam</span>
                    </h1>
                    <div className='home-img-branch-hm1'>
                        <img src="/img/tohe/trang-chu/v14_34.png" alt="" className='home-img-item-branch-hm1'/>
                    </div>
                </div>

                {/* box home */}
                <div className="home-context_box-content-hm1">
                    <div className="home-context_box-tex-hm1">
                        <h1 className='text-title text-blue'>Case Study</h1>
                    </div>
                    <div className='home-context_box-item-hm1'>
                        {
                            boxList.map(item => (
                                <BoxImage key={item.id} {...item} />
                            ))
                        }
                    </div>
                    <div className='home-context_box-button-hm1'>
                        <a onClick={handleToPageCaseStudy}><ButtonOne title={'Xem Tất Cả'}/></a>
                    </div>
                </div>

                {/* award */}
                <div className="home-context-award-hm1">
                    <div className='home-context-award-content-hm1'>
                        <div className="home-content-award-item-hm1">
                            <h1 className="text-title">VINH DỰ NHẬN GIẢI THƯỞNG DANH GIÁ</h1>
                            <p>
                                Sau 20 năm hoạt động, Tòhe từng được ghi nhận qua nhiều dự án xã hội, triển lãm và hoạt động <br/>
                                sáng tạo dành cho trẻ em đặc biệt.
                            </p>
                        </div>
                        <div className="home-content-award-image-hm1">
                            <div className='home-award-image-one-hm1'>
                                <img src="/img/tohe/trang-chu/v80_53.png" alt="" className='award-one-hm1'/>
                            </div>
                            <div className='home-award-image-box-item-hm1'>
                                <div className='home-award-image_item-item-hm1'>
                                    <div className='home-award-image_item-one-hm1'>
                                        <img src="/img/tohe/trang-chu/v87_2.png" alt="" className='award-two-hm1'/>
                                        <p>
                                            Giải “Dự án ý nghĩa” tại <br/>
                                            Hanoi Grapevine's Finest 2024 - 2025
                                        </p>
                                    </div>
                                    <div className='home-award-image_item-two-hm1'>
                                        <img src="/img/tohe/trang-chu/v82_55.png" alt="" className='award-three-hm1'/>
                                        <p>
                                            Giải thưởng INVOLVE Award tại <br/>
                                            PRIME AWARD 2025
                                        </p>
                                    </div>
                                </div>
                                <div className='home-award-image_item-three-hm1'>
                                    <img src="/img/tohe/trang-chu/v78_48.png" alt="" className='award-four-hm1'/>
                                    <p>
                                        Giải thưởng Én Xanh 2021
                                    </p>
                                </div>
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
                                    page={item.page}
                                />
                            ))
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomeComponent