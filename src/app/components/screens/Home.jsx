import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
              <ul id="menu">      
                  <li class="logo-brand"><a href="#">Logo Brand</a></li>
                  <li><a href="#">Thi thử online</a></li>
                  <li><a href="#">Giới thiệu</a></li>
                  <li><a href="#">Hướng dẫn</a></li>
                  <li><a href="#">Tin tức</a></li>
                  <li class="right"><a href="#">Đăng nhập</a></li>
                  <li class="top-register right"><a href="#">Đăng ký</a></li>
              </ul>
          </nav>
      </header>
      <div class="content">
          <div class="slider">
              <div class="slider-text">
                  <h1>Hệ thống thi thử Online</h1>
                  <h2>Hoàn toàn miễn phí dành cho mọi đối tượng</h2>
              </div>
              <div class="start-button">       
                <button type="button" class="btn btn-default">Bắt đầu thi ngay</button>       
              </div>
              <div id="slider-image">
                  <div>
                      <img src="../public/images/slide-image-1.jpg" alt="slide-image-1" />
                  </div>
                {/*<div>
                      <img src="../public/images/slide-image-2.jpg" alt="slide-image-2" />
                  </div>
                  <div>
                      <img src="../public/images/slide-image-3.jpg" alt="slide-image-3" />
                </div>*/}
              </div>
          </div> 
      </div>
      <footer>
      </footer>
    </div> 
    
    )
  }
}
