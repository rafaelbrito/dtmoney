import Modal from 'react-modal';
import { Container, TransactionTypeContaniner, RadioBox } from './styles';
import closeImg from '../../asserts/fechar.svg';
import entrada from '../../asserts/entradas.svg';
import saida from '../../asserts/saidas.svg';
import { useState } from 'react';


interface NewTransactionModalProps {
    isOnpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOnpen, onRequestClose }: NewTransactionModalProps) {
    const[type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOnpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' />
                <input type='number' placeholder='Valor' />

                <TransactionTypeContaniner>
                    <RadioBox type='button'
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor='green'
                    >
                        <img src={entrada} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button'
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                    >
                        <img src={saida} alt='Saida' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContaniner>

                <input placeholder='Categoria' />
                <button type="submit"> Cadastrar</button>
            </Container>
        </Modal>
    );
}