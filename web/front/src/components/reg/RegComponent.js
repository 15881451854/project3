import React,{Component} from 'react'
import '../../common/common.css'
import './RegComponent.css'
import http from '../../utils/httpclient'
import {Link} from 'react-router'

export default class SortComponent extends Component{
    user(){
        if(!/^[a-z][a-z0-9\-]{5,19}$/.test(this.refs.user.value)){
                   // * 不能为空，
                   // * 不能使用特殊字符（数字、字母、横杠），
                   // * 必须以字母开头，
                   // * 长度6-20
                this.refs.user.style.background="#FFBFBF";
                this.refs.user.value=null;
                this.refs.user.focus();
        }else{
            this.refs.user.style.background="#EFEFEF"
        }
    }
            
    pass(){
        if(!/^[^\s]{6,20}$/.test(this.refs.pass.value)){
                //   长度6-20 
                //   不能包含空格
                this.refs.pass.style.background="#FFBFBF";
                this.refs.pass.value=null;
                this.refs.pass.focus();
            }else{
                this.refs.pass.style.background="#EFEFEF"
            }
    }
    pass2(){
        if(this.refs.pass.value!=this.refs.pass2.value){
                this.refs.pass2.style.background="#FFBFBF";
                this.refs.pass2.value=null;
                this.refs.pass2.focus();
            }else{
                this.refs.pass2.style.background="#EFEFEF"
            }  
    }
    phone(){
        if(!/^1[34578]\d{9}$/.test(this.refs.phone.value)){
                this.refs.phone.style.background="#FFBFBF";
                this.refs.phone.value=null;
                this.refs.phone.focus();
            }else{
                this.refs.phone.style.background="#EFEFEF"
            }
    }
    email(){
        if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(this.refs.email.value)){
            this.refs.email.style.background="#FFBFBF";
            this.refs.email.value=null;
            this.refs.email.focus();
        }else{
            this.refs.email.style.background="#EFEFEF"
        }
    }
    age(){
        if(!/^[0-9]{1,2}$/.test(this.refs.age.value)){
            this.refs.age.style.background="#FFBFBF";
            this.refs.age.value=null;
            this.refs.age.focus();
        }else{
            this.refs.age.style.background="#EFEFEF"
        }
    }
    toreg(){
        if(this.refs.user.value==''||this.refs.pass.value==''||(this.refs.nan.checked==false&&this.refs.nv.checked==false)||this.refs.pass2.value==''||this.refs.phone.value==''||this.refs.email.value==''||this.refs.age.value==''){
            alert("请完整填写信息");
        }else{
            http.get('register',{username:this.refs.user.value,password:this.refs.pass.value}).then((res) => {
                if(res.status){
                    alert("恭喜您注册成功");
                    location.href ='#/login'
                }else{
                    alert('error')
                }
            }) 
        }
    }
    render(){
        return (          
               <div id="reg">
               <Link to="/"><i className="tomain">返回主页</i></Link>
                    <div className="reg-head">
                        <h1>华为帐号-注册</h1>
                        <p>华为帐号适用于访问所有华为服务。您可注册后登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <form className="reg-body" action="/">
                        <div>
                            <label htmlFor="username">*用户名 :</label>
                            <input type="text" id="username" placeholder="6-12位,不能包含空格" required  ref="user" onBlur={this.user.bind(this)}/>
                        </div>
                        <div>
                            <label htmlFor="password">*设置密码 :</label>
                            <input type="password" id="password" placeholder="请输入8-20位密码" required ref="pass" onBlur={this.pass.bind(this)}/>
                        </div>
                        <div>
                            <label htmlFor="password2">*确认密码 :</label>
                            <input type="password" id="password2" placeholder="请再次输入密码" required ref="pass2" onBlur={this.pass2.bind(this)}/>
                        </div>
                        <div>
                            <label htmlFor="phone">*手机 :</label>
                            <input type="phone" id="phone" placeholder="请输入11位合法手机号" required ref="phone" onBlur={this.phone.bind(this)}/>
                        </div>
                        <div>
                            <label htmlFor="email">*邮箱 :</label>
                            <input type="text" id="email" placeholder="请输入正确邮箱地址" required ref="email" onBlur={this.email.bind(this)}/>
                        </div>
                        <div id="gender">
                            <label>*性别 :</label>
                            <input type="radio" name="gender" value="男" ref="nan"/>男
                            <input type="radio" name="gender" value="女" ref="nv"/>女
                        </div>
                        <div>
                            <label htmlFor="age">*年龄 :</label>
                            <input type="text" id="age" placeholder="请输入您的年龄" required ref="age" onBlur={this.age.bind(this)}/>
                        </div>
                        <div>
                            <label htmlFor="birthday">&nbsp;&nbsp;生日 :</label>
                            <input type="date" id="birthday"/>
                        </div>
                        <div>
                            <input type="button" id="btn-reg" value="立即注册" onClick={this.toreg.bind(this)}/>
                        </div>
                    </form>
                </div>
        )
    }
}