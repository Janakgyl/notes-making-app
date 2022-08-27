console.log('welcome to notes making app');
shownotes();//once refreshed it will alsobe displayed on screen

//if user adds a note ,add to local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');  //it targets the notes id which we have to make
    if (notes == null) {
        //checking if their is any note present earlier in local storage
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); //putting value in array if any value is earlier present
    }
    let myobj = {
        title: addtitle.value,
        text: addtxt.value
    }
    // notesobj.push(addtxt.value);//the value we write in textarea is pushed into notesobj
    notesobj.push(myobj)
    localStorage.setItem('notes', JSON.stringify(notesobj));  //converting into string
    addtxt.value = "";
    addtitle.value = "";        //empty test area else it displays value on scrren
    // console.log(notesobj);
    shownotes();
})

// function to show notes
function shownotes() {
    let notes = localStorage.getItem('notes');  //taking notes from local storage
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` 
    <div class=" notecard my-2 mx-2 card "  style="width: 18rem;">
           
    <div class="card-body">
      <h5 class="card-title vc">${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button id='${index}' onclick='deletenote(this.id)' class="btn btn-primary">delete note</button>
    </div>
   
  </div>`;

    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show!, please add a note`;
    }

}
// localStorage.clear()  //for clearing and empty local storage

//function to delete a note
function deletenote(index) {
    // console.log('i am deleting',index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);  //till here we are only reading local storage,now we will update it also
    //splice function remove one note which we clicked
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes();

}

//search filter
let search = document.getElementById("searchtxt")
search.addEventListener('input', function () { //when click on search it executes
    let inputval = search.value.toLowerCase();//it takes value which we have entered
    // console.log('input event fired',inputval)//whenever click on search it isfired

    let notecards = document.getElementsByClassName('notecard');
    //we have taken all the cards here & we will check whether their data is matched with input search or not
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardtxt) //it displays all the ptag cards when we enter something in search 

        if (cardtxt.includes(inputval)) {  //checking if my data is present in notecards
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


//light-dark mode
const toggle = document.getElementById('toggledark')
const body = document.querySelector('body')
let chnge = document.querySelector('.card');
let chng2 = document.querySelector('.change')
let chng3=document.querySelector('#notes');




toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        // body.style.transition='1s';
        chnge.style.background = 'white';
        chng2.style.background = 'white'
        // chnge.style.transition='1s'
        // chng2.style.transition='1s'
        document.getElementById('addtitle').style.background = 'white'
        document.getElementById('addtitle').style.color = 'black'
        document.getElementById('addtxt').style.background = 'white'
        document.getElementById('addtxt').style.color = 'black'



        chnge.style.background = 'white';
        chng2.style.background = 'white';
        chng3.style.color='black'
        

    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        // body.style.transition='2s';
        document.getElementById('addtitle').style.background = 'black'
        document.getElementById('addtitle').style.color = 'white'
        document.getElementById('addtxt').style.background = 'black'

        document.getElementById('addtxt').style.color = 'white'
        chng3.style.color='black'
        
       

       




        chnge.style.background = 'black';
        chng2.style.background = 'black'
        chng4.style.background='black'



    }
})



