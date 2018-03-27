import React,{Component} from 'react' 
import '../../common/common.css'
import './LoginComponent.css'

export default class SortComponent extends Component{
    baseurl(){
      return './src/components/sort/imgs/'
    }
    render(){
        return (          
               <div id="login">
                    <div className="login-head">
                        <h1>华为帐号-登录</h1>
                        <p>华为帐号适用于访问所有华为服务。您可登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <div className="login-body">
                        <div>
                            <input type="text" placeholder="手机号/邮箱地址"/>
                        </div>
                        <div>
                            <input type="password" placeholder="密码"/>
                        </div>
                        <div>
                            <input type="button" value="登录" className="btn"/>
                        </div>
                        <div>
                            <input type="checkbox" className="rem"/><span>记住密码</span>
                        </div>
                        <div className="goto">
                            <a href="#" className="a-reg">注册帐号</a><a href="#">忘记密码?</a>
                        </div>
                    </div>
                    <div className="login-foot">
                        <div className="other">
                            <span>其他登录方式</span>
                        </div>
                        <div className="foot">
                            <span className="qq"><img src={this.baseurl()+'qq.png'}/></span>
                            <span className="alipay"><img src={this.baseurl()+"alipay.png"}/></span>
                        </div>
                    </div>
                </div>
        )
    }
}