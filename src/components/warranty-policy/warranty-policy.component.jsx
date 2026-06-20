import { useEffect } from 'react';
import './warranty-policy.scss'

const WarrantyPolicyComponent = () => {
    useEffect(() => {
        document.title = 'Warranty Policy';
    }, [])
    return(
        <>
            <div className="security-container">
               <div className="security-content">
                    <p className='font-uvn-b text-title'>
                        CHÍNH SÁCH BẢO HÀNH & HỖ TRỢ
                    </p>

                    <p>
                        Tòhe cam kết đảm bảo chất lượng sản phẩm và trải nghiệm hợp tác dành cho doanh nghiệp, tổ chức và đối tác đồng hành. Chính sách bảo hành và hỗ trợ được áp dụng nhằm đảm bảo quyền lợi của các bên trong quá trình triển khai sản phẩm, sự kiện và dự án hợp tác cùng Tòhe.                    
                    </p>
                    <p className='font-uvn-b'>
                        1. Phạm vi áp dụng
                    </p>



                    <p>
                        Chính sách áp dụng đối với:
                    </p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Các sản phẩm quà tặng doanh nghiệp do Tòhe trực tiếp thiết kế và sản xuất</p>
                        </li>
                        <li>
                            <p>Các hoạt động workshop, sự kiện, triển lãm và dự án cộng đồng do Tòhe triển khai</p>
                        </li>
                        <li>
                            <p>Các hạng mục hợp tác được thống nhất giữa Tòhe và đối tác trong hợp đồng hoặc thỏa thuận làm việc</p>
                        </li>
                    </ul>




                    <p className='font-uvn-b'>
                        2.  Chính sách bảo hành sản phẩm
                    </p>
                    <p>
                        Tòhe hỗ trợ bảo hành đối với các sản phẩm gặp lỗi kỹ thuật từ phía sản xuất như:
                    </p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Hỏng khóa kéo, bong tróc, rách chỉ</p>
                        </li>
                        <li>
                            <p>In sai thiết kế đã duyệt</p>
                        </li>
                        <li>
                            <p>Sản phẩm giao sai mẫu hoặc sai số lượng</p>
                        </li>
                        <li>
                            <p>Các lỗi phát sinh trong quá trình sản xuất và đóng gói</p>
                        </li>
                    </ul>
                    <p>
                        Thời gian hỗ trợ bảo hành hoặc phản hồi lỗi sản phẩm là trong vòng 05 ngày kể từ ngày đối tác nhận hàng.
                    </p>
                    <p>
                        Đối với các sản phẩm đặt riêng theo bộ nhận diện thương hiệu hoặc thiết kế độc quyền, Tòhe sẽ phối hợp trực tiếp với doanh nghiệp để xử lý và đưa ra phương án phù hợp trong thời gian sớm nhất.
                    </p>





                    <p className='font-uvn-b'>
                        3.  Các trường hợp không áp dụng bảo hành
                    </p>
                    <p>Tòhe không áp dụng bảo hành đối với:</p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Sản phẩm hư hỏng do tác động từ bên ngoài hoặc sử dụng không đúng cách</p>
                        </li>
                        <li>
                            <p>Sản phẩm bị thay đổi, chỉnh sửa sau khi bàn giao</p>
                        </li>
                        <li>
                            <p>Các lỗi phát sinh do bảo quản không phù hợp</p>
                        </li>
                        <li>
                            <p>Sản phẩm đã qua sử dụng, biến dạng hoặc không còn nguyên trạng ban đầu</p>
                        </li>
                    </ul>

                    <p className='font-uvn-b'>
                        4.  Hỗ trợ đối với hoạt động hợp tác và dự án
                    </p>
                    <ul style={{listStyle: "disc"}}>
                        <li>
                            <p>Triển khai đúng nội dung và tiến độ đã thống nhất</p>
                        </li>
                        <li>
                            <p>Chủ động phối hợp xử lý các vấn đề phát sinh trong quá trình thực hiện</p>
                        </li>
                        <li>
                            <p>Cập nhật thông tin và hỗ trợ doanh nghiệp trong suốt quá trình hợp tác</p>
                        </li>
                        <li>
                            <p>Cung cấp hình ảnh, tư liệu và báo cáo tổng kết sau chương trình nếu có thỏa thuận trước đó</p>
                        </li>
                    </ul>
                    <p className='font-uvn-b'>
                        5.  Quy trình tiếp nhận hỗ trợ
                    </p>
                    <p>
                        Bước 1: Doanh nghiệp/đối tác liên hệ với Tòhe qua hotline hoặc email và cung cấp thông tin liên quan đến sản phẩm hoặc dự án cần hỗ trợ.
                    </p>
                    <p>
                        Bước 2: Tòhe tiếp nhận, kiểm tra thông tin và phản hồi phương án xử lý phù hợp.

                    </p>
                    <p style={{margin: '0 0 70px 0'}}>
                        Bước 3: Hai bên phối hợp xử lý, bảo hành hoặc điều chỉnh các hạng mục liên quan nếu cần thiết.
                    </p>
               </div>
            </div>
        </>
    )
}
export default WarrantyPolicyComponent