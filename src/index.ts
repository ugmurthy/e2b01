import 'dotenv/config'
import { Sandbox } from '@e2b/code-interpreter'

console.time('sandboxCreation')
const sbx = await Sandbox.create() // By default the sandbox is alive for 5 minutes
console.timeEnd('sandboxCreation')
console.time('sandboxExecution')
const execution = await sbx.runCode('print("hello world")') // Execute Python inside the sandbox
const sh = await sbx.commands.run("ls -lut /bin")
console.timeEnd('sandboxExecution')
console.log(execution.logs)
console.log(execution.results)
console.log("------")
console.log(sh.stdout)

const files = await sbx.files.list('/')
console.log(files)

