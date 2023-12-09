const update = document.createElement("h1");
    update.innerHTML = ("I want to be a Software Developer")

    const update2 = document.getElementById("yes2");
    update2.appendChild(update);
    const heading = React.createElement("h1", {}, "I will be a great developer 1 Day");
    const root = ReactDOM.createRoot(document.getElementById("yes"))
    root.render(heading);


    const Core = React.createElement("h1",{id: "parent"},[
        React.createElement("h3",{id: "child"},[
        React.createElement("h3",{id: "child5"},"That's How you create Nested Elements"),
        React.createElement("h3",{id: "child2"},"This is the core react")
        ]),
        React.createElement("h4",{id: "child3"},"That's How we create childer in children"),
        React.createElement("h5",{id: "child4"},"Using Core React")
    ]);

        
  


    const root2 = ReactDOM.createRoot(document.getElementById("no"))
    root2.render(Core);

