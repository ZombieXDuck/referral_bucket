import Vue from 'vue'
import Router from 'vue-router'
import ReferralBucket from '@/components/ReferralBucket'
import GrabCode from '@/components/GrabCode'
import AddCode from '@/components/AddCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RefferalBucket',
      component: ReferralBucket
    },
    {
      path: '/grab',
      name: 'GrabCode',
      component: GrabCode
    },
    {
      path: '/add',
      name: 'AddCode',
      component: AddCode
    }
  ]
})
