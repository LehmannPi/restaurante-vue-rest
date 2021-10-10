<template>
	<c-flex height="100vh" width='100%' justify="center" align="center" direction="column" bg="indigo.50">
			<label class="titulo">gestão</label>
      <c-flex
        height="300px"
				width="60%"
				rounded='12px'
        bg="indigo.600"
        align="center"
        direction="column"
        justify="center"
      >
				<label class="subtitulo">Restaurante PPD</label>
				<c-flex direction="column" >
					<router-link :to="{name: 'Mesas'}">
						<c-button class="btn" color="indigo.50" mb="20px" bg="indigo.300" :_hover="{ bg: 'indigo.500' }" :_active="{color: 'indigo.500', bg: 'indigo.50'}" width="250px" height="40px">Mesas</c-button>
					</router-link>
					<router-link :to="{name: 'Cozinha'}">
						<c-button class="btn" color="indigo.50" bg="indigo.300" :_hover="{ bg: 'indigo.500' }" :_active="{color: 'indigo.500', bg: 'indigo.50'}" width="250px" height="40px" >Cozinha</c-button>
					</router-link>
				</c-flex>
      </c-flex>
    </c-flex>
</template>

<script>
import { CFlex, CButton }  from '@chakra-ui/vue'
export default {
  components: { CFlex, CButton},
  name: "App",
};
</script>

<style>
</style>