<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #121119"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" alt="" width="120" height="45" />
         Gipyh
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          
        </ul>
         <form class="d-flex">
      <input
        class="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="query"
        @keypress.enter="onSearch"
      />
      <button class="btn btn-outline-light" @click="onSearch">
        Search
      </button>
    </form>
      </div>
    </div>
  </nav>
</template>
<script>




export default {


  name: "Navbar",
  data() {
    return {
        query : ''
      
    };
  },
  methods: {
      onSearch(){
          //
        //   var query = this.query
        //  this.$router.push({path : 'search', query:{query:'private'} })
        if(this.query!=='')
        this.$router.push("/search/"+this.query).catch(()=>{});

      }
   
  },
  created() {

  },
};
</script>
