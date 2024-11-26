const contacts = {
    krushna: "8767055734",
    pratik: "9845342312",
    om: "5645342312",
    rudransh: "7845346782",
    abhi: "9876543210",
    sanket: "8765432109",
    sarthak: "7654321098",
    karan: "8943210987",
    siddharth: "9932109876",
    aniket: "9521098765"
};

function search(){
    const searchinput=document.getElementById("search");
    const query=searchinput.value.toLowerCase();
    const mobile = contacts[query];
    const result=document.getElementById("result");

    if(mobile){
        result.innerText= `Name is ${query.toUpperCase([0])} and Moblie is ${mobile}`;
        document.getElementById("search").value = "";
    }
    else{
        result.innerText='contact was not found';
        
    }
}

