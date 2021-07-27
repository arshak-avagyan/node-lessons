const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const dir = process.argv[2];

function getRandomName(length) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

let newDir = path.join(path.dirname(dir), getRandomName(7))


async function makeDir(){
	fs.mkdir(newDir, (err) => {
		if(err) throw err;
		else console.log('Folder created successfully')
	})
}

makeDir().then(
	fs.readdir(dir, (err, files) => {
		if(err) throw err
		else {
			files.forEach(file => {
				const stream = fs.createReadStream(path.join(dir, file))
				const output = fs.createWriteStream(path.join(newDir, `${path.basename(file, path.extname(file))}.gzip`))
				stream.pipe(zlib.createGzip()).pipe(output);
			})
		}
	})
)

