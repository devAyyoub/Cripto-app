import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";

export default function CriptoSearchForm() {
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value)
    console.log(currency)
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
