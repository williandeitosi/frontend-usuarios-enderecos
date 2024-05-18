import { FormEvent } from 'react';

export function FormCustomer() {
  function handleAddCustomer(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleAddCustomer} className='container d-grid'>
      <h1 className='text-center mb-4'>Registro de usuários</h1>
      <div className='row mb-5'>
        <div className='col-lg-12 col-md-9 mb-3'>
          <label htmlFor='nome'>Nome:</label>
          <input
            id='nome'
            className='form-control'
            placeholder='Nome Completo'
            type='text'
          />
        </div>
        <div className='col-lg-4 col-md-3'>
          <label htmlFor='sexo'>Sexo:</label>
          <select
            name='sexo'
            id='sexo'
            className='form-control'
            defaultValue={'sexo'}
          >
            <option value='sexo' disabled hidden>
              Sexo
            </option>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
            <option value='outro'>Outro</option>
          </select>
        </div>
        <div className='col-lg-4 col-md-6'>
          <label htmlFor='dataNascimento'>Data de nascimento:</label>
          <input id='dataNascimento' className='form-control' type='date' />
        </div>
        <div className='col-lg-4 col-md-6'>
          <label htmlFor='estadoCivil'>Estado civil:</label>
          <select
            id='estadoCivil'
            className='form-control'
            name='estado_civil'
            defaultValue={'Estado civil'}
          >
            <option value='Estado civil' disabled hidden>
              Estado civil
            </option>
            <option value='Solteiro'>Solteiro</option>
            <option value='Casado'>Casado</option>
            <option value='Divorciado'>Divorciado</option>
            <option value='Viúvo'>Viúvo</option>
          </select>
        </div>
      </div>
      <button className='btn btn-outline-success'>Enviar</button>
    </form>
  );
}
