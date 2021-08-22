<template>
  <div class="background">
    <div class="container">
      <navbar></navbar>
      <div class="row">
        <div
          class="card"
          style="width: 40rem; background: #121119; font-color: white"
        >
          <img
            :src="singleData.data.images.fixed_height.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="color: white">
              {{ singleData.data.title }}
            </h5>
            <p class="card-text" style="color: white">
              {{ singleData.data.import_datetime }}
            </p>
            <button
              class="btn btn-outline-secondary"
              style="margin-right: 20px; color: white; border-style: none"
              @click="onCopy"
              v-clipboard:copy="singleData.data.url"
              v-clipboard:success="onCopy"
            >
              <img
                src="../../assets/copy.png"
                alt="..."
                style="width: 24px; height: 24px"
              />
              Copy Link
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style="margin-right: 20px; color: white; border-style: none"
            >
              Media<img
                src="../../assets/export.png"
                alt="..."
                style="width: 24px; height: 24px"
              />
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Media</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input type="text" readonly spellcheck="false" value="" />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="shareWapp(singleData.data.url)"
              data-action="share/whatsapp/share"
              class="copyButton"
              style="margin-right: -5px; color: white; border-style: none"
            >
              <img
                src="../../assets/wapp.png"
                alt="..."
                style="width: 24px; height: 24px"
              />
            </button>
            <button
              @click="shareFbook(singleData.data.url)"
              class="copyButton"
              style="margin-right: 0px; color: white; border-style: none"
            >
              <img
                src="../../assets/facebook.png"
                alt="..."
                style="width: 24px; height: 24px"
              />
            </button>
            <button
              @click="shareOption"
              class="btn btn-outline-secondary"
              style="width: 38px; height: 30px; border-style: none"
              v-if="options === 'false'"
            >
              ...
            </button>
            <button
              @click="shareTwitter(singleData.data.url)"
              class="copyButton"
              v-if="options === 'true'"
            >
              <img
                src="../../assets/twitter.png"
                alt="..."
                style="margin-left: -5px; width: 24px; height: 24px"
              />
            </button>
            <button
              @click="shareTelegram(singleData.data.url)"
              class="copyButton"
              v-if="options === 'true'"
            >
              <img
                src="../../assets/telegram.png"
                alt="..."
                style="margin-left: -5px; width: 28px; height: 28px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "../Navbar.vue";
export default {
  name: "SelectedGif",
  components: { Navbar },
  data() {
    return {
      singleData: [],
      options: "false",

    };
  },
  methods: {
    getSingleData(id) {
      id = this.$route.params.id;
      console.log(id);
      axios
        .get(
          "https://api.giphy.com/v1/gifs/" +
            id +
            "?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9"
        )
        .then((response) => {
          this.singleData = response.data;
          console.log(response);
          console.log(this.singleData.data.images.fixed_height.url);
        });
    },
    onCopy() {
      this.$swal("Link copied to clipboard!");
    },
    shareFbook(url) {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "_blank"
      );
    },
    shareWapp(url) {
      window.open("https://wa.me/?text=" + url, "_blank");
    },
    shareOption() {
      console.log(this.options);
      this.options = "true";
    },
    shareTwitter(url) {
      window.open("https://twitter.com/intent/tweet?url=" + url, "_blank");
    },
    shareTelegram(url) {
      window.open("https://telegram.me/share/url?url=" + url, "_blank");
    },
  },
  created() {
    this.getSingleData();

  },
};
</script>
<style>
.card {
  margin-left: 25%;
}
</style>