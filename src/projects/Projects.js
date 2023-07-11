const domain = 'https://willknguyen.github.io/';

const ProjectList = [
    {
        link: domain + '/OdinProject/odin-recipes/index.html',
        title: 'Recipes Website',
        description: 'My first website, constructed with minimal HTML and CSS. Contained several nonsense recipes.'
    },
    {
        link: domain + '/OdinProject/landing-page/index.html',
        title: 'Real Estate Landing Page',
        description: 'Learning about FlexBox and more advanced CSS tools to design a website homepage. I basically copied Zillow\'s design.'
    },
    {
        link: domain + '/OdinProject/rock-paper-scissors/index.html',
        title: 'Rock Paper Scissors (with a bang)',
        description: 'Integrating Javascript to make a rock-paper-scissors game with the computer.'
    },
    {
        link: domain + '/OdinProject/etch-a-sketch/index.html',
        title: 'Etch-a-Sketch',
        description: 'Flexing my DOM manipulation skills by buiding a sketch pad for users to draw on.'
    },
    {
        link: domain + '/OdinProject/calculator/index.html',
        title: 'Calculator',
        description: 'Getting more practice on EventListeners and DOM manipulations by designing a simple calculator.'
    },
    {
        link: domain + '/OdinProject/sign-up-form/index.html',
        title: 'Sign-up Form',
        description: 'Incorporating more advanced HTML/CSS concepts such as Form Validation, CSS relative units, advanced CSS selectors to design a sign-up form.'
    },
    {
        link: domain + '/OdinProject/dashboard/index.html',
        title: 'Admin Dashboard',
        description: 'Combining FlexBox and Grid Layout to create a modern-looking admin dashboard.'
    },
    {
        link: domain + '/OdinProject/library/index.html',
        title: 'Library',
        description: 'Small app for users to keep track of the books that they want to read (using localStorage). Working with objects and object constructors in Javascript.'
    },
    {
        link: domain + '/OdinProject/tic-tac-toe/index.html',
        title: 'Tic-Tac-Toe',
        description: 'Utilizing the module and factory pattern to create a Tic-Tac-Toe game with multiple object classes.'
    },
    {
        link: domain + '/OdinProject/restaurant/dist/index.html',
        title: 'Restaurant Homepage',
        description: 'Practicing with webpack and more complex DOM manipulation to dynamically render a simple restaurant homepage with only Javascript (I wasn\'t feeling particularly creative that day so the website has minimal styling).'
    },
    {
        link: domain + '/OdinProject/to-do-list/dist/index.html',
        title: 'To-do List',
        description: 'More practice with classes and objects in JS, as well as implementing SOLID design principles to separate application logic.'
    },
    {
        link: domain + '/OdinProject/weather-app/dist/index.html',
        title: 'Weather App',
        description: 'Working with async functions and API to display current weather data.'
    },
    {
        link: domain + 'cv-generator',
        title: 'CV Generator',
        description: 'First project with React.js to build a resume generator.'
    },
    {
        link: domain + 'memory-game',
        title: 'Memory Game',
        description: 'Learning hooks and lifecycle methods in React.js to build a simple game.'
    },
    {
        link: domain + 'frontend-portfolio',
        title: 'Frontend Portfolio',
        description: 'I redesigned this homepage using React components, rather than hard coding each HTML elements like previously. The sidebar and project list are all React components!'
    }
];

export default ProjectList.reverse();