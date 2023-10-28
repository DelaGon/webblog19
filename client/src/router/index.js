import Vue from "vue";
import Router from "vue-router";

// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

// Tables 
import TableIndex from "@/components/Tbs/Index";
import TableCreate from "@/components/Tbs/CreateTB"; 
import TableEdit from "@/components/Tbs/EditTB"; 
import TableShow from "@/components/Tbs/ShowTable"; 

import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "users-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    
    {
      path: "/tables",
      name: "tables",
      component: TableIndex
    },
    {
      path: "/table/create",
      name: "tables-create",
      component: TableCreate
    },
    {
      path: "/table/edit/:tableId",
      name: "tables-edit",
      component: TableEdit
    },
    {
      path: "/table/:tableId",
      name: "table",
      component: TableShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
