export const allQuestions = [
  {
    id: 1,
    quizId: 1,
    questionText: "Which React hook is used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useContext"],
    answer: "useEffect",
  },
  {
    id: 2,
    quizId: 1,
    questionText: "What is the current major version of Material UI in 2026?",
    options: ["v4", "v5", "v6", "v7"],
    answer: "v7",
  },

  {
    id: 3,
    quizId: 1,
    questionText: "What is ReactJS primarily used for building?",
    options: [
      "Database management",
      "Server-side scripting",
      "User interfaces",
      "Machine learning",
    ],
    answer: "User interfaces",
  },
  {
    id: 4,
    quizId: 1,
    questionText: "What does JSX stand for in React?",
    options: [
      "JavaScript Execution",
      "JavaScript XML",
      "JavaScript Extension",
      "JSON XML",
    ],
    answer: "JavaScript XML",
  },
  {
    id: 5,
    quizId: 1,
    questionText:
      "Which hook is preferred for managing complex state logic that involves multiple sub-values?",
    options: ["useState", "useReducer", "useContext", "useLayoutEffect"],
    answer: "useReducer",
  },
  {
    id: 6,
    quizId: 2,
    questionText:
      "Which hook is used to perform side effects, such as data fetching, in a functional component?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    answer: "useEffect",
  },
  {
    id: 7,
    quizId: 2,
    questionText:
      "In JSX, how do you pass a dynamic value or expression to an attribute?",
    options: [
      'Using double quotes ("")',
      "Using parentheses (())",
      "Using curly braces ({})",
      "Using square brackets ([])",
    ],
    answer: "Using curly braces ({})",
  },
  {
    id: 8,
    quizId: 2,
    questionText:
      "Which command is recommended in 2026 to create a new React application with modern build tools?",
    options: [
      "npm install react",
      "node init react",
      "npx create-react-app my-app",
      "react-new app",
    ],
    answer: "npx create-react-app my-app",
  },
  {
    id: 9,
    quizId: 2,
    questionText:
      "Which hook should be used if you want to optimize performance by caching a computed value?",
    options: ["useCallback", "useRef", "useMemo", "useReducer"],
    answer: "useMemo",
  },
  {
    id: 10,
    quizId: 2,
    questionText: "React follows a ________ data flow.",
    options: [
      "Bi-directional",
      "Uni-directional",
      "Multi-directional",
      "Circular",
    ],
    answer: "Uni-directional",
  },
];

export const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A database",
      "A frontend library",
      "A backend framework",
      "A programming language",
    ],
    answer: "A frontend library",
    selected: null,
    answerDetails:
      "React is an open-source JavaScript library developed by Facebook for building fast and reusable user interfaces, mainly for single-page applications.",
  },
  {
    id: 2,
    question:
      "Which hook is used for managing state in a functional component?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState",
    selected: null,
    answerDetails:
      "useState is a React hook that allows you to add and manage state variables in functional components.",
  },
  {
    id: 3,
    question: "Which hook is used to perform side effects in a component?",
    options: ["useState", "useEffect", "useMemo", "useReducer"],
    answer: "useEffect",
    selected: null,
    answerDetails:
      "useEffect lets you perform side effects such as fetching data, updating the DOM, or setting up subscriptions after the component renders.",
  },
  {
    id: 4,
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
    selected: null,
    answerDetails:
      "React was developed by Facebook in 2013 and is now maintained by Meta (Facebook) along with a community of developers.",
  },
  {
    id: 5,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaX Script",
    ],
    answer: "JavaScript XML",
    selected: null,
    answerDetails:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, which React transforms into React.createElement calls.",
  },
  {
    id: 6,
    question: "Which prop is used to uniquely identify elements in a list?",
    options: ["id", "key", "index", "ref"],
    answer: "key",
    selected: null,
    answerDetails:
      "The 'key' prop helps React identify which items have changed, are added, or are removed, making list rendering more efficient.",
  },
  {
    id: 7,
    question:
      "Which React feature is used to avoid passing props manually through each level?",
    options: ["Redux", "useContext", "Props", "useEffect"],
    answer: "useContext",
    selected: null,
    answerDetails:
      "The Context API with useContext hook allows sharing state or data across multiple components without prop drilling.",
  },
  {
    id: 8,
    question: "Which hook is used for referencing DOM elements directly?",
    options: ["useMemo", "useRef", "useCallback", "useEffect"],
    answer: "useRef",
    selected: null,
    answerDetails:
      "useRef creates a mutable object that can hold a value across renders, and it is commonly used to directly reference DOM elements.",
  },
  {
    id: 9,
    question:
      "What is the default behavior of React components when state updates?",
    options: [
      "They reload the whole page",
      "They re-render",
      "They stop rendering",
      "They only re-render children",
    ],
    answer: "They re-render",
    selected: null,
    answerDetails:
      "When state or props change, React re-renders the component to update the UI and keep it in sync with the data.",
  },
  {
    id: 10,
    question: "Which hook is used to memoize expensive calculations?",
    options: ["useCallback", "useMemo", "useReducer", "useEffect"],
    answer: "useMemo",
    selected: null,
    answerDetails:
      "useMemo caches the result of an expensive calculation and only recomputes it when its dependencies change, improving performance.",
  },
];
