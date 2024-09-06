import {instance} from '../api/index'

async function postMachine(form: any): Promise<any> {
  return await instance.post('machine', form)
}
async function getMachines(): Promise<any> {
  return await instance.get('machine')
}



export { postMachine, getMachines }