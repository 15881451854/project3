import React from 'react'
import {Link,hashHistory} from 'react-router'
export default class Section2Component extends React.Component{
      //组件通信-----传递产品id到商品详情页
    // gotodet(id){
    //     // console.log(id);
    //     var path = '/goods/' + id; 
    //     hashHistory.push(path);
    //     window.sessionStorage.setItem("goodsid", id);
    // }
     gotodet(id){
        location.href="#/goods"
        window.sessionStorage.setItem("goodsid", id);
    }
    render(){
    var b=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.Section2[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
                        {
                            this.props.Section2[0].map((item)=>{
                                        

                                    if(item.category == this.props.Section2[1]){
                                b--;

                                if(b>=0){
                                        return(
                                            <li key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                                <img src={"./src/static/img/"+item.img}/>
                                                <h6>{item.name}</h6>
                                                <p>{item.title}</p>
                                                <p className="money"><span>￥</span><span>{item.price}</span></p>
                                            </li>
                                        )
                                    }
                                }

                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
                    
        )
    }

}