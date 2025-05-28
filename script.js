let str1 = "listen";
let str2 = "silent";

function normalize(str) {
  return str.toLowerCase().split("").sort().join("");
}

if (normalize(str1) === normalize(str2)) {
  console.log(`"${str1}" and "${str2}" are anagrams.`);
} else {
  console.log(`"${str1}" and "${str2}" are NOT anagrams.`);
}
