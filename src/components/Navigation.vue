<template>

    <div class="topnav">
    <a class="active" > <img id="smilelogo" alt="smile logo" src="../assets/smile.jpg"> </a>
   
 <a>  <i class="fa fa-home"><router-link to="/" exact>Login </router-link> </i>  </a>

<a>  <router-link to="/registeruser" exact>Register</router-link> </a>
<a>  <router-link to="/sendgiftcard" >Gift Card</router-link> </a>
<a>  <router-link to="/orderhistory" exact>Order History</router-link> </a>
      
    </div>
</template>

<script>
export default {
  props: {
        isLogin: String,
        userId: String
    },
}
</script>

<style scoped>

.router-link-active{
    background-color: lightgrey;
    color: red;
}

li{
    display: inline-block;
    margin: 10px;
    padding: 10px;

}

ul{
    list-style-type: none;

}
.topnav {
  background-color:#f8e009 ;
  overflow: hidden;
  height: 50px;
}

#smilelogo{
  height: 50px;
  width: 50px;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  font-size: 15px;
 
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color:#f8e009 ;
 color: white;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #f8e009;
  color: white;
}



</style>