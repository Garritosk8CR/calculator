<template>
   <v-app>
      <router-view name="header" />
      <div>
         <router-view />
      </div>
      <router-view name="footer" />
   </v-app>
</template>

<script>

export default {
  components: {

  },
  data: () => ({
  }),
  props: {
    source: String
  },
  methods: {

  }
}
</script>
