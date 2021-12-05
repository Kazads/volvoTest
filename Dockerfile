FROM ianwalter/puppeteer:v4.0.0

# Adding config files for the project 
ADD wdio.conf.js package.json /home/node/volvoTest/

# Removing messages about npm not being fully updated and
# installing everything needed for the tests to run
RUN npm config set update-notifier false \
    && cd /home/node/volvoTest \
    && npm install

# Setting up a volume for the tests to minimize the times it is required 
# to rebuild the container
VOLUME "/home/node/volvoTest/test"

WORKDIR "/home/node/volvoTest"

# Run the tests
ENTRYPOINT ["npm", "run", "wdio"]

