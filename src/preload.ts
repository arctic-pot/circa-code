import { contextBridge } from 'electron';
contextBridge.exposeInMainWorld('api', {
  hi: () => console.log('hi!')
})
