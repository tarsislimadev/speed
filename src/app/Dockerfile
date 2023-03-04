FROM tmvdl/android:app

WORKDIR /app

RUN cordova create speed com.brtmvdl.speed speed

WORKDIR /app/speed

COPY --from=stage /app/build www

RUN cordova platform add android

RUN cordova build android
