<template>
  <div class="background">
    
    <div class="container">
      <navbar></navbar>
      <div class="row">
        <ul>
          <li
            v-for="gif in searchedGifs.data"
            :key="gif.id"
            class="img-container"
          >
            <button @click="gifData(gif.id)" class="copyButton"><img :src="gif.images.fixed_height.url" alt="" class="image" /></button>
            
            <div class="middle">
              <div>
                <button
                  type="button"
                  class="copyButton"
                  @click="onCopy"
                  v-clipboard:copy="gif.url"
                  v-clipboard:success="onCopy"
                >
                  <img src="../assets/copy.png" width="25px" height="25px" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>


import Navbar from './Navbar.vue';
export default {
  name: "SearchedList",
  components: {Navbar},
  data() {
    return {
      searchedGifs: [],
    };
  },
  methods: {
    searchedData(query) {
      query = this.$route.params.query;
      console.log(query);
      this.$axios.search(query)
      .then((response) =>{
        console.log(response)
        this.searchedGifs = response.data
      })
    
        
    },
    onCopy() {
      this.$swal('Link copied to clipboard!');
    },
    gifData(id){


      console.log(id)
      this.$router.push("/selected/"+id)
    }
  },
  created() {
    this.searchedData();
  },
};
</script>

<style>
.image {
  opacity: 1;
  display: block;

  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.img-container {
  position: relative;


}
.img-container:hover .image {
  opacity: 0.3;

}

.img-container:hover .middle {
  opacity: 1;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.copyButton {
  border-style: none;
  background: none;
  
  
}
.copyButton:hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.background{
  background: #121119;
}
</style>