var que = ["The problem with quotes on the internet is that they are often not true.", "Yes, I know about germs. but i'll be honest, after I go to the bathroom, I usally lick my hands clean.", "Use the force, Harry.", "There are more people living on the earth then there are living in the ocean.", "Thunderbolt and lightning very very frightening me.","I don't trust fish. They breath water. That's crazy.","I'm your dad, Luke.","I can't believe i'm Ghandhi."];
var author = ["-Abraham Lincoln", "-Louis Pasteur", "-Gandalf", "-Isaac Newton" , "-Galileo","-Bill Nye \"The Science Guy\"","-Darth Vader","-Mahatma Gandhi"];
var pic = ["https://media1.britannica.com/eb-media/34/78134-004-8587374E.jpg", "http://www.thefamouspeople.com/profiles/images/louis-pasteur-13.jpg", "http://cdn.fansided.com/wp-content/blogs.dir/370/files/2016/06/Star-Trek-Picard-MusicBrainz-Picard.jpg", "http://cdn8.openculture.com/wp-content/uploads/2015/03/30193908/isaac-newton-list-of-sins.jpg","http://www.universetoday.com/wp-content/uploads/2009/12/galileo-e1435358932718-580x433.jpg","https://s3.amazonaws.com/lifesite/bill_nye2.jpg","http://screenrant3.imgix.net/wp-content/uploads/darth-vader-10-most-dangerous-star-wars-villains.jpeg?auto=format&lossless=1&q=40&w=786&h=393&fit=crop", "http://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/ghandi.jpg"];

var x = 0;
var visted = que.length + 2;
var offOn = true;

function addText() {
  x = Math.floor(Math.random() * (que.length));

while (x === visted) {
  x = Math.floor(Math.random() * (que.length));
  }
    document.getElementById("text").textContent = que[x];
    document.getElementById("author").textContent = author[x];
    document.getElementById("image").src = pic[x];
    visted = x;
}

function nightMode() {
  if (offOn) {
      document.body.style.backgroundColor = "black";
      document.getElementById("body").style.color = "gray";    document.getElementById("button").style.color = "gray";
      document.getElementById("oButton").style.color = "gray";   
      document.getElementById("oButton").textContent = "Day Mode";
    offOn = false;
  } 
    else {
    document.body.style.backgroundColor = "white";
  document.getElementById("body").style.color = "black";    document.getElementById("button").style.color = "black";
  document.getElementById("oButton").style.color = "black";  document.getElementById("oButton").textContent =  "Night Mode";
    offOn = true;
  }

}