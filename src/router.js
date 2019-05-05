import Vue from 'vue'
import VueRouter from 'vue-router'
import JWT from './components/JWT'
import JWK from './components/JWK'
import Metadata from './components/Metadata'
import RSA from './components/RSA'
import BasicLayout from './layout/BasicLayout'
import Cert from './components/Cert'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', name: 'basicLayout', component: BasicLayout, children: [
      {path: '/jwt', name:'jwt', component: JWT},
      {path: '/jwk', name:'jwk', component: JWK},
      {path: '/metadata', name:'metadata', component: Metadata},
      {path: '/rsa', name:'rsa', component: RSA},
      {path: '/cert', name:'cert', component: Cert},
    ]}
  ]
})