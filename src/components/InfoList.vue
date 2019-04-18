<template>
  <div class="boxlist2" v-if="item.type === 'column'">
    <a href="#" class="boxlista" v-for="info in item.items" :key="info.id">
      <div class="imga">
        <img :src="item.profile_cover_url" alt>
      </div>
      <div class="boxlist3">
        <div class="list">
          <div class="list1">{{ item.column_title }}</div>
          <div class="list2">
            <span>{{ item.discount_price }}.00元</span>
            <br>
            <span>{{ item.price }}.00元</span>
          </div>
        </div>
        <div class="list3">主讲人 知更社区</div>
        <div class="list4">跨学科的文明史通识课，以最能代表人类智慧的十个....</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    infoList: []
  },
  methods: {
    getData() {
      axios.get("/rexxar/api/v2/niffler/modules").then(res => {
        let data = res.data;
        if (data.start === 0) {
          for (let i = 0; i < data.modules.length; i++) {
            if (i > 0) {
              this.infoList.push(data.modules[i]);
            }
          }
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.boxlist2 img {
  width: 200px;
  border-radius: 6px;
}

.boxlist3 {
  width: 538px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list div:nth-child(1) {
  width: 424px;
}

.list1 {
  font-size: 28px;
  color: #181818;
  font-weight: bolder;
}

.list2 span:nth-child(1) {
  color: #f17f27;
}

.list2 span:nth-of-type(2) {
  color: #c2cacd;
  text-decoration: line-through;
}

.list3 {
  color: #87856e;
}

.list4 {
  color: #78887d;
  font-size: 22px;
}
</style>

