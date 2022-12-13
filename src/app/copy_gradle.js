const path = require('path')
const fs = require('fs')

const copy = path.resolve(__dirname, './platforms/android/gradle.properties')

console.log('copy function', { copy })

console.log('before try')

try {
  const text = fs.readFileSync(copy, 'utf8')

  console.log('readed', { copy, text })

  const replaced = text.replace(/[=]false/ig, '=true')

  fs.unlinkSync(copy)

  fs.writeFileSync(copy, replaced, 'utf8')

  console.log('copied', { copy, text, replaced })

} catch (err) {
  console.error({ err })
}

console.log('after try')
