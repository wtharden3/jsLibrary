/**
 * v-----returns a promise
 * 
 * fetch()
 *  .then(x) if you use one callback, that is onFufilled
 * .then(x,y) x will happen if Fullfilled
 *            y will happen if Rejected
 * 
 *  .catch(x) // will happen if rejected
 * 
 * fetch().then(x <if worked>, y<if failed>)
 * 
 * fetch()
 *    .then(x) <if worked
 *    .catch(x) < if it failed
 * 
 * const result = await fetch();
 * const json = await result.json();
 * console.log(json);
 */

const request = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const json = await response.json();
  return json;
}

request().then(json => {
  console.log(json.url);
})