const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
  }
  
  for (const key in myObject) {
    // console.log(key);
    // console.log(`${myObject[key]}`);
    // console.log(`${key} :- ${myObject[key]}`);
  }
  
  const programming = ["js", "rb", "py", "java", "cpp"] // for in loop provide array's index as output.
  
  for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
    }
  
  // const map = new Map()
  // map.set('IN', "India")
  // map.set('USA', "United States of America")
  // map.set('Fr', "France")
  // map.set('IN', "India")
  
  // for (const key in map) {
  //     console.log(key);
  // }