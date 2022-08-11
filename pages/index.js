import { injected } from './wallet/connectors';
import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core';

export default function Home() {
  const { active, account, library, connector, activate, deactivate} = useWeb3React()

  async function connect(){
    try{
      await activate(injected)
    } catch (ex) {  
      console.log(ex)
    }
  }

  async function disconnect(){
    try{
      deactivate()
    } catch (ex) {  
      console.log(ex)
    }
  }

  return (
    <div>
      <button onClick={connect} classname='py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800'>Connect to Metamask</button>
      { active ? <span>Connected with : <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect}>disconnect</button>
    </div>
  )
}
