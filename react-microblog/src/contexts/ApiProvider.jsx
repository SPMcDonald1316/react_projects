import { createContext, useContext } from "react";
import MicroblogApiClient from '../MicroblogApiClient'
import { useFlash } from './FlashProvider';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const flash = useFlash();

  const onError = () => {
    flash('An unexpected error has occured. Please try again.', 'danger');
  }

  const api = new MicroblogApiClient(onError);

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
