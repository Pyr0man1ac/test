import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Form from '../components/TestForm'
import Main from '../components/Main'
import lg from '../components/lg'
import User from '../components/User'
import Radio from '../components/TestRadio'
import Check from '../components/TestCheckBox'
import Doc from '../components/VueDoc'
import HomePage from '../components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage
    },
    
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path:'/doc',
      name:'Doc',
      component:Doc
    },

    {
      path:'/check',
      name:'Check',
      component:Check
    },

    {
      path:'/radio',
      name:'Radio',
      component:Radio
    },

    {
      path:'/login',
      name:'Login',
      component:Login
    },

    {
      path:'/form',
      name:'Form',
      component:Form
    },

    {
      path:'/main',
      name:'Main',
      component:Main
    },

    {
      path:'/user',
      name:'User',
      component:User,
      children: [
        {
          path:'/user/:user_id',
          name:'User_id',
          component:User
        }
      ]
    },

    {
      path:'/lg',
      name:'lg',
      component:lg
    }
  ]
})
