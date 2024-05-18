// import axios from 'axios';
import axios, { AxiosResponse } from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';

interface CepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function FormAddress() {
  const [addressData, setAddressData] = useState<CepData | null>(null);
  const [cep, setCep] = useState<string>('');

  function handleAddAddress(event: FormEvent) {
    event.preventDefault();
  }

  async function getZipCode(event: ChangeEvent<HTMLInputElement>) {
    const cepValue = event.target.value.replace(/\D/g, '');
    if (!cepValue) {
      console.error('Please enter a valid CEP.');
      return;
    }
    try {
      const res: AxiosResponse<CepData> = await axios.get(
        `http://viacep.com.br/ws/${cep}/json/`
      );

      if (res.status === 200 && res.data) {
        setAddressData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
    setCep(cepValue);
  }

  return (
    <form onSubmit={handleAddAddress} className='container d-grid'>
      <h2 className='text-center mt-4'>Endereço</h2>
      <div className='row'>
        <div className='col-lg-3 col-md-3'>
          <label htmlFor='cep'>CEP:</label>
          <input
            onBlur={getZipCode}
            type='text'
            className='form-control'
            name='cep'
            placeholder='CEP'
            value={cep || ''}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          />
        </div>
        <div className='col-lg-9 col-md-9'>
          <label htmlFor='address'>Endereço:</label>
          <input
            type='text'
            className='form-control'
            name='address'
            placeholder='Endereço'
            value={addressData?.logradouro || ''}
            onChange={() => {}}
            disabled
          />
        </div>
        <div className='col-lg-2 col-md-3'>
          <label htmlFor='number'>Número:</label>
          <input
            type='text'
            className='form-control'
            name='number'
            placeholder='Número'
            required
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
            value={addressData?.bairro || ''}
            onChange={() => {}}
            disabled
          />
        </div>
        <div className='col-lg-6 col-md-3'>
          <label htmlFor='state'>Estado:</label>
          <input
            type='text'
            className='form-control'
            name='state'
            placeholder='Estado'
            value={addressData?.localidade || ''}
            onChange={() => {}}
            disabled
          />
        </div>
        <div className='col-lg-6 col-md-3'>
          <label htmlFor='city'>Cidade:</label>
          <input
            type='text'
            className='form-control'
            name='city'
            placeholder='Cidade'
            value={addressData?.uf || ''}
            onChange={() => {}}
            disabled
          />
        </div>
      </div>
      <button className='btn btn-outline-success mt-5'>Cadastrar</button>
    </form>
  );
}
