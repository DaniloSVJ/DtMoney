import Modal from 'react-modal'
import {FormEvent, useState, useContext} from 'react'
import { api } from '../../services/api'
import { useTransactions } from '../../hooks/useTransactions'

import { Container ,TransactionTypeContainer,RadioBox} from './styles'
import inCome from '../../assets/income.svg'
import outCome from '../../assets/outcome.svg'
import closeimg from '../../assets/close.svg'

interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}





export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransaction} = useTransactions()
    const [type, setType] = useState('deposit')
    const [title,setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category,setCategory] = useState('')

    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault() //Evita que a pagina recarregue
       
       await createTransaction({
            type,
            title,
            amount,
            category
        })
        setType('deposit')
        setTitle('')
        setAmount(0)
        setCategory('')

        onRequestClose();

    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="submit" onClick={onRequestClose} className="react-modal-close"> 
                <img src={closeimg} alt="Fechar Modal"/>

            </button>
            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar transação</h2>
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={event=>setTitle(event.target.value)}
                />
                <input 
                    type="number"   
                    placeholder="Valor" 
                    value={amount}
                    onChange={event=>setAmount(Number(event.target.value))}
                
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={()=>{setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={inCome} alt="Entrada" />
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={()=>{setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outCome} alt="Saída" />
                    </RadioBox>
                </TransactionTypeContainer>


                <input 
                    type="text"  
                    placeholder="Categoria" 
                    value={category}
                    onChange={event=>setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
               
            </Container>
        
        </Modal>
    )
}