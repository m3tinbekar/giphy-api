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
import axios from "axios";
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
      axios
        .get(
          "https://api.giphy.com/v1/gifs/trending?api_key=R8JLB8EHXG5I36zhs2VbwZ2UGcRiCUpk&limit=48&rating=g"
        )
        .then((response) => {
          this.gifs = response.data;
        });
    },
    dailyData(){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      axios.get("https://api.giphy.com/v1/gifs/random?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9&tag="+date+"&rating=g")
      .then((response) => {
        this.daily = response.data;
        console.log(this.daily.data)
        console.log(date)

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