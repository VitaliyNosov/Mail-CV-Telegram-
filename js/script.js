 // Замените 'YOUR_BOT_TOKEN' на токен доступа вашего Telegram-бота
//  const botToken = 'YOUR_BOT_TOKEN';
 const botToken = '6138840787:AAFMxqaoViiCF22tskdznuhhoLUlBy6cmBw';

//  6138840787:AAFMxqaoViiCF22tskdznuhhoLUlBy6cmBw

 // Замените 'YOUR_CHAT_ID' на ваш chat_id, полученный от бота
//  const chatId = 'YOUR_CHAT_ID';

 const chatId = '6138840787';

 // Получаем форму обратной связи
 const feedbackForm = document.getElementById('feedbackForm');

 // Обработчик отправки формы
 feedbackForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // Получаем значения из полей формы
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // Обрабатываем форму обратной связи
   handleFeedbackForm(name, email, message);
 });

 // Функция для отправки уведомления в Telegram
 function sendToTelegram(message) {
   const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
   const data = { chat_id: chatId, text: message };

   axios.post(url, data)
     .then(response => {
       console.log('Уведомление успешно отправлено в Telegram');
     })
     .catch(error => {
       console.error('Ошибка отправки уведомления в Telegram:', error);
     });
 }

 // Обработчик формы обратной связи
 function handleFeedbackForm(name, email, message) {
   // Ваш код для обработки формы обратной связи

   // Отправка уведомления в Telegram
   const feedbackMessage = `Новая обратная связь:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
   sendToTelegram(feedbackMessage);
 }