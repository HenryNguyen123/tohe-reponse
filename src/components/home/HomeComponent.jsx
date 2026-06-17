import BoxImage from '../../camoms/box/box-image.box'
import BoxTitle from '../../camoms/box/box-title.box';
import ButtonOne from '../../camoms/button/button-one.camon'
import './home.scss'

const HomeComponent = () => {
const boxList = [
    {
        img: "/img/tohe/trang-chu/v72_14.png",
        branch: "/img/tohe/trang-chu/v76_2.png",
        title: "Xem Chi tiết"
    },
    {
        img: "/img/tohe/trang-chu/v74_3.png",
        branch: "/img/tohe/trang-chu/v76_3.png",
        title: "Xem thêm"
    },
    {
        img: "/img/tohe/trang-chu/v74_4.png",
        branch: "/img/tohe/trang-chu/v76_4.png",
        title: "Mua ngay"
    }
];
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
                                <ButtonOne title={'LIÊN HỆ NGAY'}/>
                            </div>
                        </div>
                        <div className="box-img-box-right-hm1">
                            <img src="/img/tohe/trang-chu/v74_2.png" alt="" className='home-img-box'/>
                        </div>
                    </div>
                </div>

                {/*  all branch*/}
                <div className="home-context_box-branch-hm1">
                    <h1>
                        <span className='text-pink'>TÒHE</span> <span className='text-blue-weight'>- Đối tác của những <br/>
                        tổ chức/ doanh nghiệp lớn tại Việt Nam</span>
                    </h1>
                    <div className='home-img-branch-hm1'>
                        <img src="/img/tohe/trang-chu/v14_34.png" alt="" className='home-img-item-branch-hm1'/>
                    </div>
                </div>

                {/* box home */}
                <div className="home-context_box-content-hm1">
                    <div className="home-context_box-tex-hm1">
                        <h1 className='text-blue-weight'>Case Study</h1>
                    </div>
                    <div className='home-context_box-item-hm1'>
                        {
                            boxList.map(item => (
                                <BoxImage key={item.id} {...item} />
                            ))
                        }
                    </div>
                    <div className='home-context_box-button-hm1'>
                        <ButtonOne title={'Xem Tất Cả'}/>
                    </div>
                </div>

                {/* award */}
                <div className="home-context-award-hm1">
                    <div className='home-context-award-content-hm1'>
                        <div className="home-content-award-item-hm1">
                            <h1>VINH DỰ NHẬN GIẢI THƯỞNG DANH GIÁ</h1>
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
                        <h1>
                            <span className='text-blue-weight'>CÁC HÌNH THỨC ĐỒNG HÀNH CÙNG</span> <span className='text-pink'>TÒHE</span>
                        </h1>
                        <p>
                            Với niềm tin rằng sáng tạo có thể tạo ra tác động xã hội bền vững, Tòhe đồng hành cùng doanh nghiệp xây dựng <br>
                            </br> các hoạt động CSR/ESG thông qua nghệ thuật sáng tạo dành cho trẻ em đặc biệt.
                        </p>
                    </div>
                    <div className="home-parter-box-content-hm1">
                        <BoxTitle/>
                        <BoxTitle/>
                        <BoxTitle/>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomeComponent