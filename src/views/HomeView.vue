<template>
 <br>
  <div class="video-container">
    <video controls autoplay width="100%">
      <source src="../assets/RG-JrSoftware-Recruiter.mp4" type="video/mp4">
    </video>
  </div>
  <hr>
  <body>
    <div class="container">
      <div class="card">
        <img src="../assets/TheWho_image.png">
      </div>
      <div class="card">
        <img src="../assets/TheWhat_image.png">
      </div>
      <div class="card">
        <img src="../assets/TheWhere_image.png">
      </div>
      <div class="card">
        <img src="../assets/TheWhy_image.png">
      </div>
    </div>
  </body>
</template>

<script>
</script>

<style>
.video-container {
  max-width: 1080px;
  margin: auto;
}
/* Adjust the body to ensure the content is centered */

body {
  background-color: antiquewhite;
}
.card-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #051215;
}

.container {
  width: 80%;
  max-width: 600px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 0.50rem;
  transition: all 400ms;
}

.card {
  flex: 1;
  height: 100%;
  transition: all 400ms;
  cursor: pointer;
}
.card > img {
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.container:hover .card:not(:hover) {
  filter: grayscale(100%);
}
.card:hover {
  flex: 1.5;
  transform: scale (1.05);
}
/*
@media (prefers-color-scheme: dark) {
  body {
    background-color: black; Changes the background color to black in dark mode
  }
}
*/
</style>

