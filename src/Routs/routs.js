import registeruser from "../components/registeruser.vue";
import sendgiftcard from "../components/sendGiftCard.vue";
import orderHistory from "../components/OrderHistory.vue";
import Login from "../components/Login.vue";
import OrderReport from "../components/OrderReport";
import UpdateOrder from "../components/AdminHome.vue";


export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path:'/registeruser',
        component:registeruser
    },
    {
        path:'/sendgiftcard',
        component:sendgiftcard
    },
    {
        path:'/orderhistory',
        component:orderHistory
    },
    {
        path: '/MonthlyReport',
        component: OrderReport
    },
    {
        path: '/UpdateOrder',
        component: UpdateOrder
    }

    
    
]