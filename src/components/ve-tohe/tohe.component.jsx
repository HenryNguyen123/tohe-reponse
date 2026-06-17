import { useEffect } from 'react';
import './tohe.css.scss'

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
                                <img src="/img/tohe/ve tohe/v416_2909.png" alt="" className='tohe-top-image-bg-item'/>
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
                                <img src="/img/tohe/ve tohe/model.png" alt="" className='tohe-model-context-bg'/>
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
                                        <img src="/img/tohe/ve tohe/model.png" alt=""  className='tohe-model-item-right-bg-left'/>
                                        <img src="/img/tohe/ve tohe/model.png" alt=""  className='tohe-model-item-right-bg-right'/>
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

                </div>
            </div>
        </>
    )
}
export default ToheComponent;