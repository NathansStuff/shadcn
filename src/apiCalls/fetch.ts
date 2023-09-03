/* eslint-disable @typescript-eslint/no-explicit-any */ // We need to use any for the data parameter

import axios, { AxiosResponse } from 'axios';

import { ApiResponse } from '@/types';

export async function getRequest<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateRequest<T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.put(url, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postRequest<T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteRequest<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.delete(url);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
