FROM tmvdl/android:cordova

WORKDIR /app

RUN cordova create sucht com.brtmvdl.sucht sucht

WORKDIR /app/sucht

COPY app www

RUN cordova platform add android

RUN cordova build android
