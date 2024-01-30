// localStorage.ts

// Making these so it'll be easier to swap out 
// with db writes and reads when I get there.
export const readLocalStorage = (item: string) => {
  return localStorage.getItem(item);
}
export const setLocalStorage = (item: string, value: any) => {
  return localStorage.setItem(item, value);
}
