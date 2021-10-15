import React, { useState } from 'react';
import Modal from  'react-modal'
import { GlobalStyle } from './styles/globo';
import {Header}from './components/Header'
import {Dashboard}from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] =useState(false)
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }    

  return (
    <>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );  
}

