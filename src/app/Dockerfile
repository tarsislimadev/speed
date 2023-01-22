FROM tmvdl/node:angular as stage

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create speed com.brtmvdl.speed speed

WORKDIR /app/speed

COPY --from=stage /app/build www

RUN cordova platform add android

RUN cordova build android
