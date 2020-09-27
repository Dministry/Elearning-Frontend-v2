<template>
<v-layout row wrap justify-space-between mt-4>
    <v-flex md6 xs12 mt-4>
      <img class="image" src="~/assets/images/undraw_teaching_f1cm.png" alt="">
    </v-flex>
    
    <v-flex md6 xs12 mt-4>
      <v-form v-model="valid" class="login-container" >
        <v-container>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              text-align-center
              filled
              v-model="email"
              label="Email"
              type="email"
              append-icon="mdi-email"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              filled
              label="Password"
              append-icon="mdi-account-lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-col>

        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="12"
          >
          <span>Don't have an account? <a href="/signup">Register</a></span>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
          <v-btn class=" blue--text"
          @click.prevent="onSubmit"
          >
            <span class="login-btn">Login</span>
          </v-btn>
          </v-col>
        </v-row>
      </v-container>
      </v-form>
      
    
  </v-flex>
</v-layout>

<!-- <div> 
      <label for="logo" class="logo">MATHAGE</label>
    Header container (Section)
    <section> -->
      <!-- Header Image -->
      <!-- <div class="image"></div> -->
      <!-- Header writeup -->
      <!-- <div class="sect">
          <form action="">
            <div class="input-wrap">
               <font-awesome-icon class="awesome" :icon="['fas', 'envelope']"/> <input type="email" v-model="email" placeholder="Email" required>
            </div> 
             <div class="input-wrap">
                       <font-awesome-icon class="awesome" :icon="['fas', 'lock']"/><input type="password" v-model="password" placeholder="Password" required> <br>
             </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">log in</button> <br>
            <small><nuxt-link to="/signup" class="small" >Forgot Password?</nuxt-link></small>
          </form>
      </div>
    </section>
  </div> -->
</template>



<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      async onSubmit(){
        const userData = {
          email: this.email,
          password: this.password
        }
        try {
          const details = await this.$axios.$post(
            'http://localhost:3333/api/v1/login',
            userData
          )
          // commit to store
          this.$store.dispatch('setStoreValue', details.message);

          // store in local storage
          localStorage.setItem(
              'details',
            JSON.stringify(details.message)
          )
          this.$router.push('/courses');
        } catch (error) {
          
          console.log(error.response)
        }
      }
    }
  }

  // import axios from 'axios';
// export default {
//   data(){
//     return{
//       email: '',
//       password: ''
//     }
//   },
//     methods: {
//       login(){
//         // retrieve details user inputed
//         let postData = {
//           email: this.email,
//           password: this.password
//         }

//         // try to log user in if result is successful else create logic to display error

//         axios.post('http://localhost:3333/api/v1/login', postData)
//         .then((val) => {
//           console.log(val)

//           // write logic to check if user data came back successfully
//           // if successful store user data in local storage and vuex store
//           // then direct user to the required page and do not show login button again
//           this.$router.push('/Courses')
//         })
//         .catch(err => {
//           // if there is an error display an error message informing the user that his details are wrong
//           console.log('error is: ', err.message)
//         })
//       }
//     }
    
//   };
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
  font-size: large;
  font-weight: 900;
  color: rgb(8, 8, 180);
} 

.login-btn{
  text-align: center;
  display: block;
  font-size: large;
  font-weight: 900;
  color: rgb(8, 8, 180);
}
    
/*label.logo {
  color: #6b62fd;
  font-size: 35px;
  font-family: pacifico;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
} */
/* Header Container Style */
/* section {
  width: 100%;
  display: inline-flex;
  justify-items: center;
  justify-content: center;

} */

/* Header writeup style */
/* .sect {
  width: 40%;
  height: calc(100vh - 120px);
  font-size: 18px;
  padding-left: 50px;
  padding-top: 50px;
  font-weight: lighter;
  line-height: 1.4;
}
a {
  color: white;
} 
/* Header image */
/* .image {
  background: url("../assets/images/undraw_youtube_tutorial_2gn3.png") no-repeat;
  background-size: cover;
  height: calc(100vh - 200px);
  width: 40%;
  margin-right: 20px;
}

form {
    position: relative;
    width: 35vw;
    height: 70vh;
    padding-top: 7em;
    top: -15%;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 8px;
}
input {
    position: relative;
    width: 267px;
    height: 7vh;
    border: 1px solid rgba(107, 98, 253, 0.5);
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 1em;
    left: 6em;
}
button {
    position: relative;
    width: 267px;
    height: 7vh;
    left: 6.8em;
    border: none;
    background: #6B62FD;
    box-shadow: 2px 2px 10px #6B62FD;
    border-radius: 8px;
    font-weight: 600;
}
::placeholder {
    font-size: 16px;
    position: relative;
    left: 3em;
}
.awesome {
    position: absolute;
    z-index: 1;
    color: gray;
    margin-left: 7em;
    margin-top: 0.8em;
    
}
.small{
  color: #00edff; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   text-align: center;
  position: relative;
    top: 15px;
 
}
@media (max-width: 858px) {
  .image {
  display:none; 
   }

  .sect {
    width: 100%;
    background-size: 100%;
    height: calc(50vh);
    margin-top: 10px;
    display: block;
  }

  section {
    width: 100%;
    display: flexbox;
    flex-wrap: wrap-reverse;
    justify-items: center;
    justify-content: center;
  }

form {
    position: relative;
    width: 80vw;
    height: 60vh;
    margin-left:  0%;
    margin-top: -5%;
     }
.input-wrap {
    position: relative;
    width: 80%;
    height: 7vh;
    margin-bottom: 1em;
    left: 10%;
}

input {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0%;
}
button {
    position: relative;
    width: 70%;
    height: 7vh;
    left: 15%;
   
}
.awesome {
    position: absolute;
    z-index: 1;
    color: gray;
    margin-left: 5%;
    top: auto;    
}
::placeholder {
    font-size: 16px;
    position: relative;
    left: 3em;
} */
/* }   */
</style>
