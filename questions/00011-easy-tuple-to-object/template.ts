type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
}

const tuple123 = ['tesla', 'model 3', 'model X', 'model Y'] as const
type kek = TupleToObject<typeof tuple123>

type kek1 = TupleToObject<[[1, 2], {}]>
