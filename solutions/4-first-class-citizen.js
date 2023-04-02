const run = (text) => {
    // BEGIN
    function takeLast(str, n) {
      let length = str.length
      if(length === 0) return null
      if(n > length) return null
      const result = str.slice(length - n).split('').reverse().join('')
      return result
    }
    // END
  
    return takeLast(text, 4)
  };
  
export default run;