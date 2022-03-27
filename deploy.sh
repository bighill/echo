#!/bin/bash

BUILD_NAME=bighill/echo
CONTAINER_NAME=echo

###

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

# Build
docker build . -t $BUILD_NAME

# Stop & remove container
docker container stop $CONTAINER_NAME
docker container rm $CONTAINER_NAME

# Start container
docker run \
  --name $CONTAINER_NAME \
  -d \
  -p 11000:8080 \
  -e "NODE_ENV=production" \
  $BUILD_NAME