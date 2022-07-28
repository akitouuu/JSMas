let a = 10

console.log(a);




let names = []

for(i = 0; i < Infinity; i++) {
    let name = prompt('Введите имя');
    let info = prompt('Введите комманду');
    if(info == 'add') {
        names.unshift(name);
    }else if(info == 'del') {
        names.splice(name);
    }else if(info == 'stop') {
        break;
    }

    
}

console.log(names);