import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import computed from '@/components/computed'
import watch from '@/components/watch'
import activeClass from '@/components/activeClass'
import vfor from '@/components/v-for'
import ifOrShow from '@/components/ifOrShow'
import event from '@/components/event'
import fatherSon from '@/components/fatherSon'
import eventBus from '@/components/eventBus'
import nextTick from '@/components/nextTick'
import activeComponents from '@/components/activeComponents'

import asyncComponent from '@/components/asyncComponent'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'asyncComponent',
      component: asyncComponent
    },
    // {
    //   path: '/',
    //   name: 'activeComponents',
    //   component: activeComponents
    // },
    // {
    //   path: '/',
    //   name: 'nextTick',
    //   component: nextTick
    // },
    // {
    //   path: '/',
    //   name: 'eventBus',
    //   component: eventBus
    // },
    // {
    //   path: '/',
    //   name: 'fatherSon',
    //   component: fatherSon
    // },
    // {
    //   path: '/',
    //   name: 'event',
    //   component: event
    // },
    // {
    //   path: '/',
    //   name: 'vfor',
    //   component: vfor
    // },
    // {
    //   path: '/',
    //   name: 'ifOrShow',
    //   component: ifOrShow
    // },
    // {
    //   path: '/',
    //   name: 'activeClass',
    //   component: activeClass
    // },
    // {
    //   path: '/',
    //   name: 'watch',
    //   component: watch
    // },
    // {
    //   path: '/',
    //   name: 'computed',
    //   component: computed
    // },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
