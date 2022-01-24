// Using call method, we can perform Function Borrowing.
// We can borroe a function of other objects and use it with the data of other objects
// Call can be invoked diretcly

/* const youtuber1 = {
    name : "ThapaTechnical",
    content : "Programming",
    features : function () {
        console.log(`Very friendly way of teaching. ${this.name} is my favourite ${this.content} channel.`);
    }
}

youtuber1.features();

const youtuber2 = {
    name : "kuchbhi",
    content : "programming & vlog"
}

youtuber1.features.call(youtuber2); */



const youtuber1 = {
  name: "ThapaTechnical",
  content: "Programming",
  features: function (rating) {
    console.log(
      `Very friendly way of teaching. ${this.name} is my favourite ${this.content} channel. I will love to learn
            to give ${rating} star.`
    );
  },
};

youtuber1.features(5);

const youtuber2 = {
  name: "kuchbhi",
  content: "programming & vlog",
};

youtuber1.features.call(youtuber2, 3);
