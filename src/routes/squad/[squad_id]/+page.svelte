<script>
    export let data;
    import { onMount } from 'svelte';

    onMount(() => {
        const path = window.location.pathname;
        let background = '';  // Achtergrond gradient
        let squadName = '';
        let memberCount = 0; // Houd het aantal leden bij

        if (path.includes('squad/4')) {
            background = 'linear-gradient(to right, #EC8146, #FF5722)'; // Gradient van kleur
            squadName = 'C';
        } else if (path.includes('squad/5')) {
            background = 'linear-gradient(to right, #008000, #4CAF50)'; // Gradient van kleur
            squadName = 'D';
        } else if (path.includes('squad/3')) {
            background = 'linear-gradient(to right, #6890F0, #0033FF)'; // Gradient van kleur
            squadName = 'Overig';
        } else {
            squadName = 'Niet beschikbaar'; // als er geen squad in het pad is
        }

        // Update de achtergrondkleur
        document.body.style.background = background; // Instellen van achtergrondkleur als gradient
        document.querySelector('header h1').textContent = `Squad ${squadName}`;
        
        // Update het aantal leden als de data beschikbaar is
        if (data.persons) {
            memberCount = data.persons.length;
        }

        // Update het aantal leden in de header
        document.querySelector('#member-count').textContent = `Aantal pokemons: ${memberCount}`;
    });
</script>

<header>
    <h1>Squad </h1>
    <div id="member-count"></div>
</header>

<section class="kaartjes-container">
    {#if data.persons}
      {#each data.persons as person}
      <article class="kaartje-container">
        <button class="kaartje">
          <div class="kaartje-front"></div>
          <div class="kaartje-back">
            <h2>{person.name} {person.prefix} {person.surname}</h2>
            <span class="button-unlock">Unlock Me</span>
          </div>
        </button>
      </article>
      {/each}
    {:else}
      <p>No data available</p>
    {/if}
</section>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header h1 {
    margin-bottom: 10px; /* Verminder de ruimte onder de titel */
    text-align: center; /* Zorg ervoor dat de titel gecentreerd is */
    font-size: 3rem; /* Grotere tekstgrootte voor een opvallende titel */
    font-weight: bold; /* Maak de tekst vetter */
    color: #FFFFFF; /* Tekstkleur */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4); /* Voeg een schaduw toe voor diepte */
    font-family: 'Arial', sans-serif; /* Gebruik een modern lettertype */
    letter-spacing: 1px; /* Voeg wat ruimte tussen de letters toe */
    padding: 10px; /* Voeg wat padding toe voor een betere uitstraling */
    background: rgba(0, 0, 0, 0.3); /* Achtergrondkleur met doorzichtigheid voor extra contrast */
    border-radius: 10px; /* Ronde hoeken voor een zachtere uitstraling */
  }

  #member-count {
    font-size: 1.5rem; /* Grotere tekstgrootte voor het aantal leden */
    color: #FFFFFF; /* Tekstkleur */
    background: rgba(0, 0, 0, 0.5); /* Achtergrondkleur met doorzichtigheid voor extra contrast */
    padding: 5px 10px; /* Padding voor een betere uitstraling */
    border-radius: 5px; /* Ronde hoeken */
    margin-top: 10px; /* Ruimte boven het aantal leden */
  }

  .kaartjes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Kaartjes netjes centreren */
    padding: 0; /* Geen onnodige padding */
    margin: 0 auto; /* Centreer de container zelf */
  }

  .kaartje-container {
    perspective: 800px;
    width: 200px; /* Zorg ervoor dat de breedte van de kaartjes correct is */
    height: 250px; /* Zorg ervoor dat de hoogte van de kaartjes correct is */
    margin: 10px; /* Een beetje ruimte tussen kaartjes */
    box-sizing: border-box;
    position: relative; /* Zorg ervoor dat het binnen de container blijft */
  }

  .kaartje {
    width: 100%;
    height: 100%;
    position: absolute; /* Zorg ervoor dat de kaartjes absoluut worden gepositioneerd binnen de container */
    transform-style: preserve-3d;
    transition: transform 0.6s;
    background: transparent;
    border: none;
    padding: 0;
    display: flex; /* Flexbox voor inhoud uitlijning */
    align-items: center;
    justify-content: center;
  }

  .kaartje:focus,
  .kaartje:hover {
    transform: rotateY(180deg);
  }

  .kaartje:focus {
    outline: none;
    box-shadow: 0 0 0 4px #ffffff; /* Voeg een nette focus-ring toe */
  }

  .kaartje-front,
  .kaartje-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
  }

  .kaartje-front {
    background-image: url('/61vOBvbsYJL._AC_UF1000,1000_QL80_.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  .kaartje-back {
    background: rgba(114, 105, 146, 0.341);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transform: rotateY(180deg);
    text-align: center;
    z-index: 2;
  }

  .kaartje-back h2 {
    font-size: 1em;
    margin-bottom: 10px;
  }

  .button-unlock {
    display: inline-block;
    padding: 8px 16px;
    background-color: #ff0000;
    color: white;
    text-decoration: none;
    outline: 2px solid black;
    font-size: 14px;
    cursor: pointer;
  }
</style>
