<template>
  <div class="container">
    <div class="row">
      <ul>
        <li v-for="gif in gifs.data" :key="gif.id" class="img-container">
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
                <img src="../../assets/copy.png" width="25px" height="25px" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  props: ["gifs"],
  name: "Preview",

  data() {
    return {};
  },

  methods: {
    
    onCopy() {
    this.$swal("Link copied to clipboard!");
  },
    gifData(id){


      console.log(id)
      this.$router.push("/selected/"+id)
    }
  },
  
  created() {},
};
</script>

<style>
li {
  list-style: none;
  float: left;
  
  
  
}
.image{
  width: 250px!important;
  height: 250px!important;
  padding: 10px;
  border-radius: 15px;
}

</style>