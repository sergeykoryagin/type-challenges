type MyExclude1<T, K> = T extends K ? never : T;

type MyReadonly2<T, K extends keyof T = keyof T> = {
    [key in keyof T as MyExclude1<key, K>]: T[key];
} & {
    readonly [key in K]: T[key]
}
