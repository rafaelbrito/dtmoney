import Modal from 'react-modal';
import { Container, TransactionTypeContaniner, RadioBox } from './styles';
import closeImg from '../../asserts/fechar.svg';
import entrada from '../../asserts/entradas.svg';
import saida from '../../asserts/saidas.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransactionModalProps {
    isOnpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOnpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransactions } = useTransactions();
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransactions({
            title,
            value,
            category,
            type,
        })
        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type='number'
                    placeholder='Valor'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

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

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit"> Cadastrar</button>
            </Container>
        </Modal>
    );
}