x((a,b,c) => {
    return a+b+c
  },2,3,6)
  
  function x(callback,a,b,c) {
    let str = ""
    setTimeout(() => {
      str += "x"
    });
  
    str += callback(a,b,c)
    console.log(str)
  }

  //another mcq
  const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('a')
    })
  })
  
  const promise2 = new Promise((resolve,reject) => {
    resolve('b')
  })
  
  const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('c')
    },10)
  })
  
  
  Promise.race([promise1,promise2,promise3])
  .then((msg) => {
    console.log(msg)
  })

  //another mcq
  function x() {
    Promise.reject('x')
    return Promise.resolve('y')
  }
  
  async function log() {
    const val =  await x()
    console.log(val)
  }
  
  log()
  