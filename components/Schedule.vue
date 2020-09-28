<template>
  <v-layout row wrap justify-center>
     <v-snackbar
        v-model="snackbar"
        timeout="5000"
      > 
            {{error}}
      </v-snackbar>

      <v-flex class="pr-2" ma-2 v-for="(schedule, i) in schedules" :key="i">
        <v-card
          color="green darken-2"
          class="white--text"
        >
          <v-card-title primary-title>
            <div>
              <div class="headline white--text font-weight-bold">{{ schedule.courseTitle }}</div>
              <div class="black--text darken-4">Time: {{ schedule.startTime}}</div>
              <div class="black--text"> Date: {{ schedule.scheduleDate}}</div>
              <div class="black--text darken-4">Location link: {{ schedule.locationLink}}</div>
              <div class="blue-grey black--text darken-2">Description: {{ schedule.description }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data(){
    return {
      schedules: [],
      snackbar: false,
      error: '',
    }
  },
  async mounted(){
        try {
            // check if store has value getUserDetails
            let storeDetail = this.$store.getters.getUserDetails;
            
            if(storeDetail.token){
                let id = this.$store.getters.getUserID;
                let token = this.$store.getters.getToken;
                

                // set token
                await this.$axios.setToken(token, 'Bearer')
                const publicSchedules = await this.$axios.$get(
                    'http://localhost:3333/api/v1/schedule/public'
                )

                const privateSchedule = await this.$axios.$get(
                    'http://localhost:3333/api/v1/schedule/' + id
                )
                console.log([...publicSchedules.message, ...privateSchedule.message])

                this.schedules = [...publicSchedules.message, ...privateSchedule.message]
                
            }else{
                const userDataFromLocalStorage = JSON.parse(localStorage.getItem('details'));
                let id = userDataFromLocalStorage.user[0].userID;
                let token = userDataFromLocalStorage.token;
                

                // set token
                await this.$axios.setToken(token, 'Bearer')
                const publicSchedules = await this.$axios.$get(
                    'http://localhost:3333/api/v1/schedule/public'
                )

                const privateSchedule = await this.$axios.$get(
                    'http://localhost:3333/api/v1/schedule/' + id
                )
                console.log([...publicSchedules.message, ...privateSchedule.message])

                this.schedules = [...publicSchedules.message, ...privateSchedule.message]

                }
            
            

        } catch (error) {
            
            this.error = error.response.data.message
            this.snackbar = true;
            setTimeout(() => this.snackbar = false, 5000 );
            console.log(error)
        }
    }

}
</script>

<style>

</style>

