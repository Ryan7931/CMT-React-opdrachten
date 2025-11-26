# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


**1. Wat moet ik maken?**

Ik ga een eenvoudige To-Do applicatie bouwen in React. De gebruiker kan:

Een tekst invoeren in een inputveld.

Met een knop een nieuw To-Do-item toevoegen.

De lijst met alle To-Do's onder het formulier zien verschijnen.

Er zijn geen extra functies nodig zoals verwijderen, afvinken of styling. De focus ligt op de basis van React: state, props en componentstructuur.

**2. Welke componenten heb ik nodig?**

Voor deze applicatie zijn meerdere opties mogelijk, maar ik kies voor een duidelijke structuur met aparte componenten.

Componenten:

App: hoofdcomponent, beheert de state.

TodoInput: bevat het inputveld en de knop.

TodoList: toont de lijst met To-Do’s.

TodoItem (optioneel): toont één item uit de lijst.

Deze scheiding maakt de code overzichtelijk en logisch.

**3. Welke state heb ik nodig?**

Ik heb maar twee stukken state nodig:

newTodo — de huidige waarde van het inputveld.

todos — een array met alle ingevoerde To-Do’s.

Meer state is niet nodig om deze applicatie correct te laten werken.

**4. Wat is de flow?**

Zo loopt de data door de applicatie:

De gebruiker typt in het inputveld → newTodo wordt geüpdatet.

Gebruiker klikt op de knop "Add".

Een event-handler voegt de waarde van newTodo toe aan de array todos.

De lijst wordt automatisch opnieuw gerenderd door React.

Het inputveld wordt weer leeggemaakt zodat er een nieuwe To-Do kan worden ingevuld.

Dit volgt het basisprincipe van React: State verandert → UI verandert.

**5. Psuedo-code**

<!-- state: newTodo = ""
state: todos = []


onInputChange(event):
newTodo = event.value


onAddClick():
todos.push(newTodo)
newTodo = ""


render():
Toon inputveld met value = newTodo
Toon knop die onAddClick uitvoert
Voor elk item in todos:
Render <TodoItem> -->

**6. De 3-check**

Is de state minimaal?

Ja, alleen de tekst van het inputveld en de lijst van To-Do’s.

Staat de state op de juiste plek?

Ja, in de App-component omdat meerdere child components deze gegevens nodig hebben.

Is het herbruikbaar?

Ja, de componenten zijn simpel en herbruikbaar. TodoList en TodoItem kunnen in andere projecten worden ingezet.

