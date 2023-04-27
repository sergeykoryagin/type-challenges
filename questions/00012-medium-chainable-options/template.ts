type Chainable<T = {}> = {
  option<K extends keyof any, V>(key: K, value: V): Chainable<Omit<T, K> & {
    [key in K]: V
  }>
  get(): T
}

declare const baa: Chainable

const result1 = baa
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()
