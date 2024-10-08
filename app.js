const heading = React.createElement("h1", { id: "heading" }, "hello world");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag element"),
    React.createElement("h2", {}, "This is h2 tag element"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
