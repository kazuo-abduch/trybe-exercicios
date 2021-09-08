function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthList = document.querySelector('#days');

    for(let index = 0; index < dezDaysList.length; index += 1){
        const dayNumber = dezDaysList[index];
        const numberListDay = document.createElement('li');
        numberListDay.innerHTML = dayNumber;
        numberListDay.className = 'day';

        if(dayNumber === 4 || dayNumber === 11 || dayNumber === 18 || dayNumber === 25){
            numberListDay.classList.add('friday');

        };
        if(dayNumber === 24 || dayNumber === 25 || dayNumber === 31){
            numberListDay.classList.add('holiday');
        }

        monthList.appendChild(numberListDay);
    };
  };
  createDaysOfTheMonth();

  function createButton(feriados){
      const buttonContainer = document.querySelector('.buttons-container');

      const buttonFeriado = document.createElement('button');
      buttonFeriado.id = 'btn-holiday';
      buttonFeriado.innerHTML = feriados;
      buttonContainer.appendChild(buttonFeriado);

  };
  createButton('Feriados');



  function clickButtonFeriado(){
    const button = document.querySelector('#btn-holiday');
    button.addEventListener('click', changeColor);
    let clickCount = 1;
        

        function changeColor(){
            const daysList = document.querySelectorAll('.holiday');
            
            for(let index = 0; index < daysList.length ; index += 1){
                
                switch(clickCount){
                    case 1:
                        daysList[index].style.backgroundColor = "rgb(135,135,135)";
                        break;
                    case -1:
                        daysList[index].style.backgroundColor = "rgb(238,238,238)";
                        break;
                };                
            };
            clickCount = clickCount * -1;
        };   
  };

  clickButtonFeriado();

  function createButtonSexta(sextou){
    const buttonContainer = document.querySelector('.buttons-container');

    const buttonFeriado = document.createElement('button');
    buttonFeriado.id = 'btn-friday';
    buttonFeriado.innerHTML = sextou;
    buttonContainer.appendChild(buttonFeriado);

};
createButtonSexta('Sexta-feira');

function clickButtonSexta(){
    const button = document.querySelector('#btn-friday');
    button.addEventListener('click', sextou);
    let clickCount = 1;
    let daysList = document.querySelectorAll('.friday');

    function sextou(){
        const listaSexta = [4,11,18,25];
        for(let index = 0; index < daysList.length ; index += 1){ 
            switch(clickCount){
                case 1:
                    daysList[index].innerHTML = "sextou";
                    break;
                case -1:
                    daysList[index].innerHTML = listaSexta[index];
                    break;
            };                
        };
        clickCount = clickCount * -1;
    };   
  };

  clickButtonSexta();
