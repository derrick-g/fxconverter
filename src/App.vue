<template>
  <div id="app">
    <div class="widget__container">
      <fxConverterWidget />
    </div>
  </div>
</template>

<script>
import fxConverterWidget from "@/components/fxConverter_widget.vue";

export default {
  name: "App",
  components: {
    fxConverterWidget,
  },
};
</script>

<style lang="scss">
body {
  margin:0;
}

#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  background-image: url("~@/assets/images/london.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  height:100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .widget__container {
    max-width: 750px;
    width:100%;
    position: relative;
  }
}

@media only screen and (max-width: 900px) {
#app {
   .widget__container {
    max-width: 450px;
  }
}
}
</style>
