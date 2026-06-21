import { useEffect } from 'react';
import './vcca.scss'
import { useNavigate } from 'react-router-dom';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';

const VCCAComponent = () => {
    const navigate = useNavigate();

    const background = '/img/tohe/case-study/canifa/v416_828.png';
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
        document.title = 'VCCA';
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
                                        <li><a  onClick={() => handleClickToHome()}>Trang chu</a></li>
                                        <li><a onClick={handleClickToCaseStudyPage2}>Dịch vụ quà tặng doanh nghiệp</a></li>
                                        <li><a onClick={handleClickToCaseStudyPage3}>Các dự án hợp tác</a></li>
                                    </ul>
                                </div>
                                <div className="case-study-background-nav-item">
                                    <h1>
                                        <span className='text-pink'>TÒHE</span> X <span className='text-yellow'>VCCA</span>: TRIỂN LÃM “HÀNH TINH NHỰA”
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
                            <p>
                                Thời gian thực hiện: Ngày 21/6 - 18/8 năm 2019                            
                            </p>
                            <p>
                                “Hành tinh nhựa” là triển lãm nghệ thuật đương đại do Tòhe thực hiện tại VCCA - Trung tâm Nghệ thuật đương đại Vincom, một tổ chức phi lợi nhuận thuộc Tập đoàn Vingroup. 
                            </p>
                            <p>
                                Với mục tiêu đưa các vấn đề môi trường và tiêu dùng nhựa đến gần hơn với công chúng thông qua trải nghiệm nghệ thuật thị giác. Triển lãm gồm các tác phẩm sắp đặt, điêu khắc và không gian tương tác được tạo nên từ hàng vạn vật liệu nhựa đã qua sử dụng thu gom từ cộng đồng. Thông qua nghệ thuật, dự án gợi mở những suy ngẫm về mối quan hệ giữa con người với thiên nhiên, với xã hội và với chính thói quen tiêu dùng của mình trong đời sống hiện đại.
                            </p>
                            <p>
                                Bên cạnh không gian trưng bày, dự án còn kết hợp workshop, hoạt động giáo dục và trải nghiệm dành cho gia đình, trẻ em và trường học nhằm lan tỏa nhận thức về lối sống bền vững theo cách trực quan, dễ tiếp cận và giàu cảm xúc.
                            </p>

                            <img src="/img/tohe/case-study/canifa/v416_828.png" alt="" className='img-canifa-one'/>

                            <p className='font-uvn-b-content-20' style={{margin: '15px 0'}}>
                                II. Mong muốn của VCCA và Giải pháp từ Tòhe
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1. Mong muốn của VCCA
                            </p>

                            <p>
                                Trong những năm gần đây, ô nhiễm rác thải nhựa trở thành một trong những vấn đề môi trường nghiêm trọng tại Việt Nam. Theo Bộ Tài nguyên và Môi trường, Việt Nam phát sinh khoảng 1,8 triệu tấn rác thải nhựa mỗi năm nhưng chỉ khoảng 27% được tái chế. Đồng thời, Việt Nam từng nằm trong nhóm các quốc gia xả rác thải nhựa ra biển nhiều nhất thế giới.
                            </p>
                            <p>
                                Trong bối cảnh đó, các tổ chức nghệ thuật và văn hóa bắt đầu đứng trước yêu cầu phải đóng vai trò tích cực hơn trong việc kết nối công chúng với các vấn đề xã hội và môi trường thay vì chỉ dừng lại ở chức năng trưng bày nghệ thuật truyền thống.
                            </p>

                            <img src="/img/tohe/case-study/canifa/loc-xoay.png" alt="" className='img-canifa-one'/>
                            <p style={{margin: '15px 0'}}>
                                Là trung tâm nghệ thuật đương đại phi lợi nhuận thuộc Vingroup, VCCA định hướng phát triển các dự án nghệ thuật có khả năng tạo tương tác xã hội, mở rộng tiếp cận nghệ thuật tới công chúng đại chúng, đặc biệt là gia đình và giới trẻ. Tuy nhiên, bài toán đặt ra là:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Làm thế nào để biến một vấn đề môi trường khô khan như rác thải nhựa thành trải nghiệm trực quan, dễ tiếp cận và đủ hấp dẫn với công chúng đại chúng.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Làm sao để triển lãm không chỉ dừng ở “xem nghệ thuật” mà còn thúc đẩy suy nghĩ và thay đổi nhận thức về tiêu dùng bền vững.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tạo ra một không gian có thể kết nối đồng thời nhiều nhóm đối tượng khác nhau: trẻ em, gia đình, giới trẻ và cộng đồng yêu nghệ thuật.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Kết hợp được giữa nghệ thuật đương đại, giáo dục cộng đồng và trải nghiệm tương tác thay vì mô hình triển lãm tĩnh truyền thống.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tìm kiếm một đối tác có khả năng chuyển hóa các vấn đề xã hội thành ngôn ngữ nghệ thuật gần gũi, sáng tạo và có tính kết nối cộng đồng cao.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Đây cũng là lý do VCCA lựa chọn đồng hành cùng Tòhe - đơn vị có nhiều kinh nghiệm triển khai các dự án nghệ thuật cộng đồng, giáo dục sáng tạo và kết nối công chúng thông qua trải nghiệm nghệ thuật tương tác.
                            </p>

                            <p className='font-uvn-b-content-16' style={{margin: '15px 0'}}>
                                2.2 Giải pháp từ Tòhe 
                            </p>

                            <div className="box-item-vcca">
                                <div className="box-item-box"  style={{margin: '0 20px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/vcca-1.png" alt="" className='box-item-img'/>
                                </div>
                                <div className="box-item-title">
                                    <p>
                                        Thứ nhất, biến rác thải nhựa thành tác phẩm nghệ thuật quy mô lớn. Tòhe thu gom hàng vạn vật liệu nhựa đã qua sử dụng và tái sinh thành 04 tác phẩm sắp đặt quy mô lớn: Đại Dương, Cánh Đồng, Lốc Xoáy và Gia Đình. Giải pháp giúp truyền tải thông điệp về môi trường và tiêu dùng bền vững thông qua trải nghiệm trực quan, dễ tiếp cận với công chúng.
                                    </p>
                                </div>
                            </div>
                            <div className="box-item-vcca">
                                <div className="box-item-title" style={{margin: '20px 20px 0 0'}}>
                                    <p>
                                        Thứ hai, kể câu chuyện môi trường bằng ngôn ngữ nghệ thuật. Thay vì truyền tải thông điệp môi trường bằng các hình thức tuyên truyền truyền thống, Tòhe sử dụng nghệ thuật đương đại để khơi gợi đối thoại và suy ngẫm về tiêu dùng, tái chế và trách nhiệm với môi trường. Thông qua các tác phẩm sắp đặt, triển lãm đặt ra những câu hỏi về giá trị của vật thể, ranh giới giữa “đồ vật” và “rác thải”, cũng như cách mỗi cá nhân nhìn nhận và tương tác với thế giới xung quanh.                                    
                                    </p>
                                </div>
                                <div className="box-item-box" >
                                    <img src="/img/tohe/case-study/canifa/vcca-2.png" alt="" className='box-item-img'/>
                                </div>
                            </div>
                            <div className="box-item-vcca">
                                <div className="box-item-box"  style={{margin: '0 20px 0 0'}}>
                                    <img src="/img/tohe/case-study/canifa/vcca-3.png" alt="" className='box-item-img'/>
                                </div>
                                <div className="box-item-title">
                                    <p>
                                        Thứ ba, đưa tiếng nói của trẻ em vào triển lãm. Tòhe tích hợp các tác phẩm của trẻ em, bao gồm trẻ tự kỷ và trẻ em có hoàn cảnh đặc biệt, vào không gian triển lãm. Tiêu biểu là tác phẩm “Vùng An Toàn” quy tụ 126 tranh vẽ và tượng giấy bồi, góp phần mang đến những góc nhìn đa dạng và nhân văn về các vấn đề xã hội.                                    
                                    </p>
                                </div>
                            </div>
                            <div className="box-item-vcca">
                                <div className="box-item-title" style={{margin: '20px 20px 0 0'}}>
                                    <p>
                                        Thứ tư, thiết kế trải nghiệm tương tác đa giác quan. Không gian triển lãm được xây dựng theo hướng mở, khuyến khích khách tham quan tương tác và khám phá thay vì chỉ quan sát. Các tác phẩm tương tác như “Hộp Bí Mật” kết hợp nhiều giác quan, giúp gia tăng trải nghiệm và khả năng kết nối với công chúng ở nhiều độ tuổi.                                    
                                    </p>
                                </div>
                                <div className="box-item-box" >
                                    <img src="/img/tohe/case-study/canifa/vcca-4.png" alt="" className='box-item-img'/>
                                </div>
                            </div>

                            <p className='font-uvn-b-content-20'>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16'>
                                3.1. Tác động cộng đồng
                            </p>
                            <p>
                                ✓ Triển lãm tái sinh hàng vạn vật liệu nhựa đã qua sử dụng thành các tác phẩm nghệ thuật thị giác quy mô lớn, góp phần đưa câu chuyện về rác thải nhựa và tiêu dùng bền vững đến gần hơn với công chúng theo cách trực quan và dễ tiếp cận hơn.
                            </p>
                            <p>
                                ✓ Tác phẩm “Vùng an toàn” quy tụ 126 bức tranh và tượng giấy bồi do các nghệ sĩ nhí sáng tác, trong đó có trẻ tự kỷ, góp phần mở rộng không gian để trẻ em đặc biệt được thể hiện góc nhìn, cảm xúc và tiếng nói của mình thông qua nghệ thuật đương đại.
                            </p>
                            <p>
                                ✓ Chuỗi workshop, hoạt động trải nghiệm và tour tham quan trong khuôn khổ triển lãm giúp kết nối nghệ thuật với giáo dục môi trường, tạo cơ hội để trẻ em, gia đình và trường học tiếp cận các vấn đề về phát triển bền vững theo hướng tương tác và trải nghiệm thực tế.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.2. Giá trị mang lại cho tổ chức
                            </p>
                            <p style={{ margin: '15px 30px' }}>
                                Số liệu nổi bật:
                            </p>


                            <div className="canifa-box-number-vcca">
                                <div className="canifa-box-number-top">
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>4</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>+</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Lượt khách tham quan sau 3 tuần mở cửa (từ 21/6/2019) tại VCCA                                            
                                            </p>
                                        </div>
                                    </div>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>6</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>+</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Lượt khách tham quan sau gần 2 tháng triển lãm, trước khi kết thúc vào ngày 18/8/2019
                                            </p>
                                        </div>
                                    </div>
                                    <div className="canifa-box-number-item-top">
                                        <div className="number-left">
                                            <span className='font-vn-wosker text-blue'>0</span>
                                            <span className='font-vn-wosker text-blue'>6</span>
                                        </div>
                                        <div className="text-right">
                                            <p className='font-uvn-b'>
                                                Tác phẩm sắp đặt và điêu khắc quy mô lớn xuyên suốt triển lãm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p style={{ margin: '15px 0' }}>
                                ✓ Giúp VCCA tạo ra một triển lãm nghệ thuật có khả năng kết nối mạnh với công chúng đại chúng thay vì chỉ giới hạn trong nhóm khán giả chuyên môn về nghệ thuật đương đại.
                            </p>
                            <p>
                                ✓ Tăng cường hình ảnh của VCCA như một trung tâm nghệ thuật gắn với các vấn đề xã hội và phát triển bền vững, thông qua mô hình kết hợp giữa nghệ thuật, giáo dục môi trường và trải nghiệm cộng đồng.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>

                            <ul style={{listStyle: 'decimal'}}>
                                <li>
                                    <p>
2-Tohe Play_Introduction.pdf (2019). 2-Tohe Play_Introduction.pdf. [online] Google Docs.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Công ty CP Tòhe. (2022g). Triễn lãm HÀNH TINH NHỰA. [online]
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        TRUNG (2025). Nỗ lực giảm ô nhiễm môi trường từ rác thải nhựa. [online] Báo Nhân Dân điện tử. 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        P.Sơn - B.Châu (Ảnh (2019). Triển lãm ‘Hành tinh nhựa’ truyền đi thông điệp sử dụng đồ nhựa có ý thức. [online] Công an Nhân dân - Hệ sinh thái truyền thông đa nền tảng.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        VnExpress (2019). Triển lãm tác phẩm nghệ thuật làm từ nhựa đã qua sử dụng. [online] vnexpress.net.

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
export default VCCAComponent;