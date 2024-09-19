<script>
    import { onMount } from 'svelte';
 import { fade } from 'svelte/transition';
 
 export let data

 let slides = [
    {
      title: 'Squad C',
      text: 'This Squad is full of unique and creative pokemons',
      buttonLabel: 'Squad C Pokemons',
      backgroundColor: 'red',
      image: '/images/homepage-1.png',
      previewImage: '/images/homepage-2.png',
      link: '/squad/5' 
    },
    {
      title: 'Squad D',
      text: 'This Squad has good skills and are creative',
      buttonLabel: 'Squad D Pokemons',
      backgroundColor: 'blue',
      image: '/images/homepage-2.png',
      previewImage: '/images/homepage-1.png',
      link: '/squad/6'
    },
];


let currentIndex = 0;
  // Switch slide
  const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
  };
  </script>

<main>
  <nav>
    <figure>
        <img src="https://fontmeme.com/permalink/240917/cc2ae6f52d521ce65cda35857dab32bc.png" alt="pokemon-font" border="0" loading="lazy">
    </figure>
</nav>
  <div class="stars"></div>
  <div class="twinkling"></div>
<div class="carousel">
    <!-- Left Section -->
    <div class="left">
      <h2 class="title" transition:fade>{slides[currentIndex].title}</h2>
      <p class="text" transition:fade>{slides[currentIndex].text}</p>
      <a href={slides[currentIndex].link} class="button" style="background-color: {slides[currentIndex].backgroundColor};" transition:fade>{slides[currentIndex].buttonLabel}</a>
    </div>
  
    <!-- Right Section -->
    <div class="right" style="--dynamic-bg-color: {slides[currentIndex].backgroundColor};">
    <!-- Main Image -->
    <img src={slides[currentIndex].image} alt="Slide Image" class="image" transition:fade />

    <!-- Next Preview Image -->
    <img src={slides[currentIndex].previewImage} alt="Next Slide Preview" class="next-preview" on:click={goToNextSlide}/>
    </div>
</div>

</main>

<style>
  .stars, .twinkling {
	position:absolute;
	display:block;
	top:0;
  bottom:0;
	left:0;
  right:0;
	width:100%;
  height:100%;
}

  .stars {
    z-index: -3;
    background: #000 url('/assets/stars.png') repeat top center;
    background-size: contain;
  }

  .twinkling{
    z-index: -2;
    background:transparent url('/images/twinkling.png') repeat top center;
    animation: move-twink-back 200s linear infinite;
  }

  @keyframes move-twink-back {
    from {
      background-position:0 0;
    }
    to {
      background-position:-10000px 5000px;
    }
  }

 nav {
    position: absolute;
    top: 1rem;
    align-items: center;
    z-index: 10;
    padding: 1rem;
  }

  nav img {
    max-width: 150px; 
    height: auto;
  }
   .carousel {
    font-family: 'Poppins', sans-serif;
    display: flex;
    width: 100%;
    height: 100vh; 
    overflow: hidden;
    position: relative;
  }

  .left {
    flex: 0 0 40%; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 1rem; 
    z-index: 2;
    color: #fff;
  }

  .title {
    font-size: 32px; 
    margin-bottom: 20px;
  }

  .text {
    font-size: 18px; 
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

  a{
    text-decoration: none;
  }

  /* Right side container */
  .right {
    flex: 0 0 60%; 
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, var(--dynamic-bg-color, red), transparent);
    transition: background 0.5s ease; /* Smooth transition for background */
  }


  .image {
    max-width: 90%; /* Adjusted width for responsiveness */
    max-height: 80vh; 
    object-fit: contain;
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
      position: relative; 
    }

    .next-preview {
      position: relative;
      margin: 10px auto 0;
    }
    .left{
        text-align: left;
    }

    .right{
        background: linear-gradient(to top, var(--dynamic-bg-color, red), transparent);
    }
  }
</style>