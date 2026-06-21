import { useEffect } from 'react';
import './starbuck.scss'
import { useNavigate } from 'react-router-dom';
import BoxIImageNd2Mini from '../../camoms/box/box-image-nd2-mini.box';

const StarBuckComponent = () => {
    const navigate = useNavigate();

    const background = '/img/tohe/case-study/starbuck/v370_575.png';
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
        document.title = 'Starbucks';
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
                                    <h1>TÒHE X 
                                        <span className='text-pink'>TÒHE</span> X <span className='text-green'>STARBUCKS VIỆT NAM</span>: 6 NĂM KIẾN TẠO QUÀ TẶNG<br/> DOANH NGHIỆP MANG GIÁ TRỊ XÃ HỘI
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
                                Trong hơn 6 năm đồng hành kể từ năm 2019, Tòhe và Starbucks Việt Nam đã cùng phát triển nhiều bộ sưu tập quà tặng doanh nghiệp đa dạng, được thiết kế riêng cho từng mùa và các dịp đặc biệt. Starbucks Việt Nam là thương hiệu cà phê toàn cầu, hiện diện tại Việt Nam với định hướng không chỉ mang đến trải nghiệm đồ uống chất lượng mà còn xây dựng không gian kết nối cộng đồng, đề cao tính bền vững và trách nhiệm xã hội trong mọi hoạt động thương hiệu.
                            </p>
                            <p>
                                Thông qua việc đưa các tác phẩm nghệ thuật của những nghệ sĩ nhí Tòhe vào sản phẩm, mỗi bộ quà tặng không chỉ mang dấu ấn thương hiệu riêng của Starbucks mà còn lan tỏa những giá trị tích cực tới cộng đồng. Với Tòhe, Starbucks Việt Nam không chỉ là một đối tác kinh doanh có trách nhiệm và ảnh hưởng tích cực, mà còn là một người bạn tin cậy, chia sẻ chung các giá trị nhân văn.
                            </p>

                            <img src="/img/tohe/case-study/starbuck/starbuck.png" alt="" className='img-canifa-one'/>

                            <p className='font-uvn-b-content-20' style={{margin: '15px 0'}}>
                                II. Mong muốn của Stubucks và Giải pháp từ Tòhe
                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.1 Mong muốn của Starbucks
                            </p>

                            <p>
                                Trong bối cảnh thị trường F&B Việt Nam ngày càng cạnh tranh mạnh về trải nghiệm thương hiệu, các chuỗi cà phê không còn chỉ cạnh tranh bằng đồ uống mà còn bằng khả năng tạo ra trải nghiệm và kết nối cảm xúc với khách hàng. Theo báo cáo thị trường F&B Việt Nam 2024 của iPOS và Nestlé Professional, doanh thu toàn ngành đạt gần 689 nghìn tỷ đồng, tăng 16,6%, nhưng mức độ cạnh tranh ngày càng khốc liệt khi chỉ khoảng 14,7% doanh nghiệp ghi nhận tăng trưởng doanh thu thực sự. Đồng thời, hơn 52% doanh nghiệp trong ngành đang chuyển hướng từ các xu hướng ngắn hạn sang đầu tư dài hạn vào giá trị thương hiệu và phát triển bền vững.
                            </p>
                            <p>
                                Với Starbucks Việt Nam, điều này tạo ra áp lực lớn trong việc duy trì sức hút thương hiệu tại một thị trường có văn hóa cà phê bản địa rất mạnh như Việt Nam. Sau hơn 10 năm hoạt động với hơn 90 cửa hàng và hơn 1.200 nhân sự tại Việt Nam (năm 2023), Starbucks không chỉ cần bán sản phẩm mà còn cần liên tục làm mới trải nghiệm thương hiệu để duy trì sự kết nối với tệp khách hàng trẻ, yêu thích tính cá nhân hóa và các giá trị cộng đồng phía sau thương hiệu.
                            </p>
                            <p>
                                Trong bối cảnh đó, Starbucks Việt Nam mong muốn xây dựng các dòng quà tặng và merchandise không đơn thuần là vật phẩm nhận diện thương hiệu mà trở thành một phần trong trải nghiệm cảm xúc của khách hàng với Starbucks.
                            </p>

                            <img src="/img/tohe/case-study/starbuck/v370_608.png" alt="" className='img-canifa-one'/>                                     

                            <p style={{margin: '15px 0'}}>
                                Tuy nhiên, bài toán đặt ra là:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Làm thế nào để mỗi mùa quà tặng vẫn giữ được tinh thần nhận diện toàn cầu của Starbucks nhưng không bị lặp lại hay “công nghiệp hóa” giữa một thị trường ngày càng đòi hỏi tính mới mẻ và cá nhân hóa.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Làm sao để các sản phẩm merchandise mang đủ chất nghệ thuật, tính sưu tầm và câu chuyện cảm xúc để khách hàng thật sự muốn sở hữu thay vì chỉ là quà tặng thương hiệu thông thường.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Làm thế nào để đưa các giá trị cộng đồng và phát triển bền vững vào chính sản phẩm thương mại một cách tự nhiên, lâu dài và đủ thực chất, thay vì chỉ dừng ở hoạt động truyền thông CSR ngắn hạn.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Với đặc thù phải liên tục ra mắt concept mới qua từng năm, Starbucks cần một đối tác có khả năng sáng tạo dài hạn, vừa hiểu tinh thần thương hiệu Starbucks, vừa đủ năng lực chuyển hóa ý tưởng thành sản phẩm có thể sản xuất thực tế với số lượng lớn.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                Đồng thời, doanh nghiệp cũng cần một mô hình hợp tác có thể giúp thương hiệu “địa phương hóa” trải nghiệm tại Việt Nam, tạo cảm giác gần gũi hơn với khách hàng Việt nhưng vẫn giữ được tinh thần Starbucks toàn cầu.
                            </p>
                            <p>
                                Chính những yêu cầu đó đã tạo nên điểm giao thoa giữa Starbucks Việt Nam và Tòhe - nơi nghệ thuật của trẻ em đặc biệt không chỉ trở thành chất liệu thiết kế độc bản cho sản phẩm mà còn giúp Starbucks kể những câu chuyện thương hiệu giàu cảm xúc, có chiều sâu cộng đồng và đủ khác biệt để duy trì kết nối với khách hàng qua nhiều năm liên tiếp.

                            </p>
                            <p className='font-uvn-b-content-16'>
                                2.2 Giải pháp từ Tòhe 
                            </p>
                            <p>
                                Tòhe đã triển khai mô hình đồng hành sáng tạo theo hướng “Art - Story - Impact”, thể hiện qua nhiều dự án tiêu biểu:
                            </p>
                            <p style={{ margin: '15px 0'}}>
                                1.  Túi Dây Rút và Ví Vải | Hành trình cùng “xây” những nụ cười (2019)
                            </p>
                            <p>
                                Mùa hè năm 2019 đánh dấu sự hợp tác thành công giữa Tòhe và Starbucks Việt Nam thông qua dự án xây dựng “Xưởng sản xuất nụ cười” tại bản Nà Chào, xã Bao La, Mai Châu, tỉnh Hòa Bình. Nà Chào, với mẫu túi dây rút và ví vải được thiết kế độc quyền. Nội dung của tác phẩm là câu chuyện về hành trình thám hiểm vượt đại dương và chiến đấu với những sinh vật biển hung tợn của một cậu bé.
                            </p>



                            <div className="starbuck-box-img-right">
                                <div className="starbuck-box-item-content">
                                    <div className="starbuck-box-item-text" style={{margin: '20px 0'}}>
                                        <p>THIẾT KẾ ĐỘC QUYỀN</p>
                                        <p>Thiết kế dựa trên tác phẩm của nghệ sĩ nhí Hà Đình Chí (Nem) - bạn nhỏ tự kỷ và mắc hội chứng Noonan</p>
                                    </div>
                                    <div className="starbuck-box-item-text" style={{margin: '20px 0'}}>
                                        <p>ĐÓNG GÓP CỘNG ĐỒNG</p>
                                        <p>Mỗi chiếc ví bán ra tại Starbucks sẽ đóng góp 5.000 đồng vào quỹ “Xưởng sản xuất nụ cười”.</p>
                                    </div>
                                </div>
                                <img src="/img/tohe/case-study/starbuck/v404_578.png" alt="" className='starbuck-box-img-right'/>
                            </div>

                            <div className="starbuck-box-img-left">
                                <img src="/img/tohe/case-study/starbuck/v404_585.png" alt="" className='starbuck-box-img-left'/>
                                <div className="starbuck-box-item-content">
                                    <div className="starbuck-box-item-text" style={{margin: '20px 0'}}>
                                        <p>CAM KẾT TỪ STARBUCKS</p>
                                        <p>Starbucks Việt Nam cam kết tài trợ toàn bộ chi phí xây dựng xưởng chơi này tại tỉnh Hoà Bình.</p>
                                    </div>
                                    <div className="starbuck-box-item-text" style={{margin: '20px 0'}}>
                                        <p>TÁC ĐỘNG BỀN VỮNG</p>
                                        <p>Dự án mở ra cơ hội để các nghệ sĩ nhí của Tòhe tham gia vào việc sáng tạo, được ghi nhận giá trị bản thân và đóng góp tích cực hơn cho xã hội. </p>
                                    </div>
                                </div>
                            </div>                   



                            <p style={{ margin: '15px 0'}}>
                                Bà Patricia Marques, Tổng giám đốc của Starbucks Việt Nam chia sẻ: “Là một vinh hạnh của chúng tôi khi có tác phẩm tuyệt vời của Nem trong lần hợp tác thiết kế này. Bằng một cách gián tiếp, với những sáng tạo của mình, Nem đã giúp đỡ các trẻ em có hoàn cảnh khó khăn khác, và chúng tôi may mắn có cơ hội trở thành cầu nối đặc biệt này”
                            </p>
                            <p style={{ margin: '15px 0'}}>
                                2. Phát triển chuỗi bộ lịch nghệ thuật theo từng năm (2020 - 2025)
                            </p>
                            <p style={{ margin: '15px 0'}}>
                                Thay vì chỉ thiết kế quà tặng mang tính hình ảnh thương hiệu đơn thuần, Tòhe đồng hành cùng Starbucks Việt Nam xây dựng chuỗi bộ lịch nghệ thuật thường niên như một hình thức kể chuyện thương hiệu xuyên suốt qua từng năm.
                            </p>
                            <p>
                                Dựa trên các biểu tượng quen thuộc của Starbucks như nàng tiên cá Siren, văn hóa cà phê, không gian cửa hàng hay hành trình khám phá Việt Nam, Tòhe phát triển các concept sáng tạo mới mỗi năm thông qua góc nhìn hồn nhiên và giàu tưởng tượng của những nghệ sĩ nhí đặc biệt.
                            </p>
                            <p>
                                Mỗi bộ lịch không chỉ đóng vai trò quà tặng doanh nghiệp mà còn trở thành một trải nghiệm thương hiệu riêng biệt, giúp Starbucks duy trì sự mới mẻ trong các chiến dịch seasonal merchandise, đồng thời tạo kết nối cảm xúc gần gũi hơn với khách hàng thông qua nghệ thuật và câu chuyện cộng đồng.
                            </p>

                            <div className="starbuck-aguler">
                                <div className="starbuck-aguler-content">
                                    <p className='font-uvn-b text-pink'>2020 - 2022 JOURNEY</p>
                                    <div className="starbuck-aguler-content-top">
                                        <div className="starbuck-aguler-item">
                                            <img src="/img/tohe/case-study/starbuck/v418_581.png" alt="" className='starbuck-aguler-img'/>
                                        </div>
                                        <div className="starbuck-aguler-item">
                                            <img src="/img/tohe/case-study/starbuck/v418_604.png" alt="" className='starbuck-aguler-img'/>
                                        </div>
                                    </div>
                                    <div className="starbuck-aguler-content-bottom">
                                        <div className="starbuck-aguler-item">
                                            <p className='font-uvn-b text-pink'>2023</p>
                                            <p className='font-uvn-b text-pink' style={{ margin: '10px 0'}}>“MEET ME IN 2023”</p>
                                            <img src="/img/tohe/case-study/starbuck/v418_605.png" alt="" className='starbuck-aguler-img'/>
                                        </div>
                                        <div className="starbuck-aguler-item">
                                            <p className='font-uvn-b text-pink'>2023</p>
                                            <p className='font-uvn-b text-pink' style={{ margin: '10px 0'}}>“CÁ CHÉP VƯỢT VŨ MÔN”</p>
                                            <img src="/img/tohe/case-study/starbuck/v418_635.png" alt="" className='starbuck-aguler-img'/>
                                        </div>
                                        <div className="starbuck-aguler-item">
                                            <p className='font-uvn-b text-pink'>2023</p>
                                            <p className='font-uvn-b text-pink' style={{ margin: '10px 0'}}>DOANH NGHIỆP NĂM THỨ 6</p>
                                            <img src="/img/tohe/case-study/starbuck/v418_636.png" alt="" className='starbuck-aguler-img'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='font-uvn-b-content-20' style={{margin: '15px 0'}}>
                                III. Kết quả dự án
                            </p>
                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.1. Tác động cộng đồng
                            </p>
                            <p>
                                ✓ Các tác phẩm của nghệ sĩ nhí Tòhe được đưa trực tiếp lên sản phẩm thương mại chính thức của Starbucks Việt Nam như ví vải, túi dây rút và bộ lịch nghệ thuật hằng năm. Điều này giúp trẻ em đặc biệt không còn chỉ xuất hiện trong vai trò “đối tượng được hỗ trợ”, mà thật sự trở thành người tạo ra giá trị sáng tạo cho sản phẩm và có nguồn thu nhập bản quyền.
                            </p>
                            <p>
                                ✓ Dự án hợp tác năm 2019 đã gây quỹ xây dựng “Xưởng sản xuất nụ cười” dành cho trẻ em dân tộc Thái tại Mai Châu, Hòa Bình. Mỗi sản phẩm ví vải bán ra đóng góp 5.000 đồng cho quỹ cộng đồng, đồng thời Starbucks Việt Nam tài trợ chi phí xây dựng xưởng chơi.
                            </p>
                            <p>
                                ✓ Chuỗi lịch nghệ thuật giai đoạn 2020-2025 tiếp tục mở rộng cơ hội để nghệ sĩ nhí tham gia vào quá trình sáng tạo thực tế: từ phát triển ý tưởng, kể chuyện bằng hình ảnh đến ứng dụng tác phẩm trên sản phẩm thương mại quy mô lớn.
                            </p>

                            <p className='font-uvn-b-content-16' style={{ margin: '15px 0' }}>
                                3.2. Giá trị mang lại cho doanh nghiệp
                            </p>
                            <p>
                                ✓ 6 năm đồng hành liên tục: mô hình hợp tác không chỉ dừng ở một chiến dịch CSR ngắn hạn mà đã trở thành một phần trong định hướng xây dựng thương hiệu lâu dài của Starbucks tại Việt Nam.
                            </p>
                            <p>
                                ✓ Sản phẩm quà tặng có dấu ấn riêng: Việc đồng hành cùng Tòhe giúp Starbucks liên tục làm mới các bộ sưu tập theo từng năm nhưng vẫn giữ được tinh thần thương hiệu quen thuộc.
                            </p>
                            <p>
                                ✓ Đưa chính biểu tượng thương hiệu vào góc nhìn sáng tạo của các nghệ sĩ nhí Tòhe: Bộ sưu tầm lịch giúp Starbucks kể câu chuyện thương hiệu theo cách gần gũi và giàu cảm xúc hơn thay vì chỉ dùng hình ảnh quảng bá sản phẩm
                            </p>
                            <p>
                                ✓Mô hình “mua hàng tạo tác động xã hội”: Khách hàng không chỉ mua một món quà tặng mà còn cảm nhận được mình đang trực tiếp đóng góp cho các hoạt động cộng đồng dành cho trẻ em đặc biệt.
                            </p>
                            <p>
                                ✓ Nhiều nền tảng truyền thông quảng báo: Cafebiz, VTC News, cùng nhiều cộng đồng thiết kế và lifestyle trên mạng xã hội. Điều này giúp Starbucks gia tăng độ phủ thương hiệu theo hướng tích cực, sáng tạo và nhân văn hơn trong mắt khách hàng trẻ.
                            </p>
                            <p className='font-uvn-b-content-20'>
                                NGUỒN THAM KHẢO
                            </p>
                         
                            <ul style={{listStyle: 'decimal'}}>
                                <li>
                                    <a style={{color: '#000'}} href='https://dantri.com.vn/kinh-doanh/canifa-ket-hop-tohe-ra-mat-du-an-cong-dong-yeu-thuong-co-tat-20250124095414061.htm'>
                                    <p>
                                        Trường Thịnh (2025). Canifa kết hợp Tòhe ra mắt dự án cộng đồng ‘“Yêu thương có tất”’. [online] Báo điện tử Dân trí.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} href='https://afamily.vn/chuyen-chua-ke-ve-su-ra-doi-cua-mot-bo-san-pham-dac-biet-nghe-ten-da-thay-yeu-thuong-20250820163922723.chn'>
                                    <p>
                                        Thùy Anh (2025). Ra mắt bộ sản phẩm Yêu thương có tất kết hợp Canifa và Tòhe vì cộng đồng. [online] afamily.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} href='https://markettimes.vn/chuyen-chua-ke-ve-su-ra-doi-cua-mot-bo-san-pham-dac-biet-nghe-ten-da-thay-yeu-thuong-88957.html'>
                                    <p>
                                        Thùy Anh (2025a). Chuyện chưa kể về sự ra đời của một bộ sản phẩm đặc biệt, nghe tên đã thấy ‘yêu thương’. [online] Báo Markettimes.
                                    </p>
                                    </a>
                                </li>
                                <li>
                                    <a style={{color: '#000'}} href='https://www.facebook.com/'>
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
export default StarBuckComponent;