FROM node

# Create app directory
RUN mkdir -p /usr/src/tests
WORKDIR /usr/src/tests

# Install app dependencies
COPY package.json /usr/src/tests/
RUN npm i

# Bundle test source
COPY . /usr/src/tests
