export default [{
    menuTitle: '桌面',
    menuIcon: 'fa-windows',
    to: '/desktop'
}, {
    menuTitle: '前台业务',
    menuIcon: 'fa-laptop',
    menuName: 'menu1',
    menu: [{
        menuTitle: '咨询',
        menuIcon: 'fa-phone-square',
        to: '/coursemanage'
    }, {
        menuTitle: '报名',
        menuIcon: 'fa-keyboard-o',
        to: '/techermanage'
    }, {
        menuTitle: '签到',
        menuIcon: 'fa-pencil-square-o',
        to: '/techermanage'
    }]
}, {
    menuTitle: '教务教学',
    menuIcon: 'fa-clipboard',
    menuName: 'menu1',
    menu: [{
        menuTitle: '课程设置',
        menuIcon: 'fa-book',
        to: '/coursemanage'
    }, {
        menuTitle: '班级管理',
        menuIcon: 'fa-group',
        to: '/techermanage'
    }, {
        menuTitle: '学员管理',
        menuIcon: 'fa-user',
        to: '/techermanage'
    }, {
        menuTitle: '教室管理',
        menuIcon: 'fa-sitemap',
        to: '/techermanage'
    }, {
        menuTitle: '老师管理',
        menuIcon: 'fa-male',
        to: '/techermanage'
    }, {
        menuTitle: '排课',
        menuIcon: 'fa-calendar',
        to: '/techermanage'
    }]
}, {
    menuTitle: '系统设置',
    menuIcon: 'fa-gear',
    menuName: 'menu1',
    menu: [{
        menuTitle: '账号设置',
        menuIcon: 'fa-credit-card',
        to: '/coursemanage'
    }]
}];
