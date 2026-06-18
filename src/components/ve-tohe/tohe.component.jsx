import { useEffect } from 'react';
import './tohe.css.scss'
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';

const ToheComponent = () => {
    useEffect(() => {
        document.title = 'Về TòHe';
    }, [])
    return(
        <>
            <div className="tohe-container">
                <div className="tohe-context">

                    {/* top tohe */}
                    <div className="tohe-top-backgroud">
                        <div className="tohe-top-background-content">
                            <div className="tohe-top-content">
                                <h1 className='text-blue'>
                                    KIẾN TẠO CƠ HỘI BÌNH ĐẲNG QUA SỨC MẠNH CỦA SÁNG TẠO
                                </h1>
                                <p className='tohe-top-content-text-p'>
                                    Trong thực tế, nhiều trẻ em đặc biệt và trẻ em yếu thế vẫn còn thiếu không gian để được lắng nghe, học tập và phát triển và hòa nhập. Tòhe lựa chọn bắt đầu từ nghệ thuật vì sáng tạo là ngôn ngữ công bằng nhất đối với trẻ em. Thông qua các sân chơi, lớp học và dự án cộng đồng, Tòhe biến những nét vẽ của trẻ thành sản phẩm, triển lãm và các hoạt động có giá trị thực tế, giúp các em được ghi nhận như những “nghệ sĩ bé đặc biệt” thay vì chỉ được nhìn nhận như đối tượng cần hỗ trợ.
                                </p>
                            </div>
                            <div className="tohe-top-image-bg">
                                <img src="/img/tohe/ve-tohe/v416_2909.png" alt="" className='tohe-top-image-bg-item'/>
                            </div>
                        </div>
                    </div>

                    {/* tohe background */}
                    <div className="tohe-bg-container">
                        <div className="background-content"></div>
                        <div className="tohe-bg-content">
                            <div className="tohe-bg-content-flex">
                                <div className="tohe-content-item">
                                    <h1 className=''>
                                        <span className='text-pink'>TÒHE</span> ĐÃ TẠO RA BA GIÁ TRỊ SONG SONG
                                    </h1>
                                </div>
                                <div className="tohe-box-context">
                                    <div className="tohe-box-item">
                                        <p className='tohe-box-item-text-title font-uvn-b'>
                                            TRẺ EM ĐẶC BIỆT
                                        </p>
                                        <p className='tohe-box-item-text-desc'>
                                            Chúng tôi tạo điều kiện cho trẻ em có thêm cơ hội học tập, sáng tạo và hòa nhập xã hội thông qua nghệ thuật.
                                        </p>
                                    </div>
                                    <div className="tohe-box-item">
                                        <p className='tohe-box-item-text-title font-uvn-b'>
                                            DOANH NGHIỆP<br/> & TỔ CHỨC
                                        </p>
                                        <p className='tohe-box-item-text-desc'>
                                            Chúng tôi đồng hành trong các dự án cộng đồng minh bạch, giàu tính sáng tạo và tạo tác động xã hội thực tế.
                                        </p>
                                    </div>
                                    <div className="tohe-box-item">
                                        <p className='tohe-box-item-text-title font-uvn-b'>
                                            CỘNG ĐỒNG
                                        </p>
                                        <p className='tohe-box-item-text-desc'>
                                            Đồng thời có thêm nhiều không gian nghệ thuật tích cực giúp nâng cao nhận thức về trẻ em đặc biệt và giáo dục sáng tạo bền vững.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tohe-text-content_item-bottom">
                        <p className='text-tohe-bottom'>
                            Với Tòhe, mỗi hoạt động hợp tác không chỉ dừng lại ở tài trợ hay truyền thông thương hiệu, mà còn là quá trình cùng tạo ra những không gian sáng tạo ý nghĩa và lâu dài cho trẻ em đặc biệt.
                        </p>
                    </div>

                    {/* tohe model */}
                    <div className="tohe-model-container">
                        <div className="model-content">
                            <div className="tohe-model-context">
                                <img src="/img/tohe/ve-tohe/mo-hinh-hoat-dong.png" alt="" className='tohe-model-context-bg'/>
                                <div className="tohe-model-bg">
                                </div>
                            </div>
                            <div className="tohe-model-content-box">
                                <div className="tohe-model-item-left">
                                    <div className="tohe-model-item-left-top">
                                        <h4 className='tohe-model-item-left-top-h4'>
                                            Đội ngũ
                                        </h4>
                                        <h1 className='tohe-model-item-left-top-h1'>
                                            Được sáng lập bởi những <span className='text-pink'>tình nguyện viên</span>
                                        </h1>
                                    </div>
                                    <div className="tohe-model-item-left-bottom">
                                        <p className='tohe-model-item-left-bottom-p-top'>
                                            CEO: Nguyễn Đình Nguyên
                                        </p>
                                        <p className='tohe-model-item-left-bottom-p-bottom'>
                                            Nguyễn Đình Nguyên là đồng sáng lập kiêm CEO của Tòhe - doanh nghiệp xã hội tiên phong trong lĩnh vực giáo dục sáng tạo dành cho trẻ em đặc biệt tại Việt Nam. Anh theo đuổi mô hình kết hợp nghệ thuật, kinh doanh và tác động xã hội nhằm lan tỏa các giá trị sáng tạo và phát triển bền vững cho cộng đồng.
                                        </p>
                                    </div>
                                </div>
                                <div className="tohe-model-item-right">
                                    <div className="tohe-model-item-right-bg">
                                        <img src="/img/tohe/ve-tohe/ceo-one.png" alt=""  className='tohe-model-item-right-bg-left'/>
                                        <img src="/img/tohe/ve-tohe/ceo-two.png" alt=""  className='tohe-model-item-right-bg-right'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mission */}
                    <div className="tohe-mission-container">
                        <div className="background-content"></div>
                        <div className="tohe-mission-context">
                            <div className="tohe-mission-title">
                                <h1 className='font-vn-wosker'>
                                    Triết lý và sứ mệnh của <span className='text-pink'>Tòhe</span>
                                </h1>
                            </div>
                            <div className="tohe-mission-content-box">
                                <div className="tohe-mission-box-content">
                                    <div className="tohe-mission-box-item">
                                        <p className='tohe-mission-box-item-top font-uvn-b'>
                                            1. Triết lý
                                        </p>
                                        <p className='tohe-mission-box-item-bottom'>
                                            Triết lý kinh doanh của Tòhe là kết hợp nghệ thuật sáng tạo với tác động xã hội. Với niềm tin “mọi đứa trẻ đều là nghệ sĩ”, Tòhe hướng đến việc giúp trẻ tự tin thể hiện bản thân và hòa nhập cộng đồng thông qua nghệ thuật.
                                        </p>
                                    </div>
                                    <div className="tohe-mission-box-item">
                                        <p className='tohe-mission-box-item-top font-uvn-b'>
                                            2. Sứ mệnh
                                        </p>
                                        <p className='tohe-mission-box-item-bottom'>
                                            Sứ mệnh của Tòhe là tạo ra không gian sáng tạo để trẻ em đặc biệt được tự do thể hiện bản thân thông qua nghệ thuật và phát triển khả năng hòa nhập cộng đồng.
                                        </p>
                                    </div>
                                    <div className="tohe-mission-box-item">
                                        <p className='tohe-mission-box-item-top font-uvn-b'>
                                            3. Mục tiêu
                                        </p>
                                        <p className='tohe-mission-box-item-bottom'>
                                            Mục tiêu của Tòhe là mở rộng các không gian sáng tạo cho trẻ em đặc biệt và phát triển mô hình doanh nghiệp xã hội kết nối nghệ thuật, giáo dục và cộng đồng.
                                        </p>
                                    </div>
                                    <div className="tohe-mission-box-item">
                                        <p className='tohe-mission-box-item-top font-uvn-b'>
                                            4. Giá trị cốt lõi
                                        </p>
                                        <ul>
                                            <li><span>Bền bỉ</span></li>
                                            <li><span>Tôn trọng</span></li>
                                            <li><span>Sáng tạo</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ability */}
                    <div className="tohe-ability-container">
                        <div className="tohe-ability-context">
                            <div className="tohe-ability-top">
                                <div className="tohe-ability-top-content">
                                    <div className="tohe-ability-top-title-h1">
                                        <h1 className='text-pink'>
                                            Các cột mốc <br/>
                                            phát triển <br/>
                                            nổi bật
                                        </h1>
                                    </div>
                                    <div className="tohe-ability-top-desc-list-content">
                                        <ul className='tohe-ability-top-desc-list'>
                                            <li>
                                                29/09/2006 - Công ty Cổ phần Tòhe chính thức được thành lập.
                                            </li>
                                            <li>
                                                09/2009 - Tòhe được công nhận là doanh nghiệp xã hội và nhận hỗ trợ khởi nghiệp từ CSIP và Hội đồng Anh Việt Nam.
                                            </li>
                                            <li>
                                                2012 - Khai trương cửa hàng bán lẻ đầu tiên, phát triển mô hình sản phẩm sáng tạo từ tranh vẽ trẻ em.
                                            </li>
                                            <li>
                                                2013 - Mở rộng hoạt động quốc tế với thị trường Đức và tham gia nhiều hội chợ, triển lãm sáng tạo tại Nhật Bản và Hàn Quốc.
                                            </li>
                                            <li>
                                                2016 - Đồng sáng lập Phạm Thị Ngân được Diễn đàn Kinh tế Thế giới (WEF) vinh danh là Lãnh đạo trẻ toàn cầu.
                                            </li>
                                            <li>
                                                2019 - Mở cửa hàng thứ hai tại Nhà Chung (Hà Nội), tiếp tục mở rộng hoạt động cộng đồng và hợp tác CSR/ESG.
                                            </li>
                                            <li>
                                                Nay - Tòhe đã đồng hành cùng 400+ doanh nghiệp và tổ chức, triển khai hơn 3000 buổi học nghệ thuật và kết nối hơn 6000 trẻ em đặc biệt trên toàn quốc.
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tohe-ability-active-title">
                            <h1 className='tohe-ability-active-title-h1 text-blue'>
                                Năng lực triển khai
                            </h1>
                            <div className="tohe-ability-active-content">
                                <div className="background-content"></div>
                                <div className="tohe-ability-active-content-item">
                                    <div className="tohe-ability-active-content-item-box">
                                        <div className="tohe-ability-active-content-item_item-top">
                                            <div>
                                                <h1 className='text-pink'>400+</h1>
                                                <p className='p-top-ab font-uvn-b'>Đồng hành</p>
                                                <p className='p-bottom-ab'>Doanh nghiệp và tổ chức</p>
                                            </div>
                                            <div>
                                                <h1 className='text-pink'>3000</h1>
                                                <p className='p-top-ab font-uvn-b'>Tổ chức</p>
                                                <p className='p-bottom-ab'>Buổi học nghệ thuật và Workshop</p>
                                            </div>
                                            <div>
                                                <h1 className='text-pink'>6000</h1>
                                                <p className='p-top-ab font-uvn-b'>Kết nối</p>
                                                <p className='p-bottom-ab'>Trẻ em đặc biệt</p>
                                            </div>
                                        </div>
                                        <div className="tohe-ability-active-content-item_item-bottom">
                                            <div>
                                                <h1 className='text-pink'>50</h1>
                                                <p className='p-top-ab font-uvn-b'>Triển khai</p>
                                                <p className='p-bottom-ab'>Địa điểm trên nhiều tỉnh thành</p>
                                            </div>
                                            <div>
                                                <h1 className='text-pink'>13</h1>
                                                <p className='p-top-ab font-uvn-b'>Thực hiện</p>
                                                <p className='p-bottom-ab'>Triển lãm nghệ thuật</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* action */}
                    <div className="tohe-action-container">
                        <div className="tohe-action-context">
                            <div className="tohe-action-title">
                                <h1 className='text-blue'>
                                    CÁC HOẠT ĐỘNG TIÊU BIỂU CỦA <span className='text-pink'>TÒHE</span>
                                </h1>
                                <p>
                                    Chung tôi chuyên tổ chức các sân chơi sáng tạo nghệ thuật tạo hình phi lợi nhuận hướng tới đối tượng là trẻ em có <br/>
                                    hoàn cảnh, nhu cầu đặc biệt, giúp các em tự tin, tự do bộc lộ và phát triển khả năng sáng tạo của mình.
                                </p>
                            </div>
                            <div className="tohe-action-title-box">
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v1.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Sân chơi <br/> nghệ thuật
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Hoạt động hội họa sáng tạo dành cho trẻ em đặc biệt. Giúp trẻ phát triển khả năng biểu đạt và kết nối xã hội.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v2.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Art Coaching
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Chương trình nghệ thuật chuyên sâu dành cho trẻ có năng khiếu hội họa. Hỗ trợ phát triển khả năng sáng tác và sáng tạo cá nhân.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v3.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Xưởng đào <br/> tạo nghề
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Hoạt động đào tạo nghề thủ công cho trẻ tự kỷ. Giúp trẻ tăng khả năng hòa nhập và định hướng nghề nghiệp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v4.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Tòhe Bank
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Ngân hàng tranh lưu trữ tác phẩm của trẻ em trên khắp Việt Nam. Giúp lan tỏa sáng tạo và tạo thêm thu nhập cho các em.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v5.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Sân chơi<br/> trở thành nghệ sĩ bé
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Chương trình kết nối trẻ em với các hoạt động nghệ thuật của Tòhe. Giúp trẻ được công nhận và phát triển khả năng sáng tạo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tohe-action-box-content">
                                    <div className="tohe-action-box-item">
                                        <div className="tohe-action-box-item_item">
                                            <img src="/img/tohe/ve-tohe/icon-v6.png" alt="" className='tohe-action-box-item-image'/>
                                            <p className='tohe-action-box-item-text-top font-uvn-b'>
                                                Triển lãm nâng <br/> cao nhận thức
                                            </p>
                                            <p className='tohe-action-box-item-text-bottom'>
                                                Chuỗi triển lãm cộng đồng về trẻ tự kỷ và người có nhu cầu đặc biệt thông qua nghệ thuật. Giúp lan tỏa nhận thức và kết nối cộng đồng.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tohe-button-next">
                        <ButtonArrowRight title={'Xem hình thức đồng hành'} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default ToheComponent;