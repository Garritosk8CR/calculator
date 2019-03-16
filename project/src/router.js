import Vue from 'vue'
import Router from 'vue-router'
import Store from './store/store'
import MainNavbar from '../src/layout/MainNavbar'
import MainFooter from '../src/layout/MainFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trainingmanagement',
      name: 'trainingmanagement',
      components: {
        default: null,
        header: MainNavbar
      },
      props: {
        header: {
          colorOnScroll: 400,
          title: '101st Airborne Division Training Management',
          items: [
            {
              icon: '',
              text: 'Sign Up',
              path: '/signup'
            },
            {
              icon: '',
              text: 'Login',
              path: '/login'
            }
          ],
          toolbarColor: 'md-dark'
        }
      },
      children: [
            { path: '/login' , components: {default: null}, name: 'traininglogin' },
            { path: '/signup' , component: null }
      ]
    },
    {
        path: '/',
        component: null,
        name: 'trainingdashboard',
        beforeEnter(to, from, next) {
            if(Store.getters.isAuthenticated) {
                next()
            } else {
                next('/login')
            }
        },
        children: [
            { path: 'enlisted' , component: null, name: 'enlisted' },
            { path: 'bct' , component: null, name: 'bct' }
        ]
    }

  ],
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
