<script>
  export let data

  import { onMount } from 'svelte'

  onMount(() => {
    const cards = document.querySelectorAll('.card')
    const cardMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

    cards.forEach(card => {
        const height = card.clientHeight
        const width = card.clientWidth


        card.addEventListener('mousemove', (e) => {
            const x = e.layerX
            const y = e.layerY
            const multiplier = 30

            const xRotate = multiplier * ((x - width / 2) / width)
            const yRotate = -multiplier * ((y - height / 2) / height)


            card.style.transform = cardMove(xRotate, yRotate)
        })

        card.addEventListener('mouseout', () => card.style.transform = cardMove(0, 0))
    })
  })
</script>

<main>
  <div class="stars"></div>
  <div class="twinkling"></div>
  <div class="clouds"></div>

  <a class="return" href="/squad/{data.persons[0].squad_id}">Terug 
    <svg class="return-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50" height="50" viewBox="0 0 256 256" xml:space="preserve">
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      <path d="M -0.544 18.757 l 10.436 7.057 c 0.11 0.074 0.251 0.082 0.367 0.02 c 0.117 -0.062 0.19 -0.183 0.19 -0.315 v -2.852 c 4.298 -0.094 9.392 -1.857 13.389 -4.65 c 4.898 -3.422 7.595 -7.97 7.595 -12.806 c 0 -0.168 -0.117 -0.313 -0.282 -0.349 c -0.025 -0.006 -0.05 -0.008 -0.075 -0.008 c -0.138 0 -0.267 0.08 -0.325 0.21 c -2.793 6.181 -9.623 9.348 -20.302 9.417 v -3.078 c 0 -0.132 -0.073 -0.253 -0.19 -0.315 c -0.116 -0.062 -0.258 -0.055 -0.367 0.02 l -10.436 7.057 c -0.098 0.066 -0.157 0.177 -0.157 0.296 S -0.642 18.691 -0.544 18.757 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(2.8008 0 0 2.8008 1.9639999999999986 1.9639999999999702) " stroke-linecap="round" />
      </g>
    </svg>
  </a>

  <div class="pokeball"></div>

  <article class="card">

    <div class="title-container">
      <img class="card-type" src="/assets/card-type.png" alt="card type" height="20">
      <h1>{data.persons[0].name} {data.persons[0].prefix} {data.persons[0].surname}</h1>
    </div>
    <div class="profile-picture-container">
      {#if data.persons[0].avatar.length > 0}
        <img class="profile-picture" src="{data.persons[0].avatar}" alt="Avatar van {data.persons[0].name}" width="100" height="100">
      {:else}
        <img class="profile-picture" src="/assets/pikachu.png" alt="Avatar van {data.persons[0].name}" width="100" height="100">
      {/if}
    </div>

    <div class="info-container">
      <div class="nickname-container">
        <img class="energy" src="/assets/firetype.png" alt="Fire Energy Type Symbol" width="20" height="20">
        <p class="nickname">{data.persons[0].nickname}</p>
      </div>
      <div class="github-container">
        <img class="energy" src="/assets/neutraltype.png" alt="Normal Energy Type Symbol" width="20" height="20">
        <p class="github">@{data.persons[0].github_handle}</p>
      </div>
      <div class="github-container">
        <img class="energy" src="/assets/watertype.png" alt="Water Energy Type Symbol" width="20" height="20">
        <a class="website" href="{data.persons[0].website}" target="_blank">Website</a>
      </div>
    </div>

  </article>
</main>

<style>
  .stars, .twinkling, .clouds {
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
    background: #000 url('/assets/stars') repeat top center;
  }

  .twinkling{
    z-index: -2;
    background:transparent url('/assets/twinkling') repeat top center;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds{
    z-index: -1;
    background:transparent url('/assets/clouds') repeat top center;
    animation: move-clouds-back 200s linear infinite;
  }

  @keyframes move-twink-back {
    from {
      background-position:0 0;
    }
    to {
      background-position:-10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position:0 0;
    }
    to {
      background-position:10000px 0;
    }
  }

  main {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  .return {
    color: white;
    text-decoration: none;
    font-size: 30px;
    position: absolute;
    left: 50px;
    top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .return-arrow {
    fill: white;
  }

  .card {
    height: 400px;
    width: 250px;
    background-image: url(/assets/card-background.jpg);
    background-size: cover;
    flex-direction: column;
    gap: 20px;
    display: flex;
    animation: appear 1.5s 4.5s forwards;
    opacity: 0;
    border: 10px solid #ffe557;
    border-radius: 15px;
    padding: 20px;
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 0, 0.3);
  }

  @keyframes appear {
    0% {
      opacity: 0;
      filter: blur(10px) brightness(3);
    }

    100% {
      opacity: 1;
      filter: revert;
    }
  }

  .card-type {
    border-radius: 10px;
    padding-right: 10px;
    margin-left: -15px;
  }

  .title-container {
    display: flex;
    align-items: center;
  }

  .title-container h1 {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .profile-picture-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 175px;
    border: #d6d9d9 4px solid;
    align-self: center;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.5);
    width: 100%;
    border-radius: 10px;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: center;
    padding-top: 30px;
    width: 100%;
  }

  .info-container > div {
    display: flex;
    gap: 10px;   
    align-items: center; 
    justify-content: space-between;
  }

  .info-container > div > p,
  .info-container > div > a {
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .info-container > div > a.website {
    text-decoration: none;
    color: navy;
  }

  .pokeball {
    display: block;
    width: 200px;
    height: 200px;
    position: absolute;
    background: radial-gradient(
        white 16px,
        black 17px 18px,
        white 19px 24px,
        black 25px 32px,
        transparent 33px
      ),
      linear-gradient(to bottom, red 0 80px, black 81px 96px, white 97px 100%);
    border-radius: 50%;
    border: 8px solid black;
    animation: fall 0.5s,
      shake .75s 1.5s 3,
      catch 0.5s 3.75s forwards;
  }

  @keyframes shake {
    0% {
      transform: translateX(0) rotate(0);
    }
    20% {
      transform: translateX(-10px) rotate(-20deg);
    }
    30% {
      transform: translateX(10px) rotate(20deg);
    }
    50% {
      transform: translateX(-10px) rotate(-10deg);
    }
    60% {
      transform: translateX(10px) rotate(10deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }

  @keyframes fall {
    0% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes catch {
    to {
      filter: brightness(0.8);
      display: none;
    }
  }

</style>