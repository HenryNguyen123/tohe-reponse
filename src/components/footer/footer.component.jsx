import { useNavigate } from 'react-router-dom';
import './footer.css.scss'
const FooterComponent = () => {
    const navigate = useNavigate()
    const handleToPageHome = () => {
        navigate('/')
    }
    const handleToPageSecurity = () => {
        navigate('/security')
    }
    const handleToPageWarrantyPolicy = () => {
        navigate('/warranty-policy')
    }
    const handleToPageWTohe = () => {
        navigate('tohe')
    }
    const handleToPagePartnershipModel = () => {
        navigate('/partnership-model')
    }
    const handleToPagePartnershipModelPage2 = () => {
        navigate('/partnership-model/page2')
    }
    const handleToPagePartnershipModelPage3 = () => {
        navigate('/partnership-model/page3')
    }
    const handleToPagePartnershipModelPage4 = () => {
        navigate('/partnership-model/page4')
    }
    const handleToPageCaseStudy = () => {
        navigate('/case-study')
    }
    return(
        <>
            <div className="contaier-footer">
                <div className="footer-context">
                    <div className="context-box">
                        <div className="box-item-footer">
                            <div className="footer-logo">
                                <a onClick={handleToPageHome}>
                                    <img src="/img/tohe/trang-chu/v39_39.png"
                                        width="170"
                                        height="100" alt="logo" />
                                </a>
                            </div>
                            <div className='title-ft1'>
                                <p className='footer-box-text'>Công Ty Cổ Phần Tòhe</p>
                                <p className='footer-box-text-desc'>Tòhe là doanh nghiệp xã hội tiên phong trong lĩnh vực sáng tạo vì trẻ em đặc biệt tại Việt Nam, kết nối nghệ thuật, giáo dục và cộng đồng để tạo nên những giá trị nhân văn bền vững.</p>
                            </div>
                            <div className="footer-logo-ft1">
                                    <img src="/img/tohe/trang-chu/v478_1229.png"
                                        width="250"
                                        height="100" alt="kiem duyet" />
                            </div>
                            <div className="foter-logo-branch-ft1">
                                <div className='item_one-foter-logo-branch-ft1'>
                                    <p className='footer-box-text'>Kết nối</p>
                                    <div className="icon-ft1">
                                        <img src="/img/tohe/trang-chu/v478_1232.png" alt="facebook" className='item_icon-ft1' />
                                        <img src="/img/tohe/trang-chu/v478_1250.png" alt="instagram" className='item_icon-instagram-ft1' />
                                        <img src="/img/tohe/trang-chu/v478_1253.png" alt="facebook" className='item_icon-ft1' />
                                    </div>
                                </div>
                                <div className="item_two-foter-logo-branch-ft1">
                                    <p>Hotline: 083 779 0465</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-item-footer">
                            <div className="box_item-flex">
                                <div className="item_item-box-footer">
                                    <ul>
                                        <li><p className='footer-box-text'>Giới thiệu</p></li>
                                        <li><p><a onClick={handleToPageWTohe}>Về Tòhe</a></p></li>
                                        <li><p><a onClick={handleToPagePartnershipModel}>Hình thức đồng hành</a></p></li>
                                        <li><p><a onClick={handleToPageCaseStudy}>Case study</a></p></li>
                                    </ul>
                                </div>
                                <div className="item_item-box-footer">
                                    <ul>
                                        <li><p className='footer-box-text'>Hình thức đồng hành</p></li>
                                        <li><p><a onClick={handleToPagePartnershipModelPage2}>Đồng hành phát triển quà tặng doanh nghiệp</a></p></li>
                                        <li><p><a onClick={handleToPagePartnershipModelPage3}>Đồng hành giáo dục và sân chơi sáng tạo </a></p></li>
                                        <li><p><a onClick={handleToPagePartnershipModelPage4}>Đồng hành phát triển dự án xã hội</a></p></li>
                                    </ul>
                                </div>
                                <div className="item_item-box-footer">
                                    <ul>
                                        <li><p className='footer-box-text'>Chính sách</p></li>
                                        <li><p><a onClick={handleToPageSecurity}>Chính sách bảo mật</a></p></li>
                                        <li><p><a onClick={handleToPageWarrantyPolicy}>Chính sách bảo hành</a></p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponent;