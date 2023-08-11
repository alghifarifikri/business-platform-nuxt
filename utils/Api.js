/* eslint-disable no-undef */

import { HttpRequest } from './HttpRequest'

export async function postBusinesses(data) {
  try {
    const response = await HttpRequest({
      url: 'http://sandbox.bizharedev.id/business/parent/all',
      method: 'POST',
      body: data,
    })
    return response
  } catch (error) {
    console.error('Error:', error)
  }
}
