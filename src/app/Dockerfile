FROM tmvdl/android:ionic

WORKDIR /app

COPY . .

RUN cordova platform add android

RUN cordova build android
