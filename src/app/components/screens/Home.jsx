import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
        <div>
            <header>    
                <div class="container-fluid">
                    <nav>
                        <ul id="menu">      
                            <li class="logo-brand"><a href="#">Logo Brand</a></li>
                            <li><a href="#/monthi">Học online</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Hướng dẫn</a></li>
                            <li class="right"><a href="#">Đăng nhập</a></li>
                            <li class="top-register right"><a href="#">Đăng ký</a></li>
                        </ul>
                    </nav>
                </div>         
            </header>           
            <div class="container-fluid">
                <div class="content">              
                    <div class="row">
                        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                            <div class="slider-text">
                                <h1>Hệ thống học Tiếng Anh Online</h1>
                                <h2>Hoàn toàn miễn phí dành cho mọi đối tượng</h2>
                            </div>
                            <div class="start-button">       
                                <button type="button" class="btn btn-default">Bắt đầu học ngay</button>       
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                            <div id="video">
                                <video width="100%" preload="auto" autoPlay="true" loop>
                                    <source src="../../public/videos/video-home.webm" type="video/webm"/>
                                </video>
                            </div>
                        </div>         
                    </div>                
                </div>
            </div>           
            <footer>
            </footer>
        </div> 
    
    )
  }
}
