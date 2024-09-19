![Static Badge](https://img.shields.io/badge/usage-sveltekit-orange) ![Vercel Badge](https://deploy-badge.vercel.app/vercel/deploy-badge) ![License](https://img.shields.io/badge/license-MIT-blue)

# Your Tribe for Life Squadpage
Welkom bij de Your Tribe for Life squadpage, een website gebouwd met SvelteKit. Deze squadpage biedt een overzicht van de squads van jaar 2, waarbij elke squad wordt weergegeven in een uniek Pokémon thema. De gebruiker kan eenvoudig een squad selecteren, door de leden bladeren, en meer informatie over specifieke leden verkrijgen via Pokémon kaarten met een animaties.

## Inhoud

### [- Kenmerken](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#kenmerken)
### [- Preview ](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#preview)
### [- Live pagina](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#live-pagina)
### [- Gebruikersaanwijzing](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#gebruikersaanwijzing)
### [- Huisstijl](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#huisstijl)
### [- Bronnen](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#bronnen)
### [- Installatiehandleiding](https://github.com/Khdulkadir/your-tribe-for-life-squad-page?tab=readme-ov-file#installatiehandleiding-1)


## Kenmerken
Een overzicht van de belangrijkste functies van de Your Tribe for Life squadpage, zoals de kaarten voor ledeninformatie en een gebruiksvriendelijke interface.

- Pokémon thema: Elke squad is weergegeven met een Pokémon type: grass, lightning of fire.
- Homepagina: De gebruiker kan een squad selecteren. Elke squad heeft zijn eigen thema, gebasseerd op het bijbehorende Pokémon type.
- Overzichtspagina: De leden van de geselecteerde squad worden weergegeven als interactieve Pokémon kaarten. Hover over een kaart om de naam van het squadlid te zien en meer details te krijgen.
- Detailpagina: Bij het klikken op een lid toont een animatie hoe een Pokéball opent en onthult meer informatie over dat lid. 
- SvelteKit & Directus API: De website is gebouwd met SvelteKit en haalt de data dynamisch op via de Directus API.

------------------------------------------------------------------------------------------------------------------
## Preview
Een visuele demonstratie van de website in actie, zodat gebruikers een idee krijgen van hoe de squadpage eruitziet en hoe het werkt voordat ze de live pagina bezoeken.
------------------------------------------------------------------------------------------------------------------


## Live pagina
Toegang tot de volledig functionele versie van de squadpage, waar gebruikers kunnen navigeren door de squads, de Pokémon-kaarten van leden kunnen bekijken en andere functies kunnen verkennen.
Bekijk deze [hier](https://your-tribe-for-life-squad-page-plum-phi.vercel.app/)!


## Gebruikersaanwijzing
Een gedetailleerde gids die uitlegt hoe gebruikers de squadpage kunnen gebruiken, inclusief stappen voor het selecteren van een squad en het navigeren door de beschikbare informatie over leden.

### Navigeren door de pagina
Homepagina:
- De gebruiker begint op de homepagina, waar een selectie gemaakt kan worden tussen de verschillende squads. Elke squad is te herkennen aan zijn unieke kleuren en layout.

Overzichtspagina:
- Nadat een squad is geselecteerd, navigeert de gebruiker naar de overzichtspagina. Hier worden alle leden van de squad weergegeven als interactieve Pokémon kaarten. De gebruiker kan over elke kaart hoveren om de naam van dat lid te zien en door te klikken naar hun detailpagina.

Detailpagina:
- Door op een lid te klikken, gaat de gebruiker naar de detailpagina van die specifieke lid. Hier ziet de gebruiker een Pokéball animatie, waarna de volledige Pokémon kaart van het lid wordt onthuld met gedetailleerde informatie.


## Huisstijl
Informatie over de ontwerpkeuzes en branding van de squadpage, inclusief kleurenpaletten, typografie en andere visuele elementen die bijdragen aan het Pokémon-thema.

### Thema
Voor deze website hebben we gekozen voor een Pokémon-thema, waarbij we gebruikmaken van enkele iconische Pokémon als mascottes voor de drie verschillende squads. Elke squad wordt vertegenwoordigd door een unieke 'starter' Pokémon die als symbool fungeert voor de groep. Daarnaast gebruiken we het idee van de Pokémon trading card game voor het ontwerp van de squadleden-kaarten. Deze kaarten dienen als een manier om meer informatie over de squadleden te tonen. Om de kaarten nog interactiever te maken, hebben we het evolutiesysteem van Pokémon toegepast, waarbij de leden onthuld worden in een vel licht.

------------------------------------------------------------------------------------------------------------------
### Lettertype

De verschillende lettertype die we gebruiken zijn:
- 

x gebruiken we voor broodteksten, en x gebruiken we meer voor headings en andere grote teksten.
------------------------------------------------------------------------------------------------------------------


### Kaartenlayout
Pokémonkaarten ontwerp: De squadleden worden weergegeven in de vorm van klassieke Pokémonkaarten.

### Animaties
Pokéball animatie: De detailpagina bevat een animatie waarbij een Pokéball wordt geopend en de Pokémonkaart van het squadlid tevoorschijn komt.

## Bronnen
Hier vind je de bronnen van de tools die we hebben gebruikt. 

### [Sveltekit](https://kit.svelte.dev/)
![image](https://github.com/user-attachments/assets/27f8ed03-7202-4a01-9924-0f358fc5e75c)

### [Vercel Docs](https://vercel.com/docs/frameworks/sveltekit)
![image](https://github.com/user-attachments/assets/f55ed6b2-1d62-4999-9d23-7e4fb1f00cf3)


## Installatiehandleiding
Instructies voor het lokaal opzetten van de squadpage, zodat ontwikkelaars het project kunnen downloaden, installeren en zelf kunnen draaien met behulp van SvelteKit.

**1. Vereisten**

Zorg ervoor dat je de volgende software hebt geïnstalleerd:

- Node.js
- Packetmanager zoals npm of yarn

**2. git repository clonen**

Je kunt op de main pagina de repo clonen en je eigen lokale versie opvragen.

**3. SvelteKit en packets installeren**

Om aan het project te werken, moet je eerst een nieuw SvelteKit-project opzetten. Dit kan eenvoudig gedaan worden met create-svelte.

Open je terminal.
Voer ```npm install``` of ```yarn install``` uit om de juiste packets te installeren om aan het project te werken.

**4. Deployen op vercel**

Op [vercel.com](https://vercel.com/docs/frameworks/sveltekit) kun je verder op weg met het deployen van een svelteproject. 

