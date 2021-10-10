<template>
  <c-flex p="10px 20px" bg="indigo.600" justify="space-between" align="center" width='100%'>
    <router-link :to="{ name: 'Home' }">
      <label class="nav-back">Início</label>
    </router-link>
    <label class="nav-logo">Gestão</label>
  </c-flex>
</template>

<script>
import { CFlex } from "@chakra-ui/vue";
export default {
  name: "Navbar",
  components: { CFlex },
};
</script>

<style scoped>
.nav-back{
	color: #F2E5FF;
	font-weight: 500;
}
.nav-logo{
	font-size: 20px;
	letter-spacing: .5rem;
	text-transform: uppercase;
	color: #F2E5FF;
	font-family: "Space Mono", Courier, monospace;
	font-weight: 700;
}
</style>