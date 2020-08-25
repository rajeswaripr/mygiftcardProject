<template>
<div class="giftcard">
        <br />
<div :class="isSuccess ? 'success': 'error'">{{ message }}</div>
       

<form class="container">
  <div>
    <table style="width: 100%" id="updateorder"> 

<tr>
     <td> <label> <b> Receipent First Name : </b> </label> 
<input type="text"  v-model.lazy="giftcard.firstName">
     </td>
     <td>
<label> <b> Receipent Last Name : </b> </label> 
<input type="text" v-model.lazy="giftcard.lastName">
</td>
</tr>
<tr>
<td> 
<label> <b> Gift Card Value (Rs) : </b> </label> 
<input type="number" v-on:change="calculateCommission" v-model.lazy="giftcard.value">
</td>
<td>
<label> <b> amount Payable (Inclusive of commission 5%): </b> </label> 
<input type="number"  v-model="amountPayable" disabled >

</td>
</tr>
<tr>
<td> <label> <b> Receipent Mobile No : </b> </label> 
<input type="number" v-model.lazy="giftcard.mobile">
</td>
<td>
<label> <b> Receipent Address : </b> </label> 
<input type="text" v-model.lazy="giftcard.address">

</td>
     </tr>
     </table>
    </div>

<button type="button" v-on:click="SendGiftCard()"> Send Gift Card </button>
<br>
</form>
</div>

</template>

<script>
export default {
    name:'sendgiftcard',
   
    data:function(){
        return{
            message:"Send gift card to your loved ones",
            id:null,
            amountPayable: 0,
            isSuccess: false,
            giftcard:{
                "date": new Date().toLocaleDateString(),
                "firstName":"",
                "lastName":"",
                "value": 0,
                "commission": 0,
                "mobile":"",
                "address":"",
                "status" : "New"
            },
            error:[]
        }
    },

    methods:{
        SendGiftCard: function(){
           let valPlaceOrder = this.ValidateCard()
      
      if(valPlaceOrder){
          this.$http.post('http://localhost:3000/giftcards', this.giftcard)
          .then(response=>{
            this.isSuccess = true;
            this.message = " Order sent successfully! "
              console.log(response)
          },err=>{
            this.isSuccess = false;
              console.log(err)
          })
      }
    },
    ValidateCard: function(){
       console.log("Placing new Order")
       if(this.giftcard.id == 0){
       this.error.push("Id must be non zero")
       return false
     }

     return true
    },
     
      calculateCommission: function(){
            this.giftcard.commission = this.giftcard.value * (5/100);
            this.amountPayable = +this.giftcard.value + +this.giftcard.commission;
        }

    }
}
</script>
<style scoped>

input[type=text] , input[type=date],input[type=number]{
  
  padding: 10px;
  margin: 5px 0 2px 0; 
  border: none;
  background: #b1a7d6;
   text-align: left;  
}
td {
  
  text-align: left;
  padding: 8px;
}

button {
  background-color:rgb(42, 17, 153);
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

</style>