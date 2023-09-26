
document.addEventListener('DOMContentLoaded', function(){

    let row = 16;
    let column = 16;
    let colorSwitch = false;


    const container = document.querySelector('.container');
    const blackBtn = document.querySelector('.blackBtn');
    const rgbBtn = document.querySelector('.rgbBtn');

    blackBtn.addEventListener('click', ()=>{
        colorSwitch = false;
    });

    rgbBtn.addEventListener('click', ()=>{
        colorSwitch = true;

    });


  

    
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        return `rgb(${r},${g},${b})`;
    };

    const headingColor = document.querySelector('h1');
    headingColor.style.color = randomColor();
    const draw = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
          cell.addEventListener('mouseover', () => {
            if (colorSwitch == false){
                cell.style.backgroundColor = 'black';
            } else {
                cell.style.backgroundColor = randomColor();

            }
           
          });
        });
      };
    
    const pad = ()=> {
    
        container.innerHTML = '';
    
        for (let i=0; i < row; i++){
            const row = document.createElement('div');
            row.classList.add('row');
    
            for (let j=0; j< column; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
           
                row.appendChild(cell);
    
            }
    
            container.appendChild(row);
        }
        
        draw();
    
    };
    
    pad ();
    
    const smallBtn = document.querySelector('.small');
    
    smallBtn.addEventListener('click', function () {
        console.log("i was clicked");
        row = 32;
        column = 32;
        console.log(row);
        console.log(column);
        pad();



    });

    const mediumBtn = document.querySelector('.medium');
    
    mediumBtn.addEventListener('click', ()=> {
        console.log("medium was clicked");
        row = 64;
        column = 64;
        pad();


    });


    const largeBtn = document.querySelector('.large');
    
    largeBtn.addEventListener('click', ()=> {
        console.log("large button was clicked");
        row = 100;
        column = 100;
        pad();


    });


    const dangerBtn = document.querySelector('.dangerBtn');

    dangerBtn.addEventListener('click', ()=> {
        console.log("clear btn was clicked");
        pad();

    })



 
});
