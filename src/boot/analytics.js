import VueAnalytics from 'vue-analytics';

export default async ({ router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-128246324-5',
    router
  });
}
