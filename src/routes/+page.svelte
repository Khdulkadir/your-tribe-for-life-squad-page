<script>
 import { fade } from 'svelte/transition';
let slides = [
    {
      title: 'Squad 1',
      text: 'This Squad is full of unique and creative pokemons',
      buttonLabel: 'Squad 1 Pokemons',
      backgroundColor: 'orange',
      image: '/images/homepage-1.png',
      previewImage: '/images/homepage-2.png',
      animationClass: 'fire-animation' 
    },
    {
      title: 'Squad 2',
      text: 'This Squad has good skills and are creative',
      buttonLabel: 'Squad 2 Pokemons',
      backgroundColor: 'blue',
      image: '/images/homepage-2.png',
      previewImage: '/images/homepage-1.png',
      animationClass: 'bubble-animation'
    },
  ];

  let currentIndex = 0;

  // Switch slide
  const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
  };
  </script>

<nav>
    <figure>
        <img src="https://fontmeme.com/permalink/240917/cc2ae6f52d521ce65cda35857dab32bc.png" alt="pokemon-font" border="0" loading="lazy">
    </figure>
</nav>

<div class="carousel">
    <!-- Left Section -->
    <div class="left">
      <h2 class="title" transition:fade>{slides[currentIndex].title}</h2>
      <p class="text" transition:fade>{slides[currentIndex].text}</p>
      <button class="button" style="background-color: {slides[currentIndex].backgroundColor};" transition:fade>{slides[currentIndex].buttonLabel}</button>
    </div>
  
    <!-- Right Section -->
    <div class="right" style="--dynamic-bg-color: {slides[currentIndex].backgroundColor};">
      <!-- Main Image -->
      <img src={slides[currentIndex].image} alt="Slide Image" class="image" transition:fade />
  
      <!-- Next Preview Image -->
      <img src={slides[currentIndex].previewImage} alt="Next Slide Preview" class="next-preview" on:click={goToNextSlide}/>
    </div>
  </div>

<style>

 nav {
    display: flex;
    justify-content: center; /* Center the logo horizontally */
    padding: 1rem;
  }

  nav img {
    max-width: 150px; /* Make the logo smaller */
    height: auto;
  }
   .carousel {
    font-family: 'Poppins', sans-serif;
    display: flex;
    width: 100%;
    height: 100vh; /* Full viewport height */
    overflow: hidden;
    position: relative;
  }

  /* Left side container */
  .left {
    flex: 0 0 40%; /* Takes 40% of the width */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    padding: 1rem; 
    z-index: 2;
  }

  .title {
    font-size: 32px; /* Larger font size */
    margin-bottom: 20px;
  }

  .text {
    font-size: 18px; /* Larger font size */
    margin-bottom: 30px;
  }

  .button {
    padding: 1rem;
    width: 60%;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 25px;
  }

  /* Right side container */
  .right {
    flex: 0 0 60%; /* Takes 60% of the width */
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, var(--dynamic-bg-color, orange), white 50%);
    transition: background 0.5s ease; /* Smooth transition for background */
  }

  /* Main image */
  .image {
    max-width: 90%; /* Adjusted width for responsiveness */
    max-height: 80vh; /* Prevent overflow in height */
    object-fit: contain; /* Ensure image scales correctly */
    transition: opacity 0.5s ease;
  }

  /* Next preview image */
  .next-preview {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 3; /* Ensure it is above other elements */
    border: 2px solid #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .carousel {
      flex-direction: column;
      height: 100vh;
    }

    .left, .right {
      width: 100%;
      text-align: center;
    }

    .image {
      width: 100%;
      position: relative; /* Adjusts image positioning for mobile */
    }

    .next-preview {
      position: relative;
      margin: 10px auto 0;
    }
  }
</style>