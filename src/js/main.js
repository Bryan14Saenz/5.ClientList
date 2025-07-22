'use strict';

import $ from 'jquery';
import { login, register, toDo, toDoAgregar, toDoMostrar } from './windows';
import '../style/main.scss';

// eslint-disable-next-line no-undef
const IDBRequest = indexedDB.open('Users', 1);
let db;
let dbDatos;

// Funciones
IDBRequest.addEventListener('upgradeneeded', (e) => {
  const target = e.target;

  if (target) {
    const db = target.result;

    if (!db.objectStoreNames.contains('Users')) {
      db.createObjectStore('Users', { autoIncrement: true });
    }
  }
});

IDBRequest.addEventListener('success', (e) => {
  const target = e.target;

  if (target) {
    db = target.result;
  }
});

IDBRequest.addEventListener('error', (e) => {
  const target = e.target;

  throw new Error('Error al abrir la base de datos', target.error);
});

function openDBDatos() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const request = indexedDB.open('Clientes', 1);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('Clientes')) {
        db.createObjectStore('Clientes', { autoIncrement: true });
      }
    };

    request.onsuccess = (e) => {
      resolve(e.target.result);
    };

    request.onerror = (e) => {
      reject(e.target.error);
    };
  });
}

const addUsers = (usuario = {}) => {
  if (!db) {
    throw new Error('No se ha abierto la base de datos');
  }

  return db.transaction('Users', 'readwrite').objectStore('Users').add(usuario);
};

const addClient = (clients) => {
  if (!dbDatos) {
    throw new Error('No se ha abierto la base de datos');
  }

  return dbDatos
    .transaction('Clientes', 'readwrite')
    .objectStore('Clientes')
    .add(clients);
};

const obtenerClient = () => {
  if (!dbDatos) {
    throw new Error('No se ha abierto la base de datos');
  }

  return dbDatos
    .transaction('Clientes', 'readonly')
    .objectStore('Clientes')
    .getAll();
};

const cargarClient = () => {
  obtenerClient().addEventListener('success', (e) => {
    const clients = e.target.result;

    const $tbody = $('#tbody');

    // eslint-disable-next-line no-undef
    const fragment = document.createDocumentFragment();

    if (clients.length === 0) {
      // eslint-disable-next-line no-undef
      const row = document.createElement('tr');

      row.innerHTML = '<td colspan="6">No hay clientes disponibles</td>';
      fragment.appendChild(row);
    } else {
      clients.forEach((client) => {
        // eslint-disable-next-line no-undef
        const row = document.createElement('tr');

        row.innerHTML = `
          <td scope="row">${client.id}</td>
          <td>${client.name}</td>
          <td>${client.lastName}</td>
          <td>${client.phone}</td>
          <td>${client.address}</td>
          <td>
            <button 
            id="btnSelect"
            type="button" 
            data-id="${client.id}"
            data-name="${client.name}"
            data-lastName="${client.lastName}"
            data-phone="${client.phone}"
            data-address="${client.address}"
            onclick="seleccionarCliente(
              this.dataset.name,
              this.dataset.lastName,
              this.dataset.phone,
              this.dataset.address,
              this.dataset.id
            )"
            >Seleccionar</button>
          </td>
        `;
        fragment.appendChild(row);
      });
    }

    $tbody.innerHTML = '';
    $tbody.append(fragment);
  });
};

const searchClient = (name) => {
  obtenerClient().addEventListener('success', (e) => {
    const clients = e.target.result;
    // eslint-disable-next-line no-undef
    const fragment = document.createDocumentFragment();

    clients
      .filter((client) =>
        client.name.toLowerCase().includes(name.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((client) => {
        // eslint-disable-next-line no-undef
        const row = document.createElement('tr');
        row.innerHTML = `
          <td scope="row">${client.id}</td>
          <td>${client.name}</td>
          <td>${client.lastName}</td>
          <td>${client.phone}</td>
          <td>${client.address}</td>
          <td>
            <button 
            id="btnSelect"
            type="button" 
            data-id="${client.id}"
            data-name="${client.name}"
            data-lastName="${client.lastName}"
            data-phone="${client.phone}"
            data-address="${client.address}"
            onclick="seleccionarCliente(
              this.dataset.name,
              this.dataset.lastName,
              this.dataset.phone,
              this.dataset.address,
              this.dataset.id
            )"
            >Seleccionar</button>
          </td>
        `;
        fragment.appendChild(row);
      });

    $('#tbody').innerHTML = '';

    if (fragment.children.length > 0) {
      $('#tbody').append(fragment);
    } else {
      $('#tbody').innerHTML =
        '<tr><td colspan="6">No hay clientes disponibles</td></tr>';
    }
  });
};

$(async function () {
  $('#app').append(login());

  dbDatos = await openDBDatos();

  cargarClient();

  $('#app').on('click', '#btnLogin', () => {
    $('#app').empty();
    $('#app').append(login());
  });

  $('#app').on('click', '#btnRegister', () => {
    $('#app').empty();
    $('#app').append(register());
  });

  $('#app').on('submit', '#formLogin', (e) => {
    e.preventDefault();

    const email = $('#inputEmail').val();
    const pass = $('#inputPass').val();

    if (!email || !pass) {
      throw new Error('Por favor, ingrese correo y contraseña correctamente');
    }

    const transaction = db.transaction('Users', 'readonly');
    const store = transaction.objectStore('Users');

    const request = store.openCursor();

    request.addEventListener('success', (e) => {
      const target = e.target;
      const cursor = target.result;

      if (cursor) {
        const value = cursor.value;

        if (value.email === email && value.pass === pass) {
          $('#app').empty();
          $('#app').append(toDo());

          return;
        }

        cursor.continue();
      } else {
        throw new Error('Correo o contraseña incorrectos');
      }
    });

    request.addEventListener('error', (e) => {
      const target = e.target;

      throw new Error('Error al abrir la base de datos', target.error);
    });

    request.addEventListener('complete', (e) => {
      const target = e.target;

      throw new Error('Error al abrir la base de datos', target.error);
    });
  });

  $('#app').on('submit', '#formRegister', (e) => {
    e.preventDefault();

    const usuario = {
      Username: $('#inputText').val(),
      email: $('#inputEmail').val(),
      pass: $('#inputPass').val(),
    };

    $('#app').empty();
    $('#app').append(login());

    addUsers(usuario);
  });

  $('#app').on('click', '#btnAgregar', () => {
    $('#app').empty();
    $('#app').append(toDoAgregar());
  });

  $('#app').on('click', '#btnMostrar', () => {
    $('#app').empty();
    $('#app').append(toDoMostrar());

    cargarClient();
  });

  $('#app').on('click', '#btnBack', () => {
    $('#app').empty();
    $('#app').append(toDo());
  });

  $('#app').on('submit', '#formAgregar', (e) => {
    e.preventDefault();

    const client = {
      name: $('#name').val(),
      lastName: $('#lastName').val(),
      address: $('#address').val(),
      phone: $('#phone').val(),
      id: $('#id').val(),
    };

    addClient(client);

    e.target.reset();

    cargarClient();
  });

  $('#app').on('submit', '#formSearch', (e) => {
    e.preventDefault();

    const name = $('#inputSearchPerson').val();

    searchClient(name);
  });
});
