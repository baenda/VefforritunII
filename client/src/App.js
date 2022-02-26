import Header from './mainpage/header';
import Main from './mainpage/Main';

function App() {
  const sections = [
    {title: "Lamb", url: "lamb"},
    {title: "Naut", url: "naut"},
    {title: "Svín", url: "svin"},
    {title: "Hakk", url: "hakk"},
    {title: "Fisk", url: "fisk"},
    {title: "Hæna", url: "haena"},
    {title: "Geit", url: "geit"},
    {title: "Hest", url: "hest"},
    {title: "Kjöt", url: "kjot"},
    {title: "Afurðir", url: "afurdir"},
    {title: "Þorri", url: "thor"}
  ]
  const testProducts = [
    "test product\na",
    "test product\na",
    "test product\na"
  ]
  return (
    <div className="App">
      <Header sections={sections} title="Bóndabær"/>
      <Main posts={testProducts} title="test"/>
    </div>
  );
}

export default App;
