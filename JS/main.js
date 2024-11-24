const QuatorzeBytes = [
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Cadu",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:1
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Gui",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:2
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Pedro",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:3
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Leticia",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:4
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Luna",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:5
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Estephanie",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:6
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Isabella",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:7
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Thauane",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:8
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Enzo",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:9
    },
    {
        Img:"dhsfsdghsghfsjhf",
        Nome:"Matheus",
        Linkedin:"fdhxhxhxhfxdhdhdfhdhx",
        Text:"lorem",
        id:10
    },
  
]

let Cadu = 1
let Gui = 2
let Pedro = 3
let Leticia = 4
let Luna = 5
let Estephanie=6
let Isabella = 7
let Thauane = 8
let Enzo = 9
let Matheus = 10


    QuatorzeBytes.forEach(pessoa => {
        if (pessoa.id === Gui || pessoa.id === Cadu) {
            console.log(pessoa.Text);
        }
    });


// console.log(QuatorzeBytes[1]);
// QuatorzeBytes.forEach(pessoa => { console.log(pessoa); });
// QuatorzeBytes.forEach(pessoa => { console.log(pessoa.Nome); });
// QuatorzeBytes.forEach(pessoa => { if (pessoa.Nome.length <= 3) { console.log(pessoa.Text); } });