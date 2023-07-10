//incorrect

import React from "react";

const MyContext = createContext();

const App = () => {
  const value = {
    data: {
      title: "Example Title",
      description: "Example Description",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
    },
  };

  return (
    <div>
      <ComponentA />
    </div>
  );
};

const ComponentA = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <h1>{data}</h1>
      <ComponentB />
    </div>
  );
};

const ComponentB = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <p>{description}</p>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
