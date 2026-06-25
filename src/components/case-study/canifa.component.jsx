import { useEffect } from 'react';
import './canifa.scss'
import { useNavigate } from 'react-router-dom';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';

const CanifaComponent = () => {
    const navigate = useNavigate();

    const background = '/img/tohe/case-study/canifa/image.png';
    const handleClickToHome = () =>{
        navigate('/')
    }
    const handleClickToCaseStudyPage2 = () =>{
        navigate('/partnership-model/page2')
    }
    const handleClickToCaseStudyPage3 = () =>{
        navigate('/partnership-model/page3')
    }
    const handleClickTOCaseStudy = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/case-study')
    }
    useEffect(() => {
        document.title = 'Canifa';
    }, [])
    
    const boxList = [
        {
            img: "/img/tohe/case-study/st1/v364_656.png",
            logo: "/img/tohe/case-study/st1/v364_676.png",
            title1: "TÒHE",
            title2: " X CANIFA",
            titleButton: "Xem Chi tiết",
            desc1: '2 Bộ Board Game giáo dục cho trẻ em',
            desc2: "Trò chơi giáo dục về biến đổi khí hậu và vệ sinh cộng đồng cho trẻ em.",
            iconCheck: true,
            page: 'canifa'
        },
        {
            img: "/img/tohe/case-study/st1/v364_666.png",
            logo: "/img/tohe/hinh-thuc-dong-hanh/th4/th3-icon2.png",
            title1: "TÒHE",
            title2: " X VCCA",
            titleButton: "Xem Chi tiết",
            desc1: 'Dự án: Triển lãm “Hành tinh nhựa”',
            desc2: 'Không gian triển lãm tái hiện một thế giới nơi đất, nước, gió và các yếu tố tự nhiên bị “nhựa hóa”',
            iconCheck: true,
            page: 'vcca'
        },
        {
            img: "/img/tohe/case-study/st1/v366_1525.png",
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
            img: "/img/tohe/case-study/st1/willet.png",
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
            <div className="case-study-container-home">
                <div className="case-study-context">
                    <div className="case-study-background">
                        <div className="case-study-background-item">
                            <div className='case-study-background-image' style={{ backgroundImage: `url(${background})` }}></div>
                            <div className="case-study-background-nav">
                                <div className="case-study-background-nav-title">
                                    <ul>
                                        <li><a  onClick={() => handleClickToHome()}>Trang chủ</a></li>
                                        <li><a onClick={handleClickToCaseStudyPage2}>Dịch vụ quà tặng doanh nghiệp</a></li>
                                        <li><a onClick={handleClickToCaseStudyPage3}>Các dự án hợp tác</a></li>
                                    </ul>
                                </div>
                                <div className="case-study-background-nav-item">
                                    <h1>
                                        <span className='text-pink'>TÒHE</span> X <span className='text-origin'>CANIFA</span>: “YÊU THƯƠNG CÓ TẤT” - KHI MỘT SẢN PHẨM THỜI<br/> TRANG TRỞ THÀNH DỰ ÁN TẠO TÁC ĐỘNG XÃ HỘI
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* blog */}
                    <div className="case-study-blog-container">
                        <div className="case-study-blog-content">
                            <p className='font-uvn-b-content-20'>
                                I. Tổng quan dự án
                            </p>

                            <p>Thời gian thực hiện: Năm 2025</p>
                            <p>
                                Chiến dịch của Canifa kết hợp cùng Tòhe ra đời vào tháng 1/2025, trong bối cảnh xã hội đang ngày càng quan tâm nhiều hơn đến các giá trị bền vững, sự bao dung và tính nhân văn trong hành trình phát triển thương hiệu. Là thương hiệu thời trang gia đình hướng tới việc mang lại niềm vui và sự ấm áp cho mọi gia đình Việt, CANIFA tìm thấy sự đồng điệu trong sứ mệnh trao quyền cho trẻ em đặc biệt thông qua nghệ thuật mà Tòhe theo đuổi suốt nhiều năm qua.
                            </p>
                            <p>
                                “Nhân dịp này, sao chúng ta không làm một bộ sưu tập kết hợp với nhau, để lan tỏa những dự án độc đáo đến đông đảo người tiêu dùng?”. Từ lời gợi ý trong cuộc trao đổi chớp nhoáng giữa Tổng giám đốc thương hiệu thời trang Canifa, bà Đoàn Thị Bích Ngọc với đại diện Tòhe tại Gala Human Act Prize 2024, một bộ sưu tập vô cùng độc đáo đã ra đời với cái tên nhiều cảm xúc: “Yêu thương có tất”.
                            </p>

                            <img src="/img/tohe/case-study/canifa/v366_1450.png" alt="" className='img-canifa-one'/>
                            
                            <p style={{margin: '15px 0'}}>
                                Sản phẩm là bộ sưu tập tất do Canifa sản xuất, với thiết kế là các hoạ tiết ngộ nghĩnh do các trẻ em đặc biệt đang sinh hoạt tại sân chơi nghệ thuật của Tòhe sáng tạo. Mỗi đôi tất không chỉ là một sản phẩm mà còn là một “tác phẩm nhỏ” mang theo thông điệp yêu thương. Qua đó, hai thương hiệu mong muốn mỗi khách hàng thấu hiểu rằng trẻ đặc biệt có rất nhiều tài năng, xứng đáng được khám phá và trân trọng.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                II. Mong muốn của Canifa và Giải pháp từ Tòhe
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1. Mong muốn của Canifa
                            </p>
                            <p>
                                Là thương hiệu thời trang gia đình hướng đến sự gần gũi, tích cực và bền vững, CANIFA không chỉ mong muốn thực hiện một hoạt động CSR mang tính truyền thông ngắn hạn, mà cần một dự án đủ thực chất để có thể đồng hành lâu dài cùng thương hiệu. 
                            </p>
                            <p>
                                Trong bối cảnh người tiêu dùng ngày càng quan tâm đến tính nhân văn và trách nhiệm xã hội đằng sau mỗi sản phẩm, CANIFA đứng trước bài toán làm sao để những giá trị cộng đồng không chỉ xuất hiện trong thông điệp truyền thông mà còn thật sự được tích hợp vào chính sản phẩm và trải nghiệm mua sắm hằng ngày của khách hàng.
                            </p>

                            <img src="/img/tohe/case-study/canifa/v366_1490.png" alt="" className='img-canifa-one'/>
                            <p style={{margin: '15px 0'}}>
                                Với một thương hiệu thời trang đại chúng có độ phủ lớn, thách thức đặt ra là:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Làm thế nào để lồng ghép yếu tố cộng đồng vào một sản phẩm thời trang đại trà nhưng vẫn giữ được tính thẩm mỹ, khả năng thương mại và tinh thần thương hiệu CANIFA.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Làm sao để câu chuyện về trẻ em đặc biệt được truyền tải theo hướng tích cực, bình đẳng và gần gũi với các gia đình trẻ mà không tạo cảm giác “gắn thêm” vào sản phẩm.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Làm thế nào để người tiêu dùng cảm nhận được rằng mỗi sản phẩm họ mua thực sự góp phần tạo ra tác động xã hội cụ thể.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Và quan trọng hơn, doanh nghiệp cần một đối tác có đủ năng lực triển khai thực tế, từ kết nối cộng đồng, phát triển chất liệu sáng tạo, đến tổ chức hoạt động xã hội và truyền thông đồng hành một cách chuyên nghiệp, lâu dài.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Từ những bài toán đó, CANIFA tìm kiếm một mô hình hợp tác có thể dung hòa giữa ba yếu tố: giá trị thương hiệu, giá trị thương mại và giá trị cộng đồng. Đây cũng chính là điểm giao thoa với định hướng mà Tòhe đã theo đuổi trong nhiều năm đồng hành cùng doanh nghiệp thông qua nghệ thuật của trẻ em đặc biệt.
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.2. Giải pháp từ Tòhe
                            </p>
                            <p>
                                Thứ nhất, kết nối nguồn lực sáng tạo từ trẻ em đặc biệt. Tòhe tuyển chọn các tác phẩm nghệ thuật phù hợp từ cộng đồng nghệ sĩ nhí để phát triển thành hệ thống họa tiết thiết kế cho bộ sưu tập, đồng thời giữ nguyên tinh thần sáng tạo trong từng tác phẩm của trẻ, giúp sản phẩm mang tính độc bản và giàu giá trị cảm xúc.
                            </p>
                            <p>
                                Thứ hai, đồng hành cùng 4 “nhà thiết kế” đặc biệt của bộ sưu tập. Điểm đặc biệt của “Yêu thương có tất” nằm ở việc toàn bộ họa tiết thiết kế được phát triển từ tác phẩm của bốn nghệ sĩ nhí đang tham gia các lớp học nghệ thuật tại Tòhe.
                            </p>

                            <div className="box-item">
                                <div className="box-item-box-canifa"  style={{margin: '0 30px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1509.png" alt="" className='box-item-img-canifa'/>
                                    <p>Tranh của Sae Hae</p>
                                </div>
                                <div className="box-item-title-canifa">
                                    <p className='text-top'>Sae Hae</p>
                                    <p>
                                        Cậu bé Sae Hae 14 tuổi mắc chứng tự kỷ có khả năng ghi nhớ và tưởng tượng đáng ngưỡng mộ cùng nét vẽ tròn trịa nắn nót bằng tay trái, với cái nhìn tươi sáng đầy tích cực.
                                    </p>
                                </div>
                            </div>

                            <div className="box-item">
                                <div className="box-item-title-canifa">
                                    <p className='text-top' style={{textAlign: "right"}}>Văn Minh Đức</p>
                                    <p>
                                        Với Văn Minh Đức, tình yêu và niềm đam mê với hội họa đã tiếp sức cho cậu ngồi hàng giờ cạnh giá vẽ, thử thách bản thân với nhiều chất liệu màu. Không ai có thể nhận ra một cậu bé với ánh mắt linh động, đôi tay thoăn thoắt đầy đam mê lại đang song hành cùng căn bệnh tự kỷ bẩm sinh.
                                    </p>
                                </div>
                                <div className="box-item-box-canifa"  style={{margin: '0 0 0 30px'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1517.png" alt="" className='box-item-img-canifa'/>
                                    <p>Tranh của Minh Đức</p>
                                </div>
                            </div>

                            <div className="box-item">
                                <div className="box-item-box-canifa"  style={{margin: '0 30px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1564.png" alt="" className='box-item-img-canifa'/>
                                    <p>Tranh của Tuệ Giang:</p>
                                </div>
                                <div className="box-item-title-canifa">
                                    <p className='text-top'>Tuệ Giang</p>
                                    <p>
                                        Giang được biết đến như một “phù thủy biến hình” với khả năng liên tưởng phong phú. Những hình ảnh quen thuộc dưới góc nhìn của em luôn được biến đổi thành các câu chuyện đầy màu sắc và trí tưởng tượng.
                                    </p>
                                </div>
                            </div>

                            <div className="box-item">
                                <div className="box-item-title-canifa" >
                                    <p className='text-top' style={{textAlign: "right"}}>Mai Khanh</p>
                                    <p>
                                        Cô bé Mai Khanh lớn lên cùng chứng chậm phát triển. Em thích những con vật ngộ nghĩnh xinh xắn và thể hiện chúng theo góc nhìn yêu thương của riêng mình. Nghệ thuật cũng là cách để em tự tin hơn trong việc thể hiện bản thân.
                                    </p>
                                </div>
                                <div className="box-item-box-canifa" style={{margin: '0 0 0 30px'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1571.png" alt="" className='box-item-img-canifa'/>
                                    <p>Tranh của Mai Khanh</p>
                                </div>
                            </div>

                            <p>
                                Nguồn cảm hứng của các em đều đến từ những điều giản dị như màu áo của bạn cùng lớp, cảnh vật xung quanh..., biến mỗi đôi tất thành một “tác phẩm nhỏ” mang theo câu chuyện về sáng tạo, sự khác biệt và niềm hy vọng
                            </p>
                            <p>
                                Thứ ba, xây dựng câu chuyện thương hiệu thông qua sản phẩm. Tòhe cùng CANIFA lựa chọn cách kể chuyện dựa trên nét vẽ và năng lực của trẻ em đặc biệt thay vì tập trung vào hoàn cảnh. Mỗi sản phẩm trở thành cầu nối giúp khách hàng hiểu hơn về tài năng, sự sáng tạo và khát vọng được ghi nhận của các em. Thông qua đó, dự án lan tỏa thông điệp về sự thấu hiểu, tôn trọng sự khác biệt và ghi nhận giá trị riêng của mỗi cá nhân.
                            </p>
                            <p>
                                Thứ tư, thiết kế mô hình tạo tác động xã hội bền vững. Không dừng lại ở việc phát triển sản phẩm, Tòhe cùng CANIFA xây dựng cơ chế chuyển hóa doanh thu thành tác động xã hội thực tế.
                            </p>
                            <p>
                                Toàn bộ 100 triệu đồng gây quỹ từ dự án được kết nối với chương trình Vui Tour 2025 (chuỗi dự án dành cho trẻ em thiệt thòi và cộng đồng yếu thế trên khắp cả nước của Tòhe, thông qua các hoạt động trải nghiệm nghệ thuật miễn phí) nhằm mở rộng cơ hội tiếp cận nghệ thuật cho trẻ em đặc biệt tại nhiều địa phương. Điều này giúp tác động của dự án được duy trì sau khi chiến dịch bán hàng kết thúc.
                            </p>
                            <p>
                                Thứ năm, đảm bảo quyền lợi cho nghệ sĩ nhỏ. Tòhe thực hiện cơ chế chia sẻ doanh thu 5% từ việc sử dụng tác phẩm nghệ thuật trên sản phẩm thương mại. Nhờ đó, các nghệ sĩ nhí không chỉ được ghi nhận về mặt tinh thần mà còn được hưởng lợi trực tiếp từ thành quả sáng tạo của mình.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16'>
                                3.1. Tác động cộng đồng
                            </p>

                            <p>
                                Thông qua bộ sưu tập “Yêu thương có tất”, CANIFA và Tòhe đã gây quỹ thành công 100 triệu đồng để triển khai chương trình Vui Tour 2025.
                            </p>
                            <img src="/img/tohe/case-study/canifa/canifaTwo.png" alt="" className='cafina-img-two'/>
                            <p style={{ margin: '15px 0' }}>
                                Nguồn kinh phí này đã góp phần tổ chức:
                            </p>

                            <div className="canifa-box-number">
                                <div className="canifa-box-number-top">
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>8</span>
                                            <span className='font-vn-wosker text-blue'>8</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Điểm sân chơi nghệ thuật sáng tạo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>8</span>
                                            <span className='font-vn-wosker text-blue'>8</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Điểm sân chơi nghệ thuật sáng tạo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>8</span>
                                            <span className='font-vn-wosker text-blue'>8</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Điểm sân chơi nghệ thuật sáng tạo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="canifa-box-number-bottom">
                                    <div className="number-left">
                                        <span className='font-vn-wosker text-blue'>8</span>
                                        <span className='font-vn-wosker text-blue'>8</span>
                                    </div>
                                    <div className="text-right">
                                        <p className='font-uvn-b'>
                                            Trẻ em đặc biệt được tham gia các hoạt động nghệ thuật miễn phí
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Dự án không chỉ nâng cao nhận thức về sự hòa nhập mà còn tạo ra cơ hội tiếp cận nghệ thuật thực tế cho trẻ em đặc biệt tại cộng đồng.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.2. Tác động tới nghệ sĩ nhí
                            </p>
                            <p>
                                Thông qua dự án hợp tác với CANIFA, 04 nghệ sĩ đặc biệt đã có tác phẩm được thương mại hóa trên các sản phẩm chính thức của thương hiệu và tiếp cận rộng rãi tới cộng đồng thông qua hệ thống bán lẻ trên toàn quốc. Không chỉ được ghi nhận với vai trò người sáng tạo, các em còn nhận 5% doanh thu từ việc sử dụng tác phẩm của mình, qua đó nâng cao sự tự tin, tạo động lực phát triển năng lực cá nhân và khẳng định giá trị của trẻ em đặc biệt trong đời sống xã hội.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.3. Giá trị mang lại cho doanh nghiệp
                            </p>
                            <p>
                                ✓ Giúp CANIFA xây dựng hình ảnh thương hiệu thời trang gia đình gắn với sự thấu hiểu, bền vững và trách nhiệm xã hội thông qua một dự án có tác động thực tế, thay vì chỉ dừng ở thông điệp truyền thông.
                            </p>
                            <p>
                                ✓ Tạo ra dòng sản phẩm mang dấu ấn riêng biệt nhờ ứng dụng tranh vẽ độc bản của trẻ em đặc biệt, giúp bộ sưu tập có tính nhận diện cao và tăng kết nối cảm xúc với khách hàng.
                            </p>
                            <p>
                                ✓ Gia tăng thiện cảm và độ lan tỏa thương hiệu khi dự án được nhiều cơ quan báo chí và cộng đồng quan tâm như Báo Dân trí, Afamily, Markettimes…, góp phần củng cố hình ảnh CANIFA như một thương hiệu theo đuổi giá trị phát triển bền vững.
                            </p>
                            <p>
                                ✓ Tăng tính thuyết phục cho các hoạt động phát triển bền vững của doanh nghiệp nhờ số liệu tác động xã hội rõ ràng, có số liệu cụ thể và khả năng đo lường thực tế sau chiến dịch.
                            </p>
                            <p>
                                ✓ Khẳng định năng lực triển khai các dự án cộng đồng dài hạn của CANIFA thông qua việc kết hợp trực tiếp giữa hoạt động kinh doanh, trải nghiệm khách hàng và tạo tác động xã hội trong cùng một chiến dịch.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>
                         
                            <ul style={{listStyle: 'decimal'}}>
                                <li>
                                    <a style={{color: '#000'}} target="_blank"  href='https://dantri.com.vn/kinh-doanh/canifa-ket-hop-tohe-ra-mat-du-an-cong-dong-yeu-thuong-co-tat-20250124095414061.htm'>
                                    <p>
                                        Trường Thịnh (2025). Canifa kết hợp Tòhe ra mắt dự án cộng đồng ‘“Yêu thương có tất”’. [online] Báo điện tử Dân trí.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} target="_blank"  href='https://afamily.vn/chuyen-chua-ke-ve-su-ra-doi-cua-mot-bo-san-pham-dac-biet-nghe-ten-da-thay-yeu-thuong-20250820163922723.chn'>
                                    <p>
                                        Thùy Anh (2025). Ra mắt bộ sản phẩm Yêu thương có tất kết hợp Canifa và Tòhe vì cộng đồng. [online] afamily.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} target="_blank"  href='https://markettimes.vn/chuyen-chua-ke-ve-su-ra-doi-cua-mot-bo-san-pham-dac-biet-nghe-ten-da-thay-yeu-thuong-88957.html'>
                                    <p>
                                        Thùy Anh (2025a). Chuyện chưa kể về sự ra đời của một bộ sản phẩm đặc biệt, nghe tên đã thấy ‘yêu thương’. [online] Báo Markettimes.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} target="_blank"  href='https://www.facebook.com/share/p/1Cz7rS9aoe/'>
                                    <p>
                                        Facebook.com. (2026). Tohe Social Enterprise. [online]. 
                                    </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>





                    <div className="case-study-all">
                        <p><a onClick={() => handleClickTOCaseStudy()}>XEM TẤT CẢ CASESTUDY</a></p>
                    </div>
                    <div className="case-studt-mapping">
                        <div className="case-studt-mapping-content">
                            <div className="case-studt-mapping-content-h1">
                                <h1 className='text-blue'>CÁC CASESTUDY LIÊN QUAN</h1>
                            </div>
                            <div className="case-studt-mapping-content-box">
                                <div className="case-study-box-item">
                                    {
                                        boxList && boxList.map((item, index) => (
                                            <div className="box-item-model" key={index}>
                                                <BoxIImageNd2Mini 
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
                        </div>
                    </div>


                </div>
            </div>
                    
        </>
    )
}
export default CanifaComponent;