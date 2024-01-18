FROM python:3.10.12-alpine

RUN apk update && apk add python3-dev gcc libc-dev

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install gunicorn
ADD ./requirements.txt /app/
RUN pip install -r requirements.txt

ADD ./backend/server-entrypoint.sh /app
ADD ./backend/worker-entrypoint.sh /app

RUN chmod +x /app/server-entrypoint.sh
RUN chmod +x /app/worker-entrypoint.sh
