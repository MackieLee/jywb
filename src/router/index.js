    const Member = r => require.ensure([], () => r(require('../pages/member/Member')), 'Member')
    const Topics = r => require.ensure([], () => r(require('../pages/topics/Topics')), 'Topics')
    const Login = r => require.ensure([], () => r(require('../pages/login/Login')), 'Login')


  export default [
    {
      path: '/',
      component: Login,
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/member',
      component: Member,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/topics',
      component: Topics,
      meta: {
        keepAlive: true
      }
    }
  ]
