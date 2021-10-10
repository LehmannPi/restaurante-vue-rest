<template>
  <c-flex align="center" direction="column">
    <navbar />
    <c-flex
      justify="center"
      align="center"
      width="100%"
      color="yellow.400"
      height="90px"
    >
      <label class="cozinha__titulo"> cozinha </label>
    </c-flex>
    <c-flex
      width="90%"
      rounded="8px"
      bg="yellow.100"
      p="20px"
      wrap="wrap"
      justify="flex-start"
    >
      <c-flex
        v-for="pedido in pedidos"
        :key="pedido.ordem"
        direction="column"
        width="230px"
        flex="1 1 auto"
        p="10px"
        m="10px"
        color="white"
        :bg="
          pedido.status == 0
            ? 'yellow.500'
            : pedido.status == 1
            ? 'orange.500'
            : 'green.500'
        "
      >
        <label><label class="bold">Ordem </label>{{ pedido.id }}</label>
        <label><label class="bold">Mesa </label>{{ pedido.mesa }}</label>
        <label><label class="bold">Pedido: </label>{{ pedido.desc }}</label>
        <label class="bold">Data: </label
        ><label
          ><label v-chakra wordSpacing=".5em"
            >{{ new Date(pedido.data).getHours() }}:{{
              new Date(pedido.data).getMinutes()
            }}:{{ new Date(pedido.data).getSeconds() }}
          </label>
          {{ new Date(pedido.data).getDate() }}/{{
            new Date(pedido.data).getMonth()
          }}/{{ new Date(pedido.data).getFullYear() }}
        </label>

        <c-button
          @click="pedido.status = (pedido.status + 1) % 3, avancaPedido(pedido)"
          color="indigo.600"
          mt="10px"
          letterSpacing=".10rem"
          >avança pedido</c-button
        >
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { CFlex, CButton } from "@chakra-ui/vue";
export default {
  components: { Navbar, CFlex, CButton },
  name: "Cozinha",
  data() {
    return {
      pedidos: [],
    };
  },
  async mounted() {
    this.getPedidos();
  },
  methods: {
    async getPedidos() {
      // * A opção default do fetch é o GET
      // * Mais sobre em https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      await fetch("http://localhost:3000/pedidos")
        .then((res) => res.json())
        .then((data) => (this.pedidos = data))
        .catch((err) => console.log(err));
      this.loopPedidos();
    },
    loopPedidos() {
      setTimeout(() => {
        this.getPedidos();
      }, 15000);
    },
		async avancaPedido(pedido){
			await fetch("http://localhost:3000/pedidos/" + pedido.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      }).catch((err) => console.log(err));
		}
  },
};
</script>

<style>
</style>