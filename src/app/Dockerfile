FROM tmvdl/node:angular as stage

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create sucht com.brtmvdl.sucht sucht

WORKDIR /app/sucht

COPY --from=stage /app/build www

RUN cordova platform add android

RUN cordova build android
