<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action >
            <v-icon :class="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="item.color">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />

      <v-toolbar-items>
        <v-btn 
          text
        >
          E-Logo
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in items" :key="i">

        <v-btn 
          :to="item.to"
          :class="item.color"
          link
          text
        >
        <v-icon small left>{{item.icon}}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
     
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="true"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
         { 
           title: 'Home', icon: 'mdi-home', to: '/Courses' },
         { title: 'Profile', icon: 'mdi-information', to: '/editProfile' },
         { title: 'About', icon: 'mdi-information', to: '/aboutForLoggedIn' },
         { title: 'Live Class', icon: 'mdi-radiobox-marked', to: '/liveClass', color: 'red--text' },
         { title: 'Class Request', icon: 'mdi-clock', to: '/request' },
         { title: 'Upcoming Class', icon: 'mdi-information', to: '/schedule' },
         { title: 'Logout', icon: 'mdi-logout', to: '/login' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'E-Logo'
    }
  }
}
</script>
