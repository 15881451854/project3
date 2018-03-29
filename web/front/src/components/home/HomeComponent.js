import React,{Component} from 'react'
import {Link} from 'react-router'
import NavComponent from '../nav/NavComponent'

import Section1Component from './section/Section1Component'
import Section2Component from './section/Section2Component'
import Section3Component from './section/Section3Component'
import Section4Component from './section/Section4Component'
import Section5Component from './section/Section5Component'
import Section6Component from './section/Section6Component'
import Section7Component from './section/Section7Component'


import LunboComponent from '../home/lunbo/LunboComponent'
import JxComponent from '../home/jingxuan/JxComponent'
import TetuiComponent from '../home/tetui/TetuiComponent'
import http from '../../utils/httpclient'
import SpinnerComponent from '../../spinner/SpinnerComponent'

import '../../common/common.css'
import './home.css'
export default class HomeComponent extends Component{
    
    componentDidMount(){ 
         
    }
    
    
    componentWillMount(){
        this.setState({spinnerShow:true})
        http.get('frontApoproducts',{}).then((res)=>{
            this.setState({
                wayslData: res.data,
                spinnerShow:true, 
            })
        })
    }
    state = {
        wayslData:[],
        spinnerShow:true,
    }
   
    render(){
        return (
            <div className="home homepage">
                <SpinnerComponent spinnerShow={this.state.spinnerShow}/>
                <div className="homeHeader">
                    <div className="homeHeader_1">
                        <div className="homeInput">
                            <Link to="/search">
                            <input type="button" value="HUAWEI nova 2s 荣耀V10"/>
                            </Link>
                            <i className="iconfont icon-search"></i>
                        </div>
                        <i className="iconfont icon-qunfengxiaoxitishilingdang"></i>
                        <span>登录</span>
                    </div>
                </div>

                <div className="homeContent wayslContent" id="userOrder" ref = "userOrder">
                    <div className="lunbo" ref="lunbo">
                        <LunboComponent config={["src/components/home/img/lunbo1.jpg","src/components/home/img/lunbo2.jpg","src/components/home/img/lunbo3.jpg","src/components/home/img/lunbo4.jpg","src/components/home/img/lunbo5.jpg","src/components/home/img/lunbo6.jpg","src/components/home/img/lunbo7.jpg","src/components/home/img/lunbo8.jpg"]}></LunboComponent>
                    </div>

                    <div className="contenBanner">
                        <ul>
                            <li>
                                <Link to="/nav">
                                    <div><img src="./src/components/home/img/nav1.jpg" /></div>
                                    <span>优选配件</span>
                                </Link>   
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/components/home/img/nav2.jpg" /></div>
                                <span>会员领劵</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/components/home/img/nav3.jpg" /></div>
                                <span>新品预定</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/components/home/img/nav4.jpg" /></div>
                                <span>以旧换新</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/components/home/img/nav5.jpg"/></div>
                                <span>数码特惠</span></Link>
                            </li>
                           
                        </ul>
                    </div>
                    
                    <div className="tetui">
                        <TetuiComponent></TetuiComponent>
                    </div>
                    
                    <div className="news">
                        <h5>公告</h5>
                        <ul>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                        </ul>
                       <span>更多<i className="iconfont icon-arrow_right"></i></span>
                    </div>

                    <div className="Zhuanqu">
                        <div className="huawei">
                            <img src="../../../src/components/home/img/20170923212136748.jpg" />
                        </div>
                        <div className="rongyao">
                            <img src="../../../src/components/home/img/20170923212139427 (1).jpg" />
                        </div>
                    </div>

                    <div className="wayslJxproduct">
                        <div>
                            <p>
                                <span>超值精选</span>
                            </p>
                        </div>
                       <JxComponent jingxuan={this.state.wayslData}></JxComponent>
                    </div>

                    <div className="wayslPhoneproduct Sections">
                        <Section1Component Section1={[this.state.wayslData,"华为手机"]}></Section1Component>
                    </div>
    
                    <div className="wayslPbproduct Sections">
                        <Section2Component Section2={[this.state.wayslData,"荣耀手机"]}></Section2Component>
                    </div>

                    <div className="wayslCdproduct Sections">
                         <Section3Component Section3={[this.state.wayslData,"笔记本&平板"]}></Section3Component>
                    </div>

                    <div className="wayslJjproduct Sections">
                         <Section4Component Section4={[this.state.wayslData,"智能穿戴"]}></Section4Component>
                    </div>

                    <div className="wayslRxproduct Sections">
                         <Section5Component Section5={[this.state.wayslData,"智能家居"]}></Section5Component>
                    </div>

                    <div className="wayslStproduct Sections">
                         <Section6Component Section6={[this.state.wayslData,"生态产品"]}></Section6Component>
                    </div>

                    <div className="wayslStproduct Sections">
                         <Section7Component Section7={[this.state.wayslData,"通用配件"]}></Section7Component>
                    </div>



                    <div className="wayslContent_buttom">
                        <div className="content_buttom_1">
                            <span>登录</span>
                            <span>反馈</span>
                        </div>
                        <div className="content_buttom_2">
                            <ul>
                                <li>
                                    <i className="kehu"></i>
                                    <span>客户端</span>
                                </li>
                                <li>
                                    <i className="chuping"></i>
                                    <span>触屏版</span>
                                </li>
                                <li>
                                    <i className="diannao"></i>
                                    <span>电脑版</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div className="content_buttom_3">      
                            <ul>
                                <li>隐私政策</li>
                                <li>用户协议</li>
                                <li>苏ICP备17040376号-6</li>
                            </ul>
                            <p className="waysl_content_p">
                                <span>苏公网安备32011402010009号</span>
                                <span>Copyright © 2012-2018 </span>
                            </p>
                            <p>VMALL.COM 版权所有</p>
                        </div>
                    </div>

                </div>

                <div className="homeFooter wayslFooter"><NavComponent /></div>
            </div>
        )
    }
}