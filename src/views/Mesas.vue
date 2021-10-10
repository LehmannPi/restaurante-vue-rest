<template>
  <c-flex align="center" direction="column">
    <navbar />
    <c-flex
      justify="center"
      align="center"
      width="100%"
      color="blue.400"
      height="90px"
    >
      <label class="mesas__titulo"> mesas </label>
    </c-flex>
    <c-flex
      width="70%"
      rounded="8px"
      bg="blue.100"
      p="20px"
      direction="column"
      align="center"
    >
      <c-flex
        m="10px auto 0"
        p="10px 20px"
        width="100%"
        bg="white"
        color="blue.600"
        direction="column"
      >
        <label class="desc">Descrição do pedido</label>
        <c-input
          variant="flushed"
          color="black"
          placeholder="Descrição"
          fontSize="16px"
          v-model="desc"
          required
        >
        </c-input>
      </c-flex>
      <c-flex
        m="20px auto 10px"
        p="10px 20px"
        width="100%"
        bg="white"
        color="blue.600"
        align="center"
      >
        <label class="desc">Numero da mesa</label>
        <c-input
          ml="20px"
          variant="flushed"
          color="black"
          fontSize="16px"
          width="40px"
          placeholder="nº"
          v-model="mesa"
          required
        >
        </c-input>
      </c-flex>
      <c-flex
        m="10px auto 10px"
        p="10px 20px"
        width="100%"
        bg="white"
        color="blue.600"
        align="center"
      >
        <label class="desc"
          >Stuação (0 - na fila, 1 - andamento, 2 - concluído)</label
        >
        <c-input
          ml="20px"
          variant="flushed"
          color="black"
          fontSize="16px"
          width="30px"
          placeholder="nº"
          v-model="estado"
          required
        >
        </c-input>
      </c-flex>

      <c-flex
        m="10px auto 10px"
        p="10px 20px"
        width="100%"
        bg="white"
        color="blue.600"
        align="center"
      >
        <label class="desc">Horário do pedido</label>
        <c-input
          ml="20px"
          variant="flushed"
          color="black"
          fontSize="16px"
          width="30px"
          placeholder="hh"
          v-model="hora"
          required
        >
        </c-input>
        <label> : </label>
        <c-input
          ml="20px"
          variant="flushed"
          color="black"
          fontSize="16px"
          width="30px"
          placeholder="mm"
          v-model="min"
          required
        >
        </c-input>
      </c-flex>
      <c-button
        @click="submit"
        color="blue.600"
        mt="20px"
        width="50%"
        fontSize="16px"
        textTransform="uppercase"
        letterSpacing=".1em"
        >submeter pedido</c-button
      >
    </c-flex>
  </c-flex>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { CFlex, CInput } from "@chakra-ui/vue";
export default {
  components: { Navbar, CFlex, CInput },
  name: "Mesas",
  data() {
    return {
      pedidos: [],
      desc: "",
      mesa: null,
      estado: 0,
      hora: null,
      min: null,
    };
  },
  methods: {
    async submit() {
      let time = new Date();
      time.setHours(this.hora);
      time.setMinutes(this.min);
      let pedido = {
        desc: this.desc,
        mesa: this.mesa,
        status: this.estado,
        data: time,
      };
      await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      }).catch((err) => console.log(err));
      alert("Pedido Submetido");
      this.desc = "";
      this.mesa = null;
      this.estado = 0;
      this.hora = null;
      this.min = null;
    },
  },
};
</script>

<style>
</style>