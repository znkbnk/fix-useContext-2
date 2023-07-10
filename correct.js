//correct

import React, { useContext } from "react";

const MyContext = React.createContext();

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
      <MyContext.Provider value={value}>
        <ComponentA />
      </MyContext.Provider>
    </div>
  );
};

const ComponentA = () => {
  const { data } = useContext(MyContext);

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <ComponentB />
    </div>
  );
};

const ComponentB = () => {
  const { data } = useContext(MyContext);

  if (!data) {
    return null;
  }

  return (
    <div>
      <p>{data.description}</p>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  const { data } = useContext(MyContext);

  if (!data) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
