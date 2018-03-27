import React from 'react'
import {connect} from 'react-redux'
// import cs from 'classnames';

import '../iconfont/lzffont/iconfont.css'
import './lzfheader.css'

export default class MyselfComponent extends React.Component{
   
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         currentclassName: "lzf_topnav"
    //     }
    // }
    componentDidMount(){
        // 吸顶菜单功能
        window.addEventListener('scroll', ()=>{
            var header = this.refs.lzf_header;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > 120){
                header.className = 'lzf_topnavfixed';
            }else if(scrollTop<120){
                header.className = 'lzf_topnav';
            }
        })    
    }
    
    render(){
        return(
            <div className = "lzf_topnavfixed" ref="lzf_header">

                <div className="left_topnav">
                    <p className="lzf_loginbtn">
                        登录 / 注册 
                    </p>
                    <h5 className="lzf_profit">登录更多优惠
                    </h5>
                </div>

                <div className="right_topnav">
                    <i className="iconfont icon-bell"></i>
                </div>
            </div>
        )
    }
}