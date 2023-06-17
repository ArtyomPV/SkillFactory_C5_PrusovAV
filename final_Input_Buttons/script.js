const url = 'https://picsum.photos/';
const btn = document.querySelector('.btn-request');
const result = document.querySelector('.block__result');

btn.addEventListener('click', function(){
  let value1 = Number(document.querySelector('.value1').value);
  let value2 = Number(document.querySelector('.value2').value);
  
  console.log(value1, value2)
  if(isNaN(value1) || isNaN(value2)){
    result.innerHTML = 'Введите число'
  } else{
    if(value1 <100 || value1 > 300 || value2 <100 || value2 > 300){
      result.innerHTML = "Одно из чисел вне диапозона"
    } else {
      result.innerHTML = "image"
      fetch(url + value1 + "/" + value2)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        const imageURL = URL.createObjectURL(json);
        result.innerHTML = `<img src ='${imageURL}'`
        result.innerHTML = "image"
      })
      .catch(() => {
                    console.log('error');
                    result.innerHTML = "error";
                   })
    }
  }
})