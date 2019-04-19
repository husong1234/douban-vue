<template>
  <div>
    <NavBar></NavBar>
    <keep-alive exclude="timedet,musicdet,moviedet">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  components:{
    NavBar,
  }
}
</script>
