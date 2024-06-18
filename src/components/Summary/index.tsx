import { Container } from "./styles";
import entradaImg from "../../asserts/entradas.svg";
import saidaImg from "../../asserts/saidas.svg";
import totalImg from "../../asserts/total.svg";



export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidaImg} alt="Saídas" />
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className="destaque-total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>-R$500,00</strong>
            </div>
        </Container>
    );
}