import { useEffect } from 'react';
import './security.scss'

const SecurityComponent = () => {
    useEffect(() => {
        document.title = 'Privacy Policy';
    }, [])
    return(
        <>
            <div className="security-container">
               <div className="security-content">
                    <p className='font-uvn-b text-title'>
                        CHÍNH SÁCH BẢO MẬT
                    </p>

                    <p>
                        Tòhe hiểu rằng doanh nghiệp, tổ chức và đối tác luôn quan tâm đến việc các thông tin đã cung cấp sẽ được lưu trữ, bảo mật và sử dụng như thế nào. Tòhe trân trọng sự tin tưởng đó và cam kết nỗ lực tối đa trong việc bảo vệ thông tin của người dùng khi truy cập và sử dụng chuyên trang “Tòhe x Đối tác”.
                    </p>
                    <p>
                        Các thông tin được cung cấp cho Tòhe sẽ chỉ được sử dụng một cách hợp lý, minh bạch và phù hợp nhằm hỗ trợ hoạt động kết nối hợp tác, nâng cao chất lượng dịch vụ và cải thiện trải nghiệm người dùng trên website.
                    </p>
                    <p className='font-uvn-b'>
                        1. Thu thập thông tin
                    </p>

                    <p>
                        Khi sử dụng các tính năng liên hệ và gửi yêu cầu hợp tác trên website, người dùng có thể được yêu cầu cung cấp một số thông tin như:
                    </p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Họ và tên</p>
                        </li>
                        <li>
                            <p>Email</p>
                        </li>
                        <li>
                            <p>Số điện thoại</p>
                        </li>
                        <li>
                            <p>Tên doanh nghiệp/tổ chức</p>
                        </li>
                        <li>
                            <p>Hình thức đồng hành quan tâm</p>
                        </li>
                        <li>
                            <p>Nội dung nhu cầu hợp tác</p>
                        </li>
                    </ul>
                    <p>
                        Những thông tin này giúp Tòhe thuận tiện hơn trong việc tiếp nhận nhu cầu, liên hệ tư vấn và triển khai hoạt động hợp tác phù hợp với từng doanh nghiệp hoặc tổ chức.
                    </p>
                    <p>Ngoài ra, Tòhe cũng có thể lưu trữ các thông tin mà người dùng gửi trực tiếp qua website nhằm:</p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Phản hồi yêu cầu liên hệ</p>
                        </li>
                        <li>
                            <p>Hỗ trợ tư vấn các mô hình hợp tác phù hợp</p>
                        </li>
                        <li>
                            <p>Cải thiện chất lượng nội dung và trải nghiệm sử dụng website</p>
                        </li>
                        <li>
                            <p>Duy trì liên lạc khi cần thiết trong quá trình làm việc</p>
                        </li>
                    </ul>
                    <p>
                        Một số dữ liệu truy cập cơ bản như thời gian truy cập, thiết bị sử dụng hoặc hành vi tương tác trên website cũng có thể được ghi nhận nhằm hỗ trợ tối ưu hiệu quả vận hành website.
                    </p>

                    <p className='font-uvn-b'>
                        2.  Sử dụng thông tin
                    </p>
                    <p>
                        Mục đích của việc thu thập thông tin nhằm giúp Tòhe xây dựng một nền tảng kết nối đối tác chuyên nghiệp, minh bạch và thuận tiện hơn cho doanh nghiệp. Vì vậy, thông tin được sử dụng cho các hoạt động:
                    </p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Liên hệ và phản hồi nhu cầu hợp tác</p>
                        </li>
                        <li>
                            <p>Tư vấn các hình thức đồng hành phù hợp</p>
                        </li>
                        <li>
                            <p>Hỗ trợ triển khai dự án và phối hợp làm việc giữa các bên</p>
                        </li>
                        <li>
                            <p>Cung cấp thông tin về các dự án, chương trình hoặc hoạt động mới của Tòhe</p>
                        </li>
                        <li>
                            <p>Nâng cao chất lượng nội dung và trải nghiệm người dùng trên website</p>
                        </li>
                        <li>
                            <p>Giải quyết các vấn đề hoặc tranh chấp phát sinh liên quan đến việc sử dụng website</p>
                        </li>
                        <li>
                            <p>Ngăn chặn các hành vi sử dụng website trái với quy định pháp luật Việt Nam</p>
                        </li>
                    </ul>

                    <p className='font-uvn-b'>
                        3.  Chia sẻ thông tin
                    </p>
                    <p>
                        Tòhe hiểu rằng thông tin của doanh nghiệp và đối tác là một phần quan trọng trong quá trình hợp tác và sẽ không bán, trao đổi hoặc chia sẻ cho bên thứ ba vì mục đích thương mại.
                    </p>
                    <p>Thông tin chỉ được chia sẻ trong các trường hợp:</p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Khi có sự đồng ý từ phía doanh nghiệp hoặc tổ chức cung cấp thông tin</p>
                        </li>
                        <li>
                            <p>Khi cần thiết để phục vụ trực tiếp cho quá trình triển khai hợp tác giữa các bên</p>
                        </li>
                        <li>
                            <p>Theo yêu cầu của cơ quan pháp luật hoặc cơ quan nhà nước có thẩm quyền</p>
                        </li>
                        <li>
                            <p>Khi việc cung cấp thông tin là cần thiết nhằm bảo vệ quyền lợi, tài sản và sự an toàn của Tòhe, đối tác hoặc cộng đồng người dùng</p>
                        </li>
                    </ul>
                    <p>
                        Trong các trường hợp khác, Tòhe sẽ có thông báo cụ thể trước khi chia sẻ thông tin cho bên thứ ba.
                    </p>

                    <p className='font-uvn-b'>
                        4.  Bảo mật thông tin
                    </p>
                    <p>
                        Tòhe áp dụng các biện pháp phù hợp nhằm bảo vệ thông tin người dùng khỏi việc truy cập, sử dụng hoặc tiết lộ trái phép.
                    </p>
                    <p>
                        Chúng tôi cam kết không cố ý tiết lộ, bán hoặc chia sẻ thông tin người dùng trái với các cam kết được nêu trong Chính sách bảo mật này.
                    </p>
                    <p style={{margin: '0 0 70px 0'}}>
                        Tòhe cũng khuyến khích người dùng chủ động bảo vệ thông tin cá nhân và thông tin doanh nghiệp trong quá trình sử dụng website.
                    </p>
               </div>
            </div>
        </>
    )
}
export default SecurityComponent