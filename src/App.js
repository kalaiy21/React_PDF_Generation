import './App.css';

function App() {

  const data = [
      { firstName: "John", lastName: "Smath" },
      { firstName: "Paul", lastName: "Smeth" },
      { firstName: "Cody", lastName: "Smith" },
      { firstName: "Jordan", lastName: "Smoth" },
      { firstName: "Jim", lastName: "Smuth" },
    ]

  return (
    <div className="App">
      {
        data.map((user) => {
          return <div>
            <p>{user.firstName} {user.lastName}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
