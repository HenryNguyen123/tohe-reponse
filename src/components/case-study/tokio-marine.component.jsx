import { useEffect } from 'react';
import './tokio-marine.scss'
import { useNavigate } from 'react-router-dom';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';

const TokioMarineComponent = () => {
    const navigate = useNavigate();

    const background = '/img/tohe/case-study/canifa/image.png';
    const handleClickToHome = () =>{
        navigate('/')
    }
    const handleClickTOCaseStudy = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/case-study')
    }
    useEffect(() => {
        document.title = 'Tokio Marine';
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
                                        <li><a  onClick={() => handleClickToHome()}>Trang chu</a></li>
                                        <li>Dịch vụ quà tặng doanh nghiệp</li>
                                        <li>Các dự án hợp tác</li>
                                    </ul>
                                </div>
                                <div className="case-study-background-nav-item">
                                    <h1>
                                        <span className='text-pink'>TÒHE</span> X <span className='text-blue'>TOKIO MARINE VIỆT NAM</span>: “YÊU TRỌN NIỀM VUI” - GIÁO<br/> DỤC NGHỆ THUẬT CHO TRẺ EM TỰ KỶ
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

                            <p>Thời gian thực hiện: Tháng 11/2025 - Tháng 6/2026</p>
                            <p>
                                Với cam kết xây dựng một xã hội bền vững và hòa nhập, Tokio Marine Việt Nam phối hợp cùng Tòhe triển khai dự án “Yêu trọn niềm vui” - Dự án giáo dục sáng tạo nhằm mang đến cơ hội học tập và phát triển cho các bạn nhỏ rối loạn phổ tự kỷ. Thông qua sức mạnh chuyển hóa của nghệ thuật, dự án tạo nên những nhịp cầu kết nối cảm xúc, khơi dậy sự tự tin và hỗ trợ các em trên hành trình hòa nhập cộng đồng.
                            </p>
                            <p>
                                Trong bối cảnh tỷ lệ trẻ tự kỷ đang gia tăng trên thế giới và tại Việt Nam, đặt ra thách thức lớn cho gia đình và xã hội. Các em thường gặp nhiều khó khăn trong cuộc sống như rối loạn ngôn ngữ, hạn chế tương tác xã hội, chậm nói, tăng động, khó kiểm soát hành vi… Nghệ thuật, với khả năng khơi gợi cảm xúc và tạo ra những kênh biểu đạt phi ngôn ngữ độc đáo, là một công cụ hữu hiệu đối với trẻ tự kỷ. Xuất phát từ niềm tin đó, Tòhe vui mừng đồng hành cùng Tokio Marine trong dự án “Yêu trọn niềm vui”, được xây dựng trên nền tảng của sự thấu cảm và quan tâm.
                            </p>

                            <img src="/img/tohe/case-study/canifa/v366_1450.png" alt="" className='img-canifa-one'/>

                            <p className='font-uvn-b-content-20' style={{margin: '15px 0'}}>
                                II. Mong muốn của Tokio Marine và Giải pháp từ Tòhe
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1. Mong muốn của Tokio Marine
                            </p>

                            <p>
                                Trong những năm gần đây, vấn đề sức khỏe tinh thần và giáo dục hòa nhập cho trẻ em tự kỷ ngày càng trở thành một mối quan tâm lớn trên toàn cầu. Theo Tổ chức Y tế Thế giới (WHO), cứ khoảng 100 trẻ em thì có 1 trẻ nằm trong phổ tự kỷ. Năm 2023, Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh Hoa Kỳ (CDC) đã công bố tỷ lệ trẻ tự kỷ đã đạt mức 1/36. Tại Việt Nam, theo công bố của Tổng cục Thống kê (tháng 1/2019), cả nước có khoảng 1 triệu người rối loạn phổ tự kỷ, với tỷ lệ trẻ mắc tự kỷ ước tính chiếm khoảng 1% số trẻ sinh ra mỗi năm.
                            </p>
                            <p>
                                Trong bối cảnh đó, các doanh nghiệp quốc tế ngày càng chịu áp lực phải chứng minh trách nhiệm xã hội bằng những tác động cụ thể, dài hạn và có khả năng tạo thay đổi thật sự cho cộng đồng, thay vì chỉ dừng lại ở các hoạt động tài trợ ngắn hạn hay truyền thông CSR đơn lẻ. Đặc biệt với ngành bảo hiểm - lĩnh vực gắn trực tiếp với sự an toàn, bảo vệ con người và niềm tin xã hội - các chương trình cộng đồng cần thể hiện rõ tính nhân văn, sự đồng hành lâu dài và khả năng tạo ra giá trị bền vững.
                            </p>
                            <p>
                                Là doanh nghiệp hoạt động với triết lý “To Be a Good Company”, Tokio Marine Việt Nam định hướng phát triển không chỉ như một công ty bảo hiểm mà còn là một doanh nghiệp có trách nhiệm với xã hội, chú trọng các giá trị về con người, sự hòa nhập và phát triển bền vững. Đây cũng là định hướng xuyên suốt của Tokio Marine Group trên toàn cầu khi tập trung vào các mục tiêu ESG, hỗ trợ cộng đồng và tạo ra các tác động xã hội tích cực thông qua hoạt động kinh doanh.
                            </p>

                            <img src="/img/tohe/case-study/canifa/v344_606.png" alt="" className='img-canifa-one'/>
                            <p style={{margin: '15px 0'}}>
                                Từ định hướng đó, bài toán đặt ra với Tokio Marine Việt Nam không chỉ là “tài trợ cho một dự án cộng đồng”, mà là tìm kiếm một mô hình đủ thực chất và lâu dài để:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Tạo ra tác động bền vững cho trẻ em tự kỷ thay vì các hoạt động hỗ trợ ngắn hạn.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Xây dựng một chương trình có khả năng phát triển đồng thời cả kỹ năng, cảm xúc và sự tự tin cho trẻ.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tạo cơ hội để trẻ em tự kỷ được kết nối và hòa nhập với cộng đồng thông qua các hoạt động sáng tạo phù hợp.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Biến những cam kết ESG và triết lý “To Be a Good Company” thành các hoạt động cụ thể, có thể nhìn thấy và đo lường được trong thực tế.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Đồng hành cùng một đối tác có chuyên môn về giáo dục nghệ thuật và hiểu rõ cách làm việc với trẻ em có nhu cầu đặc biệt để đảm bảo chương trình được triển khai chuyên nghiệp, an toàn và lâu dài.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Chính từ những nhu cầu đó, Tokio Marine Việt Nam lựa chọn đồng hành cùng Tòhe để triển khai dự án “Yêu trọn niềm vui” - một mô hình giáo dục nghệ thuật hướng tới sự hòa nhập, phát triển cảm xúc và kết nối cộng đồng dành cho trẻ em tự kỷ.
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.2. Giải pháp từ Tòhe
                            </p>
                            <p>
                                Thứ nhất, xây dựng chương trình giáo dục nghệ thuật hướng đến phát triển toàn diện. Tòhe phát triển dự án "Yêu trọn niềm vui" dựa trên phương pháp giáo dục nghệ thuật sáng tạo đã được ứng dụng nhiều năm với trẻ em có hoàn cảnh đặc biệt. Chương trình không chỉ tập trung vào kỹ năng mỹ thuật mà còn hướng đến phát triển cảm xúc, khả năng giao tiếp và sự tự tin của trẻ thông qua các hoạt động sáng tạo phù hợp với đặc điểm của trẻ tự kỷ.
                            </p>
                            <p>
                                Mô hình được xây dựng dựa trên ba trụ cột:
                            </p>
                            <p style={{textAlign: 'center'}}>
                                “Môi trường an toàn - Cùng nhau phát triển - Hòa nhập và Tôn trọng”
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Kiến thức: Giúp trẻ tiếp cận các kỹ thuật mỹ thuật cơ bản.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Kỹ năng: Khuyến khích tư duy sáng tạo và khả năng thể hiện ý tưởng.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Cảm xúc: Tạo môi trường an toàn để trẻ biểu đạt bản thân và tăng cường sự tự tin.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Thứ hai, thiết kế hệ sinh thái học tập đa dạng, tiếp cận nhiều nhóm trẻ. Thay vì triển khai các hoạt động đơn lẻ, Tòhe xây dựng một hành trình học tập liên tục kết hợp giữa trực tiếp và trực tuyến nhằm mở rộng khả năng tiếp cận cho trẻ em tự kỷ.
                            </p>

                            <div className="box-item">
                                <div className="box-item-title" style={{margin: '60px 15px 0 0'}}>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>3</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Điểm sân chơi nghệ thuật sáng tạo
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{margin: '15px 0'}}>
                                        Được tổ chức định kỳ tại các trung tâm giáo dục chuyên biệt tại Hà Nội gồm:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>Trung tâm Sao Mai</p>
                                        </li>
                                        <li>
                                            <p>Hand in Hand</p>
                                        </li>
                                        <li>
                                            <p>Hai Dang Psychological Education Centre</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-item-box"  style={{margin: '0 30px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1509.png" alt="" className='box-item-img'/>
                                </div>
                            </div>

                            <div className="box-item">
                                <div className="box-item-box"  style={{margin: '0 30px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1509.png" alt="" className='box-item-img'/>
                                </div>
                                <div className="box-item-title">
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>2</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Khóa học nghệ thuật trực tuyến
                                            </p>
                                        </div>
                                    </div>
                                    <p style={{margin: '15px 0'}}>
                                        Vẽ nét yêu thương - Khám phá thế giới qua đường nét (nét ngắn - dài, nét cứng - mềm, nét sáng tạo,...)
                                    </p>
                                    <p>
                                        Tô màu hạnh phúc - Khám phá cảm xúc qua màu sắc (màu nóng - lạnh, màu đậm - nhạt, màu tương phản,...)
                                    </p>
                                </div>
                            </div>


                            <div className="box-item">
                                <div className="box-item-title" style={{margin: '60px 30px 0 0'}}>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>1</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Triển lãm nghệ thuật
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{margin: '15px 0'}}>
                                        Sự kiện trưng bày các tác phẩm do trẻ thực hiện trong suốt chương trình, tạo cơ hội để trẻ kết nối với cộng đồng
                                    </p>
                                    <p style={{margin: '15px 0'}}>
                                        Mô hình kết hợp online và offline giúp chương trình có khả năng mở rộng phạm vi tiếp cận, đồng thời duy trì tính liên tục trong quá trình học tập của trẻ.
                                    </p>
                                </div>
                                <div className="box-item-box"  style={{margin: '0 30px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/v366_1509.png" alt="" className='box-item-img'/>
                                </div>
                            </div>


                            <p style={{margin: '30px 0'}}>
                                Thứ ba, phương pháp giáo dục nghệ thuật sáng tạo. Thông qua việc thiết kế chương trình, kết nối các trung tâm giáo dục đặc biệt, triển khai lớp học và đánh giá tác động, Tòhe giúp Tokio Marine Việt Nam chuyển hóa định hướng “To Be a Good Company” thành một dự án cộng đồng cụ thể với các hoạt động rõ ràng:
                            </p>
                            <ul>
                                <li>
                                    <p>Thiết kế chương trình học.</p>
                                </li>
                                <li>
                                    <p>Phát triển giáo trình nghệ thuật sáng tạo.</p>
                                </li>
                                <li>
                                    <p>Kết nối các trung tâm giáo dục đặc biệt.</p>
                                </li>
                                <li>
                                    <p>Triển khai lớp học và đánh giá tác động.</p>
                                </li>
                            </ul>
                            <p>
                                Qua đó, dự án không chỉ tạo giá trị cho nhóm hưởng lợi trực tiếp mà còn giúp doanh nghiệp xây dựng một mô hình CSR/ESG mang tính bền vững, có chiều sâu và tạo được kết nối cảm xúc với cộng đồng.
                            </p>


                            <p className='font-uvn-b-content-20'>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16'>
                                3.1. Tác động cộng đồng
                            </p>

                            <p>
                                Dự án góp phần tạo ra môi trường học tập sáng tạo và an toàn cho trẻ tự kỷ, vốn alf nhóm trẻ thường gặp khó khăn trong giao tiếp và biểu đạt cảm xúc trong môi trường học tập thông thường.
                            </p>
                            <p>
                                Thông qua 03 lớp học trực tiếp, 02 khóa học trực tuyến và 01 triển lãm cộng đồng, trẻ có thêm cơ hội rèn luyện khả năng kết nối, tự tin thể hiện bản thân và tương tác với mọi người thông qua nghệ thuật.
                            </p>
                            <img src="/img/tohe/case-study/canifa/canifaTwo.png" alt="" className='img-canifa-one'/>
                            <p style={{ margin: '15px 0' }}>
                                Các hoạt động triển lãm và trưng bày tác phẩm giúp phụ huynh, giáo viên và cộng đồng nhìn nhận trẻ tự kỷ theo hướng tích cực hơn, chuyển đổi góc nhìn từ “thương cảm - khó khăn” sang “khả năng sáng tạo và cảm xúc riêng” của mỗi em.
                            </p>
                            <p>
                                Dự án đồng thời góp phần lan tỏa nhận thức về giáo dục hòa nhập và vai trò của nghệ thuật trong hỗ trợ phát triển cảm xúc cho trẻ em có nhu cầu đặc biệt.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.2. Giá trị mang lại cho doanh nghiệp
                            </p>
                            <p>
                                ✓ Giúp Tokio Marine Việt Nam hiện thực hóa rõ nét định hướng “To Be a Good Company” thông qua một dự án giáo dục hòa nhập có tác động dài hạn thay vì các hoạt động tài trợ ngắn hạn mang tính hình thức.
                            </p>
                            <p>
                                ✓ Dự án giúp doanh nghiệp xây dựng hình ảnh thương hiệu gắn với sự thấu cảm, giáo dục hòa nhập và phát triển bền vững. Đây vốn là những chủ đề ngày càng được quan tâm trong ngành bảo hiểm và tài chính, nơi niềm tin thương hiệu và trách nhiệm xã hội có ảnh hưởng lớn đến mức độ gắn kết khách hàng.
                            </p>
                            <p>
                                ✓ Hoạt động hợp tác được nhiều nền tảng báo chí và truyền thông chính thống đăng tải như: Vietnam Investment Review, Vietnamnet, Asia Education Review,...Qua đó giúp Tokio Marine Việt Nam gia tăng độ phủ thương hiệu theo hướng tích cực, nhân văn và có chiều sâu xã hội.
                            </p>
                            <p>
                                ✓ Dự án giúp Tokio Marine chuyển các cam kết ESG thành hành động cụ thể, có thể đo lường được thông qua số lượng lớp học, thời gian triển khai, đối tượng hưởng lợi và hoạt động triển lãm cộng đồng.
                            </p>
                            <p>
                                ✓ Việc lựa chọn giáo dục nghệ thuật cho trẻ tự kỷ cũng giúp doanh nghiệp tạo khác biệt trong hoạt động cộng đồng của ngành bảo hiểm, khi phần lớn các chương trình CSR trên thị trường hiện vẫn tập trung vào tài trợ ngắn hạn hoặc hoạt động thiện nguyện thời vụ.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>
                         
                            <ul style={{listStyle: 'decimal'}}>
                                <li>
                                    <p>
                                        Facebook.com. (2026a). Tohe Fun. [online]                                    
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Administrator (2025). DỰ ÁN XÃ HỘI ‘YÊU TRỌN NIỀM VUI’ – HÀNH TRÌNH GIEO VUI CỦA TOKIO MARINE. [online] 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        News, V. (2025). Tokio Marine đồng hành cùng dự án giáo dục nghệ thuật cho trẻ tự kỷ. [online] VietNamNet News.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Van, T. (2025) Tokio Marine Vietnam supports children with autism through art education project. [online]Vietnam Investment Review 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Facebook.com. (2026d). Tokio Marine. [online] 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Hoàng Thạch (2023). Ngày Thế giới nhận thức về tự kỷ (2-4): Cần yêu thương, thấu hiểu trẻ tự kỷ và hỗ trợ tâm lý đối với cha mẹ trẻ tự kỷ | Bệnh viện Nhi Trung ương. [online]                                      
                                    </p>
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
export default TokioMarineComponent;