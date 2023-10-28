<template>
    <div class="table-details">
    <div class="table-details-content">
      <h1>Get Table By Id</h1>
      <p>Table ID: {{ table.id }}</p>
      <p>Type: {{ table.type }}</p>
      <p>Brand: {{ table.brand }}</p>
      <p>Color: {{ table.color }}</p>
      <p>Material: {{ table.material }}</p>
      
      <p><button v-on:click="navigateTo('/tables')">กลับ</button></p>
    </div>
  </div>
</template>

<script>
import TablesService from '@/services/TablesService';

export default {
  data() {
    return {
      table: null
    }
  },
  async created() {
    try {
      let tableId = this.$route.params.tableId;
      this.table = (await TablesService.show(tableId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  }
}
</script>

<style scoped>
</style>

<style scoped>
.table-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.table-details-content {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  margin: 0 0 20px;
}

p {
  font-size: 16px;
  margin: 9px 0;
  text-align: center;
}

button {
  background-color: #E27C1D;
  color: #fff;
  border: none;
  border-radius: 9px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

button:hover {
  background-color: #E8D2A1;
}
</style>