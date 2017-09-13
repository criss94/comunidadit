const body = document.querySelector('body');
const nombres = [//'batman',
                'batmanbyn',
                //'flash',
                'flashbyn',
                //'superman',
                'supermanbyn',
                //'wonder_woman',
                'wonder_womanbyn'
                ];

for(let i = 0; i < nombres.length; i++){
    let img = document.createElement('img');
    let foto = nombres[i];
    let src = img.src = 'imgs/' + foto + '.png';
    //console.log(foto);

    img.onmouseover =  function(){
        foto = nombres[i].replace(/byn/g,'');
        src = img.src = 'imgs/' + foto + '.png';
    };

    img.onmouseout = function(){
        foto = nombres[i];
        src = img.src = 'imgs/' + foto + '.png';
    };

    //muestro el nombre en mayusculas haciendo click sobre ello
    img.onclick = function(){
        alert(foto.toUpperCase());
    }

    body.appendChild(img);                
    
}