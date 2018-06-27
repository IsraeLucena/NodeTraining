const fs = require('fs')

fs.writeFile(process.argv[2], process.argv[3], (error) => {
    if (error) throw error
    console.log(`Archive ${process.argv[2]} was salved successfully!`)
})