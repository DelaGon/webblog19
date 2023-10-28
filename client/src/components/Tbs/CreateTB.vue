<template>
  <div class="create-table">
    <h1>Create Table</h1>
    <form v-on:submit.prevent="createTable" class="form">
      <p>Type: <input type="text" v-model="table.type" class="input-field"></p>
      <p>Brand: <input type="text" v-model="table.brand" class="input-field"></p>
      <p>Color: <input type="text" v-model="table.color" class="input-field"></p>
      <p>Material: <input type="text" v-model="table.material" class="input-field"></p>
      <p><button type="submit" class="submit-button">Create Table</button></p>
    </form>
  </div>
</template>

<script>
import TablesService from '../../services/TablesService';

export default {
  data() {
    return {
      table: {
        type: '',
        brand: '',
        color: '',
        material: '',
      }
    }
  },
  methods: {
    async createTable() {
      try {
        await TablesService.post(this.table);
        this.$router.push({
          name: 'tables'
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.create-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.form {
  width: 500px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.input-field {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-field:focus {
  outline: none;
  border: 1px solid #337DFF;
}

.submit-button {
  background-color: #337DFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: bold;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
