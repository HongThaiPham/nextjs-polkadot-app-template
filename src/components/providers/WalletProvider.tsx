"use client";
import {
  Injected,
  InjectedAccount,
  InjectedWindow,
  InjectedWindowProvider,
} from "@polkadot/extension-inject/types";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

const WalletContext = createContext<{
  accounts: InjectedAccount[];
  connect: (name: "subwallet-js" | "") => Promise<void>;
}>({
  accounts: [],
  connect: async () => {},
});

const WalletProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [injected, setInjected] = useState<Injected | undefined>(undefined);
  const [accounts, setAccounts] = useState<InjectedAccount[]>([]);

  const connect = useCallback(async (name: "subwallet-js" | "") => {
    if (typeof window === "undefined") {
      return;
    }

    const injectedWindow = window as Window & InjectedWindow;
    const provider: InjectedWindowProvider = injectedWindow.injectedWeb3[name];
    const injected: Injected = await provider.enable!("Todo Dapp");
    injected.accounts.subscribe(setAccounts);

    setInjected(injected);
  }, []);

  const getConnectedAccounts = useCallback(async () => {
    if (!injected) return [];
    const accounts: InjectedAccount[] = await injected.accounts.get();
    // console.log('Accounts:', accounts);
    return accounts;
  }, [injected]);

  const getActiveAccount = useCallback(async () => {
    const accounts = await getConnectedAccounts();
    // console.log('Accounts:', accounts);
    return accounts[0];
  }, [getConnectedAccounts]);

  return (
    <WalletContext.Provider value={{ connect, accounts }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

export const useWalletProvider = () => useContext(WalletContext);
