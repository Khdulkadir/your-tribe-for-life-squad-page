<script>
    export let data
    import { onMount } from 'svelte';

let backgroundColor = '';

// Update the background color based on the current path
onMount(() => {
    const path = window.location.pathname;
    if (path.includes('squad/4')) {
        backgroundColor = '#EC8146';
    } else if (path.includes('squad/5')) {
        backgroundColor = '#008000';
    } else if (path.includes('squad/3')) {
        backgroundColor = '#6890F0';
    } else {
        backgroundColor = '#FFFFFF'; 
    }
    document.body.style.backgroundColor = backgroundColor;
});
</script>

  <section class="kaartjes-container">
    {#if data.persons}
      {#each data.persons as person}
      <article class="kaartje-container">
        <div class="kaartje">
          <div class="kaartje-front">
            <!-- Mogelijke content voor de voorkant -->
          </div>
          <div class="kaartje-back">
            <h2>{person.name} {person.prefix} {person.surname}</h2>
            <a href="/{person.id}" class="button-unlock">Unlock Me</a>
          </div>
        </div>
      </article>
      {/each}
    {:else}
      <p>No data available</p>
    {/if}
  </section>
  
  
<style>
 .kaartjes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Verminderde ruimte tussen kaartjes */
  justify-content: center;
  padding: 10px; /* Verminderde padding rond de container */
}

.kaartje-container {
  perspective: 800px; /* Kleinere perspectiefwaarde */
  width: 200px; /* Kleinere breedte van kaartjes */
  height: 250px; /* Kleinere hoogte van kaartjes */
  box-sizing: border-box;
}

.button-unlock {
  display: inline-block;
  padding: 8px 16px; /* Kleinere padding voor de knop */
  background-color: #ff0000; 
  color: white; 
  text-align: center;
  text-decoration: none; 
  outline: 2px solid black;
  font-size: 14px; /* Kleinere lettergrootte voor de knop */
  cursor: pointer;
}

.kaartje {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.kaartje:hover {
  transform: rotateY(180deg);
}

.kaartje-front,
.kaartje-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 6px; /* Kleinere radius voor de hoeken */
}

.kaartje-front {
  background-image: url('/61vOBvbsYJL._AC_UF1000,1000_QL80_.jpg');
  background-size: cover;
  background-position: center;
  height: 250px; /* Kleinere hoogte voor de voorkant */
  z-index: 1;
}

.kaartje-back {
  background: rgb(89, 51, 225);
  display: flex;
  height: 250px; /* Kleinere hoogte voor de achterkant */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  transform: rotateY(180deg);
  text-align: center;
  z-index: 2;
}

.kaartje-back h2 {
  font-size: 1em; /* Kleinere lettergrootte voor de tekst op de achterkant */
  margin-bottom: 10px; /* Kleinere marge onder de tekst */
}

    
    </style>