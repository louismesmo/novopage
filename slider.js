var slider = document.querySelector('#sliderRange');
window.onload = () => {
  const pop = document.getElementsByClassName('price-pop');
  
  const plus = document.getElementsByClassName('price-plus');
  const premium = document.getElementsByClassName('price-premium');
  const life = document.getElementById('life');
  const lifes = document.getElementById('lifes');
  life.innerHTML = 'De 1 Até 10';
  lifes.value = 1;
  pop.item(0).innerHTML = 'R$49,90';
  pop.item(1).innerHTML = 'R$49,90';
  plus.item(0).innerHTML = 'R$69,90';
  plus.item(1).innerHTML = 'R$69,90';
  premium.item(0).innerHTML = 'R$99,90';
  premium.item(1).innerHTML = 'R$99,90';
  
}

slider.oninput = function() {
  
  value = parseInt(this.value);
  let pop = document.getElementsByClassName('price-pop').item(0);
  let plus = document.getElementsByClassName('price-plus').item(0);
  let premium = document.getElementsByClassName('price-premium').item(0);
  let pop1 = document.getElementsByClassName('price-pop').item(1);
  let plus1 = document.getElementsByClassName('price-plus').item(1);
  let premium1 = document.getElementsByClassName('price-premium').item(1);
  var sliderRangeValue = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #5BE0E6 0%, #5BE0E6 ' + sliderRangeValue + '%, #DCDCDC ' + sliderRangeValue + '%, #DCDCDC 100%)'
  if(value < 16) {
   
    life.innerHTML = `De 1 Até 10`
    pop.innerHTML = 'R$49,90'
    plus.innerHTML = 'R$69,90'
    premium.innerHTML = 'R$99,90'
    pop1.innerHTML = 'R$49,90'
    plus1.innerHTML = 'R$69,90'
    premium1.innerHTML = 'R$99,90'
    
  }
  else if(value >= 16 && value < 49) {
  

    life.innerHTML = `De 11 Até 25`
    pop.innerHTML = 'R$125,00'
    plus.innerHTML = 'R$175,00'
    premium.innerHTML = 'R$245,00'
    pop1.innerHTML = 'R$125,00'
    plus1.innerHTML = 'R$175,00'
    premium1.innerHTML = 'R$245,00'
  }
  else if(value >= 49 && value < 84) {
    

    life.innerHTML = `De 26 Até 50`
    pop.innerHTML = 'R$245,00'
    plus.innerHTML = 'R$299,90'
    premium.innerHTML = 'R$399,90'
    pop1.innerHTML = 'R$245,00'
    plus1.innerHTML = 'R$299,90'
    premium1.innerHTML = 'R$399,90'
  }
  else if(value >= 84) {
    

  
    life.innerHTML = `De 51 Até 100+`
    pop.innerHTML = 'R$399,90'
    plus.innerHTML = 'R$499,90'
    premium.innerHTML = 'R$699,90'
    pop1.innerHTML = 'R$399,90'
    plus1.innerHTML = 'R$499,90'
    premium1.innerHTML = 'R$699,90'
  }
}

slider.onchange = function() {
  value = parseInt(this.value);
  
  if(value < 16) {
    this.style.background = 'linear-gradient(to right, #5BE0E6 0%, #5BE0E6 0%, #DCDCDC 0%, #DCDCDC 100%)'
    this.value = 1;
  
    
  }
  else if(value >= 16 && value < 49) {
    this.style.background = 'linear-gradient(to right, #5BE0E6 0%, #5BE0E6 33%, #DCDCDC 33%, #DCDCDC 100%)'
    this.value = 33

  }
  else if(value >= 49 && value < 84) {
    this.style.background = 'linear-gradient(to right, #5BE0E6 0%, #5BE0E6 66%, #DCDCDC 66%, #DCDCDC 100%)'
    this.value = 66;

  }
  else if(value >= 84) {
    this.style.background = 'linear-gradient(to right, #5BE0E6 0%, #5BE0E6 100%, #DCDCDC 100%, #DCDCDC 100%)'
    this.value = 100;
   
  }

}

