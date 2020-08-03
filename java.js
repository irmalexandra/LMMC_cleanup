const proxy_url = 'http://localhost:5000/api/v1/'

//https://github.com/Tautulli/Tautulli/blob/master/API.md

let libraryList = document.getElementById('library-list');

loadLibraryList();

function loadLibraryList() {
  const req = new XMLHttpRequest();
  req.open('GET', proxy_url + "get_library_names", true )
  if (this.status === 200) {
      req.onload = function() {
        const data = JSON.parse(this.responseText);
        libraryJSON = data.response.data
        console.log(libraryJSON)
        for (i = 0; i < libraryJSON.length; i++) {
            section_id = libraryJSON[i].section_id;
            section_name = libraryJSON[i].section_name;

            let radioOption = document.createElement('input');
            radioOption.type = 'radio';
            radioOption.id = 'library_' + section_id;

            let radioLabel = document.createElement('label')

            radioLabel.htmlFor = 'default'
            radioLabel.innerHTML = section_name
            libraryList.appendChild(radioOption)
            libraryList.appendChild(radioLabel)
        }
      }
  }
  else {
      document.getElementById('library-list-text').innerHTML ='Error! Tautulli data could not be accessed.';
  };

  req.send();
}

function handleDateCutoff() {

};

//attr('value', entry.section_id).text(entry.section_name));
