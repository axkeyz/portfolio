// // let data = fetch('https://github-contributions-api.deno.dev/axkeyz.json',{
// // let data = fetch('https://github-contributions-api.deno.dev/axkeyz.json', {
// //     method: "GET"
// // })
// // .then(response => response.json())
// // .then((data) => {
// //     console.log(data)
// // })
// // .catch((error) => null)

// // function foo(data)
// // {
// //     // do stuff with JSON
// //     console.log(data)
// // }

// // var script = document.createElement('script');
// // // script.src = '//github-contributions-api.deno.dev/axkeyz.json'
// // script.src = 'https://github.com/users/axkeyz/contributions'

// // document.getElementsByTagName('head')[0].appendChild(script);

// function helloWorld(content) {
//     console.log('well, we got here?')
//     console.log(content)
// }

// var script = document.createElement('script');
// script.src = 'https://github-contributions-api.deno.dev/axkeyz.json?callback=helloWorld';
// script.setAttribute('type', 'application/json');

// document.querySelector('head').appendChild(script);


// fetch("/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({ query: "{hello}" }),
// })
// .then(r => r.json())
// .then(data => console.log("data returned:", data))

// const URL = 'https://api.github.com/users/octocat';
// const headers = {
//   Accept: 'application/vnd.github+json',
//   // 'X-GitHub-Api-Version': '2022-11-28',
// };
// fetch(URL, { headers })
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     //
// })

fetch('/.netlify/functions/fetch-github', {
    Accept: 'text/html',
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    //
})



// function foo(data)
// {
//     // do stuff with JSON
// }

// var script = document.createElement('script');
// script.src = '//github-contributions-api.deno.dev/axkeyz.json?callback=foo'

// document.getElementsByTagName('head')[0].appendChild(script);