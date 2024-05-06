FROM python:3.8.3-buster
COPY requirements.txt /app/requirements.txt
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5000
# Set environment variables from .env
ARG ENV_FILE_PATH=./.env
ENV ENV_FILE_PATH=${ENV_FILE_PATH}
RUN if [ -f "${ENV_FILE_PATH}" ]; then \
    echo "Loading environment variables from ${ENV_FILE_PATH}"; \
    export $(cat ${ENV_FILE_PATH} | xargs); \
    fi
CMD ["python","app.py"]