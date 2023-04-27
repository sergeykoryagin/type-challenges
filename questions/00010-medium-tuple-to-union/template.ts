type TupleToUnion<T extends readonly any[]> = T extends [infer Item, ...infer Rest] ? (Item | TupleToUnion<Rest>) : never

