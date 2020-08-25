<template>
<div class="adminOrder">

 <h1> {{message}} </h1>

   
    <form class="container">
   <div >
   <table id="updateorder">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Recipient Name </th>
             <th> Ordered Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th>  
             <th> Status </th>  
             <th>Action</th>             
   </tr>
   </thead>
   <tbody v-for="order in orders" :key="order.id">
   <tr>
        <td> {{order.id}} </td>
          <td> {{order.firstName}} {{order.lastName}} </td>
            <td> {{order.date}} </td>
              <td> INR {{order.value}} </td>
                <td> INR {{order.commission}} </td>
                
                <td>{{ order.status }} </td>
               <td>
                   <button class="orderstatus" v-on:click="UpdateOrderStatus(order)" :disabled = "getActionText(order.status) == 'Renew it'" >{{ getActionText(order.status) }} </button>
               </td>
                
   </tr>
   </tbody>
   
   </table>
   
        </div>
        
        </form>
</div>
</template>
<script>

export default {
    name:'updateOrder',
    data: function(){
       return{
           message:'Here is undelivered orders',
           orders:[]
       }
    },
    methods:{
        GetOrders: function(){
            this.$http.get('http://localhost:3000/giftcards')
            .then(response=> {
                console.log(response.data)
                this.orders = response.data
            }, err=> {
                console.log(err)
            })
        },
         previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      },
      UpdateOrderStatus: function(order){
                    
            var status = 'New';
            var currentStatus = order.status;

            if(currentStatus == 'New')
                status = 'Out for Delivery';
            else if(currentStatus == 'Out for Delivery')
                status = 'Delivered';
            else if(currentStatus == 'Delivered')
                status = 'Redeemed';

            this.$http.patch("http://localhost:3000/giftCards/" + order.id, {
                status: status
            })
                .then(res => {
                    console.log(res);
                    this.GetOrders();
                }, err => {
                    console.log(err);
                })
        
        
      },
      getActionText: function(status){
            var actionText = 'Renew it';

            if(status == 'New')
                actionText = 'Deliver it';
            else if(status == 'Out for Delivery')
                actionText = 'Mark Delivered';
            else if(status == 'Delivered')
                actionText = 'Mark Redeemed';
            
            return actionText;
        }
      

    },
    
    created:function(){
    this.GetOrders()
  }
    
  
}
</script>

<style scoped>
#updateorder {

  border-collapse: collapse;
  width: 100%;
}


#updateorder td, #orderhistory th {
  border: 1px solid #ddd;
}

#updateorder tr:nth-child(even){background-color: #ceba08;}

tr:nth-child(even) {
  background-color: #62daca;
}

#updateorder tr:hover {background-color: #ddd;}

#updateorder th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #1b08c2;
  color: white;
}
.container {
  padding: 16px;
  
}
button {
  background-color:rgb(90, 176, 216);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
</style>