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
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer" />

      <v-toolbar-items>
        <v-btn 
          text
        >
          E-Logo
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-md-and-down" v-for="(item,i) in items" :key="i">

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
           title: 'All Users', icon: 'mdi-information', to: '' },
         { title: 'All Courses', icon: 'mdi-information', to: '' },
         { title: 'Schedule Free Class', icon: 'mdi-information', to: '/admin/addFreeCourseSchedule' },
         { title: 'Add Free Course', icon: 'mdi-radiobox-marked', to: '/admin/addFreeCourse' },
         { title: 'Class Requests', icon: 'mdi-clock', to: '' },
         { title: 'Logout', icon: 'mdi-logout', to: '' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'E-Logo'
    }
  }
}
</script>
