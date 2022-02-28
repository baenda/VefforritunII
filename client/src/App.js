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
    "test product\nb",
    "test product\nc",
    "test product\nd"
  ]
  return (
    <div className="App" >
      <Header sections={sections} title="Bóndabær"/>
      <img width="100%" height= "450" src="https://image.shutterstock.com/image-vector/rural-landscape-field-trees-grass-260nw-1694307613.jpg"/> 
      <Main posts={testProducts} title="test"/>
    </div>
  );
}

export default App;
