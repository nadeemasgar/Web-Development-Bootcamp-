// Apply is same as call method but the second parameter is the array which is passed as a parameter in the function


const youtuber1 = {
  name: "ThapaTechnical",
  content: "Programming",
  features: function (rating, support) {
    console.log(
      `Very friendly way of teaching. ${this.name} is my favourite ${this.content} channel. I will love to learn
       to give ${rating} star. Please ${support} ${this.name} channel.`
    );
  },
};

youtuber1.features(5, "subscribe");

const youtuber2 = {
  name: "kuchbhi",
  content: "programming & vlog",
};

youtuber1.features.apply(youtuber2, [3, "un-subscribe"]);

let arrMax = Math.max.apply(null, [1,2,3,4,5,6]);
console.log(arrMax);