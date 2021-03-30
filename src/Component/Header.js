import React from "react";
import { useEffect} from "react";
import "../Css/fixhome.css";
function Header() {
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
      }, []);
  return (
      <div>
        <header id="myHeader" >
            <ul class="nameWeb" style={{fontFamily: 'serif' }}>
                <li><a href="#"><i class="fa fa-phone" aria-hidden="true">07045228766</i></a></li>
                <li><a href="#"><i class="fa fa-envelope-o" aria-hidden="true">QueenParty@gmail.com</i></a></li>
            </ul>
            <div class="right_contain">
                <div class="icon">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="fa fa-skype" aria-hidden="true"></i>
                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                </div>
                <div class="user">
                <a><i class="fa fa-shopping-cart" aria-hidden="true" style={{color:'white'}}></i></a>
                    <a style= {{fontFamily:"serif" }}href="">   Đăng nhập</a><span>
                </span>
                </div>
            </div>
        </header>
    
        <div class="navi" style={{height:'90px'}} id="myHeader" >
            <div className="logo-homepage"><img src="./logo192.png" alt="" /></div>
            <div className="fix-Search">
                <div className="khung-banner"><i class="fa fa-home"> Đà Nẵng</i></div>
                <div className="khung-banner"><i class="fa fa-truck" aria-hidden="true"> 24/24</i></div>
                <div className="khung-banner-search">
                    <form method="" action="" > 
                        <div style={{display:' flex'}}>
                            <span class="search_form">
                                <input type="text" style={{ fontFamily: "serif"}} value="" name="key" id="key" placeholder="Nhập từ khóa..."class="form-control" />
                            </span>
                            <button className="but-Search" type="submit" id="searchsubmit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>
            </div>
            <ul>
                <li><a href="#home" onclick="toggle()">Giới thiệu</a></li>
                <li><a href="" onclick="toggle()">Nhà hàng & Cửa hàng</a></li>
                <li><a href="" onclick="toggle()">Dịch vụ</a></li>
                <li><a href="#contact" onclick="toggle()">Liên hệ</a></li>
            </ul>
        </div>  
</div>
     );
}
export default Header;