import { Contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
import styles from "../styles/Home.module.css";
import { Col, Card, Button } from 'react-bootstrap';

export default function Home() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [Loading, setLoading] = useState(false);

  const web3ModalRef = useRef();


  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  }

  const getProviderOrSigner = async (needSigner = false) => {
    
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };


  useEffect(() => {
    
    if (!walletConnected) {
      
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
    }
  }, [walletConnected]);



  const setMessage = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const messageContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);

      // setLoading(true);

      const mess = await messageContract.setMessage()

      // setLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  const getMessage = async () => {
    try {
      const provider = await getProviderOrSigner(true);

      const messageContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);

      const getmess = await messageContract.getMessage();
    } catch (error) {
      console.error(error)
    }
  }

  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wallet
    if (!walletConnected) {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }

    // If we are currently waiting for something, return a loading button
    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }
  };


















  return (
    <div className="col d-flex justify-content-center my-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Col data-aos='zoom-in' md={6} xl={6} className="mx-auto"> */}
        {/* <Card className="card">
          <Card.Header className="text-center">
            <h3>Send Message To LearnWeb3DAO</h3>
          </Card.Header>
          <Card.Body> */}
            {/* <Card.Title>Special title treatment</Card.Title> */}
            {/* <Card.Text className="col d-flex justify-content-center my-auto">
              <Col md={6}>
                <p>Enter your address</p>
                <input
                  type="message"
                  placeholder="Wallet Address"
                  className={styles.input}
                />
                <input
                  type="message"
                  placeholder="Wallet Address"
                  cols="120" rows="5"
                  className={styles.input}
                />
                
              </Col>

              <Col md={6}>
                <p>Enter your address</p>
                <input
                  type="message"
                  placeholder="Wallet Address"
                  className={styles.input}
                />
              </Col>
              
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body> */}
        {/* </Card> */}
      {/* </Col>  */}
      <form name="contact" className="py-3" data-netlify="true"  id="my-form" >       
          <div className="form-group py-2">
            <input type="tel"  name="message" className="form-control" placeholder="Wallet address" required />
        </div>
        
        <div className="form-group py-2">
            <textarea type="message" name="message" id="message" cols="50" rows="5" className="form-control" placeholder="Your Message" required></textarea>
        </div>
        
        <Button className="contact btn-block text-uppercase text-white py-3 my-4" onClick={setMessage}>send message</Button> 
      </form>

      <form name="contact" className="py-3 mx-2" data-netlify="true"  id="my-form" >   
      <div className="form-group py-2">
            <input type="tel"  name="message" className="form-control" placeholder="Wallet address" required />
        </div>

        <div >
            
        </div>
        
        <Button className="contact btn-block text-uppercase text-white py-1 my-2" onClick={getMessage}>get message</Button> 
      </form>


    </div>
  )
}
