import { AppContainerStyles } from "./styles/appcontainer"
import { Button } from "./styles/button"
import { Container } from "./styles/container"
import { Input } from "./styles/input"
import { Select } from "./styles/select"

function App() {

  return (
    <Container>
      <AppContainerStyles>
        <div className="titleContainer">
          <h1>Currency Converter</h1>
        </div>
        <Input type="number" placeholder="Quantia em reais" />
        <label htmlFor="moedas">
          <Select name="moedas">
            <option value="usd">Dólar (USD)</option>
            <option value="eur">Euro (EUR)</option>
            <option value="jpy">Iene (JPY)</option>
          </Select>
        </label>
        <div className="buttonContainer">
          <Button>
            Converter
          </Button>
          <span>Valor</span>
        </div>
      </AppContainerStyles>
    </Container>
  )
}

export default App
