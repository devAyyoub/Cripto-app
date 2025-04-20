import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";

export default function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
        ...pair,
        [e.target.name] : e.target.value
    })
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((crypto) => (
            <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
