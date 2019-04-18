<template>
  <div id="header">
    <div class="header">
      <div>
        <a href="#">
          <img :src="img1" alt>
        </a>
        <img :src="img2">
      </div>
      <div>
        <a href="#">打开豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data (){
      return {
        img1:require('../images/1.jpg'),
        img2:require('../images/2.jpg')
      }

    }
}
</script>


<style>
#header {
    position: fixed;
    width: 100%;
    height: 94px;
    background: #fff;
    z-index: 9;
}

.header {
    width: 100%;
    height: 94px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0px 36px;
    box-sizing: border-box;
}

.header div:nth-child(1) a {
    margin-right: 32px;
}

.header div:nth-child(2) a {
    display: block;
    width: 202px;
    height: 58px;
    background: #44be5b;
    text-align: center;
    line-height: 58px;
    font-size: 26px;
    color: #fff;
    border-radius: 10px;
}
</style>
