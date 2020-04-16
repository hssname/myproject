<template>
  <div class="layout">
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { isMobile, getWechatMenu} from '../../util/WX/OAuth'
  //GetRequest, getTokens, getUsers, authorize, (corpId: 全局搜索切换)
  export default {
    name: 'app',
    data () {
      return {
        code: null,
      }
    },
    async beforeRouteEnter (to, from, next) {
      if (to.meta.title) {
        document.title = to.meta.title
      }
      try {
        // const pathArr = [
        //   { path: 'news', id: 0 },
        //   { path: 'MyNews', id: 0 },
        //   { path: 'Leader', id: 0 },
        //   { path: 'meeting', id: 0 },
        //   { path: 'netdisc', id: 0 },
        //   { path: 'Upcoming', id: 2 },
        //   { path: 'MineAgenda', id: 0 },
        //   { path: 'ApplyIndex', id: 0 },
        //   { path: 'officialCar', id: 0 },
        //   { path: 'ManageIndex', id: 0 },
        //   { path: 'MessageIndex', id: 0 },
        //   { path: 'CivilServant', id: 0 },
        //   { path: 'LeaderAgenda', id: 0 },];
        // const { code, path: paths } = GetRequest();
        // const path = paths.split('/')[1];
        // const { id: applicationId } = pathArr.find((item) => item.path === path);



        /*const { code } = GetRequest();
         const user = JSON.parse(localStorage.getItem('user'));
         if (code) {
           // await getTokens(code, applicationId);
           await getTokens(code);
         } else if (user) {
           await getUsers(user.nickName);
         } else {
           await authorize();
         }*/
        await getWechatMenu();
      } finally {
        next();
      }
    },
    watch: {
      $route: {
        handler: function (to) {
          if (!to.meta.title) return;
          document.title = to.meta.title;
          // 解决IOS
          if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            const hackIFrame = document.createElement('iframe');
            hackIFrame.style.display = 'none';
            hackIFrame.src = 'static/html/fixIosTitle.html?r=' + Math.random();
            document.body.appendChild(hackIFrame);
            setTimeout(() => {
              document.body.removeChild(hackIFrame)
            }, 300)
          }
        },
        // 深度观察监听
        deep: true
      }
    },
    methods: {
      ...mapActions('Global', ['setIsMobile'])
    },
    mounted () {
      this.setIsMobile(isMobile())
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
</style>
