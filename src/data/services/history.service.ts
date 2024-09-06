import { instance } from '../api'

async function getHistoryById(id: string): Promise<any> {
    return await instance.get(`history/${id}`)
}
  
export { getHistoryById }