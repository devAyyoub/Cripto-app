import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schema/cripto-schema";
import { Pair } from "../types";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    console.log(pair);
    
//   const url =
//     "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR";
//   const {
//     data: { Data },
//   } = await axios.get(url);
//   const result
}
