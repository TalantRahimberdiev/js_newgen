
let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
   { name: "Courses in Kyrgyzstan", prices: [10, 20] },
];

const MIN_PRICE = 0
const MAX_PRICE = 10000

function normalize(courses) {
   return courses.map(item => {
      return { ...item, prices: [item.prices[0] || MIN_PRICE, item.prices[1] || MAX_PRICE] }
   })
}

function filterCourses(targetMin, targetMax, courses) {
   const tMin = targetMin || MIN_PRICE
   const tMax = targetMax || MAX_PRICE
   return courses.filter(course => {
      const courseMin = course['prices'][0] || MIN_PRICE
      const courseMax = course['prices'][1] || MAX_PRICE
      return !(tMin > courseMax || tMax < courseMin)
   })
}

function sortCourses(targetMin, targetMax, courses) {
   const tMin = targetMin || MIN_PRICE
   const tMax = targetMax || MAX_PRICE
   return courses.sort((course1, course2) => {
      const d1 = Math.abs(Math.max(tMin, course1['prices'][0]) - Math.min(tMax, course1['prices'][1]))
      const d2 = Math.abs(Math.max(tMin, course2['prices'][0]) - Math.min(tMax, course2['prices'][1]))
      return d1 === d2 ? course1['prices'][0] - course2['prices'][0] : d1 - d2
   })
}

console.log(sortCourses(9000, null, filterCourses(9000, null, normalize(courses))))

