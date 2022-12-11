const setUpEvents = () => {
const form = document.querySelector("#github-form")
form.addEventListener("submit", (e) => {
    e.preventDefault() //function hoisted to be used next
    fetchData(e.target.search.value)
})

function fetchData(user) { //fetch request is sent to the username endpoint
    fetch(`https://api.github.com/search/users?q=${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
        },
    })
    .then (response => response.json()) //return response in json format
    .then (data=> profileLoad(data))
}
// grabbing elements by querySelector
function profileLoad(data){
    let userList = document.querySelector("#user-list");
    let repoList = document.querySelector("#repos-list");
    let userName = document.createElement('div');
    let avatar = document.createElement('div');
    let link = document.createElement('div');
    let repos = document.createElement('div');

// append lists
    userList.appendChild(userName)
    userList.appendChild(avatar)
    userList.appendChild(link)
    repoList.appendChild(repos)

// strin interpolating values

userName.innerHTML=`<a href="https://www.github.com${githubNames}"></a>`
avatar.innerHTML=`<img  src="${data.avatar_url}"/>`
 link.innerHTML=`<a href="https://www.github.com/${data.url}" ></a>`
repos.innerHTML=`<a href="https://www.github.com/${data.public_repos}" ></a>`
console.log(data)

}

window.onload = function () {
    setUpEvents();
}
}