  <template>
  <div >
    <p class="title green--text">Admin Dashboard</p>
    <v-layout justify-center mt-4>
      <v-btn
          :to="'/courses'"
          class="green--text font-weight-bold caption"
          router
          exact
      >GO TO USER PAGE</v-btn>
  </v-layout>
    <v-layout row wrap justify-center class="mt-4">

      <v-flex md4 ma-1 class="pr-2" >
        <v-card
          color="blue-grey darken-2"
          :hover="hoverVariable"
          height="200px"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline">All Users</div>
              <span>View all users</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex md4 ma-1 class="pr-2" >
        <v-card
          color="blue-grey darken-2"
          :hover="hoverVariable"
          height="200px"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline">All Courses</div>
              <span>View all recorded courses</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

       <v-flex ma-1 md4 class="pr-2">
        <v-card
          color="blue-grey darken-2"
          :hover="hoverVariable"
          height="200px"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline">All Schedule</div>
              <span>View all scheduled class</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex ma-1 md4 class="pr-2" @click="goToFreeSchedule()">
        <v-card
          color="blue-grey darken-2"
          :hover="hoverVariable"
          height="200px"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline">Schedule Free Class</div>
              <span>Schedule free class</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex ma-1 md4 class="pr-2" @click="goToFreeCourse()">
        <v-card
          color="blue-grey darken-2"
          :hover="hoverVariable"
          height="200px"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline">Add Free Course</div>
              <span>Add recorded free class</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

 <script>

export default {
  layout: 'admin',
  data() {
    return {
      hoverVariable: true
    }
  },
  computed: {
    
  },

  methods: {

    goToFreeCourse(){
      this.$router.push('/admin/addFreeCourse')
    },

    goToFreeSchedule(){
      this.$router.push('/admin/addFreeCourseSchedule')
    }
    
  }
}
</script>

<style>
.v-input .v-label {
  font-size: 14px !important;
}
</style>
