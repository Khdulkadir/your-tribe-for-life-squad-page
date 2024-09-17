<!-- Hier exporteer ik de variabelen die ik in de Card.svelte component gebruik. -->
<script>
    export let name;
    export let id;
  </script>
<!-- Hier maak ik de Card.svelte component.
    - Ik implementeer de geexporteerde variabelen -->
    <main class="card-container">
        <section class="card">
            
          <figure class="card-front">
            <img src="/pokemon.webp" alt="pokemon card front" />
          </figure>
      
          <article class="card-back">
            <img src="/lightening-card.webp" alt="pokemon lightening card back" />
              <span class="card-content">
                <button>
                 <a href="/{id}"> Unlock {name}</a>
                </button>
              </span>
          </article>

        </section>
      </main>

<style>
      .card {
        width: 250px;
        height: 350px;
        perspective: 1000px;
        position: relative;
      }
      
      .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.6s ease-in-out;
      }
      
      .card-front img, .card-back img {
        width: 100%;
        border-radius: 15px;
      }
      
      .card-back {
        background-color: white;
        transform: rotateY(180deg);
        text-align: center;
        position: relative;
        border: solid .3em #686868;
      }
      
      .card-content {
        z-index: 1;
        position: relative;
        top: 7em;
      }
      
      button {
        background-color: #f1c40f;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(196, 19, 19, 0.681);
      }
      
      button a {
        text-decoration: none;
        color: black;
      }
      button:hover {
        background-color: #ba1914;
        color: white;
      }
      
      .card-back img {
        position: absolute;
        z-index: -1;
      }
      
      .card:hover .card-front {
        transform: rotateY(180deg);
      }
      
      .card:hover .card-back {
        transform: rotateY(0deg);
      }
</style>    
   
      

