import InputText from "./components/inputText/inputText"
import Button from "./components/button/button"

function App() {
  return (
    <>
      <h2>Texto colorido em caixa alta:</h2>

      <InputText startText="Digite aqui seu texto"/>
      
      <Button label="Enviar" />
    </>
  );
}

export default App;
