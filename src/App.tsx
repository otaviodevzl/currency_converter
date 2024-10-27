import { useState } from "react";
import axios from "axios";
import { AppContainerStyles } from "./styles/appcontainer";
import { Button } from "./styles/button";
import { Container } from "./styles/container";
import { Input } from "./styles/input";
import { Select } from "./styles/select";

const App: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD"); 
  const [convertedValue, setConvertedValue] = useState<number | null>(null);
  const [error, setError] = useState<string>(""); 

  const handleConvert = async () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setError("Quantia inválida.");
      setConvertedValue(null);
      return;
    }

    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/BRL`);
      console.log("Resposta da API:", response.data);

      const rate = response.data.rates[currency]; 
      console.log("Taxa de câmbio para", currency, ":", rate); 

      if (rate) {
        const result = amountValue * rate; 
        console.log("Resultado da conversão:", result);
        setConvertedValue(parseFloat(result.toFixed(2))); 
        setError(""); 
      } else {
        setError("Erro");
      }

    } catch (err) {
      console.error("Erro ao buscar a taxa de câmbio:", err);
      setError("Erro");
      setConvertedValue(null);
    }
  };

  return (
    <Container>
      <AppContainerStyles>
        <div className="titleContainer">
          <h1>Currency Converter</h1>
        </div>
        <Input
          type="number"
          placeholder="Quantia em reais"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="moedas">
          <Select
            name="moedas"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)} 
          >
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="JPY">Iene (JPY)</option>
          </Select>
        </label>
        <div className="buttonContainer">
          <Button onClick={handleConvert}>Converter</Button>
          {convertedValue !== null && (
            <span>Valor Convertido: {convertedValue} {currency}</span>
          )}
          {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
      </AppContainerStyles>
    </Container>
  );
}

export default App;
