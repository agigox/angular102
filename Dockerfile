
#Stage 1
#FROM node:latest as node
#ENV HTTP_PROXY http://AT00293T:Mchattabloul1971@163.104.40.34:3128
#ENV HTTPS_PROXY http://AT00293T:Mchattabloul1971@163.104.40.34:3128
#ENV http_proxy http://AT00293T:Mchattabloul1971@163.104.40.34:3128
#ENV https_proxy http://AT00293T:Mchattabloul1971@163.104.40.34:3128
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build

#Stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/angular102 /usr/share/nginx/html

# Pull from a base image
FROM node:latest as node
ENV HTTP_PROXY http://AT00293T:Mchattabloul1971@163.104.40.34:3128
ENV HTTPS_PROXY http://AT00293T:Mchattabloul1971@163.104.40.34:3128
ENV http_proxy http://AT00293T:Mchattabloul1971@163.104.40.34:3128
ENV https_proxy http://AT00293T:Mchattabloul1971@163.104.40.34:3128

# Copy the files from the current directory to app/
COPY . app/

# Use app/ as the working directory
WORKDIR /app

# Install dependencies (npm ci is similar to npm i, but for automated builds)
RUN npm install

# Build production client side React application
#RUN npx ng build

# Listen on the specified port
EXPOSE 5000

# Set Node server
ENTRYPOINT npx ng serve --port=5000
