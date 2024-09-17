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
    <section class ="cards-container">
      {#each data.persons as person, index}
          <Card
              name = {person.name}
              avatar = {person.avatar}
              prefix = {person.prefix}
              surname = {person.surname}
              id = {person.id}
          />
      {/each}
    </section>
  </main>
