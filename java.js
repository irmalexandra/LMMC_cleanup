const proxy_url = 'http://localhost:5000/api/v1/'


//https://github.com/Tautulli/Tautulli/blob/master/API.md

let libraryList = document.getElementById('library-list');

loadLibraryList();

function loadLibraryList() {
  const req = new XMLHttpRequest();
  req.open('GET', proxy_url + "get_library_names", true );
  req.onload = function() {
    if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        let libraryJSON = data.response.data;
        for (let i = 0; i < libraryJSON.length; i++) {
            let section_id = libraryJSON[i].section_id;
            let section_name = libraryJSON[i].section_name;

            let radioOption = document.createElement('input');
            radioOption.type = 'radio';
            radioOption.id = section_id;
            radioOption.name = 'library';
            radioOption.className = 'library';

            let radioLabel = document.createElement('label');

            radioLabel.htmlFor = 'default';
            radioLabel.innerHTML = section_name;
            libraryList.appendChild(radioOption);
            libraryList.appendChild(radioLabel)
        }
    }
    else {
        document.getElementById('library-list-text').innerHTML ='Error! Tautulli data could not be accessed.';
    }
    };
  req.send();
}

function getMediaList(libID, cutoffDate, res){
    const req = new XMLHttpRequest();
    req.open('POST', proxy_url + 'get_library_media_info/' + libID, true);
    console.log("inb4 onload")
    req.onload = function () {
        console.log("where we at")
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            let mediaJSON = data.response.data;
            console.log(mediaJSON)
        }
        else {
            console.log('something went wrong')
        }
    };
}


let submit = document.getElementById("form-submit")
submit.addEventListener("click", function(event){
    event.preventDefault()

    let libArr = document.getElementsByClassName('library')
    let chosenLibID = ''
    for (let i = 0; i < libArr.length; i++) {
        if (libArr[i].checked === true) {
            chosenLibID = libArr[i].id
            i = libArr.length
        }
    };

    let resArr = document.getElementsByClassName("resolution")
    let chosenQuality = ""
    for (let i = 0; i < resArr.length; i++) {
        if (resArr[i].checked === true) {
            chosenQuality = resArr[i].id
            i = resArr.length
        }
    };

    let cutoffDate = document.getElementById("cutoff-date").value

    getMediaList(parseInt(chosenLibID), cutoffDate, chosenQuality)
});



