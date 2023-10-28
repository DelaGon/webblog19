<template>
  <div class="table-container">
    <p><button v-on:click="logout">Logout</button></p>
    <h2>Get All Tables</h2>
    <h4>จำนวนโต๊ะ {{ tables.length }}</h4>
    <div v-for="table in tables" v-bind:key="table.id" class="table-item">
      <p>Type: {{ table.type }}</p>
      <p>Brand: {{ table.brand }}</p>
      <p>Color: {{ table.color }}</p>
      <p>Material: {{ table.material }}</p>
      <p>
        <button v-on:click="navigateTo('/table/' + table.id)">ดูข้อมูล</button>
        <button v-on:click="navigateTo('/table/edit/' + table.id)">แก้ไขข้อมูล</button>
        <button v-on:click="deleteTable(table)">ลบข้อมูล</button>
      </p>
    </div>
  </div>
</template>

<script>
import TablesService from '@/services/TablesService';

export default {
  data() {
    return {
      tables: []
    }
  },
  async created() {
    this.tables = (await TablesService.index()).data;
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login'
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteTable(table) {
      let result = confirm("ต้องการลบข้อมูลโต๊ะหรือไม่?");
      if (result) {
        try {
          await TablesService.delete({ table });
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      this.tables = (await TablesService.index()).data;
    }
  }
}
</script>

<style scoped>
</style>
<style scoped>

.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}


.table-item {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

/* เพิ่มสไตล์สำหรับปุ่ม Logout */
button {
  background-color: #EFEFEF; 
  color: #333; 
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px; 
  transition: background-color 0.3s ease; 
}

/* เพิ่่มสไตล์เมื่อนำเมาส์ไปชี้ปุ่ม */
button:hover {
  background-color: #DDDDDD; 
}


h2 {
  font-size: 24px;
}

h4 {
  font-size: 16px;
}

/* เพิ่มสไตล์สำหรับปุ่มดูข้อมูล, แก้ไขข้อมูล และลบข้อมูล */
button[v-on:click^="navigateTo"] {
  background-color: #337DFF;
}

button[v-on:click^="deleteTable"] {
  background-color: #FF3333;
}

/* เพิ่มสไตล์สำหรับปุ่มประเภทของโต๊ะ */
p:has(> [v-for="table in tables"]) {
  font-weight: bold;
}


.table-item {
  width: 100%;
  max-width: 400px; /* ความกว้างสูงสุดของแต่ละ .table-item */
  margin: 10px;
}
</style>
