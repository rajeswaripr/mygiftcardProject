<template>
<div class="OrderHistory">

 <h1> {{message}} </h1>

   
    <form class="container">
   <div >
   <table id="orderhistory">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Recipient Name </th>
             <th> Ordered Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th> 
             <th> Delivery Status </th>  
   </tr>
   </thead>
   <tbody v-for="order in orderHistory" :key="order.id">
   <tr>
        <td> {{order.id}} </td>
          <td> {{order.firstName}} {{order.lastName}} </td>
            <td> {{order.date}} </td>
              <td> INR {{order.value}} </td>
                <td> INR {{order.commission}} </td>
                
   </tr>
   </tbody>
   
   </table>
  </div>
        
        </form>
</div>
</template>
<script>

export default {
    name:'orderhistory',
    data: function(){
       return{
           message:'Here is your Order historys',
           orderHistory:[]
       }
    },
    methods:{
        GetOrderHistory: function(){
            this.$http.get('http://localhost:3000/giftcards')
            .then(response=> {
                console.log(response.data)
                this.orderHistory = response.data
            }, err=> {
                console.log(err)
            })
        },
         previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      }
      

    },
    
    created:function(){
    this.GetOrderHistory()
  }
    
  
}
</script>

<style scoped>
#orderhistory {

  border-collapse: collapse;
  width: 100%;
}

#orderhistory td, #orderhistory th {
  border: 1px solid #ddd;
  padding: 8px;
}

#orderhistory tr:nth-child(even){background-color: #1370c7;}

#orderhistory tr:hover {background-color: #ddd;}

#orderhistory th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #1b08c2;
  color: white;
}
.container {
  padding: 10px;
  
}
button {
  background-color:rgb(90, 176, 216);
  color: white;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
</style>