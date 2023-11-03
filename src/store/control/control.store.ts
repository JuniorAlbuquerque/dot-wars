import { ControlModel } from '@/models/Control.model'
import { create } from 'zustand'

export const useControlStore = create<ControlModel>(() => ({
  effectsVolume: 1.25
}))
