<template>
  <v-layout row wrap justify-center mt-4>
      <v-flex md6 xs12 mt-4>
        
        <v-btn class="font-weight-large" to="/admin/dashboard">
        <span class="">Back To Dashboard</span>
        </v-btn>

        <v-row>
              <v-col
                cols="12"
                md="12"
              >
              <v-btn
              text
              >
                <span class="signup-btn display-1">Add Free Course Form</span>
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
                  label="Course Title"
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
                 v-model="courseSubject"
                  text-align-center
                  filled
                  label="Subject"
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
                  v-model="courseURL"
                  text-align-center
                  filled
                  label="Course Link"
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
                  v-model="courseDuration"
                  text-align-center
                  filled
                  label="Course Duration"
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
                v-model="description"
                solo
                name="Course Description"
                label="A short description about the course."
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
              @click.prevent="addCourse"
              >
                <span class="green--text font-size-large font-weight-bold">Add Free Course</span>
              </v-btn>
              </v-col>
          </v-container>
        </v-form>
        <v-snackbar
            v-model="snackbar"
            timeout="5000"
          > 
            {{error}}
        </v-snackbar>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      courseTitle: '',
      courseSubject: '',
      description: '',
      courseURL: '',
      courseDuration: '',
      snackbar: false,
      error: '',
      disAbleBtn: false
    }),
    methods: {
        async addCourse(){
            let courseData = {
                courseTitle: this.courseTitle,
                courseSubject: this.courseSubject,
                description: this.description,
                courseURL: this.courseURL,
                courseDuration: this.courseDuration
            };

            let storeDetail = this.$store.getters.getUserDetails;
            
            if(storeDetail.token){
                try {
                  let id = this.$store.getters.getUserID;
                  let token = this.$store.getters.getToken;

                  courseData.userID = id;
                  courseData.paid = false;
                  // set token
                  await this.$axios.setToken(token, 'Bearer')
                  const details = await this.$axios.$post(
                      'http://localhost:3333/api/v1/course',
                      courseData
                  )
                  // use snackbar here
                  this.disAbleBtn = false;
                  this.error = 'Public course added successfully';
                  this.snackbar = true;
                  setTimeout(() => this.snackbar = false, 5000 );
                  console.log('detail', details.message);
                  // this.$router.push('/courses');

                  // "https://youtube.com/embed/NHAB3TjZJu4"
                } catch (error) {
                  this.disAbleBtn = false;
                  this.error = 'All fields are required';
                  this.snackbar = true;
                  setTimeout(() => this.snackbar = false, 5000 );
                  console.log(error.response)
                }
                
            }else{
                try {
                  const userDataFromLocalStorage = JSON.parse(localStorage.getItem('details'));
                  let id = userDataFromLocalStorage.user[0].userID;
                  let token = userDataFromLocalStorage.token

                  courseData.userID = id;
                  courseData.paid = false;

                  // set token
                  await this.$axios.setToken(token, 'Bearer')
                  const details = await this.$axios.$post(
                      'http://localhost:3333/api/v1/course',
                      courseData
                  )
                  // use snackbar here
                  this.disAbleBtn = false;
                  this.error = 'Public course added successfully';
                  this.snackbar = true;
                  setTimeout(() => this.snackbar = false, 5000 );
                  console.log('detail', details.message)
                  // this.$router.push('/courses');
                  } catch (error) {
                    this.disAbleBtn = false;
                    this.error = 'All fields are required';
                    this.snackbar = true;
                    setTimeout(() => this.snackbar = false, 5000 );
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
