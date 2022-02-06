import React from 'react';
import axiosMock from 'axios';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ApiService from './ApiService';

jest.mock('axios');

describe('apiService',() => {
    test('get api should return data', async()=>{
      axiosMock.get.mockResolvedValueOnce({data: {
          login: "name"
      }})
      const { getByTestId } = render(<ApiService/>);

      const apiBtn = getByTestId('data-test-api-btn');
      fireEvent.click(apiBtn)
      const text = await waitFor(()=>getByTestId('data-test-api-response'));

      expect(text.textContent).toBe("");
    })
})