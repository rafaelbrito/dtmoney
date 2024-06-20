import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server: any) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de software',
          type: 'deposit',
          value: 8000,
          category: 'Freelancer',
          createdAt: Date.now(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          value: 1100,
          category: 'Casa',
          createdAt: Date.now(),
        },
        {
          id: 3,
          title: 'Internet',
          type: 'withdraw',
          value: 150,
          category: 'Despesas Escritorio',
          createdAt: Date.now(),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema: any, request: any) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);

    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);