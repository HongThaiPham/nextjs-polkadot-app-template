"use client";

import { useWalletProvider } from "@/components/providers/WalletProvider";

export default function Home() {
  const { accounts, connect } = useWalletProvider();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => connect("subwallet-js")}>connect</button>
      <pre>{JSON.stringify(accounts, null, 2)}</pre>
    </div>
  );
}
