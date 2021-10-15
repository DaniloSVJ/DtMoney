import { useEffect, useState } from 'react'
import { Container } from './styles'
import {api} from '../../services/api'

interface Transaction {
    id: number,
    title:string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

interface Response{
    transaction:Transaction;
}
  /* eslint react/prop-types: 0 */      
export function TransactionTable(){
    let teste:  Transaction
    const [transactions, setTransasactions]= useState<Transaction[]> ([])
    
     
    useEffect(() => {
                                                 
        
        api.get('transactions').then(response => 
                
            setTransasactions(response.data.transactions) )
            
            
            
            
    }, []);
   

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>

                    {transactions.map(transaction=>{return(
                        <tr key={transaction.id}>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>01/05/2021</td>
                    </tr>
                    )})}
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>01/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 1.000</td>
                        <td>Casa</td>
                        <td>11/05/2021</td>
                    </tr>
                  

                </tbody>
            </table>
        </Container>
    )
}
/* eslint-enable react/prop-types */