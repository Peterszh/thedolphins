import Vue from 'vue'
import VueRouter from 'vue-router'
import studentlist from '../pages/student/studentlist.vue'
import activePublic from '../pages/activePublic/index.vue'
import step1 from '../pages/activePublic/step1.vue'
import step2 from '../pages/activePublic/step2.vue'
import step3 from '../pages/activePublic/step3.vue'
import step4 from '../pages/activePublic/step4.vue'


import totalpages from '../pages/activeManage/totalpages.vue'
import activeManage from '../pages/activeManage/index.vue'
import detail from '../pages/activeManage/detail.vue'

import page1 from '../pages/activeManage/page1.vue'
import page2 from '../pages/activeManage/page2.vue'
import page3 from '../pages/activeManage/page3.vue'
import page4 from '../pages/activeManage/page4.vue'
import page5 from '../pages/activeManage/page5.vue'
import userprofile from '../pages/userprofile/userprofile.vue'
import techermanage from '../pages/techermanage/techermanage.vue'
import coursemanage from '../pages/coursemanage/coursemanage.vue'

import consult from '../pages/desktop/consult.vue'
import consult_search from '../pages/desktop/consult_search.vue'

if (!window.VueRouter) Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/zh-CN',
        name: 'home'
    }, {
        path: '/zh-CN',
        name: 'cn'
    }, {
        path: '/en-US',
        name: 'en'
    }, {
        path: '/activeManage',
        component: totalpages,
        children: [
            { path: '', component: activeManage }, {
                path: 'detail',
                component: detail,

                children: [
                    { path: '', component: page1 }, {
                        path: 'page1',
                        component: page1,
                        children: [
                            { path: '', component: step1 },
                            { path: 'step1', component: step1 },
                            { path: 'step2', component: step2 },
                            { path: 'step3', component: step3 },
                            { path: 'step4', component: step4 }
                        ]
                    },
                    { path: 'page2', component: page2 },
                    { path: 'page3', component: page3 },
                    { path: 'page4', component: page4 },
                    { path: 'page5', component: page5 }
                ]
            },
        ]
    }, {
        path: '/activePublic',
        component: activePublic,
        children: [
            { path: '', component: step1 },
            { path: 'step1', component: step1 },
            { path: 'step2', component: step2 },
            { path: 'step3', component: step3 },
            { path: 'step4', component: step4 }
        ]
    }, {
        path: '/studentlist',
        component: studentlist
    }, {
        path: '/techermanage',
        component: techermanage
    }, {
        path: '/coursemanage',
        component: coursemanage
    }, {
        path: '/userprofile',
        component: userprofile,
        children: [
            { path: '', component: step2 },
            { path: 'step1', component: step2 },
            { path: 'step2', component: step2 },
            { path: 'step3', component: step2 },
            { path: 'step4', component: step2 }
        ]
    }, {
        path: '/consult',
        component: consult
    }, {
        path: '/consult_search',
        component: consult_search
    }

]
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
})

export default router
