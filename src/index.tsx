import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () =>{
      return [
        {
          id: 1,
          title: 'Entrada 1',
          type: 'entrada',
          value: 100,
          date: new Date()
        },
        {
          id: 2,
          title: 'Entrada 2',
          type: 'entrada',
          value: 200,
          date: new Date()
        },
        {
          id: 3,
          title: 'Saida 1',
          type:'saida',
          value: 300,
          date: new Date()
        },
        {
          id: 4,
          title: 'Saida 2',
          type:'saida',
          value: 400,
          date: new Date()
        }
      ]
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