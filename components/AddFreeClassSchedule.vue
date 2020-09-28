<template>
  <v-layout row wrap justify-center mt-4>
      <v-flex md6 xs12 mt-4>
        <v-row>
             <v-btn class="font-weight-large" to="/admin/dashboard">
                <span class="">Back To Dashboard</span>
              </v-btn>
              <v-col
                cols="12"
                md="12"
              >
              <v-btn
              text
              >
                <span class="signup-btn display-1">Add Free Course Schedule Form</span>
              </v-btn>
              </v-col>
            </v-row>
        <v-form v-model="valid" class="login-container">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="courseTitle"
                  text-align-center
                  filled
                  label="Class Title"
                  type="text"
                  append-icon="mdi-information"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                 v-model="startTime"
                  text-align-center
                  filled
                  label="Start Time"
                  type="text"
                  append-icon="mdi-information"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-textarea
                v-model="locationLink"
                solo
                name="location Link"
                label="paste the meeting link"
                append-icon="mdi-pencil"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="scheduleDate"
                  text-align-center
                  filled
                  label="Schedule Date"
                  type="date"
                  append-icon="mdi-information"
                ></v-text-field>
              </v-col>
            </v-row>


            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-textarea
                v-model="description"
                solo
                name="Class Description"
                label="A short description about upcoming course."
                append-icon="mdi-pencil"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-col
                cols="12"
                md="12"
              >
              <v-btn
              :disabled="disAbleBtn"
              @click.prevent="addSchedule"
              >
                <span class="green--text font-size-large font-weight-bold">Add Free Course Schedule</span>
              </v-btn>
            </v-col>
            <v-snackbar
            v-model="snackbar"
            timeout="5000"
            > 
              {{error}}
            </v-snackbar>
          </v-container>
        </v-form>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      courseTitle: '',
      startTime: '',
      description: '',
      scheduleDate: '',
      locationLink: '',
      snackbar: false,
      error: '',
      disAbleBtn: false
    }),
    methods: {
        async addSchedule(){
            let scheduleData = {
                courseTitle: this.courseTitle,
                startTime: this.startTime,
                description: this.description,
                scheduleDate: this.scheduleDate,
                locationLink: this.locationLink
            };

            let storeDetail = this.$store.getters.getUserDetails;
            
            if(storeDetail.token){
                try {
                  this.disAbleBtn = true;
                  let id = this.$store.getters.getUserID;
                  let token = this.$store.getters.getToken;

                  scheduleData.ownerID = id;
                  scheduleData.free = 1;
                  // set token
                  await this.$axios.setToken(token, 'Bearer')
                  const details = await this.$axios.$post(
                      'http://localhost:3333/api/v1/schedule',
                      scheduleData
                  )
                  // use snackbar here
                  this.disAbleBtn = false;
                  this.error = 'Schedule added successfully';
                  this.snackbar = true;
                  setTimeout(() => this.snackbar = false, 5000 );

                  console.log('detail', details.message);
                  // this.$router.push('/courses');

                  // "https://youtube.com/embed/NHAB3TjZJu4"
                } catch (error) {
                  console.log(error.response)
                }
                
            }else{
                try {
                  const userDataFromLocalStorage = JSON.parse(localStorage.getItem('details'));
                  let id = userDataFromLocalStorage.user[0].userID;
                  let token = userDataFromLocalStorage.token

                  scheduleData.ownerID = id;
                  scheduleData.free = 1;
                  
                  // set token
                  await this.$axios.setToken(token, 'Bearer')
                  const details = await this.$axios.$post(
                      'http://localhost:3333/api/v1/schedule',
                      scheduleData
                  )
                  // use snackbar here
                  this.disAbleBtn = false;
                  this.error = 'Schedule added successfully';
                  this.snackbar = true;
                  setTimeout(() => this.snackbar = false, 5000 );

                  console.log('detail', details.message)
                  // this.$router.push('/courses');
                  } catch (error) {
                    if(error){
                      this.disAbleBtn = false;
                      this.error = 'All fields are required';
                      this.snackbar = true;
                      setTimeout(() => this.snackbar = false, 5000 );
                    }
                    console.log(error.response)
                }

            }
        }
    }
  }
</script>

<style scoped>

.image{
  max-width: 90%;
  max-height: 100vh;
}

.login-container{
  border: .5px solid rgb(231, 225, 225);
  border-radius: 5px;
  flex-shrink: 0;
}

.login{
  text-align: center;
  display: block;
  font-weight: 900;
  color: rgb(8, 8, 180);
}

.signup-btn{
  text-align: center;
  display: block;
  font-size: large;
  font-weight: 900;
  color: rgb(8, 8, 180);
}

</style>
