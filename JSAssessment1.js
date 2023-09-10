/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const MJR_NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, studentnumber, school, course, specialization) {
    const NFT = {
        "Name": name,
        "StudentNumber": studentnumber,
        "School": school,
        "Course": course,
        "Specialization": specialization
    }
    MJR_NFTs.push(NFT);
    console.log(name, "minted successfully");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < MJR_NFTs.length; i++){
        //console.log(MJR_NFTs);
        console.log("--------------------------------------------------");
        console.log("ID:\t\t\t\t\t\t\t", i+1);
        console.log("Name:\t\t\t\t\t\t", MJR_NFTs[i].Name);
        console.log("Student Number:\t", MJR_NFTs[i].StudentNumber);
        console.log("School:\t\t\t\t\t", MJR_NFTs[i].School);
        console.log("Course:\t\t\t\t\t", MJR_NFTs[i].Course);
        console.log("Specialization:\t", MJR_NFTs[i].Specialization);
        console.log("--------------------------------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Number of Minted NFTs:", MJR_NFTs.length)
}

// call your functions below this line
mintNFT("Jarod", "00000001", "FEU", "Computer Science", "Software Engineering");
mintNFT("Henry", "00000002", "TUP", "Information Technology", "Cyber Security");
mintNFT("Ben", "00000003", "UST", "Computer Science", "Data Science");
mintNFT("Ben", "00000004", "MAPUA", "Information Technology", "Web and Mobile Application");
listNFTs();
getTotalSupply();
