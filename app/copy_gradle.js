// cp ./res/gradle.properties ./platforms/android/app/gradle.properties -f
const from = './res/gradle.properties'
const to = './platforms/android/app/gradle.properties'
require('fs').copyFileSync(from , to)