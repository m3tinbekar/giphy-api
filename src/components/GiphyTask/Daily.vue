<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <ul>
            <li class="img-container" style="margin-left:38%;margin-right:38%">
              <button @click="gifData(daily.data.id)" class="dailyButton">
              <img
                :src="daily.data.images.fixed_height.url"
                alt=""
                class="image"
              />
            </button>

            <div class="middle">
              <div>
                <button
                  type="button"
                  class="dailyButton"
                  @click="onCopy"
                  v-clipboard:copy="daily.data.url"
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
    </div>
  </div>
</template>
<script>
export default {
  props: ["daily"],
  name: "Daily",
  data() {
    return {};
  },
  methods: {
    onCopy() {
      this.$swal("Link copied to clipboard!");
    },
    gifData(id) {


      console.log(id);

       this.$router.push("/selected/"+id)
    },
  },
};
</script>
<style>
li {
  list-style: none;

  padding: 10px;
}
.dailyButton {
  border-style: none;
  background: none;

  
}


</style>