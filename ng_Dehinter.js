var alpha1 = "ABCDEFGHIJKLM";
var alpha2 = "NOPQRSTUVWXYZ";
var app = angular.module('myApp', []);
app.controller("personCtrl",function($scope) {
  $scope.person = {
        input: "John"  
    };
    $scope.decrypt = function() {
        var x = $scope.person.input;
        $scope.output = "";
        for (i=0;i<x.length;i++){
         if (!x[i].match(/[a-z]/i)) {
              //return same non-letter character
              $scope.output += x[i].toString()
              console.log($scope.output);
      } else { // But if this is a letter..
      
        //...in the 1st half of the alphabet...   
        if (alpha2.search(x[i].toUpperCase()) === -1){
        $scope.pos = alpha1.search(x[i].toUpperCase());
        $scope.output  += alpha2[$scope.pos];
        //add the correspondent from the 2nd half
     }
      else if (alpha1.search(x[i].toUpperCase()) === -1) {
        //... of the 2nd half of the alphabet...
        $scope.pos = alpha2.search(x[i].toUpperCase());
        $scope.output  += alpha1[$scope.pos];
        //add the correspondent from the 1st half..
   
      }
      else {
        alert('Error!!!')
      }       
      }
     }
    //and give it back to HTML
    return $scope.output;
    };
});