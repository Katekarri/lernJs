function testMe(...args) {
    const func = args[0]
    const expected = args[args.length - 1]
    const functionArgs = args.slice(1, args.length - 1)
    
    const result = func(...functionArgs)

    const success_message = `${func.name}(${functionArgs}) OK`
    const error_message = `${func.name}(${functionArgs}) returned ${result} but not ${expected}`
    
    if (result instanceof Array) {
        if (result.length === expected.length && result.every((value, index) => value === expected[index])) {
            console.log(success_message)
        } else {
            console.log(error_message)
        }
        
    } else if (result instanceof Object) {
        if (JSON.stringify(result) === JSON.stringify(expected)) {
               console.log(success_message)
        } else {
            console.log(`${JSON.stringify(result)} !== ${JSON.stringify(expected)}`)
           }
    } else {
        if (result === expected) {
            console.log(success_message)
        } else {
            console.log(error_message)
        }
    }
}

export { testMe }
