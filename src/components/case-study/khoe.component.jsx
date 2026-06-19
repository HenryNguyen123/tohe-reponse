import { useEffect } from 'react';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';
import ButtonArrowRight from '../../camoms/button/button-arrow-right.camon copy';
import './khoe.scss'

const KhoeComponent = () => {
    const background = '/img/tohe/case-study/st1/v364_636.png';
    useEffect(() => {
        document.title = 'Khoe';
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
            img: "/img/tohe/case-study/st1/v364_666.png",
            logo: "/img/tohe/case-study/st1/willet.png",
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
                                        <li>trang chu</li>
                                        <li>Dịch vụ quà tặng doanh nghiệp</li>
                                        <li>Các dự án hợp tác</li>
                                    </ul>
                                </div>
                                <div className="case-study-background-nav-item">
                                    <h1>
                                        <span className='text-pink'>TÒHE</span> X <span className='text-pink'>KHOE CREATIVE FESTIVAL (LỄ HỘI SÁNG TẠO KHỎE):</span><br/> 
                                        một lễ hội sáng tạo dành cho các gia đình trẻ yêu nghệ thuật<br/> và sống tích cực.
                                    </h1>
                                    {/* <div className="case-study-background-button">
                                        <ButtonArrowRight title={'LIÊN HỆ ĐỂ NHẬN TƯ VẤN MIỄN PHÍ'}/>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* ///////// */}
                    <div className="partership-model-panda-conent">
                        <div className="partership-model-panda-bg">
                            <div className="partership-model-panda-bg-content">
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/v307_667.png" alt="" className='icon-logon-rectangular-120'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-01.png" alt="" className='icon-logon-round-100'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-06.png" alt="" className='icon-logon-rectangular-120'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-02.png" alt="" className='icon-logon-round-100'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-03.png" alt="" className='icon-logon-round-100'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-04.png" alt="" className='icon-logon-rectangular-120'/>
                                <img src="/img/tohe/hinh-thuc-dong-hanh/th4/icon-05.png" alt="" className='icon-logon-rectangular-120'/>
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
                                KHOE Creative Festival (Lễ hội Sáng tạo Khỏe) là lễ hội sáng tạo thường niên do Tòhe khởi xướng từ năm 2017, với mong muốn xây dựng một không gian nơi nghệ thuật, giáo dục, vui chơi và các giá trị cộng đồng có thể cùng tồn tại và kết nối với nhau. Không chỉ là một sự kiện dành cho trẻ em, KHOE được định hình như một hệ sinh thái sáng tạo mở - nơi các doanh nghiệp, tổ chức xã hội, nghệ sĩ, thương hiệu sáng tạo và cộng đồng cùng tham gia tạo nên những trải nghiệm mang tính giáo dục và truyền cảm hứng.
                            </p>
                            <img src="/img/tohe/case-study/st1/v364_636.png" alt="" className='case-study-blog-1'/>
                            <p style={{ margin: '10px 0'}}>
                                Với thông điệp “Xem sáng tạo. Chơi sáng tạo. Mua sáng tạo!”, KHOE kết hợp đồng thời nhiều hoạt động như triển lãm nghệ thuật, workshop trải nghiệm, nghệ thuật sắp đặt, biểu diễn, khu vui chơi tương tác, mua sắm sáng tạo và ẩm thực. Qua ba mùa tổ chức, lễ hội trở thành một điểm chạm cộng đồng quy mô lớn, nơi các thương hiệu không chỉ xuất hiện với vai trò tài trợ mà còn trực tiếp đồng hành trong việc xây dựng trải nghiệm, lan tỏa thông điệp xã hội và kết nối với các gia đình trẻ theo cách gần gũi hơn.
                            </p>
                            <p className='font-uvn-b-content-20'>
                                II. Mô hình đồng hành đa đối tác tại KHOE
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1. Bối cảnh hợp tác
                            </p>
                            <p>
                                Khác với các chiến dịch CSR đơn lẻ hoặc hoạt động tài trợ truyền thống, KHOE Creative Festival được xây dựng như một mô hình lễ hội cộng đồng có sự tham gia đồng thời của nhiều doanh nghiệp, tổ chức xã hội, đơn vị giáo dục, thương hiệu sáng tạo và đối tác truyền thông.
                            </p>
                            <p>
                                Trong bối cảnh người tiêu dùng (đặc biệt là các gia đình trẻ và thế hệ phụ huynh mới) ngày càng quan tâm đến trải nghiệm mang tính giáo dục, sáng tạo và bền vững cho trẻ em, nhiều doanh nghiệp cũng đứng trước nhu cầu tìm kiếm những hình thức kết nối cộng đồng tự nhiên hơn thay vì chỉ xuất hiện qua quảng cáo hoặc truyền thông thương hiệu đơn thuần.
                            </p>
                            <p>
                                Tuy nhiên, bài toán đặt ra là:
                            </p>
                            <ul>
                                <li>
                                    <p>Làm thế nào để thương hiệu có thể tham gia vào một hoạt động cộng đồng nhưng vẫn giữ được bản sắc và vai trò riêng?</p>
                                </li>
                                <li>
                                    <p>Làm sao để kết nối giữa doanh nghiệp với trẻ em và gia đình diễn ra thông qua trải nghiệm thật sự thay vì các hoạt động truyền thông mang tính trình diễn?</p>
                                </li>
                                <li>
                                    <p>Làm thế nào để nhiều đối tác với định hướng khác nhau có thể cùng tham gia trong một không gian nhưng vẫn tạo nên một hệ sinh thái thống nhất và có ý nghĩa?</p>
                                </li>
                            </ul>
                            <p>
                                Từ đó, KHOE được Tòhe phát triển như một nền tảng hợp tác mở, nơi mỗi doanh nghiệp hoặc tổ chức không chỉ là “nhà tài trợ”, mà trở thành một phần của trải nghiệm sáng tạo chung thông qua các workshop, hoạt động tương tác, triển lãm, không gian trải nghiệm hoặc các dự án gây quỹ cộng đồng.
                            </p>
                            <p>
                                Chính mô hình này đã giúp KHOE trở thành một trong những lễ hội sáng tạo cộng đồng có tính kết nối đa đối tác nổi bật, quy tụ hàng trăm thương hiệu, tổ chức giáo dục, doanh nghiệp sáng tạo và đơn vị xã hội cùng đồng hành qua nhiều năm tổ chức.
                            </p>
                            
                            <p className='font-uvn-b-content-16'>
                                2.2. Các hoạt động nổi bật cùng doanh nghiệp/ tổ chức
                            </p>
                            <div className="box-1">
                                <img src="/img/tohe/case-study/st1/v364_636.png" alt="" className='img-1'/>
                                <div className="text-1">
                                    <p className='title-1'>KHOE CREATIVE FESTIVAL 2017</p>
                                    <p className='text-item-1'>
                                        Thời gian thực hiện: Ngày 25 - 26 tháng 11/ 2017
                                        Là mùa đầu tiên của KHOE Creative Festival, sự kiện được tổ chức như hoạt động mở màn cho chiến dịch cộng đồng “Xây trường bằng tranh” do Tòhe khởi xướng. Thông qua Tòhe bank, dự án hướng tới mục tiêu gây quỹ xây dựng điểm trường, thư viện hướng nghiệp và sáng tạo cho các bạn nhỏ tại xã Ngọc Long, huyện Yên Minh, tỉnh Hà Giang, dự án phối hợp cùng nhóm kiến trúc Nabe Arc.
                                        Không chỉ là một sự kiện dành cho trẻ em, KHOE được định vị là nơi kết nối cộng đồng sáng tạo, quy tụ các doanh nghiệp, tổ chức xã hội, nghệ sĩ, nhà thiết kế, đơn vị giáo dục và các làng nghề truyền thống cùng tham gia xây dựng một không gian trải nghiệm mở dành cho công chúng.
                                    </p>
                                </div>
                            </div>
                            
                            <p>Hoạt động nổi bật:</p>
                            <ul>
                                <li>
                                    <p>
                                        Hơn 30 hoạt động trải nghiệm sáng tạo: Các đối tác có thể trực tiếp mang chuyên môn, sản phẩm hoặc hoạt động trải nghiệm của mình đến KHOE với đa dạng lĩnh vực như thiết kế, thời trang, kiến trúc, STEM, âm nhạc…
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Không gian kết nối giữa sáng tạo hiện đại và làng nghề truyền thống: Không gian hợp tác giữa doanh nghiệp và các làng nghề truyền thống, giúp đối tác tham gia đồng kiến tạo nội dung, mở rộng mạng lưới kết nối và gia tăng giá trị thương hiệu thông qua các hoạt động mang tính cộng đồng.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Không gian trưng bày và mua sắm: Các đối tác giới thiệu sản phẩm, dịch vụ và câu chuyện thương hiệu trong một môi trường trải nghiệm trực tiếp, đồng thời được hỗ trợ truyền thông thông qua hệ sinh thái và các kênh của Tòhe.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Theo mô hình gây quỹ của chương trình, 25% doanh thu từ các gian hàng tham gia cùng doanh thu bán vé & 100% tiền bán tranh tại sự kiện được đóng góp cho chiến dịch “Xây trường bằng tranh”.
                            </p>
                            
                            <div className="box-1">
                                <div className="text-1">
                                    <p className='title-1'>KHOE CREATIVE FESTIVAL 2018</p>
                                    <p className='text-item-1'>
                                        Thời gian thực hiện: Ngày 1 - 2 tháng 12/ 2018
                                        Sau mùa KHOE đầu tiên năm 2017, Tòhe tiếp tục phát triển KHOE Creative Festival thành một lễ hội sáng tạo cộng đồng quy mô lớn, nơi các doanh nghiệp, tổ chức giáo dục, nghệ sĩ và thương hiệu sáng tạo cùng tham gia kiến tạo trải nghiệm cho trẻ em và gia đình.
                                    </p>
                                </div>
                                <img src="/img/tohe/case-study/st1/khoe-blue.png" alt="" className='img-1' style={{margin: '0 0 0 10px'}}/>
                            </div>

                            
                            <p style={{margin: '15px 0'}}>Hoạt động nổi bật:</p>
                            <ul>
                                <li>
                                    <p>
                                        Hơn 20 hoạt động trải nghiệm đồng kiến tạo cùng đối tác: Các doanh nghiệp, tổ chức giáo dục và thương hiệu trực tiếp vận hành workshop, trò chơi tương tác và không gian trải nghiệm, tạo cơ hội tiếp cận khách hàng mục tiêu thông qua trải nghiệm thực tế.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Triển lãm hơn 3.000 tác phẩm nghệ thuật của trẻ em & 30 mô hình nhà tranh: biến lễ hội trở thành một không gian nghệ thuật cộng đồng quy mô lớn dành cho gia đình.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Đấu giá tranh gây quỹ cho dự án giáo dục vùng cao: Các tác phẩm từ Tòhe Bank được trưng bày và đấu giá ngay tại lễ hội nhằm gây quỹ cho các dự án giáo dục vùng cao, đồng thời tạo cơ hội để các đối tác đồng hành cùng những hoạt động cộng đồng giàu ý nghĩa xã hội.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Fashion Show cộng đồng: Vi sự góp mặt của hơn 100 em nhỏ, chương trình tạo cơ hội để doanh nghiệp đồng hành thông qua tài trợ, cung cấp sản phẩm hoặc đồng sáng tạo nội dung, góp phần gia tăng kết nối thương hiệu với cộng đồng gia đình trẻ.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Theo mô hình gây quỹ của chương trình, 25% doanh thu từ các gian hàng tham gia cùng doanh thu bán vé & 100% tiền bán tranh tại sự kiện               được đóng góp cho chiến dịch “Xây trường bằng tranh”.
                            </p>

                            
                            <div className="box-1">
                                <img src="/img/tohe/case-study/st1/khoe-yl.png" alt="" className='img-1'/>
                                <div className="text-1">
                                    <p className='title-1'>KHOE CREATIVE FESTIVAL 2019</p>
                                    <p className='text-item-1'>
                                        Thời gian thực hiện: Ngày 16 - 17 tháng 11/ 2019
                                        <br/>Sau hai mùa tổ chức thành công, KHOE Creative Festival 2019 trở lại với chủ đề “KHOE XANH”, hướng đến việc lan tỏa lối sống xanh, tiêu dùng bền vững và ý thức bảo vệ môi trường cho trẻ em và gia đình. Khác với các mùa trước tập trung vào hoạt động gây quỹ xây trường vùng cao, KHOE 2019 đồng thời mang một mục tiêu xã hội mới: gây quỹ thành lập Xưởng đào tạo nghề và hướng nghiệp dành cho trẻ tự kỷ thuộc Tòhe Fun. Toàn bộ lợi nhuận từ lễ hội được sử dụng cho dự án này.
                                    </p>
                                </div>
                            </div>

                            
                            <p style={{margin: '15px 0'}}>Hoạt động nổi bật:</p>
                            <ul>
                                <li>
                                    <p>
                                        Gần 20 hoạt động sáng tạo về lối sống xanh và phát triển bền vững: KHOE 2019 được xây dựng như một tổ hợp vui chơi - triển lãm nghệ thuật - mua sắm xanh. Các doanh nghiệp, tổ chức giáo dục và đơn vị xã hội có cơ hội đồng hành thông qua workshop, hoạt động tương tác và chương trình giáo dục cộng đồng.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Không gian nghệ thuật sắp đặt “KHOE XANH” từ vật liệu tái chế: Hoạt động mở ra cơ hội để các đối tác lan tỏa cam kết về phát triển bền vững thông qua trải nghiệm trực quan và sáng tạo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Khu trải nghiệm tái chế và sáng tạo từ vật liệu đã qua sử dụng: KHOE phối hợp với các tổ chức xã hội và giáo dục triển khai các hoạt động nâng cao nhận thức về môi trường, tiêu biểu là chương trình “Truy tìm không khí sạch” của Live&Learn. Đây là mô hình hợp tác giúp đối tác kết nối với cộng đồng thông qua các trò chơi giáo dục.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Triển lãm nghệ thuật của trẻ em và nghệ sĩ: KHOE tiếp tục duy trì “đặc sản” không thể thiếu của lễ hội là khu triển lãm nghệ thuật, nơi trưng bày các tác phẩm của trẻ tự kỷ và trẻ em có hoàn cảnh đặc biệt Tòhe. Song song với đó là các tác phẩm của nghệ sĩ và cộng đồng sáng tạo cùng đồng hành với chương trình.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Khu mua sắm xanh với các thương hiệu thân thiện môi trường: Các thương hiệu tham gia không chỉ trưng bày mà còn tổ chức hoạt động dùng thử và trải nghiệm sản phẩm, giúp tiếp cận trực tiếp các gia đình trẻ và tăng cường tương tác với khách hàng mục tiêu.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16'>3.1. Tác động cộng đồng</p>

                            <p>
                                ✓ KHOE Creative Festival đã trở thành một trong những không gian sáng tạo cộng đồng tiêu biểu dành cho gia đình và trẻ em tại Hà Nội, nơi nghệ thuật, giáo dục và các hoạt động xã hội được kết nối trong cùng một trải nghiệm mở. Qua nhiều mùa tổ chức, lễ hội thu hút khoảng 15.000 lượt tham dự với hơn 60 hoạt động sáng tạo và hơn 5.000 tác phẩm nghệ thuật được trưng bày, tương tác và lan tỏa tới cộng đồng.
                            </p>
                            <p>
                                ✓ Không chỉ dừng lại ở hoạt động trải nghiệm, KHOE còn vận hành như một mô hình gây quỹ xã hội thông qua sáng tạo. Dự án đã gây quỹ thành công cho 02 dự án cộng đồng với tổng kinh phí khoảng 500 triệu đồng, bao gồm:
                            </p>
                            <ul>
                                <li>
                                    <p>Xây dựng khu nội trú cho học sinh tiểu học tại Ngọc Long, Yên Minh, Hà Giang.</p>
                                </li>
                                <li>
                                    <p>Thành lập xưởng đào tạo nghề và hướng nghiệp dành cho trẻ tự kỷ thuộc Tòhe Fun.</p>
                                </li>
                            </ul>
                            <p>
                                ✓ Các hoạt động tại KHOE góp phần lan tỏa mạnh mẽ thông điệp về giáo dục sáng tạo, lối sống xanh và phát triển bền vững. Riêng KHOE 2019 với chủ đề “XANH” quy tụ gần 20 hoạt động sáng tạo xoay quanh tái chế, nghệ thuật và môi trường dành cho gia đình và trẻ em.
                            </p>
                            <p>
                                ✓ Dự án đồng thời tạo ra một không gian hiếm có nơi trẻ em, nghệ sĩ, doanh nghiệp xã hội, thương hiệu sáng tạo và các tổ chức cộng đồng cùng tham gia xây dựng trải nghiệm chung thay vì chỉ xuất hiện dưới vai trò tài trợ hoặc truyền thông đơn thuần.
                            </p>

                            <p className='font-uvn-b-content-16' style={{margin: '15px 0px 15px 0px'}}>3.2. Giá trị mang lại cho doanh nghiệp</p>
                            <p>
                                ✓ KHOE Creative Festival giúp doanh nghiệp tiếp cận trực tiếp nhóm gia đình trẻ và cộng đồng sáng tạo - tệp khách hàng ngày càng được nhiều thương hiệu quan tâm nhờ mức độ quan tâm cao tới giáo dục, trải nghiệm và giá trị bền vững. Riêng giai đoạn trước sự kiện đã có hơn 40 trường học tham gia các hoạt động kết nối và truyền thông cộng đồng.
                            </p>
                            <p>
                                ✓ Hơn 100 đối tác, thương hiệu và tổ chức đồng hành qua các mùa KHOE đã tạo nên một hệ sinh thái hợp tác đa lĩnh vực, từ giáo dục, thời trang, nghệ thuật, F&B đến phát triển bền vững. Nhiều thương hiệu lớn như CANIFA, BOO, Arena Multimedia, Ecopark, tiNiWorld, Pullman… tham gia không chỉ với vai trò tài trợ mà còn trực tiếp triển khai hoạt động trải nghiệm và tương tác thương hiệu tại sự kiện.
                            </p>
                            <p>
                                ✓ Khác với mô hình hội chợ thương mại thông thường, KHOE cho phép doanh nghiệp tham gia vào một trải nghiệm cộng đồng có chiều sâu cảm xúc và giá trị xã hội rõ ràng. Điều này giúp thương hiệu tăng mức độ gắn kết với phụ huynh và trẻ em thông qua các hoạt động trực tiếp thay vì chỉ quảng bá sản phẩm.
                            </p>
                            <p>
                                ✓ KHOE Creative Festival được nhiều nền tảng truyền thông văn hóa - sáng tạo và báo chí nhắc tới như: VietnamPlus, Vietnam News, Hanoi Grapevine,...và các cộng đồng sáng tạo và giáo dục dành cho phụ huynh trẻ tại Hà Nội. Đồng thời các đối tác cũng được Tòhe hỗ trợ truyền thông qua fanpage chính thức của KHOE Creative Festival và hỗ trợ đặt banner, voucher, thông tin cũng như gian hàng trực tiếp tại sự kiện, Qua đó giúp các doanh nghiệp đồng hành gia tăng độ phủ thương hiệu theo hướng sáng tạo, nhân văn và bền vững.
                            </p>

                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>
                            <ul style={{listStyle: 'decimal'}}>
                                <li>
                                    <p>
                                        Vietnam+ (VietnamPlus (2019). Hàng loạt các hoạt động thú vị tại KHOE Creative Festival 2019. [online] Vietnam+ (VietnamPlus).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        2-Tohe Play_Introduction.pdf (2019). 2-Tohe Play_Introduction.pdf. [online] Google Docs. 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Hanoi Tourist (2018) KHOE Creative Festival 2018. [online]
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Facebook.com. (2026a). KHOE Creative Festival. [online] 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        toquoc.vn (2019). Thỏa sức sống xanh, sống sạch tại Khoe Creative Festival. [online] toquoc.vn. 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Trang thông tin nghệ thuật Hanoi Grapevine
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        vietnamnews.vn. (2026). Families can go ’green’ at weekend festival. [online] 
                                    </p>
                                </li>
                            </ul>





                        </div>
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
export default KhoeComponent;