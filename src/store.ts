import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "./schema/cripto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
    cryptoCurrencies : CryptoCurrency[],
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptoCurrencies: [],
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos();
    set(() => ({
        cryptoCurrencies
    }))
  },
}));
