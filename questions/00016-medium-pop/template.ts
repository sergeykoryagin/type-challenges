type Pop<T extends any[]> = T extends [...infer First, infer Last] ? First : T
