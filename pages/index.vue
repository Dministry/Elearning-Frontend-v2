<template>
  <v-layout row wrap justify-center>
    <v-flex md12 mb-5>
       <img cover='true' src="~/assets/images/learn.jpg" alt="" class="image">
    </v-flex>
    <v-flex md12 mb-5>
      <em class="call-to-acction display-1 text-center green--text">One Of The Best Learning Platforms In Nigeria</em>
      <p class="information">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </p>
      <p class="register">Need access to quality courses, thought by qualified teachers?</p>
    </v-flex>
    <v-btn
        class="register red white--text"
        to="/signup"
        link
      >
        REGISTER HERE!!!
      </v-btn>
  </v-layout>
  <!-- <div class="containe">
    <div>
      <Header />
      </div>
      <Courses />
    </div> -->
</template>

<script>
export default {}
</script>

<style>

.image{
  width: 100%;
  max-height: 85vh;
}

.information{
  text-align: center;
  margin: 4px;
}

.register{
  padding: 5px;
  font-weight: 600;
  text-align: center;
  text-align: center;
  color: #2196f3;
}
.call-to-acction{
  display: block;
  padding: 5px;
  text-align: center;
}
/* * {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: Roboto;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: start;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
