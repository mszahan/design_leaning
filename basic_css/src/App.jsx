import "./App.css";

function App() {
  return (
    <>
      {/* layout with grid areas */}
      <h1>Layout with grid</h1>
      <div className="container">
        <div className="item  header">
          Header
          <div className="suhead">subhead</div>
        </div>
        <div className="item header-b">Header B</div>
        <div className="item main">Main</div>
        <div className="item sidebar">Sidebar</div>
        <div className="item footer">Footer</div>
      </div>

      <h1>Layout with flex</h1>
      <div className="flex-container">
        <div className="flex-items first">Header 1</div>
        <div className="flex-items second">Main</div>
        <div className="flex-items third">Sidebar</div>
        <div className="flex-items fourth">Footer</div>
        <div className="flex-items first">Header</div>
        <div className="flex-items second">Main</div>
        <div className="flex-items third">Sidebar</div>
        <div className="flex-items fourth">Footer</div>
        <div className="flex-items first">Header</div>
        <div className="flex-items second">Main</div>
        <div className="flex-items third">Sidebar</div>
        <div className="flex-items fourth">Footer</div>
        <div className="flex-items first">Header</div>
        <div className="flex-items second">Main</div>
        <div className="flex-items third">Sidebar</div>
        <div className="flex-items fourth">Footer</div>
      </div>
    </>
  );
}

export default App;
