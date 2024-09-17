<script>
    export let data;
  </script>
  
  <main>
    <!-- {#each data.squads as squad}
      <h2><a href="/squad/{squad.id}">Squad {squad.name}</a></h2>
    {/each} -->
    <ul>
      <li id="overview"></li>
      <li id="squad-4">
        <h2><a href="/squad/4">Squad 2C</a></h2>
      </li>
      <li id="squad-5">
        <h2><a href="/squad/5">Squad 2D</a></h2>
      </li>
      <li id="squad-6">
        <h2><a href="/squad/3">Squad overig</a></h2>
      </li>
    </ul>
  </main>