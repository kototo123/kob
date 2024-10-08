import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '@/views/pk/PkIndexView.vue'
import RecordIndexView from '@/views/record/RecordIndexView.vue'
import RecordContentView from '@/views/record/RecordContentView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView.vue'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView.vue'
import NotFound from '@/views/error/NotFound.vue'
import UserAccountLoginViewVue from '@/views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterViewVue from '@/views/user/account/UserAccountRegisterView.vue'
import UserAccountAcWingWebReceiveCodeViewVue from '@/views/user/account/UserAccountAcWingWebReceiveCodeView.vue'
import store from '@/store'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/:recordId/",
    name: "record_content",
    component: RecordContentView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/404/",
    name: "not_found_index",
    component: NotFound,
    meta: {
      requestAuth: false,
    }
  },
  
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginViewVue,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterViewVue,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/user/account/acwing/web/receive_code",
    name: "user_account_acwing_web_receive_code",
    component: UserAccountAcWingWebReceiveCodeViewVue,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to , from , next) => {
  if(to.meta.requestAuth && !store.state.user.is_login) {
    next({name: "user_account_login"});
  } else {
    next();
  }
})

export default router
