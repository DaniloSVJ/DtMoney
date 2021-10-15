import Modal from 'react-modal'
import {FormEvent, useState} from 'react'
import { Container ,TransactionTypeContainer,RadioBox} from './styles'
import inCome from '../../assets/income.svg'
import outCome from '../../assets/outcome.svg'
import closeimg from '../../assets/close.svg'
import { api } from '../../services/api'
interface NewTransactionModalProps{
    isOpen:boolean
    onRequestClose:()=>void;
}





export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const [type, setType] = useState('deposit')
    const [title,setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category,setCategory] = useState('')

    function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault() //Evita que a pagina recarregue
       
        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions',data)

    

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
                    value={value}
                    onChange={event=>setValue(Number(event.target.value))}
                
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