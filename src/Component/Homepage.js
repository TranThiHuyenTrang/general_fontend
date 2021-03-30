import React from "react";
import "../Css/Homepage.css";
import "../Css/fixhome.css";
import Header from './Header';

function Homepage() {
    return (
        <div>
            <Header />
            <section id="home" className="slide_scroll" data-parallax="scroll" >
                <img src="./img_food/banner2.PNG" alt="" style={{height:"750px"}}/> 
                <img src="./img_food/clouds.png" alt=""/> 
            </section>
            <section>
                <div className="top_restaurent">
                    <h5>Queen Party</h5>
                    <h3>Website đặt tiệc tại nhà</h3>
                    <p><span>Là trang web hàng đầu tại Việt Name tích hợp nhiều cửa hàng & nhà hàng cung cấp dịch vụ nấu nướng và phục vụ tiệc như
            sinh nhật, tân gia, ngày kỷ niệm ... tại gia.
            </span><span>Khách hàng có thể đặt các món ăn và dịch vụ có sẵn trong cửa hàng hoặc tự tạo kế hoạch cho mình, sau đó gửi yêu cầu đến các nhà hàng, cửa hàng.</span></p>
                </div>
            </section>
            <div className="banner-slide">
                <section id="slider">
                    <div className="disflex">
                        <div className="img-container"> 
                            <img src="./img_food/legia3.jpg" alt="" />
                        </div>
                        <div className="img-container"> 
                            <img src="./img_food/nieu.jpg" alt="" />
                        </div>
                        <div className="img-container"> 
                            <img src="./img_food/biendong3.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="disflex">
                        <div className="img-container"> 
                            <img src="./img_food/otxanh.jpg" alt="" />
                        </div>
                        <div className="img-container"> 
                            <img src="./img_food/mranh.jpg" alt=""/>
                        </div>
                        <div className="img-container"> 
                            <img src="./img_food/hongphuc.jpg" alt=""/>
                        </div>
                    </div><br></br>
                </section>
            </div>
{/* hiển thị mục đích */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>ĐẶT TIỆC NGAY</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>Tiệc sinh nhật</span></h2>
            <ul>
                <li>
                    <a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>       
</section>
{/* hiển thị dịch vụ */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>DỊCH VỤ</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>dv</span></h2>
            <ul>
                <li>
                    <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>     
</section>
{/*  */}
{/* hiển thị tOP NHÀ HÀNG MỚI */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>TOP NHÀ HÀNG MỚI NHẤT</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>ms</span></h2>
            <ul>
                <li>
                    <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>     
</section>
{/* hiển thị tOP NHÀ HÀNG MỚI */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>TOP NHÀ HÀNG THỊNH HÀNH</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>Th</span></h2>
            <ul>
                <li>
                    <a href=""><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>     
</section>
</div>
    );
        
}
    export default Homepage;