<template>
  <div class="login-main">
    <div class="login-form">
      <div class="login-content">
        <div class="input_item">
          <label for="email">邮箱</label>
          <input class="error-content" type="text" id="email"  v-model="email" placeholder="请输入邮箱" autocomplete="off" v-validator:email= "validateEmail" tag="邮箱">
          <span class="error"></span>
        </div>
        <div class="input_item">
          <label for="password">密码</label>
          <input class="error-content" type="password" id="password" v-model="password" placeholder="请输入密码" autocomplete="off" tag="密码" v-validator:password= "validatePassword" >
          <span class="error"></span>
        </div>
        <div class="login-options">
          <input type="submit" class="cannot-login-btn" value="注册" >
        </div>
        <input type="submit" class="login-btn" value="登录"  @click="checkLogin()">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        validateEmail: [
          {required: '', msg: '请输入邮箱'},
          {Mail: '', msg: '请输入正确的邮箱地址'}
        ],
        password: '',
        validatePassword: [
          {required: '', msg: '请输入密码'},
          {limit: this.limit, msg: '请输入正确的密码'}
        ]
      }
    },
    methods: {
      checkLogin: function () {
        let _this = this
        console.log( _this.$va)
        let checkResult = _this.$va.checkAll()
        if (checkResult) {
          console.log('请求接口去登陆')
        }
      },
      limit: function () {
        let password = this.$data.password
        return (password.length >= 6 && password.length <= 12)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-main{
    min-height: 100vh;
    background: #000000;
    // background: url('../../../static/img/login/login1.png')no-repeat;
    background-size: cover;
    overflow: hidden;
    .login-form{
      width: 432px;
      margin: 150px auto;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      .login-content{
        padding: 62px 42px 68px;
      }
      .input_item{
        margin: 0 0 20px;
        label{
          font-size: 16px;
          display: block;
          color: #2d2d2d;
          margin-bottom: 5px
        }
        input{
          font-size: 16px;
          border: none;
          line-height: 32px;
          width: 100%;
          border-bottom: 1px solid #ebebeb;
        }
        input::-webkit-input-placeholder{
          color: #DFE2EC;
        }
        input::-moz-placeholder{  //不知道为何火狐的placeholder的颜色是粉红色，怎么改都不行，希望有大牛路过帮忙指点
          color: #DFE2EC;
        }
        input::-ms-input-placeholder{  //由于我的IE刚好是IE9，支持不了placeholder，所以也测试不了(⊙﹏⊙)，有IE10以上的娃可以帮我试试
          color: #DFE2EC;
        }
        //没报错的样式
        .error{
          display: none
        }
        //没报错的样式
      }
      //报错的样式
      .input_item.error_item{
        .error{
          display: block;
          color: red;
          font-size: 16px;
          line-height: 32px;
        }
        .error-content{
          border-bottom: 1px solid red;
        }
      }
      //样式
      .login-btn{
        margin-top: 30px;
        border: none;
        background: rgba(0,166,248,0.9);
        width: 100%;
        color: #fff;
        padding: 10px 0;
        border-radius: 3px;
        font-size: 16px;
      }
      .change-btn{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 100%;
        background-color: #f6f6f6;
        height: 58px;
        border-top: 1px solid #ebebeb;
        font-size: 16px;
        border-radius: 0 0 2px 2px;
        a{
          color:rgba(0, 166, 248, 1)
        }
      }
      .login-options{
        .cannot-login-btn{
          float: right;
          border: none;
          font-size: 14px;
          color: #BEBCBA;
          text-align: center;
          cursor: pointer;
          background: none;
        }
      }
    }
  }
</style>
