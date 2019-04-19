<template>
  <div>
    <header>
      <a href="#" @click="onBack">x</a>
    </header>
    <section id="main">
      <h2>登录豆瓣</h2>
      <b>
        登录注册表示同意
        <span>豆瓣使用协议、隐私政策</span>
      </b>
      <section class="conent">
        <section class="conent_top">
          <a>+86</a>
          <input type="text" placeholder="手机号" v-model="teleNumber" @keyup="changeSub">
        </section>
        <section class="conent_bottom">
          <input type="text" placeholder="手机验证码" v-model="yzm" @keyup="changeSub">
          <a href="#">获取验证码</a>
        </section>
      </section>
      <input id="btn" type="submit" value="登录" :disabled="isdis" @click="logining" />
      <section class="save">
        <a class="import" href="#">帐号密码登录</a>
        <a class="yzm" href="#">验证码收不到？</a>
      </section>
    </section>

    <section class="san">
      <p>第三方登录</p>
      <a href="#">
        <img :src="other.img1">
      </a>
      <a href="#">
        <img :src="other.img2">
      </a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      other: {
        img1: require("../images/index.png"),
        img2: require("../images/weobo.png")
      },
      teleNumber: "",
      yzm: "",
      isdis: true,
      isLogin: false
    };
  },
  methods: {
    onBack() {
      this.$router.back();
    },
    changeSub() {
      if (this.teleNumber && this.yzm) {
        var btn = document.getElementById('btn');
        btn.style.backgroundColor = '#42bd56';
        this.isdis = false;
      } else {
        this.isdis = true;
      }
    },
    logining() {
      var phoneReg = /^1[3-9][0-9]{9}/;
      if (phoneReg.test(this.teleNumber) && this.yzm == "1234") {
        window.isLogin = true;
        this.$router.replace('/my');
      } else {
        alert("登录失败，请重新登录");
      }
    }
  }
};
</script>

<style lang="scss">
body {
  header {
    margin:30px;
    a {
      display: block;
      width: 32px;
      height: 32px;
      font-size: 32px;
      color: #494949;
      text-align: center;
      line-height: 32px;
    }
  }
  #main {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 58px;
      color: #333;
      margin-top: 30px;
    }
    b {
      font-size: 28px;
      color: #bababa;
      span {
        color: #42bd56;
      }
    }
    .conent {
      width: 690px;
      height: 180px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      margin: 0 auto;
      margin-top: 60px;
      .conent_top {
        height: 90px;
        box-sizing: border-box;
        a {
          display: inline-block;
          width: 100px;
          height: 88px;
          color: #333;
          text-align: center;
          font-size: 28px;
          line-height: 88px;
          box-sizing: border-box;
        }
        input {
          font-size: 28px;
          border: 0;
          box-sizing: border-box;
          width: 560px;
          height: 54px;
          border-left: 1px solid #e4e6e5;
          padding: 20px;
        }
      }
      .conent_bottom {
        border-top: 1px solid #e4e6e5;
        height: 87px;
        font-size: 24px;
        input {
          box-sizing: border-box;
          width: 500px;
          border: 0;
          height: 87px;
          padding: 22px;
          font-size: 24px;
        }
        a {
          display: inline-block;
          width: 180px;
          color: #42bd56;
        }
      }
    }
    #btn {
      width: 690px;
      height: 88px;
      margin-top: 40px;
      background: #a0deaa;
      color: #fff;
      text-align: center;
      border: 0;
      font-size: 32px;
    }
    .save {
      margin-top: 50px;
      font-size: 30px;
      padding: 0 30px;
      .import {
        float: left;
        color: #61bd56;
      }
      .yzm {
        float: right;
      }
    }
  }
  .san {
    width: 100%;
    margin-top: 290px;
    text-align: center;
    p {
      font-size: 26px;
    }
    a {
      display: inline-block;
      width: 110px;
      height: 110px;
      margin-top: 36px;
      img {
        width: 110px;
        height: 110px;
      }
    }
  }
}
</style>>

