<template>
  <div>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style="margin-left:10%;margin-right:10%"
    >
      <div class="carousel-inner" style="margin-left:55px">
        <div class="carousel-item active">
          <ul>
            <li
              v-for="(gif,i) in slider.data"
              :key="gif.id"
              class="img-container"
              v-show="i<5"
            >
              <button @click="gifData(gif.id)" class="sliderButton">
                <img
                  :src="gif.images.fixed_height.url"
                  alt=""
                  class="image"
                  style="
                    width: 150px !important;
                    height: 150px !important;
                    padding: 0px !important;
                    margin: -5px !important;
                  "
                />
              </button>
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
        <div class="carousel-item">
          <ul>
            <li v-for="(gif,i) in slider.data" :key="gif.id" class="img-container" v-show="i>=5 && i<10">
              <button @click="gifData(gif.id)" class="sliderButton">
                <img
                  :src="gif.images.fixed_height.url"
                  alt=""
                  class="image"
                  style="
                    width: 150px !important;
                    height: 150px !important;
                    padding: 0px !important;
                    margin: -5px !important;
                  "
                />
              </button>
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
        <div class="carousel-item">
          <ul>
            <li v-for="(gif,i) in slider.data" :key="gif.id" class="img-container" v-show="i>=10 && i<15">
              <button @click="gifData(gif.id)" class="sliderButton">
                <img
                  :src="gif.images.fixed_height.url"
                  alt=""
                  class="image"
                  style="
                    width: 150px !important;
                    height: 150px !important;
                    padding: 0px !important;
                    margin: -5px !important;
                  "
                />
              </button>
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
        <div class="carousel-item">
          <ul>
            <li v-for="(gif,i) in slider.data" :key="gif.id" class="img-container" v-show="i>=15 && i<=20">
              <button @click="gifData(gif.id)" class="sliderButton">
                <img
                  :src="gif.images.fixed_height.url"
                  alt=""
                  class="image"
                  style="
                    width: 150px !important;
                    height: 150px !important;
                    padding: 0px !important;
                    margin: -5px !important;
                  "
                />
              </button>
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
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      slider: [],
    };
  },
  methods: {
    getData() {
      this.$axios
        .slider()
        .then((response) => {
          this.slider = response.data;
        });
    },
    gifData(id) {
      console.log(id);
       this.$router.push("/selected/"+id)
    },
    onCopy() {
      this.$swal("Link copied to clipboard!");
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style>
.d-block {
  width: 150px !important;
  height: 150px !important;
}
.sliderButton {
  border-style: none;
  background: none;
}
</style>