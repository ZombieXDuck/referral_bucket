import Vue from 'vue'
import Router from 'vue-router'
import ReferralBucket from '@/components/ReferralBucket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RefferalBucket',
      component: ReferralBucket
    }
  ]
})
