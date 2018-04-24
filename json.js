var json = [
    {
        nama : "Mustofa",
        umur : 30
    },
    {
        nama : "Mahmud",
        umur : 29
    },
    {
        nama : "Abubakar",
        umur : 28
    }
]

// Memunculkan pesan JSON 1
console.log(json)

// Memunculkan pesan JSON 2
for(var i = 0; i < json.length; i++){
    console.log(json[i]);
}

// Memunculkan pesan JSOn 3
for(var i = 0; i< json.length; i++){
    console.log(json[i].nama);
    console.log(json[i].umur);
}