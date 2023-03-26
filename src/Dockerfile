FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create speed com.brtmvdl.speed speed

WORKDIR /app/speed

COPY ./app/dist www

RUN cordova platform add android

RUN cordova build android
