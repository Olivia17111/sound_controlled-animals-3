cat = 0;
dog = 0;
lion =0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RwlfUBAPN/model.json' , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error,results)
{
    if (error)
    {
 console.error(error);        
    }
    else{
        console.log(results);
     random_number_r = Math.floor(Math.random()*255 ) +1;
     random_number_g = Math.floor(Math.random()*255 ) +1;
     random_number_b = Math.floor(Math.random()*255 ) +1;
     document.getElementById("no._of_sounds").innerHTML= '  Dog - '+ dog + '   Cat - '+ cat + 'Lion - '+ lion;

     if ( results[0].label == "Barking"){
        img.src= 'dog.gif';
       dog = dog +1;
        }
        else if( results[0].label == "Meow"){
          img.src= 'cat.gif';
          cat = cat + 1;
         }
           
          
        else if( results[0].label == "Roar"){
          img.src= 'lion.gif';
          lion = lion+1;
        }
        
          
    }}
