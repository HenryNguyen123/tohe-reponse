import './contact.scss'
import Form from 'react-bootstrap/Form';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const ContactComponent = () => {
    return(
        <>
            <div className="contact-container">
                <div className="contact-context">
                    <div className="contact-title">
                        <h1 className='text-blue'>
                            LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
                        </h1>
                    </div>
                    <div className="contact-content">
                        <div className="contact-form">
                            <Form className='contact-form'>
                                <Form.Group className="mb-3 contact-form-input" controlId="formBasicEmail">
                                    <Form.Control className='contact-form-input-item' type="email" placeholder="Họ và tên" />
                                </Form.Group>
                                <Form.Group className="mb-3  contact-form-inpu" controlId="formBasicEmails">
                                    <Form.Control className='contact-form-input-item' type="email" placeholder="Đơn vị/ Doanh nghiệp" />
                                </Form.Group>
                                <Form.Group className="mb-3  contact-form-inpu" controlId="formBasicEmailsd">
                                    <Form.Control className='contact-form-input-item' type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3  contact-form-inpu" controlId="formBasicEmailấ">
                                    <Form.Control className='contact-form-input-item' type="email" placeholder="Số điện thoại" />
                                </Form.Group>
                                <div className="contact-form-button">
                                    <button className='button-item'>Gửi yêu cầu liên hệ</button>
                                </div>
                            </Form>
                        </div>
                        <div className="contact-contact">
                            <div className="contact-contact-box">
                                <div className="contact-contact-title">
                                    <h1>
                                        LIÊN HỆ VỚI <span className='text-pink'>TÒHE</span>
                                    </h1>
                                </div>
                                <div className="contact-contact-box-icon">
                                    <span className='icon-item'><FaInstagramSquare  className='icon-item_item-ig'/></span>
                                    <span className='text-item'>Tohe.style</span>
                                </div>
                                <div className="contact-contact-box-icon">
                                    <span className='icon-item'><FaFacebook className='icon-item_item-fb'/></span>
                                    <span className='text-item'>Tohe.style</span>
                                </div>
                                <div className="contact-contact-box-icon">
                                    <span className='icon-item'><FaPhone className='icon-item_item-phone'/></span>
                                    <span className='text-item'>083 779 0465</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactComponent