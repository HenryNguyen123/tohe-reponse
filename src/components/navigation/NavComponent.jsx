import { Link, NavLink } from "react-router-dom";
import "./nav.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavComponent = () => {
    return (
        <div className="topnav">
            <div className="top-line-pink">
                <div className="line-pink">
                    <span>
                        LƯU Ý: Đây là sản phẩm giả lập của sinh viên Khoa TT&VHĐN,
                        Học viện Ngoại giao, phục vụ cho môn học truyền thông đa
                        phương tiện. Sản phẩm không phục vụ cho mục đích thương mại
                        và không đại diện cho Tòhe.
                    </span>
                </div>
            </div>

            <Navbar
                expand="lg"
                className="bg-body-tertiary nav-bottom-bg"
            >
                <Container className="container-nav-head">
                    
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="/img/tohe/trang-chu/v39_39.png"
                            width="94"
                            height="64"
                            className="d-inline-block align-top image-header"
                            alt="Tòhe Logo"
                        />
                    </Navbar.Brand>

                    {/* Button menu mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        {/* Đẩy menu sang bên phải */}
                        <Nav className="me-auto"></Nav>

                        {/* Menu */}
                        <Nav>
                            <Nav.Link
                                as={NavLink}
                                className="nav-link"
                                to="/tohe"
                            >
                                <span>Về Tòhe</span>
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                className="nav-link"
                                to="/partnership-model"
                            >
                                <span>Hình thức đồng hành</span>
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                className="nav-link"
                                to="/case-study"
                            >
                                <span>Case study</span>
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                className="nav-link"
                                to="/contact"
                            >
                                <span>Liên hệ</span>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavComponent;