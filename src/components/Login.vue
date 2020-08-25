<template>
<div class="login">
<span>
<h2> {{message}} </h2>
</span>

<form class="container">
<label> <b>Name : </b> </label> 
<input type="text" v-model="userName" >
<br>
<label> <b> Password : </b> </label> 
<input type="password"  v-model.lazy="password">
<br>
<input type="button" text="Login" v-on:click="loginUser()">
</form>
</div>
</template>
<script>
export default{
    name:"login",
    data: function(){
        return {
            message:"Login",
            userName: "",
            password: "",       
            error:[]
          
        }
    },
    methods:{
        enterKeyPress: function(e){
            if(e.keyCode == 13){
                if(this.validate())
                    this.login();
                else
                    this.message = 'Please provide ALL fields';
            }
        },
        validate: function(){
            if(this.userName != '' && this.password != '')
                return true;
            else
                return false;
        },
        loginUser: function(){
            if(!this.validate()){
                this.message = 'Please provide ALL fields';
                return;
            }
            else{
                 this.$http.get("http://localhost:3000/users/", {
                     params: {
                         userName: this.userName,
                         password: this.password
                     }
                 })
                .then(res => {
                    console.log(res.data);
                    if(res.data.length == 1){
                        this.message = 'Success';
                        var id = res.data[0].id;
                        if(id == 1)
                            this.$router.push({path: 'orderhistory'});
                        else
                            this.$router.push({path: 'sendgiftcard'})
                    }
                    else
                        this.message = 'Invalid credentials';
                    this.userName = this.password = '';
                }, err => {
                    console.log(err);
                })
            }
        
    }
} 
}

</script>

