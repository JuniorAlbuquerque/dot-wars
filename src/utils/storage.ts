import { EncryptStorage } from 'encrypt-storage'

export const encryptStorage1 = new EncryptStorage(
  import.meta.env.VITE_SECRET_STORAGE,
  {
    prefix: '@dot-wars'
  }
)
