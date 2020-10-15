<template>
  <div class="hello">
    <el-button @click="mysqlTest">点击get</el-button>
    <el-button @click="getValue">getValue</el-button>
    <el-button @click="setValue">setValue</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    mysqlTest() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/users", {})
        .then(function (res) {
          console.log(res);
          return res.data;
        })
        .then((data) => {
          console.log(data.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    setValue() {
      this.$http
        .get("/api/setValue", {})
        .then(function (res) {
          console.log("vue setValue", res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getValue() {
      this.$http
        .get("/api/getValue", {})
        .then(function (res) {
          console.log("vue get", res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
