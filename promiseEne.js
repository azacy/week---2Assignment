let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/')
                .then(res =>res.json()).then(ene =>{
                    let result = ene.map(user => `<li>${user.title}</li>`)
                    document.body.innerHTML=result.join("")
                })
                