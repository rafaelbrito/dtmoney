import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";


export function TransactionTable() {
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/06/2024</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/06/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}