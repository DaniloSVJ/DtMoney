
import incomeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import {Container} from './styles'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entrada" />
                </header>    
                <strong>
                    R$ 1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcome} alt="saída" />
                </header>    
                <strong>
                    R$ 1000,00
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>    
                <strong>
                    R$ 1000,00
                </strong>
            </div>
        </Container>
    )
}