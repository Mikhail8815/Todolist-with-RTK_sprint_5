// import { App } from "@/app/App"
// import { createRoot } from "react-dom/client"
// import "./index.css"
// import { Provider } from "react-redux"
// import { store } from "./app/store"
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// export const numbers = [10, 2, 3]
// export const string = ["a", "b", "c"]
//
// export const getFistElement = <T>(array: T[]) => {
//   return array[0]
// }
//
// console.log(getFistElement(numbers))
// console.log(getFistElement(string))

// Напишите дженериковую функцию filterArray, принимающую массив элементов любого типа и функцию-предикат(predicate) ✳️, и возвращающую новый массив, состоящий из элементов, удовлетворяющих условию.
//
// ✳️ Функция-предикат - функция, возвращающая булевое значение.
//
//   Требования:
//
// функция должна быть дженериковой и работать с массивами любого типа;
// функция-предикат принимает элемент массива и возвращает boolean;
// если ни один элемент массива не удовлетворяет условию, функция должна возвращать пустой массив:

// function filterArray<T, V, D>(arr: T[], func: (item: T) => boolean): T[] {
//   return arr.filter(func)
// }
//
// // Пример 1: Фильтрация чисел
// const numbers = [1, 2, 3, 4, 5]
// const isEven = (num: number) => num % 2 === 0
//
// console.log(filterArray(numbers, isEven)) // [2, 4]
//
// // Пример 2: Фильтрация строк
// const words = ["hello", "world", "typescript"]
// const startsWithT = (word: string) => word.startsWith("t")
//
// console.log(filterArray(words, startsWithT)) // ["typescript"]

function mapArray<T, V>(arr: T[], transformer: (val: T) => V): V[] {
  return arr.map(transformer)
}

// Пример 1: Преобразование чисел в строки
const numbers = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

console.log(mapArray(numbers, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]

// Пример 2: Преобразование строк в их длины
const words = ["hello", "world", "typescript"]
const getLength = (word: string) => word.length

console.log(mapArray(words, getLength)) // [5, 5, 10]
//
// // Пример 3: Преобразование объектов в строки
// type Person = { name: string; age: number }
// const people: Person[] = [
//   { name: "Agnes", age: 25 },
//   { name: "Robert", age: 30 },
// ]
// const toDescription = (person: Person) => `${person.name} is ${person.age} years old`
//
// console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]
