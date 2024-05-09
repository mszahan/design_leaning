import "./App.css";

function App() {
  return (
    <>
      {/* layout with grid areas */}
      <div className="container">
        <div className="item  header">Header</div>
        <div className="item main">Main</div>
        <div className="item sidebar">Sidebar</div>
        <div className="item footer">Footer</div>
      </div>
    </>
  );
}

export default App;
