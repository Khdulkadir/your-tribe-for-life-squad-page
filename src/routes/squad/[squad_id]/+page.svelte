<script>
    // onmount zorgt ervoor dat de functie updateCarousel wordt uitgevoerd wanneer de pagina wordt geladen
    import { onMount } from "svelte";
    export let data;
    import Card from "$lib/Card.svelte";
    
    // Huidige index van de carousel
    let currentIndex = 0;
  
    // Dit is het totaal aantal items in de carousel, berekend door de lengte van de array
    const totalItems = data.persons.length;
  
    // Functie waarbij de positie van de items wordt bepaald
    // - in de updateCarousel functie wordt de positie van de items bepaald door de huidige index van de carousel
    // - de querySelectorAll methode wordt gebruikt om alle items in de carousel te selecteren
    // - de forEach methode wordt gebruikt om door elk item te itereren
    // - de positie van elk item wordt berekend door de huidige index van de carousel
    // - de dataset.pos eigenschap wordt gebruikt om de positie van elk item in te stellen
    function updateCarousel() {
      const items = document.querySelectorAll(".carousel__item");
      items.forEach((item, index) => {
        const position = (index - currentIndex + totalItems) % totalItems;
        item.dataset.pos = position - 2;
      });
    }
  
    // Functie die wordt aangeroepen wanneer er op de volgende knop wordt geklikt
    // - de huidige index van de carousel wordt geüpdatet door er 1 bij op te tellen en te delen door het totaal aantal items
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }
  
    // Functie die wordt aangeroepen wanneer er op de vorige knop wordt geklikt
    // - de huidige index van de carousel wordt geüpdatet door er 1 van af te trekken en het totaal aantal items te delen
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    }
  
    // Deze functie zorgt ervoor dat de carousel wordt geüpdatet wanneer de pagina wordt geladen
    onMount(() => {
      updateCarousel();
    });
</script>
  
<main>
    <h1>Squad</h1>
    <section class="carousel" aria-label="Squad Carousel">
      <button class="prev" on:click={prevSlide} aria-label="Previous Slide">◀</button>

      <ul class="cards">
        {#each data.persons as person, index}
          <li class="carousel__item" data-pos={index - 2} aria-live="polite">
            <Card name={person.name} id={person.id} />
          </li>
        {/each}
      </ul>
  
      <button class="next" on:click={nextSlide} aria-label="Next Slide">▶</button>
    </section>
</main>
  
<style>
    :global(body) {
      background-color: #fff3b3;
      font-family: 'Pokemon Hollow', sans-serif;
      margin: 1em;
    }
  
    main {
      border: solid .3em #e4b849;
      padding: 1em 0;
    }
  
    h1 {
      text-align: center;
      font-size: 4em;
      color: #074794;
    }
    .cards{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        list-style: none;
        gap: 1em;
        margin-top: 2em;
    }
    .prev, .next{
        display:none
    }
  @media (min-width: 600px) {
    /* Carousel layout */
    .carousel {
      position: relative;
      width: 100%;
      height: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
      overflow: hidden;
    }
  
    /* Knoppen voor navigatie */
    .prev, .next {
      display: block;
      background: none;
      border: none;
      font-size: 2em;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      opacity: 0.6;
      transition: opacity 0.2s ease;
    }
  
    .prev {
      left: 0;
    }
  
    .next {
      right: 0;
    }
  
    .prev:hover, .next:hover {
      opacity: 1;
    }
  
    .cards {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .carousel__item {
      position: absolute;
      transition: all 0.5s ease;
      transform-style: preserve-3d;
      opacity: 0.5;
    }
  
    /* Met data-pos bepaal je de positie van de items, de middelste is 0 en links en rechts daarvan -1 en -2 en 1 en 2 */
    .carousel__item[data-pos="-2"] {
      transform: translateX(-300px) scale(0.6) rotateY(30deg);
      z-index: 1;
      opacity: 0.3;
    }
  
    .carousel__item[data-pos="-1"] {
      transform: translateX(-150px) scale(0.8) rotateY(15deg);
      z-index: 2;
      opacity: 0.5;
    }
  
    .carousel__item[data-pos="0"] {
      transform: translateX(0) scale(1) rotateY(0deg);
      z-index: 3;
      opacity: 1;
    }
  
    .carousel__item[data-pos="1"] {
      transform: translateX(150px) scale(0.8) rotateY(-15deg);
      z-index: 2;
      opacity: 0.5;
    }
  
    .carousel__item[data-pos="2"] {
      transform: translateX(300px) scale(0.6) rotateY(-30deg);
      z-index: 1;
      opacity: 0.3;
    }
}
</style>
  