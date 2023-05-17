import { v4 as uuidv4 } from "uuid";
const mockData = [
  {
    id: uuidv4(),
    title: "por hacer",
    task: [
      {
        id: uuidv4(),
        title: "estudiar javaScript",
      },
      {
        id: uuidv4(),
        title: "curso html",
      },
      {
        id: uuidv4(),
        title: "curso flutter",
      },
      {
        id: uuidv4(),
        title: "estudiar react",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "en progreso",
    task: [
      {
        id: uuidv4(),
        title: "estudiar html",
      },
      {
        id: uuidv4(),
        title: "curso html",
      },
    ],
  },
  {
    id:uuidv4(),
    title:"Completado",
    task:[
        {
            id:uuidv4(),
            title:"estudiar css"
        },

    ]
},
];
export default mockData
