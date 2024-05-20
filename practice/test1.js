// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// et arrstr=str.split(' ');
// for(let i=0;i<arrstr.length;i++){
//     arrstr[i]=arrstr[i][0].toUpperCase()+arrstr[i].substring(1);
// }
// console.log(arrstr.join(' '));

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thin
// 	output - true

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success



// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.

// let text = ["javascript","react","node"]
// for(let i = 0; i<text.length; i++){
//     if(text[i]=="javascript"){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.

// let text1 = "priyanka@23navgurukul.org";
// if(text1=="priyanka@23navgurukul.com" || "priyanka@23navgurukul.com"){
//     console.log('true');
// }else{
//     console.log('false');
// }

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.


// let count = 0;
// let str1 = "first"; 
// let str2 = "second"; 

// if (str1.length === str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//         if (str2.includes(str1[i])) {
//             count += 1;
//         }
//     }
//     if (count === str1.length) {
//         console.log('anagram');
//     } else {
//         console.log('not anagram');
//     }
// } else {
//     console.log('not anagram');
// }


// 5. Reverse the given sentence.

// let text5 = "i am learning javascript";
// let text = text5.split('').reverse().join('');
// console.log(text);


// 6. Reveres the given string word by word then return the reversed string.

// let text6 = ['i', 'am', 'learning', 'javascript'];
// for (let i = 0; i < text5.length; i++) {
//     let text = text6[i].split('').reverse().join('');
//     console.log(text);
// }