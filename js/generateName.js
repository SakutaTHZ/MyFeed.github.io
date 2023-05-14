var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"] 
var object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card", "Dude", "Child", "Man", "Woman", "Person", "Karen"]
var verb = ["hit","ate","built","drew","threw","squashed","kiked","punched","fucked","licked","smashed"]
var verb3 = ["hit","eaten","built","drawn","thrown","squashed","kiked","punched","fucked","licked","smashed"]
var list;

// to generate Usernames
function generator() {
 return adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}

// to generate Comments
function generateComment(){
    return Math.floor(Math.random() * 2) == 0 ? "'" + generator() + "' " + verb[Math.floor(Math.random() * verb.length)] + " '"+ generator() + "'" : "'" + generator() + "' was " + verb3[Math.floor(Math.random() * verb3.length)] + " by '"+ generator() + "'"
}

// to generate random colors for the post body image (light Colors only)
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function generateColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}