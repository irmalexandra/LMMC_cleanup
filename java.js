const ip = "130.208.183.18"
const port = "8181"
const api_key = "c32952c9371049eb8d54cc72978c4533"
const api_start = "/api/v2?apikey="

//https://github.com/Tautulli/Tautulli/blob/master/API.md

let library_list_url = ip + ':' + port + api_start + api_key + "&cmd=get_library_names"

let libraryList = document.getElementById('library-list');
let radioOption = document.createElement('input')
radioOption.type = 'radio'
radioOption.id = 'default'

let radioLabel = document.createElement('label')

radioLabel.htmlFor = 'default'
radioLabel.innerHTML = 'Default Option'
libraryList.appendChild(radioOption)
libraryList.appendChild(radioLabel)


//let library_list_url = 'prj02.jpg'
let library_list = fetch_info(library_list_url)
console.log(library_list)
function fetch_info(url) {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("130.208.183.18:8181/api/v2?apikey=c32952c9371049eb8d54cc72978c4533&cmd=get_library_names", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // const res = fetch(url, {
    //     method: 'GET'
    //     headers: {}
    // }).then(function(response){
    //     console.log(response)
    //     if (response.ok) {
    //         return response.json()
    //     }
    // })
}
// loadLibraryList();


// function loadLibraryList() {
//   var req = new XMLHttpRequest();
//   req.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.data)
//     }
//   };
//   req.open("GET", library_list_url, true);
//   req.send();
// }


//attr('value', entry.section_id).text(entry.section_name));
