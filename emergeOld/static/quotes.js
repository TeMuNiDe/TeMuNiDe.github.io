quotes = [
  {
    quote:"Technology should do the hard work so that people can do things that make them the happiest in life.",
    name:"Larry Page, Founder of Google."
  },
  {
    quote:"If you stop learning new things, you stop doing great and useful things.",
    name:"Satya Nadella, CEO, Microsoft."
  },
  {
    quote:"It is possible for ordinary people to choose to be extra ordinary.",
    name:"Elon Musk, Futurist, Investor, Engineer, and Inventor."
  },
  {
    quote:"Especially in Technology we need revolutionary change, not incremental change.",
    name:"Larry-Page, Founder of Google."
  },
  {
    quote:"The time has come for a new generation of Technology, you could either watch it happen or be a part of it.",
    name:"Elon Musk, Futurist, Investor, Engineer, and Inventor."
  },
  {
    quote:"You don't need to have a 100 Person company to develop an idea. ",
    name:"Sergey Brin, Founder of Google."
  },
  {
    quote:"Lets go invent tomorrow rather than worrying about what happened yesterday.",
    name:"Steve Jobs, co-founder of Apple Inc"
  },
]
var index = 0;
$(document).ready(function(){
setInterval(function(){
//  console.log("setInterval");
  $("#quote-text").each(function(){
    $(this).fadeOut(800,function(){
      $(this).html(quotes[index].quote+"<br><strong>-<i>"+quotes[index].name+"</i></strong>");
    });
    $(this).fadeIn(1000);
});
$("#mobile-quote-text").each(function(){
  $(this).fadeOut(800,function(){
    $(this).html(quotes[index].quote+"<br><strong>-<i>"+quotes[index].name+"</i></strong>");
  });
  $(this).fadeIn(1000);
});
if(index==6){
  index=0;
}else{
    index++;
}
},4000);

});
