import React from "react";
import "../Css/Homepage.css";
import "../Css/fixhome.css";
import "../Css/restaurant.css";
import Header from './Header';

function Restanrant() {
    return (
        <div>
            <Header />
            <div className="displayflex">
                <div>
                    <div class="col-sm-3">
                        <div class="list-group"  >
                            <div style={{ width: "350px",marginTop: "50px",marginLeft: "50px"}}> 
                                <span href="#" class="list-group-item active menu-item" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)", color: "white", fontSize: "18px", borderColor:"#eaa28b"}}><b>
                                    Danh mục
                                    </b></span>
                                <a href="#" class="list-group-item" >
                                    Nhà hàng & Cửa hàng
                                </a>
                                <a href="#moi" class="list-group-item" >
                                    Nhà hàng mới nhất 
                                </a>
                                <a href="#" class="list-group-item">
                                    Nhà hàng thịnh hành
                                </a>
                                <a href="#" class="list-group-item">
                                    Nhà hàng yêu thích
                                </a>
                                <a href="#" class="list-group-item" >
                                    Nhà hàng liên quan
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="col-sm-3">
                        <div class="list-group" >
                            <div style={{ width: "350px",marginTop: "330px",marginLeft: "-65px"}}> 
                                <span href="#" class="list-group-item active" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)", color: "white", fontSize: "18px", borderColor:"#eaa28b" ,borderRadius: "2px"}}><b>
                                    Cam kết bền vững
                                    </b></span>
                                    <a href="#" class="list-group-item" >
                                    <img class="img-fluid" src="./img_food/camket.jpg" />
                                    </a>
                                    <a href="#moi" class="list-group-item" >
                                    ☑ Đúng nguồn gốc 
                                    </a>
                                    <a href="#" class="list-group-item">
                                    ☑ Đúng chất lượng
                                    </a>
                                    <a href="#" class="list-group-item">
                                    ☑ Đúng giá sản phẩm
                                    </a>
                                    <a href="#" class="list-group-item" >
                                    ☑ Cam kết hoàn tiền 100%
                                    </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="list-group" >
                            <div style={{ width: "350px",marginTop: "720px",marginLeft: "-180px",fontSize:"16px"}}> 
                                <span href="#" class="list-group-item active" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)", color: "white", fontSize: "18px", borderColor:"#eaa28b" ,borderRadius: "2px"}}><b>
                                Giá trị bền vững
                                    </b></span>
                                    <a href="#" class="list-group-item" >
                                    <img class="img-fluid" src="./img_food/khen.jpg" />
                                    </a>
                                    <a href="#moi" class="list-group-item" >
                                    <i class="fa fa-asl-interpreting" aria-hidden="true"> Ưu đãi tốt nhất</i> 
                                    </a>
                                    <a href="#" class="list-group-item">
                                    <i class="fa fa-truck" aria-hidden="true"> Đáp ứng mọi yêu cầu</i>
                                    </a>
                                    <a href="#" class="list-group-item">
                                    <i class="fa fa-home" aria-hidden="true"> Phục vụ tận nhà</i>
                                    </a>
                                    <a href="#" class="list-group-item" >
                                    <i class="fa fa-money" aria-hidden="true"> Giá cả hợp lý</i>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
    <div>
        <section id="nhahang">
        <div class="container mt-5 mb-5" >
            <div class="d-flex justify-content-center row">
                <div class="col-md-10">
                    <div class="row p-2 bg-white border rounded" style={{width:"1100px"}}>
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="./img_food/legia3.jpg" /></div>
                        <div class="col-md-6 mt-1">
                            <h5>Nhà hàng Lê Gia 3</h5>
                            <div class="d-flex flex-row">
                                <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                            </div>
                            <p>Lê Gia là chuỗi nhà hàng ngon có tiếng tại Đà Nẵng, hội tụ những món ăn hải sản tươi ngon, chất lượng nhất mà khách du lịch hay bất kì ai 
                            cũng muốn nếm thử một lần cho biết để rồi hương vị đậm đà ấy cứ lưu luyến mãi không quên trong tâm thức của nhiều người.<br/><br/></p>
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h6 class="text-success"><i class="fa fa-truck" aria-hidden="true"> Miễn phí vận chuyển</i></h6>
                            </div>
                            <div class="d-flex flex-column mt-4">
                                <button href="" onclick="toggle()"class="btn btn-outline-primary btn-sm mt-2" type="button" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)",  color:"white",fontSize:"14px"}}>Xem chi tiết & đặt tiệc</button>
                                <button href="" onclick="toggle()"class="btn btn-outline-primary btn-sm mt-2" type="button" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)",  color:"white",fontSize:"14px"}}>Đánh giá</button>
                    
                            </div>
                        </div>
                    </div>
                   
                    {/*  */}
                    <div class="row p-2 bg-white border rounded" style={{width:"1100px"}}>
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="./img_food/legia3.jpg" /></div>
                        <div class="col-md-6 mt-1">
                            <h5>Nhà hàng Lê Gia 3</h5>
                            <div class="d-flex flex-row">
                                <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                            </div>
                            <p>Lê Gia là chuỗi nhà hàng ngon có tiếng tại Đà Nẵng, hội tụ những món ăn hải sản tươi ngon, chất lượng nhất mà khách du lịch hay bất kì ai 
                            cũng muốn nếm thử một lần cho biết để rồi hương vị đậm đà ấy cứ lưu luyến mãi không quên trong tâm thức của nhiều người.<br/><br/></p>
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h6 class="text-success"><i class="fa fa-truck" aria-hidden="true"> Miễn phí vận chuyển</i></h6>
                            </div>
                            <div class="d-flex flex-column mt-4">
                                <button href="" onclick="toggle()"class="btn btn-outline-primary btn-sm mt-2" type="button" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)",  color:"white",fontSize:"14px"}}>Xem chi tiết & đặt tiệc</button>
                                <button href="" onclick="toggle()"class="btn btn-outline-primary btn-sm mt-2" type="button" style={{backgroundImage: "linear-gradient(130deg, #eb673c 0%, #ac7664 100%)",  color:"white",fontSize:"14px"}}>Đánh giá</button>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</div>


<section class="main_contain"id="moi">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <div class="container" id="moi">
                    <div class="center-title-area">
                        <h2 class="center-title"><b>Top nhà hàng mới nhất</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="disflex">
    <div className="container cart_content" style={{width: "360px"}}>
        <img src="./img_food/gio.jpg" alt=""style={{height:"190px"}} />
        <h2><span>Giỗ, Chạp</span></h2>
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
   {/* Thịnh hành */}
    <section id="thinhhanh" class="main_contain">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="container" id="thinhhanh">
                        <div class="center-title-area">
                            <h2 class="center-title"><b>Top nhà hàng thịnh hành</b></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<div className="disflex">
    <div className="container cart_content" style={{width: "360px"}}>
        <img src="./img_food/gio.jpg" alt=""style={{height:"190px"}} />
        <h2><span>Giỗ, Chạp</span></h2>
        <ul>
            <li>
                <a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
            </li>
        </ul>
    </div>
</div> <br/><br/>

    <div class="footer-lower">
        <div class="media-container-row">
            <div class="col-sm-12">
                <hr style={{color: "black"}}/>
            </div>
        </div>
    </div>
</div>
    );
}
export default Restanrant;