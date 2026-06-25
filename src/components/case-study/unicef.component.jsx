import { useEffect } from 'react';
import './unicef.scss'
import { useNavigate } from 'react-router-dom';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';

const UnicefComponent = () => {
    const navigate = useNavigate();

    const background = '/img/tohe/case-study/canifa/bg-u.png';
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
        document.title = 'Unicef';
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
                                        <span className='text-pink'>TÒHE</span> X <span className='text-blue'>UNICEF</span>: BỘ TRÒ CHƠI GIÁO DỤC CHO TRẺ EM
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* blog */}
                    <div className="case-study-blog-container">
                        <div className="case-study-blog-content">
                            <p className='font-uvn-b-content-20'>
                                I. Tổng quan quá trình hợp tác
                            </p>
                            <p>
                                Trong bối cảnh biến đổi khí hậu, thiên tai và các vấn đề vệ sinh cộng đồng ngày càng ảnh hưởng trực tiếp đến trẻ em Việt Nam, UNICEF Việt Nam đã phối hợp cùng Tòhe phát triển hai bộ trò chơi giáo dục: “Hạ nhiệt Trái Đất” và “Sạch - Ăn - Ở” dành cho học sinh tiểu học và THCS. “Hạ nhiệt Trái Đất” tập trung nâng cao nhận thức về biến đổi khí hậu, tác động của hành vi cá nhân tới môi trường và khả năng thích ứng với thiên tai. Trong khi đó, “Sạch - Ăn - Ở” hướng tới xây dựng thói quen vệ sinh an toàn, đặc biệt trong bối cảnh hạn hán, dịch bệnh và thiếu nước sạch tại nhiều địa phương.
                            </p>
                            <p>
                                Dự án được triển khai từ năm 2017 với định hướng “học mà chơi - chơi mà học”, giúp trẻ tiếp cận các kiến thức về biến đổi khí hậu, vệ sinh cá nhân và kỹ năng ứng phó thiên tai thông qua hình thức tương tác trực quan, gần gũi và sáng tạo thay vì các phương pháp truyền đạt một chiều truyền thống.
                            </p>

                            <img src="/img/tohe/case-study/canifa/un-1.png" alt="" className='img-canifa-one'/>

                            <p className='font-uvn-b-content-20' style={{margin: '15px 0'}}>
                                II. Mong muốn của UNICEF và Giải pháp từ Tòhe
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1. Mong muốn của UNICEF
                            </p>

                            <p>
                                Trong nhiều năm, UNICEF Việt Nam theo đuổi định hướng xây dựng năng lực thích ứng với biến đổi khí hậu và thiên tai cho trẻ em thông qua giáo dục dài hạn thay vì chỉ dừng ở các hoạt động cứu trợ ngắn hạn.
                            </p>
                            <p>
                                Bối cảnh này đặc biệt cấp thiết khi Việt Nam được đánh giá là một trong những quốc gia chịu ảnh hưởng nặng nề bởi biến đổi khí hậu. Theo UNICEF, Việt Nam nằm trong nhóm các quốc gia bị tác động mạnh nhất bởi biến đổi khí hậu toàn cầu; các hiện tượng hạn hán, xâm nhập mặn, bão lũ và nước biển dâng đang ảnh hưởng trực tiếp đến sức khỏe, giáo dục và đời sống của trẻ em.
                            </p>
                            <p>
                                Tại nhiều địa phương như Ninh Thuận, tình trạng hạn hán kéo dài, thiếu nước sạch và các bệnh truyền nhiễm liên quan đến vệ sinh trở thành vấn đề thường trực đối với trẻ em và gia đình. UNICEF nhận thấy rằng các hình thức truyền thông giáo dục truyền thống khó tạo ra sự tham gia thực sự từ trẻ nhỏ, đặc biệt với các chủ đề phức tạp như biến đổi khí hậu hay vệ sinh cộng đồng.
                            </p>
                            <p>
                                Từ đó, UNICEF tìm kiếm một mô hình giáo dục:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Có khả năng truyền tải kiến thức theo cách trực quan, dễ tiếp cận với trẻ em.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Khuyến khích sự tham gia chủ động thay vì học thụ động.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Phù hợp với nhiều nhóm trẻ khác nhau, bao gồm khác biệt về giới tính, dân tộc và ngôn ngữ.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Có thể triển khai trên quy mô lớn tại trường học nhưng vẫn giữ được tính sáng tạo và tương tác.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Giúp trẻ ghi nhớ kiến thức và chuyển hóa thành hành vi thực tế trong đời sống hằng ngày.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Đây cũng là lý do UNICEF lựa chọn Tòhe - một doanh nghiệp xã hội có kinh nghiệm phát triển các sản phẩm giáo dục sáng tạo lấy trẻ em làm trung tâm để cùng thiết kế và triển khai dự án.
                            </p>

                            <img src="/img/tohe/case-study/canifa/un-2.png" alt="" className='img-canifa-one'/>

                            <p className='font-uvn-b-content-16' style={{margin: '15px 0'}}>
                                2.2 Giải pháp từ Tòhe 
                            </p>
                            <p>
                                Thứ nhất, Chuyển hóa các chủ đề phức tạp thành trải nghiệm học tập dễ tiếp cận. 
                            </p>
                            <p>
                                Biến đổi khí hậu, vệ sinh cộng đồng hay giảm nhẹ rủi ro thiên tai là những chủ đề tương đối trừu tượng đối với trẻ em. Tòhe đã chuyển tải các kiến thức này thành hệ thống trò chơi tương tác, giúp trẻ tiếp cận thông tin thông qua hành động, thảo luận và giải quyết tình huống thay vì ghi nhớ lý thuyết một chiều.
                            </p>
                            <p>
                                Thông qua hai bộ board game “Hạ nhiệt Trái Đất” và “Sạch - Ăn - Ở”, các khái niệm về môi trường, sức khỏe và an toàn được diễn giải bằng ngôn ngữ gần gũi, hình ảnh trực quan và các tình huống quen thuộc trong đời sống hàng ngày của trẻ em.
                            </p>

                            <div className="box-item">
                                <div className="box-item-box" >
                                    <img src="/img/tohe/case-study/canifa/v416_818.png" alt="" className='box-item-img'/>
                                    <p>board game “Hạ nhiệt Trái Đất”</p>
                                </div>
                                <div className="box-item-box" >
                                    <img src="/img/tohe/case-study/canifa/un-3.png" alt="" className='box-item-img'/>
                                    <p>board game “Hạ nhiệt Trái Đất”</p>
                                </div>
                            </div>

                            <p style={{margin: '30px 0'}}>
                                Thứ hai, Nghiên cứu hành vi trẻ em trước khi thiết kế sản phẩm.
                            </p>
                            <p>
                                Thay vì bắt đầu từ nội dung chuyên môn, Tòhe bắt đầu từ trải nghiệm của trẻ em. Đội ngũ dự án tiến hành khảo sát và thử nghiệm với hơn 200 học sinh tại các khu vực chịu ảnh hưởng bởi hạn hán và biến đổi khí hậu để tìm hiểu cách trẻ tiếp nhận thông tin, mức độ hiểu biết và hành vi thực tế liên quan đến môi trường và vệ sinh.
                            </p>
                            <p style={{margin: '15px 0'}}>
                                Thứ ba, Tạo ra công cụ thay đổi hành vi thay vì chỉ truyền tải kiến thức.
                            </p>
                            <p>
                                Thông qua cơ chế tương tác và nhập vai, trẻ không chỉ hiểu các vấn đề môi trường và vệ sinh mà còn được khuyến khích chuyển hóa kiến thức thành hành động thực tế như tiết kiệm nước, giữ gìn vệ sinh cá nhân, giảm rác thải và ứng phó với thiên tai.
                            </p>
                            <p>
                                Đây cũng là lý do dự án được lựa chọn giới thiệu tại Hội nghị Quốc tế về Truyền thông Thay đổi Hành vi và Xã hội năm 2018 tại Indonesia.
                            </p>

                            <p style={{margin: '15px 0'}}>
                                Thứ tư, Xây dựng mô hình giáo dục dễ nhân rộng trong trường học.
                            </p>
                            <p>
                                Một trong những thách thức của UNICEF là làm thế nào để một công cụ giáo dục có thể được sử dụng tại nhiều trường học với điều kiện cơ sở vật chất khác nhau.
                            </p>
                            <p>
                                Tòhe đã phát triển hai bộ board game theo hướng:
                            </p>
                            <ul>
                                <li>
                                    <p>Không phụ thuộc vào công nghệ hoặc thiết bị điện tử.</p>
                                </li>
                                <li>
                                    <p>Giáo viên có thể dễ dàng hướng dẫn.</p>
                                </li>
                                <li>
                                    <p>Phù hợp cho hoạt động nhóm tại lớp học.</p>
                                </li>
                                <li>
                                    <p>Có thể sử dụng nhiều lần với chi phí hợp lý.</p>
                                </li>
                            </ul>
                            <img src="/img/tohe/case-study/canifa/un-4.png" alt="" className='img-canifa-one'/>
                            <p style={{margin: '15px 0'}}>
                                Thứ năm, Biến sản phẩm giáo dục thành công cụ truyền thông cộng đồng.
                            </p>
                            <p>
                                Thông qua việc trẻ em mang kiến thức và trải nghiệm từ trò chơi về gia đình, dự án tạo ra hiệu ứng lan tỏa vượt ra ngoài phạm vi lớp học, giúp tăng cường nhận thức cộng đồng về các vấn đề môi trường và sức khỏe.
                            </p>


                            <p className='font-uvn-b-content-20'>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16'>
                                3.1. Tác động cộng đồng
                            </p>
                            <div className="canifa-box-number">
                                <div className="canifa-box-number-top">
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>1</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>9</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Trường Tiểu học và THCS được phân phối Board game
                                            </p>
                                        </div>
                                    </div>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>5</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Học sinh tiếp cận tới dự án
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>
                                ✓ Nội dung trò chơi được phát triển dựa trên khảo sát năng lực và nhận thức của hơn 200 học sinh tại các tỉnh chịu ảnh hưởng bởi hạn mặn và hạn hán, giúp đảm bảo tính phù hợp với trẻ em Việt Nam.
                            </p>
                            <p>
                                ✓ Các trường học ghi nhận mức độ tham gia tích cực của học sinh. Nhiều giáo viên và thư viện trường cho biết học sinh chủ động xin thêm thời gian để tiếp tục chơi và học thông qua trò chơi.
                            </p>
                            <p>
                                ✓ Dự án giúp chuyển các chủ đề khó như biến đổi khí hậu, vệ sinh cộng đồng và phòng chống thiên tai thành trải nghiệm học tập trực quan, dễ hiểu và gần gũi hơn với trẻ nhỏ, đặc biệt tại các khu vực dân tộc thiểu số và vùng chịu tác động môi trường cao.
                            </p>
                            <p>
                                ✓ Mô hình giáo dục sáng tạo của UNICEF và Tòhe được giới thiệu tại Hội nghị Quốc tế về Truyền thông Thay đổi Hành vi và Xã hội / Giáo dục - Giải trí năm 2018 (International Social and Behaviour Change Communication/Entertainment Education Summit 2018) tại Indonesia như một ví dụ tiêu biểu về truyền thông thay đổi hành vi dành cho trẻ em.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.2. Giá trị mang lại cho tổ chức
                            </p>
                            <p>
                                ✓ Dự án giúp UNICEF hiện thực hóa định hướng “giáo dục lấy trẻ em làm trung tâm” thông qua một mô hình học tập tương tác thay vì truyền đạt kiến thức theo cách một chiều truyền thống.
                            </p>
                            <p>
                                ✓ Việc hợp tác cùng Tòhe cho phép UNICEF chuyển tải các chủ đề phát triển bền vững như biến đổi khí hậu, vệ sinh và giảm nhẹ rủi ro thiên tai bằng ngôn ngữ sáng tạo, dễ tiếp cận hơn với trẻ em Việt Nam.
                            </p>
                            <p>
                                ✓ Hai bộ trò chơi trở thành ví dụ tiêu biểu cho cách UNICEF ứng dụng thiết kế sáng tạo và truyền thông thay đổi hành vi vào giáo dục cộng đồng, đồng thời tạo tiền đề để mở rộng các mô hình giáo dục tương tác trong trường học sau này.
                            </p>
                            <p>
                                ✓ Dự án được truyền thông trên các nền tảng chính thức của UNICEF Việt Nam và các tổ chức giáo dục - phát triển quốc tế, góp phần củng cố hình ảnh UNICEF như một tổ chức tiên phong trong các giải pháp giáo dục sáng tạo và thích ứng biến đổi khí hậu cho trẻ em.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>


                            <ul style={{listStyle: 'decimal'}}>
                                <li><a style={{color: '#000'}} target="_blank" href='https://www.unicef.org/vietnam/stories/cool-down-earth'>
                                    <p>
                                        Unicef.org. (2019). Cool Down the Earth. [online].
                                    </p></a>
                                </li>
                                <li><a style={{color: '#000'}} target="_blank" href='https://www.unicef.org/eap/sites/unicef.org.eap/files/2018-06/Promising_Practices_V7_0.pdf'>
                                    <p>
                                        Báo cáo của UNICEF East Asia and Pacific Regional Office (EAPRO) (2018)                                     
                                    </p></a>
                                </li>
                                <li><a style={{color: '#000'}} target="_blank" href='https://drive.google.com/file/d/1MwuGgCYKKHbrw_DeTOBEE1PMfCIZIs98/view'>
                                    <p>
                                        2-Tohe Play_Introduction.pdf (2019). 2-Tohe Play_Introduction.pdf. [online] Google Docs. 
                                    </p></a>
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
export default UnicefComponent;