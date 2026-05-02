const http = require('http');

// Настройки сервера
const PORT = 5900;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
    // Генерация случайного 4-значного числа (от 1000 до 9999)
    const pin = Math.floor(1000 + Math.random() * 9000);

    // Установка заголовка ответа
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Отправка HTML-разметки
    res.end(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <title>Генератор PIN-кода</title>
            <style>
                body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
                .card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
                h1 { color: #333; margin-bottom: 1rem; }
                .pin { font-size: 64px; font-weight: bold; color: #007bff; letter-spacing: 8px; margin: 20px 0; }
                button { padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 5px; transition: background 0.3s; }
                button:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Ваш PIN-код:</h1>
                <div class="pin">${pin}</div>
                <button onclick="location.reload()">Сгенерировать новый</button>
            </div>
        </body>
        </html>
    `);
});

// Запуск сервера
server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен по адресу: http://${HOST}:${PORT}/`);
});
