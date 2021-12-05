# Test automation task 2
*by: Tord Eliasson Ghidoni*

This image is built to run WebDriver IO tests.
To make it so generic as possible, the actual tests is inserted via a volume into the container on run.
Therefore it is a volume in the run command.

The image is built on top of ianwalter/puppeteer:v4.0.0 which is suggested by WebDriver IO themselves here:
[Docker | WDIO](https://webdriver.io/docs/docker), but to avoid problems with a image that might be updated, I have used a specific version instead of latest. 

### Specification of variables
* image-name: Gives a name to the container. Can't include capital letters. Must be same when you create the image and when you run it.
* container-name: Name of the container. Can't include capital letters.
* test-folder: Should in this case be a path to test folder in this project. But folders setup the same will work as well.

### To build the image:
```
docker build -t {image-name} .
```

### To run the a container:
```
docker run --rm -it \
    -v {test-folder}:/home/node/volvoTest/test \
    --name {container-name} \
    {image-name}
```

When the container runs it will automatically run all tests found in the test folder and write the result into SDOUT. 
Currently the log-level is set to error to print as little as possible, other then the results of the tests.