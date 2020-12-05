
//Cearing Session storage in the begining 
    sessionStorage.clear();
    document.getElementById("inputButton").addEventListener("click", event => { // Taking input as userInformation
           localStorage.setItem("UserInfo",txt1.value);
           localStorage.setItem("UserPass",txt2.value);
           alert("User Information saved in Local Storage");
           document.getElementById("txt1").value="";
           document.getElementById("txt2").value="";
        })

    button2 = document.getElementById("myButton2"); // RESET Button 
    button2.addEventListener('click', (event) => {
        var nodes = document.querySelectorAll("select");
        var nodev = document.querySelector("video");
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i] == document.getElementById("mySelect2")) {
                document.getElementById("myDiv1").remove(row1.h2);
                document.getElementById("myDiv1").removechild(row2[mySelect2]);
              
            }
            if (nodes[i] == document.getElementById("mySelect3")) {
                document.getElementById("myDiv1").removeChild(mySelect3);
                document.getElementById("myDiv1").removeChild(h3);
            }
            if(nodev!=null){
                vid1 = document.getElementById("vid1").removeItem;
            }
        }
        adds1();


        event.target.style.background = 'red';
    }, false);
    const myChoices = selectInfo;

    adds1();

    //Function to create First Select
    function adds1(){
    
    console.log(myChoices);
    var row1=document.createElement("div");
    row1.id="row1";


    var row2=document.createElement("div");
    row2.id="row2";
    
    var content= document.getElementById("content");
    const myDiv1 = document.createElement("div");
    myDiv1.id = "myDiv1";
    content.appendChild(myDiv1);
 
    const myUpper = selectInfo;

    const myoption1 = document.createElement("option");

    var h1 = document.createElement('h2');
    var textNode = document.createTextNode("Select Body Area");
    h1.appendChild(textNode);
    h1.id = "h1";
    row1.appendChild(h1);
    myDiv1.appendChild(row1)

    const mySelect1 = document.createElement("select");
    mySelect1.id = "mySelect1";

    row2.appendChild(mySelect1);
    document.getElementById("myDiv1").appendChild(row2);

    const myOptions1 = document.createElement("option");
    myOptions1.value = myChoices.choices[0].key;
    myOptions1.textContent = myChoices.choices[0].description;
    myOptions1.selected = this;
    myOptions1.disabled = true;

    const myOptions2 = document.createElement("option");
    myOptions2.value = myChoices.choices[0].option_1;
    myOptions2.textContent = myChoices.choices[0].option_1;

    const myOptions3 = document.createElement("option");
    myOptions3.value = myChoices.choices[0].option_2;
    myOptions3.textContent = myChoices.choices[0].option_2;

    const myOptions4 = document.createElement("option");
    myOptions4.value = myChoices.choices[0].option_3;
    myOptions4.textContent = myChoices.choices[0].option_3;

//Appending all the option for Select1
    document.getElementById("mySelect1").appendChild(myOptions1);
    document.getElementById("mySelect1").appendChild(myOptions2);
    document.getElementById("mySelect1").appendChild(myOptions3);
    document.getElementById("mySelect1").appendChild(myOptions4);

    mySelect1.addEventListener("change", () => {
        currentSelection = mySelect1.value;
        var nodev = document.querySelector("video");

//Removing child nodes and using session storage to keep track of past selections 
        if (sessionStorage.length != 0 && sessionStorage.getItem("username1") != currentSelection) {
            let node = document.querySelectorAll("select");
      

            for (var i = 0; i < node.length; i++) {
                if (node[i] == document.getElementById("mySelect2")) {
                    document.getElementById("myDiv1").removeChild(row2.nextSibling);                 

                }
                if (node[i] == document.getElementById("mySelect3")) {
                    document.getElementById("myDiv1").removeChild(mySelect3);
                    document.getElementById("myDiv1").removeChild(h3);
                
                }
                if(document.querySelector("video")){
                    console.log(sessionStorage.username3);
                    console.log(document.getElementById("vidDiv").remove(vidDiv.vid1));
                    console.log(sessionStorage.username3);
                    sessionStorage.removeItem("username3");
                }
            }
        }
        sessionStorage.username1 = currentSelection;

        if (sessionStorage.username2 != null) {
            sessionStorage.removeItem("username2");
        }
        selectInfo.choices.forEach(element => {
            if (element.key == mySelect1.value) {
                addS2(element); // Creating select2 dynamically from options of select1
            }
        });

    });
}
    
// Function to create second select
    function addS2(element) {
        var h2 = document.createElement('h2');
        h2.id = "h2";
        var textNode = document.createTextNode("Select Body part");
        h2.appendChild(textNode);
        document.getElementById("row1").appendChild(h2);
        const mySelect2 = document.createElement("select");
        mySelect2.id = "mySelect2";

        document.getElementById("row2").appendChild(mySelect2);
        const myOption5 = document.createElement("option");
        myOption5.selected = true;
        myOption5.disabled = true;
        myOption5.value = element.key;
        myOption5.text = element.description;

        const myOption6 = document.createElement("option");
        myOption6.value = element.option_1;
        myOption6.text = element.option_1;

        const myOption7 = document.createElement("option");
        myOption7.value = element.option_2;
        myOption7.text = element.option_2;

        const myOption8 = document.createElement("option");
        myOption8.value = element.option_3;
        myOption8.text = element.option_3;

        myDiv1.appendChild(mySelect2);
        mySelect2.appendChild(myOption5);
        mySelect2.appendChild(myOption6);
        mySelect2.appendChild(myOption7);
        mySelect2.appendChild(myOption8);

        mySelect2.addEventListener("change", () => { // using eventListener for any change and removing child nodes
            currentSelection = mySelect2.value;
        
            if (sessionStorage.length != 0 && sessionStorage.getItem("username2") != currentSelection) {
                var remov = document.querySelectorAll("select");


                for (var i = 0; i < remov.length; i++) {               
                    if (remov[i] == document.getElementById("mySelect3")) {
                        document.getElementById("myDiv1").removeChild(mySelect3);
                        document.getElementById("myDiv1").removeChild(h3);
                        
                            if(document.querySelector("video")){
                                console.log(sessionStorage.username3);
                                console.log(document.getElementById("vidDiv").remove(vidDiv.vid1));
                                console.log(sessionStorage.username3);
                                sessionStorage.removeItem("username3");
                            }                       
                        
                    }
                }
        
            }

            sessionStorage.username2 = currentSelection;

            selectInfo.choices.forEach(element => {
                if (element.key == mySelect2.value) {
                    addS3(element);
                }
            });

        });

    }

    // function for creating third select 
    function addS3(element) {
        var h3 = document.createElement('h2');
        h3.id = "h3";
        var textNode = document.createTextNode("Select exercise");
        h3.appendChild(textNode);
        myDiv1.appendChild(h3);
        const mySelect3 = document.createElement("select");
        mySelect3.id = "mySelect3";        

        document.getElementById("myDiv1").appendChild(mySelect3);
        const myOption9 = document.createElement("option");
        myOption9.selected = true;
        myOption9.disabled = true;
        myOption9.value = element.key;
        myOption9.text = element.description;

        const myOption10 = document.createElement("option");
        myOption10.value = element.option_1;
        myOption10.text = element.option_1;   

        const myOption11 = document.createElement("option");
        myOption11.value = element.option_2;
        myOption11.text = element.option_2;

        const myOption12 = document.createElement("option");
        myOption12.value = element.option_3;
        myOption12.text = element.option_3;
        myDiv1.appendChild(mySelect3);
        mySelect3.appendChild(myOption9);
        mySelect3.appendChild(myOption10);
        mySelect3.appendChild(myOption11);
        mySelect3.appendChild(myOption12);

        const myoption1 = document.createElement("option");

      // Removing child nodes if there is any change
        var row3 = document.createElement("div");
        mySelect3.addEventListener("change", () => {
            currentSelection = mySelect3.value;
        
            if (sessionStorage.length != 0 && sessionStorage.getItem("username3")!=null && sessionStorage.getItem("username3") != currentSelection ) {
                var videoex=document.querySelector("video");
                console.log(videoex);
                videoex.remove(currentSelection);              
           
            }            

            var vidDiv = document.createElement("div");
            vidDiv.id = "vidDiv";
            var vid = document.createElement("video");
            vid.id="vid1"
            vid.width = "400"
            vid.controls=true;
        
            var src1 = document.createElement("source");
            for(var i=0; i< myChoices.videos.length; i++){
            if(currentSelection == myChoices.videos[i].key){
                src1.id = myChoices.videos[i].key;
                src1.src = myChoices.videos[i].link;
                src1.type = "video/mp4";
                
            }
            }
            sessionStorage.username3=currentSelection;            
            vid.appendChild(src1);
            vidDiv.appendChild(vid);       
            row3.appendChild(vidDiv);
            myDiv1.appendChild(row3);         
            });
        
}
 
