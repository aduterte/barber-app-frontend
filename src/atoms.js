import { atom  }from 'recoil'

export const searchTextState = atom({
  key: "searchText",
  default: ""
})

export const barbersState = atom({
  key: "barbersState",
  default: []
})


export const clientsState = atom({
  key: "clientsState",
  default: []
})

export const filteredBarbersState = atom({
  key: "filteredBarbersState",
  default: []
})