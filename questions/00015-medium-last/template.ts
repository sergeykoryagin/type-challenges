type Last<T extends any[]> = T extends [...infer First, infer Last] ? Last : never
