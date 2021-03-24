import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  //functions iniciadas com "Handle" significa que o usuário vai clicar em alguma coisa para executa-la

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)

  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)

  }


  return (
    <>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTrasactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />



      <GlobalStyle />

    </>
  );
}


