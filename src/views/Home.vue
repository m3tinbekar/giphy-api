<template>
  <div class="background">
    <div class="container">
      <navbar :gifs="gifs"></navbar>
      <h2><img src="../assets/trending.png" alt=""> Top 20 Trending </h2>
      
        <slider></slider> 

      <h2><img src="../assets/daily.png" alt=""> Daily Trending</h2>
      <daily :daily="daily"></daily>
      
      <h2 style="text-align:left!important;margin-left:40px"><img src="../assets/trending.png" alt=""> All Trending </h2>
        <preview :gifs="gifs"></preview>
      

    </div>
  </div>
</template>

<script>
import Preview from "../components/GiphyTask/Preview.vue";
import Navbar from "../components/Navbar.vue";
import Daily from '../components/GiphyTask/Daily.vue';
import Slider from '../components/Slider.vue';



export default {
  name: "index",
  components: { Navbar, Preview, Daily, Slider },
  data() {
    return {
      gifs: [],
      daily: [],
    };
  },
  methods: {
    getData() {
      this.$axios
        .trend()
        .then((response) => {
          this.gifs = response.data;
        });
    },
    dailyData(){
      this.$axios.daily()
      .then((response) => {
        this.daily = response.data;

      })
      
    },
    
  },
  
  created() {
    this.getData();
    this.dailyData();

  },
};
</script>
<style>
.background {
  background: #121119;
}
h2 {
  text-align: center;
  
  color: white;
  
}
html{
  background: #121119;
}


</style>