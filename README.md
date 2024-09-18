# Your Tribe for Life Squadpage
Welkom bij de Your Tribe for Life squadpage, een website gebouwd met SvelteKit. Deze squadpage biedt een overzicht van de squads van jaar 2, waarbij elke squad wordt weergegeven in een uniek Pokémon thema. De gebruiker kan eenvoudig een squad selecteren, door de leden bladeren, en meer informatie over specifieke leden verkrijgen via Pokémon kaarten met een animaties.
![Static Badge](https://img.shields.io/badge/usage-sveltekit-orange) ![Vercel Badge](https://deploy-badge.vercel.app/vercel/deploy-badge) ![License](https://img.shields.io/badge/license-MIT-blue)

## Inhoud

### - Kenmerken
### - Screenshots 
### - live pagina
### - gebruikersaanwijzing
### - Installatiehandleiding
### - huisstijl
### - Contribute
### - bronnen


## Kenmerken
- Pokémon thema: Elke squad is weergegeven met een Pokémon type: grass, lightning of fire.
- Homepagina: De gebruiker kan een squad selecteren. Elke squad heeft zijn eigen thema, gebasseerd op het bijbehorende Pokémon type.
- Overzichtspagina: De leden van de geselecteerde squad worden weergegeven als interactieve Pokémon kaarten. Hover over een kaart om de naam van het squadlid te zien en meer details te krijgen.
- Detailpagina: Bij het klikken op een lid toont een animatie hoe een Pokéball opent en onthult meer informatie over dat lid. 
- SvelteKit & Directus API: De website is gebouwd met SvelteKit en haalt de data dynamisch op via de Directus API.
  
## preview

## live pagina
Bekijk de live versie van de website hier:

## gebruikersaanwijzing
### Navigeren door de pagina
Homepagina:
- De gebruiker begint op de homepagina, waar een selectie gemaakt kan worden tussen de verschillende squads. Elke squad is te herkennen aan zijn unieke kleuren en layout.

Overzichtspagina:
- Nadat een squad is geselecteerd, navigeert de gebruiker naar de overzichtspagina. Hier worden alle leden van de squad weergegeven als interactieve Pokémon kaarten. De gebruiker kan over elke kaart hoveren om de naam van dat lid te zien en door te klikken naar hun detailpagina.

Detailpagina:
- Door op een lid te klikken, gaat de gebruiker naar de detailpagina van die specifieke lid. Hier ziet de gebruiker een Pokéball animatie, waarna de volledige Pokémon kaart van het lid wordt onthuld met gedetailleerde informatie.

## huisstijl
### Thema

### Lettertype

### Kaartenlayout
Pokémonkaarten ontwerp: De squadleden worden weergegeven in de vorm van klassieke Pokémonkaarten.

### Animaties
Pokéball animatie: De detailpagina bevat een animatie waarbij een Pokéball wordt geopend en de Pokémonkaart van het squadlid tevoorschijn komt.

## bronnen

# Installatiehandleiding

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
