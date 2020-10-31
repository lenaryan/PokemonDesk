concat('Hello ', 'World') // -> Hello World;

function concat(str1: string, str2: string): string {
    return str1 + str2;
}

//====================================================

interface HometaskInterface {
    howIDoIt: string;
	simeArray: Array<string | number>;
	withData: Array<object>;
}

const intrfc: HometaskInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//====================================================

interface MyArray<T> {
	[N: number]: T;

    reduce<T>(fn: (sum: T, el: T) => T, start: T): T;
}

let arr: MyArray<string> = ['1', '2', '3'];

arr.reduce((sum, item) => sum + item, '1');