This project provides coders with an
opportunity to gain experience with 
the useContext hook in React while
practicing and improving their skills.
They will fix common mistakes related 
to imports, context creation, property
destructuring, handling object existence
checks, ensuring property presence,
and providing unique key props in lists.

Mistake 1: The useContext hook is not
imported from 'react'.
Fix: Import the useContext hook from
'react'.

Mistake 2: The context is not created
using React.createContext().
Fix: Create a context using const
MyContext = React.createContext();.

Mistake 3: The component tree is not
wrapped with the Context Provider.
Fix: Wrap the component tree with
the Context Provider

Mistake 4: The Context Provider is
failing to pass a value to the "value"
prop in the "MyContext.Provider"
component.
Fix: You need to provide a value 
for the value prop.

Mistake 5: The data property is not
destructured from the context value
in ComponentA.
Fix: Destructure the data property
from the context value in ComponentA

Mistake 6: The data object is used 
without checking if it exists.
Fix: Check if the data object exists
before using it in ComponentA 

Mistake 7: The property title is
missing in ComponentA
Fix: Ensure that the data object has
a title property.

Mistake 8: The data property is not
destructured from the context value
in ComponentB.
Fix: Destructure the data property
from the context value in ComponentB 

Mistake 9: The data object is used
without checking if it exists.
Fix: Check if the data object exists
before using it in ComponentB

Mistake 10: The object data is
missing in ComponentB
Fix: Ensure that description property
is in data object.

Mistake 11: The data property is not
destructured from the context value
in ComponentC.
Fix: Destructure the data property
from the context value in ComponentC 

Mistake 12: The data object is used
without checking if it exists.
Fix: Check if the data object exists
before using it in ComponentC

Mistake 13: The key prop is missing
for each item in the list rendered
in ComponentC.
Fix: Provide a unique key prop for
each item in the list

