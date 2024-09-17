<!-- Hier importeer ik de Card.svelte component. -->
<script>
    export let data
    import Card from "$lib/Card.svelte"
  </script>
  
  <!-- Hier gebruik ik een each loop om de data.persons array te doorlopen
    - voor elke persoon in de array maak ik een Card component aan
    - ik geef de Card component props mee die ik herbruik in de Card.svelte component -->
  <main>
    <h1> Squad</h1>
    <section class ="card-container">
      {#each data.persons as person, index}
          <Card
              name = {person.name}
              id = {person.id}
          />
      {/each}
    </section>
  </main>

  <style>
  
  :global(body) {
   background-color: #fff3b3;
   font-family: 'Pokemon Hollow', sans-serif;
   margin: 1em;
  }
  /* Container for card layout */
  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    margin-top: 2em;
  }
  h1{
    text-align: center;
    font-size: 5em;
    color: #074794;
  }
  </style>