import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const PartnerShipModelLayout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pages = [
        "/partnership-model",
        "/partnership-model/page2",
        "/partnership-model/page3",
        "/partnership-model/page4"
    ];

    const currentPage = pages.indexOf(location.pathname);

    const handlePrev = () => {
        if (currentPage > 0) {
            navigate(pages[currentPage - 1]);
        }
    };

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            navigate(pages[currentPage + 1]);
        }
    };

    return (
        <>
            <main>
                <Outlet />
            </main>

            <div className="partnership-model-pagination">
                <Pagination>
                    <Pagination.Prev
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                    />

                    {pages.map((path, index) => (
                        <Pagination.Item
                            key={path}
                            as={Link}
                            to={path}
                            active={location.pathname === path}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}

                    <Pagination.Next
                        onClick={handleNext}
                        disabled={currentPage === pages.length - 1}
                    />
                </Pagination>
            </div>
        </>
    );
};

export default PartnerShipModelLayout;