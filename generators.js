const sleep = time => new Promise(resolve => {
    setTimeout(() => resolve(time), time)
})

const promiseReject = _ => Promise.reject('Teste de Erro Tratado')

function* generator() {
    try {
        const t1 = yield sleep(1000)
        const t2 = yield sleep(2000)
        console.log(t1, t2)
        yield promiseReject()
    } catch (err) {
        console.log(err.message)
    }

}

function co(gen) {
    const g = gen()
    const run = val => {
        const next = g.next(val)
        if (!next.done) {
            next.value
                .then(v => {
                    run(v)
                })
                .catch(err => {
                    g.throw(new Error(err))
                })
        }
    }
    run(null)
    //g.next().value.then(v => console.log(v))
}

//sleep(10).then(v => console.log(v))
co(generator)