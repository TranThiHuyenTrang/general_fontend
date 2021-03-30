import React from "react";
import "../Css/service.css";
import Header from './Header';

function Service() {
    return (
        <div>
            <Header />

            <div class="slide_text_centrer">
                    <h2 className="title-service">Queen Party - Cung cấp hệ thống dịch vụ cao cấp</h2>
            </div>
<div class="intro">
<section>
    <div className="disflex-service">
        <div className="container cart_con" style={{width: "360px", height: "300px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h4 className="description-category">Đơn hàng của bạn sẽ được bảo quản như thế nào?
                Queen Party sẽ bảo quản đơn của bạn bằng túi & thùng để chống nắng mưa, 
                giữ nhiệt... trên đường đi một cách tốt nhất</h4>
        </div>  
    </div>     
</section>
{/* hiển thị Dịch vụ đồ ăn */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>DỊCH VỤ ĐỒ ĂN</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex-card">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>ăn</span></h2>
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

{/* hiển thị Dịch vụ LOA MÁY */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>DỊCH VỤ LOA MÁY</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex-card">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>loa</span></h2>
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

{/* hiển thị Dịch vụ TRANG TRÍ */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>DỊCH VỤ TRANG TRÍ</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex-card">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>tt</span></h2>
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

{/* hiển thị Dịch vụ BÁNH KEM */}
<section className="main_contain">
    <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <div className="container">
                    <div className="center-title-area">
                        <h2 className="center-title"><b>DỊCH VỤ BÁNH KEM</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="disflex-card">
        <div className="cart_content" style={{width: "360px"}}>
            <img src="./img_food/sinhnhat.jpg" alt="" style={{height:"190px"}} />
            <h2><span>kem</span></h2>
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
<br/><br/>

</div>
        </div>
    )}
export default Service;