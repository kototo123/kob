<template>
    <div class="game-body">
      <MenuView v-if="$store.state.router.router_name === 'menu'" />
      <PkIndexViewvue v-else-if="$store.state.router.router_name === 'pk'" />
      <RecordIndexViewVue v-else-if="$store.state.router.router_name === 'record'" />
      <RecordContentViewVue v-else-if="$store.state.router.router_name === 'record_content'" />
      <RanklistIndexViewVue v-else-if="$store.state.router.router_name === 'ranklist'" />
      <UserBotIndexViewVue v-else-if="$store.state.router.router_name === 'user_bot'" />
    </div>
</template>

<script>
import { useStore } from "vuex";
import MenuView from "./views/MenuView.vue";
import PkIndexViewvue from "./views/pk/PkIndexView.vue";
import RecordIndexViewVue from "./views/record/RecordIndexView.vue";
import RecordContentViewVue from "./views/record/RecordContentView.vue";
import RanklistIndexViewVue from "./views/ranklist/RanklistIndexView.vue";
import UserBotIndexViewVue from "./views/user/bot/UserBotIndexView.vue";

export default {
  components: {
    MenuView,
    PkIndexViewvue,
    RanklistIndexViewVue,
    RecordContentViewVue,
    RecordIndexViewVue,
    UserBotIndexViewVue
  },
  setup() {
    const store = useStore();

    const jwt_token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjYTExZGZiMmU4N2E0NTMwYjg5ZWI5Nzc5ZTAwMjNjMiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTcxMDE1MjQ4MiwiZXhwIjoxNzExMzYyMDgyfQ.5zG9huz4i_5ZL1EKyWVluPft_1RVH7JCar6pK5FaCNo";
    if (jwt_token) {
      store.commit("updateToken", jwt_token);
      store.commit("updatePullingInfo", true);
      store.dispatch("getinfo", {
        success() {
          store.commit("updatePullingInfo", false);
        },
        error() {
          store.commit("updatePullingInfo", false);
        }
      });
    } else {
      store.commit("updatePullingInfo", false);
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
div.game-body {
  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}

div.window {
  width: 100vw;
  height: 100vh;
}
</style>
