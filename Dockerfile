FROM node:17-bullseye

RUN apt update \
    && apt upgrade \
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt update \
    && apt install google-chrome-stable -y \
    && mkdir /home/node/volvoTest

ADD wdio.conf.js package.json /home/node/volvoTest

RUN cd /home/node/volvoTest \
    && npm install

VOLUME "/home/node/volvoTest/test" "/home/node/volvoTest/result"

WORKDIR "/home/node/volvoTest"

ENTRYPOINT ["/bin/sh"]
