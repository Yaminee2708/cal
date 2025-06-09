function action(){
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const quiz = [
  {
    question: "What is your collage name",
    options: ["1. GPP", "2. GPA", "3. GPN", "4. GPS"],
    answer: 2 
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["1. Earth", "2. Venus", "3. Mars", "4. Jupiter"],
    answer: 3
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["1. Steve Jobs", "2. Elon Musk", "3. Jeff Bezos", "4. Bill Gates"],
    answer: 4
  }
];
const ans=[2,3,4];

for(let i=0;i<quiz.length;i++)
{
  console.log(quiz[i].question);
    for(let j=0;j<quiz.length;j++)
        {
          console.log(quiz[i].options[j]);
        }    
}
rl.question("give the answer", function(quiz) 
{
  let i,l;
  if(quiz[i].answer==ans[l])
  {
    console.log("answer is correct");
  }
    rl.close();
});
}
action();




