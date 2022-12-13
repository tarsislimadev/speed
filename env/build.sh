docker-compose -f ./docker-compose.yaml run app ionic cordova platform remove android --nosave
 
docker-compose -f ./docker-compose.yaml run app ionic cordova platform add android   --confirm   --no-interactive   --noresources 

docker-compose -f ./docker-compose.yaml run app ionic cordova build android   --release   --prod   --no-interactive   --device

docker-compose -f ./docker-compose.yaml run app jarsigner \
  -sigalg SHA1withRSA \
  -digestalg SHA1 \
  -keystore $CM_KEYSTORE_PATH \
  -storepass $CM_KEYSTORE_PASSWORD \
  -keypass $CM_KEY_PASSWORD $(find platforms/android/app/build/outputs/apk/release   -name "*.apk" | head   -1) $CM_KEY_ALIAS 
