<template>
<div class="OrderReport">

 <h1> {{message}} </h1>

   
    <form class="container">
   <div >
   <table id="orderreport">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Recipient Name </th>
             <th> Ordered Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th>              
   </tr>
   </thead>
   <tbody v-for="order in orderReport" :key="order.id">
   <tr>
        <td> {{order.id}} </td>
          <td> {{order.firstName}} {{order.lastName}} </td>
            <td> {{order.date}} </td>
              <td> INR {{order.value}} </td>
                <td> INR {{order.commission}} </td>
                
   </tr>
   </tbody>
   
   </table>
      <button type="button" v-on:click="previous()"> Previous </button>  
<br>
        </div>
        
        </form>
</div>
</template>
<script>

export default {
    name:'orderReport',
    data: function(){
       return{
           message:'Here is the Order report',
           orderReport:[]
       }
    },
    methods:{
        GetOrderReport: function(){
            this.$http.get('http://localhost:3000/giftcards')
            .then(response=> {
                console.log(response.data)
                this.orderReport = response.data
            }, err=> {
                console.log(err)
            })
        }
      

    },
    
    created:function(){
    this.GetOrderReport()
  }
    
  
}
</script>

<style scoped>
#history {

  border-collapse: collapse;
  width: 100%;
}

#history td, #history th {
  border: 1px solid #ddd;
  padding: 8px;
}

#history tr:nth-child(even){background-color: #f2f2f2;}

#history tr:hover {background-color: #ddd;}

#history th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #666699;
  color: white;
}
.container {
  padding: 16px;
  
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
</style>