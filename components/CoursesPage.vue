<template>
    <div>
        <div class="courses blue--text displat-4 md12">COURSES</div>
        <v-layout row wrap justify-center mt-4>
            <v-flex xs12 sm6 md5 ma-2 v-for="(video, i) in loadedCourses" :key="i" my-4>
                <iframe 
                    :src="video.courseURL"
                    class="video-tag"
                    frameborder="0" 
                    allowfullscreen 
                    >
                </iframe>
                <div class="red--text font-weight-bold" pa-2><v-icon class="red--text" left>mdi-information</v-icon>  Title: {{ video.courseTitle }}</div>
                <div><span font-style-italic class="blue--text" ma-2><v-icon class="blue--text" left>mdi-book-open</v-icon>  Subject:</span> {{ video.subjectTitle }}</div>
                <div><span class="blue--text" ma-2><v-icon class="blue--text" left>mdi-pencil</v-icon>  Description:</span>  {{ video.description }}</div>
                <div> <span class="blue--text" ma-2> <v-icon class="blue--text" left>mdi-clock</v-icon> Course Duration:</span> {{ video.courseDuration }}</div>
            </v-flex>
        </v-layout>
        <v-layout justify-center class="green" mt-4>
            <v-flex>
                <div class="subcribe">
                    <p class="request white--text display-1">Want to request for a personal class?</p>
                    <v-btn
                        class="register red"
                        to="#"
                        link
                    >
                        <span class="display-1 black--text">SUBSCRIBE HERE!!!</span>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </div>

</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed: {
        loadedCourses(){
            let userPaidCourses = this.$store.getters.userPaidCourses;
            let freeCourses = this.$store.getters.publicCourses;
            if(!userPaidCourses && !freeCourses){
                const userDataFromLocalStorage = JSON.parse(localStorage.getItem('details'));
               
                freeCourses = userDataFromLocalStorage.publicCourses;
                userPaidCourses = userDataFromLocalStorage.userPaidCourses;
                 console.log('ok', freeCourses, userPaidCourses)

                
                // if(process.browser){
                //     const userDataFromLocalStorage = JSON.parse(localStorage.getItem('details'));
                //     freeCourses = userDataFromLocalStorage.publicCourses;
                //     userPaidCourses = userDataFromLocalStorage.userPaidCourses;
                // }
                
                // if(!userPaidCourses && !freeCourses){
                //     this.$router.push('/login');
                // }
            }
            return [...freeCourses, ...userPaidCourses];
        }
    }

}
</script>

<style scoped>
.courses{
    text-align: center;
    font-size: 32px;
    font-weight: 800;
}
.request{
    text-align: center;
}
.subcribe{
    width: 100%;
}
.register{
    display: block;
    margin: 0 auto;
    width: 40%;
    padding: 10px;
    font-weight: 900;
    text-align: center;
    text-align: center;
    color: #2196f3;
}
.video-tag{
    width: 100% !important;
    height: auto  !important; 
}

</style>