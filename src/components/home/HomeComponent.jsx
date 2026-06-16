import './home.scss'

const HomeComponent = () => {
    
    return (
        <>
            <div className='home-container'>
                <div className="home-context_box-hm1">
                    <div className="home-context_box_item-hm1">
                        <div className="home_item-box-img-one-hm1">
                            <img src="/img/tohe/trang-chu/v39_43.png" alt="" className='home-img-one-hm1'/>
                        </div>
                        <div className="home_item-box-img-two-hm1">
                            <img src="/img/tohe/trang-chu/v41_3.png" alt="" className='home-img-two-hm1'/>
                        </div>
                        <div className="home_item-box-text-hm1">
                            <p><span className='text-blue-weight'>20 năm</span> đồng hành cùng hơn <span className='text-blue-weight'>400 đối tác</span> <br/>
                            trong các dự án xã hội bền vững cho trẻ em đặc biệt.</p>
                        </div>
                    </div>
                    <div className="home-context_box-background-hm1">
                        <img src="/img/tohe/trang-chu/v39_36.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent