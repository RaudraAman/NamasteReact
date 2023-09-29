// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("div",{id:"parent"},
               React.createElement("div",{id:"child"},
               [React.createElement("h1",{id:"heading2"},"i am a h1"),
               React.createElement("h2",{id:"heading2"},"i am a h2")]));

               const root  = ReactDOM.createRoot(document.getElementById("root"));
               root.render(parent);