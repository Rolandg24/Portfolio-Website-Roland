<template>
  <!-- Header section with Sansation font -->
  <header class="website-header" :style="{ fontFamily: 'Sansation', src: `url(${sansationBoldUrl})` }">
    R O L A N D &nbsp;&nbsp;&nbsp; G A R Z A
  </header>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Biography</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mini Games
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Flappy-"Birb"</a></li>
                <li><a class="dropdown-item" href="#">Tic-Tac-Toe</a></li>
                <li><a class="dropdown-item" href="#">Whacka-Mole</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- Put the footer component here -->
  </div>
</template>

<script>

</script>

<style scoped>
@font-face {
  font-family: 'Sansation';
  src: url('/fonts/Sansation_Bold.ttf') format('truetype');
  font-weight: bold;
}

.website-header {
  font-family: 'Sansation', sans-serif;
  color: black;
  background-color: gray;
  text-align: center;
  padding: 25px 0;
  font-size: 55px; /* Make sure you specify a value */
  letter-spacing: 10px;
  font-weight: bold;
  
}
</style>

