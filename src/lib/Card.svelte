<!-- Hier exporteer ik de variabelen die ik in de Card.svelte component gebruik. -->
<script>
    export let name;
    export let avatar;
    export let prefix;
    export let surname;
    export let id;
  </script>
<!-- Hier maak ik de Card.svelte component.
    - Ik implementeer de geexporteerde variabelen -->
  <main class="card">
    <section class="card-inner">
      <article class="card-front">
        <img 
        src={avatar} 
        alt="Profile picture of {name}" 
        onerror="this.onerror=null;this.src='/pikachu.webp';" />
        <a href='/{id}'>
        <h2>{name}</h2>
        </a>
        <h3>{prefix}{surname}</h3>
      </article>
    </section>
</main>
