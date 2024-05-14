import { FormEvent } from 'react';

export function Form() {
  function handleAddInfo(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleAddInfo} className='d-grid'>
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

      <h2 className='text-center mt-4'>Endereço</h2>
      <div className='row'>
        <div className='col-lg-3 col-md-3'>
          <label htmlFor='cep'>CEP:</label>
          <input
            type='text'
            className='form-control'
            name='cep'
            placeholder='CEP'
          />
        </div>
        <div className='col-lg-9 col-md-9'>
          <label htmlFor='address'>Endereço:</label>
          <input
            type='text'
            className='form-control'
            name='address'
            placeholder='Endereço'
          />
        </div>
        <div className='col-lg-2 col-md-3'>
          <label htmlFor='number'>Número:</label>
          <input
            type='text'
            className='form-control'
            name='number'
            placeholder='Número'
          />
        </div>
        <div className='col-lg-5 col-md-9'>
          <label htmlFor='complement'>Complemento:</label>
          <input
            type='text'
            className='form-control'
            name='complement'
            placeholder='Complemento'
          />
        </div>
        <div className='col-lg-5 col-md-6'>
          <label htmlFor='neighborhood'>Bairro:</label>
          <input
            type='text'
            className='form-control'
            name='neighborhood'
            placeholder='Bairro'
          />
        </div>
        <div className='col-lg-6 col-md-3'>
          <label htmlFor='state'>Estado:</label>
          <input
            type='text'
            className='form-control'
            name='state'
            placeholder='Estado'
          />
        </div>
        <div className='col-lg-6 col-md-3'>
          <label htmlFor='city'>Cidade:</label>
          <input
            type='text'
            className='form-control'
            name='city'
            placeholder='Cidade'
          />
        </div>
      </div>
    </form>
  );
}
