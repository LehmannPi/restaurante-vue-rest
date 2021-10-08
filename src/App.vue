<template>
  <c-theme-provider>
    <!-- <c-reset /> -->
		<hello-world />
    <!--Your application goes here -->
  </c-theme-provider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  name: "App",
};
</script>
