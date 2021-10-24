const fs = require("fs")



const writeHTML5 = ()=>{
	const index = "index.html"
	const dir = __dirname
	const html=fs.readFileSync(dir + "/" + index)
	const filename = process.argv[2]
	const pwd = process.cwd()
	fs.writeFileSync(process.cwd()+"/"+ filename,html)
}

exports.HTML5 = writeHTML5()
