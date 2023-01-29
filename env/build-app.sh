docker-compose run app ionic cordova platform remove android --nosave --prod --no-interactive 
 
docker-compose run app ionic cordova platform add android --confirm --prod --no-interactive --noresources 

docker-compose run app ionic cordova build android --release --prod --no-interactive --device 

# docker-compose run app jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore $CM_KEYSTORE_PATH -storepass $CM_KEYSTORE_PASSWORD -keypass $CM_KEY_PASSWORD /app/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $CM_KEY_ALIAS 
