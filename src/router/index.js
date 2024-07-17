// Load vuex store
import store from '../store'

// Load route views
import Home from '../views/Home.vue'
import Crash from '../views/Crash.vue'
import Roll from '../views/Roll.vue'
import Blackjack from '../views/blackjack/Blackjack.vue'
import BlackjackOverview from '../views/blackjack/BlackjackOverview.vue'
import BlackjackTables from '../views/blackjack/BlackjackTables.vue'
import BlackjackTable from '../views/blackjack/BlackjackTable.vue'
import Duels from '../views/Duels.vue'
import Mines from '../views/Mines.vue'
import Towers from '../views/Towers.vue'
import Unbox from '../views/unbox/Unbox.vue'
import UnboxOverview from '../views/unbox/UnboxOverview.vue'
import UnboxBox from '../views/unbox/UnboxBox.vue'
import Battles from '../views/battles/Battles.vue'
import BattlesOverview from '../views/battles/BattlesOverview.vue'
import BattlesGame from '../views/battles/BattlesGame.vue'
import BattlesCreate from '../views/battles/BattlesCreate.vue'
import Upgrader from '../views/Upgrader.vue'
import Limiteds from '../views/limiteds/Limiteds.vue'
import LimitedsDeposit from '../views/limiteds/LimitedsDeposit.vue'
import LimitedsWithdraw from '../views/limiteds/LimitedsWithdraw.vue'
import Leaderboard from '../views/Leaderboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const Profile = () => import('../views/profile/Profile.vue')
const ProfileTransactions = () => import('../views/profile/ProfileTransactions.vue')
const ProfileGames = () => import('../views/profile/ProfileGames.vue')
const ProfileSettings = () => import('../views/profile/ProfileSettings.vue')
const Rewards = () => import('../views/Rewards.vue')
const Affiliates = () => import('../views/Affiliates.vue')

const Admin = () => import('../views/admin/Admin.vue')
const AdminDashboard = () => import('../views/admin/AdminDashboard.vue')
const AdminUsers = () => import('../views/admin/AdminUsers.vue')
const AdminAffiliates = () => import('../views/admin/AdminAffiliates.vue')
const AdminPromo = () => import('../views/admin/AdminPromo.vue')
const AdminCashier = () => import('../views/admin/AdminCashier.vue')
const AdminBoxes = () => import('../views/admin/AdminBoxes.vue')
const AdminRain = () => import('../views/admin/AdminRain.vue')
const AdminLeaderboards = () => import('../views/admin/AdminLeaderboards.vue')
const AdminFilter = () => import('../views/admin/AdminFilter.vue')
const AdminStats = () => import('../views/admin/AdminStats.vue')
const AdminSettings = () => import('../views/admin/AdminSettings.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/crash',
      name: 'Crash',
      component: Crash
    },
    {
      path: '/roll',
      name: 'Roll',
      component: Roll
    },
    {
      path: '/blackjack',
      component: Blackjack,
      children: [
        {
          path: '',
          name: 'BlackjackOverview',
          component: BlackjackOverview
        },
        {
          path: 'tables',
          name: 'BlackjackTables',
          component: BlackjackTables
        },
        {
          path: 'table/:tableId',
          name: 'BlackjackTable',
          component: BlackjackTable
        }
      ]
    },
    {
      path: '/duels',
      name: 'Duels',
      component: Duels
    },
    {
      path: '/mines',
      name: 'Mines',
      component: Mines
    },
    {
      path: '/towers',
      name: 'Towers',
      component: Towers
    },
    {
      path: '/unbox',
      component: Unbox,
      children: [
        {
          path: '',
          name: 'UnboxOverview',
          component: UnboxOverview
        },
        {
          path: ':boxId',
          name: 'UnboxBox',
          component: UnboxBox
        }
      ]
    },
    {
      path: '/battles',
      component: Battles,
      children: [
        {
          path: '',
          name: 'BattlesOverview',
          component: BattlesOverview
        },
        {
          path: 'create',
          name: 'BattlesCreate',
          meta: {
            auth: true
          },
          component: BattlesCreate
        },
        {
          path: ':gameId',
          name: 'BattlesGame',
          component: BattlesGame
        }
      ]
    },
    {
      path: '/upgrader',
      name: 'Upgrader',
      component: Upgrader
    },
    {
      path: '/limiteds',
      component: Limiteds,
      meta: {
        auth: true
      },
      children: [
        {
          path: 'deposit',
          name: 'LimitedsDeposit',
          component: LimitedsDeposit
        },
        {
          path: 'withdraw',
          name: 'LimitedsWithdraw',
          component: LimitedsWithdraw
        }
      ]
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        auth: true
      },
      children: [
        {
          path: '',
          name: 'ProfileTransactions',
          component: ProfileTransactions
        },
        {
          path: 'games',
          name: 'ProfileGames',
          component: ProfileGames
        },
        {
          path: 'settings',
          name: 'ProfileSettings',
          component: ProfileSettings
        }
      ]
    },
    {
      path: '/rewards',
      name: 'Rewards',
      meta: {
        auth: true
      },
      component: Rewards
    },
    {
      path: '/affiliates',
      name: 'Affiliates',
      meta: {
        auth: true
      },
      component: Affiliates
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/admin',
      component: Admin,
      meta: {
        auth: true,
        admin: true
      },
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          component: AdminDashboard
        },
        {
          path: 'users',
          name: 'AdminUsers',
          component: AdminUsers
        },
        {
          path: 'affiliates',
          name: 'AdminAffiliates',
          component: AdminAffiliates
        },
        {
          path: 'promo',
          name: 'AdminPromo',
          component: AdminPromo
        },
        {
          path: 'cashier',
          name: 'AdminCashier',
          component: AdminCashier
        },
        {
          path: 'boxes',
          name: 'AdminBoxes',
          component: AdminBoxes
        },
        {
          path: 'rain',
          name: 'AdminRain',
          component: AdminRain
        },
        {
          path: 'leaderboard',
          name: 'AdminLeaderboard',
          component: AdminLeaderboards
        },
        {
          path: 'filter',
          name: 'AdminFilter',
          component: AdminFilter
        },
        {
          path: 'stats',
          name: 'AdminStats',
          component: AdminStats
        },
        {
          path: 'settings',
          name: 'AdminSettings',
          component: AdminSettings
        }
      ]
    },
    {
      path: '/verify',
      beforeEnter: (to, from, next) => {
        const data = { userId: to.query.userId, token: to.query.token }
        store.dispatch('authSendCredentialsVerify', data)

        next('/')
      }
    },
    {
      path: '/reset',
      beforeEnter: (to, from, next) => {
        store.dispatch('modalsSetData', { userId: to.query.userId, token: to.query.token })
        store.dispatch('modalsSetShow', 'Reset')

        next('/')
      }
    }
  ]
})

router.beforeEach(async function (to, from, next) {
  if (
    store.getters.authToken !== null &&
    store.getters.authUser.user === null &&
    store.getters.authUser.loading === false
  ) {
    await store.dispatch('authGetUser')
  }

  const affiliateCode =
    to.query.a !== undefined
      ? to.query.a
      : localStorage.getItem('affiliate-code') !== null
        ? localStorage.getItem('affiliate-code')
        : null
  if (affiliateCode !== null) {
    if (store.getters.authUser.user !== null) {
      localStorage.removeItem('affiliate-code')
      store.dispatch('modalsSetData', { code: affiliateCode })
      store.dispatch('modalsSetShow', 'Claim')
    } else {
      localStorage.setItem('affiliate-code', affiliateCode)
    }
  }

  if (to.matched.some((record) => record.meta.auth) && store.getters.authUser.user === null) {
    next(false)
  } else if (
    to.matched.some((record) => record.meta.admin) &&
    (store.getters.authUser.user === null || store.getters.authUser.user.rank !== 'admin')
  ) {
    next(false)
  } else {
    next()
  }
})

export default router
