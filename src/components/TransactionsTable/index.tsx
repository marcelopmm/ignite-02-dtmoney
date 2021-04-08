import { Container } from './styles';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function TransactionsTable() {


  //* * * Utilizando o AXIOS * * * 
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  // * * * Utilizando o FETCH * * * 
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/transactions')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, []);

  return (
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
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$ 12.000.00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw"> - R$ 500.00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$ 1.000.00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw"> - R$ 200.00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container >
  );
}