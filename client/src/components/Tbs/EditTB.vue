<template>
  <div class="create-table">
    <h1>Edit Table</h1>
    <form v-on:submit.prevent="editTable">
      <p>Type: <input type="text" v-model="table.type" class="input-field"></p>
      <p>Brand: <input type="text" v-model="table.brand" class="input-field"></p>
      <p>Color: <input type="text" v-model="table.color" class="input-field"></p>
      <p>Material: <input type="text" v-model="table.material" class="input-field"></p>
      <p><button type="submit">Edit Table</button></p>
    </form>
    <hr>
    <div>
      <p>Type: {{ table.type}}</p>
      <p>Brand: {{ table.brand }}</p>
      <p>Color: {{ table.color }}</p>
      <p>Material: {{ table.material }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import TablesService from '../../services/TablesService';

export default {
  data() {
    return {
      table: {
        TYPE: '',
        Price: '',
        Brand: '',
        Color: '',
        material: '',
      }
    }
  },
  methods: {
    async editTable() {
      try {
        await TablesService.put(this.table);
        this.$router.push({
          name: 'table'
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTable() {
      try {
        let tableId = this.$route.params.tableId;
        this.table = (await TablesService.show(tableId)).data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchTable();
  }
}
</script>

<style scoped>
</style>

<style scoped>
  /* ตั้งค่าสีพื้นหลังและขอบของคอมโพเนนต์ */
  .create-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  /
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  
  form {
    text-align: center;
  }

 
  .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border 0.3s ease;
  }

  .input-field:focus {
    outline: none;
    border: 1px solid #337DFF;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
  }

  /* สไตล์ของปุ่มสำหรับแบบฟอร์ม */
  button[type="submit"] {
    background-color: #E27C1D;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
  background-color: #E8D2A1; 
}

  /* สไตล์ของข้อมูลที่แสดงออกมา */
  div p {
    font-size: 18px;
    margin: 10px 0;
  }
</style>
