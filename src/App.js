import './App.css';
import React from 'react';
import data from './assets/db.json';

//import data from 'https://drive.google.com/file/d/1NkNjpyD2LlPWqwKTlJW7LovL-Bz_Ve0w';

const App = () => {
  return (
    <main>
      {data &&
        data.map(
          ({ cliente, idVideo, transcripcion, linkVideo, preguntas }) => (
            <div key={idVideo} className='row'>
              <h2>Cliente: {cliente}</h2>
              <h4>Testeador???</h4>
              <p>Url del vídeo: {linkVideo}</p>
              <div>
                {preguntas &&
                  preguntas.map((pregunta, index) => {
                    return (
                      <div key={index}>
                        <p>
                          Tarea {index}:{' '}
                          {
                            (pregunta.texto = pregunta.texto.replace(
                              '\\n',
                              ' '
                            ))
                          }
                        </p>
                        <p>
                          Respuesta:{' '}
                          {pregunta.tipoTarea === 'opinionScale5'
                            ? pregunta.respuesta
                            : 'verbal'}
                        </p>
                        <p>Duración de la tarea: {pregunta.tiempo}</p>
                      </div>
                    );
                  })}
              </div>
              <p>
                Transcripción:{' '}
                {(transcripcion = transcripcion.replace(/<br>/g, ' '))}
              </p>
            </div>
          )
        )}
    </main>
  );
};

export default App;

// - Cliente
// - Testeador
// - Url del video
// - Tareas
// - Transcripción
