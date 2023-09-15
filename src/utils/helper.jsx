//random user image generator
export function getRandomImage() {  

let randomImage = new Array();  
  
randomImage[0] = "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";  
randomImage[1] = "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg";  
randomImage[2] = "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";  
randomImage[3] = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";  
randomImage[4] = "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";  
randomImage[5] = "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";  
  
let number = Math.floor(Math.random()*randomImage.length);  
return randomImage[number];
}  
  

//random username generator
let nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
  ]; 
  
  
  export function randomName(){
      return nameList[Math.floor( Math.random() * nameList.length )];
  };


  //random user comments generator
  const quotes = [
    {
      quote:
        "One of my most productive days was throwing away 1,000 lines of code.",
      cite: "Ken Thompson"
    },
    {
      quote:
        "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
      cite: "Bjarne Stroustrup"
    },
    {
      quote: "When in doubt, use brute force.",
      cite: "Ken Thompson"
    },
    {
      quote: "Talk is cheap. Show me the code.",
      cite: "Linus Torvalds"
    },
    {
      quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      cite: "Martin Golding"
    },
    {
      quote:
        "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
      cite: "Linus Torvalds"
    },
    {
      quote:
        "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
      cite: "Alan Kay"
    },
    {
      quote:
        "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
      cite: "Larry Wall"
    },
    {
      quote:
        "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
      cite: "George Carrette"
    }
  ];

  export function randomComments(){
    
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index].quote
  }



  export const OFFSET_LIVE_CHAT = 10;


  export const convertViewsToMillionBillion = (number) => {
    if (number == null) {
      return 'N/A'; // Handle undefined or null values gracefully
    }
  
    const billion = 1e9; // 1 billion (10^9)
    const million = 1e6; // 1 million (10^6)
    const thousand = 1e3; // 1 thousand (10^3)
  
    if (number >= billion) {
      // If the number is a billion or greater, divide by a billion and add 'B' for billion.
      return (number / billion).toFixed(1) + 'B';
    } else if (number >= million) {
      // If the number is a million or greater, divide by a million and add 'M' for million.
      return (number / million).toFixed(1) + 'M';
    } else if (number >= thousand) {
      // If the number is in the thousands range or greater, divide by a thousand and add 'K' for thousands.
      return Math.floor(number / thousand) + 'K';
    } else {
      // For smaller numbers, just return the number as is.
      return number.toString();
    }
  }