<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
// Import and setup your components and Vue Router if needed
</script>

<style>
/* Global styles */
</style>

