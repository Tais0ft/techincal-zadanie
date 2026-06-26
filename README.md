Effective Mobile — DevOps test

Минимальное веб-приложение за nginx в Docker.

Стек

Node.js 20 — backend, порт 8080 внутри docker-сети.
nginx 1.27 — reverse proxy, порт 80 наружу.
Docker Compose — оркестрация двух контейнеров.

Запуск

Перейти в каталог проекта и выполнить:

docker compose up -d --build

Остановка:

docker compose down

Проверка

curl http://localhost

Ожидаемый ответ:

Hello from Effective Mobile!

Проверка, что backend с хоста недоступен (должна быть ошибка соединения):

curl http://localhost:8080

Структура проекта

backend/Dockerfile — образ backend
backend/server.js — HTTP-сервер на Node.js
nginx/nginx.conf — конфиг reverse proxy
docker-compose.yml — описание сервисов и сети
.env — переменные окружения
README.md — этот файл
NOTES.md — пояснения к решению

Схема работы

Запрос с хоста на порт 80 попадает в контейнер nginx.
nginx проксирует запрос на сервис backend по имени backend:8080 внутри docker-сети.
backend отвечает текстом Hello from Effective Mobile!
Порт 8080 на хост не пробрасывается, снаружи доступен только nginx на порту 80.

Переменные окружения

NGINX_PORT — порт nginx на хосте, по умолчанию 80.
Значение задаётся в файле .env в корне проекта.
Для локальных переопределений можно использовать .env.local, он в репозиторий не кладётся.
