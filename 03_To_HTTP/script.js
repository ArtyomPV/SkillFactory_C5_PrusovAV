const btn = document.querySelector('.btn')

const valueInput = document.querySelector('input')
// -----------------------------------------------

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

/**
  * Функция обработки полученного результата
  * apiData - объект с результатом запроса
  */
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image" width=400
        />
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btn.addEventListener('click', () => {
  resultNode.innerHTML = null;
  const value = valueInput.value
  
  // console.log(`result: ${number}`)
  //useRequest(`https://picsum.photos/v2/list/?limit=${number}`, displayResult);
if(checkInput(value)) {
  useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
} else {
  alert('число вне диапазона')
  console.log('число вне диапазона')
}

})



function checkInput(value){
  if(value > 1 && value < 10){
    return true
  } 
    return false
}