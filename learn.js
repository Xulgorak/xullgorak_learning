const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		color: 'red'
	}
};

console.log(Object.keys(options).length);
const {border,color} = options.colors;


console.log(options.name);

let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
			counter++;
		}
	} else {console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;}
}


const arr = [1, 2, 3, 6, 8];
function compareNum(a, b) {
	return a - b;
}                            //шаблон сотировка чисел
arr.sort(compareNum);



arr.pop(); //удаляет последний элемент массива
arr.push(10); //добавляет элемент в конец массива

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
} //перебор массива for of

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
}); //foreach


const str = prompt('', '');
const products = str.split(', '); //строка в массив через разделитель
products.sort(); //сортировка по алфавиту (не работает с числами)
console.log(products.join('; '));


function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj;
	}
	return objCopy;
}                                 //копирование объекта, поверхностная копия


const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 7
	}
};

const newNumbers = copy(numbers);  //копирование объекта, поверхностная копия


const add = {
	d: 17,
	e: 20
};


console.log(Object.assign({}, add)); //слияние объектов 

const clone = Object.assign({}, add);
clone.d = 20;


const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();  //копирование массова / копия массива

console.log(newArr);

const video = ['youtube', 'vimeo','rutube'];
const blogs = ['wordpress', 'livejpournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);


function log(a,b,c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
let jk = [2, 5, 7];

log(...jk);  //spread передать массив в функцию



const arrau = ['a', 'b'];
const newArrau = [...arrau];
const q = {
	one: 1,
	two: 2
};

const newQ = {...q}; //spread

const someString = 'This is some strange string';


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (!missingCurr) {
        if (arr.length === 0) {
            return `Нет доступных валют`;
        } 
        else {
            let cur = `Доступные валюты: \n`;
            arr.forEach(e => cur += `${e} \n`);
            return cur;
        }
    } else {
            if (arr.length === 0) {
            return `Нет доступных валют`;
        } 
        else {
            let cur = `Доступные валюты: \n`;
            arr.forEach(function(item, i, arr) {
                if (i === arr.indexOf(missingCurr)) {
                    return;
                } else {
                    cur += `${item} \n`;
                }
            });
            return cur;
        }
    }    
}

console.log(availableCurr(baseCurrencies, 'USD'));