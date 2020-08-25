<template>
<div class="registeruser">
<span>
<h1> {{message}} </h1>
</span>

<form class="container">
<label> <span class="mandatory"> * </span> <b> User Name </b>   </label> 
<br>
<input type="text" v-model.lazy="user.userName" required>
<br>

<label> <span class="mandatory"> * </span> <b>Email </b> </label>
<br>
<input type="text" v-model.lazy="user.email" required>
<br>
<label> <span class="mandatory"> * </span> <b>Password </b> </label> <br>
<input type="text" v-model.lazy="user.password" required> 
<br>
<label><b> Confirm  Password </b> </label> <br>
<input type="text" v-model.lazy="confirmPassword" required>
<br>
          <button type="button"  v-on:click="registeruserdetails()">Register/SignUp</button>


</form>
</div>
</template>
<script>
export default {
  name: 'registeruser',
  data: function(){
    return {
          message:"Register Here to send Gift Cards",
          confirmPassword: "",
          user:{
             "userName":"",
             "email": "",
             "password": ""
          },
          error:[]
      }
  },
  methods:{
    registeruserdetails: function(){
      let isValidUser = this.ValidateUser()
     
      if(isValidUser){
              this.$http.post('http://localhost:3000/users', this.user)
                .then(response=>{
                  console.log(response)
                  this.isSuccess = true;
                this.user = [];
                this.confirmPassword = '';
                this.message = 'User registered successfully';
                this.isUserIdAvailable = false;
                }, err=>{
                  console.log(err)
                })
          }
    },
     ValidateUser: function(){
     console.log("Validating....");
     if(this.user.id == 0){
       this.error.push("Id must be non zero")
       return false
     }
     if(this.user.userName === ""){
       this.error.push("Username must be provided")
       return false
     }
     if(this.user.email === ""){
       this.error.push("Email must be provided")
       return false
     }
     
     return true
   }

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input[type=text] {
  width: 25%;
  padding: 10px;
  margin: 5px 0 22px 0;
 /* display: inline-block; */
  border: none;
  background: #ebebe0;
   float:center;
  align-content: left;
}

button {
  background-color:rgb(90, 176, 216);
  color: white;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 18%;
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
.container {
  padding: 16px;
  
}

.mandatory{color:#660000;}

</style>