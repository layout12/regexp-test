const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=parasite
The quick brown fox jumps over the lazy dog.
abbccccddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// 생성자 방식의 정규식 생성
// const regexp = new RegExp('the','gi')  //g : 문자열 전체를 판별 / gi : 문자열 전체를 대소문자 구분없이 판별
// console.log(str.match(regexp))

// 리터럴 방식의 정규식 생성
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// // console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gi))  //.(dot)은 정규표현식에서 특정한 기능을 하기 일반 문자로 
// 인식하기 위해 (\)백슬래시를 앞에 입력

// console.log(str.match(/^t/gm))

// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/g))
// console.log(str.match(/\b\w{2,3}\b/g))
// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g))  //f로 시작하는 63개에 문자 전체 출력
// console.log(str.match(/\s/g))

// const h = `  the hello world    !

// `
// console.log(h.replace(/\s/g, ''))  //공백을 ''로 replace
console.log(str.match(/.{1,}(?=@)/g))  //앞쪽 일치
console.log(str.match(/(?<=@).{1,}/g))  //뒤쪽 일치


