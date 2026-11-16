import { createContext, useContext, useState, type ReactNode } from 'react'
type Ctx = { open: boolean; openModal: () => void; closeModal: () => void }
const C = createContext<Ctx>({ open: false, openModal: () => {}, closeModal: () => {} })
export const usePreBook = () => useContext(C)
export function PreBookProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return <C.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>{children}</C.Provider>
}
