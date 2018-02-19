var mine = angular.module("app",[]);

mine.controller("tocontrol",function($scope){
    $scope.myworks = [
      {"ad":"edilecek1", "edildi":false},
      {"ad":"edilecek2", "edildi":false},
      {"ad":"edilecek3", "edildi":false},
      {"ad":"edilecek4", "edildi":false}
    ];
});


// mine.controller("mycont",function($scope){


//   $scope.telebeler = [
     
//       {"ad":"rahman","yas":20},
//       {"ad":"elman","yas":27}

//   ];

//     $scope.elaveet = function(){
//       $scope.telebeler.push({
      

//           ad:$scope.name,
//          yas:$scope.age,

//       });
//       $scope.name = "";
//       $scope.age = "";
//     } 
// });



// For chose first letter object    /////////////
// var mine = angular.module("app",[]);

// mine.controller("mycont",function($scope){


//   $scope.masinlar = [
     
//       {"ad":"mercedes","il":2000},
//       {"ad":"bmw","il":1998},
//       {"ad":"audi","il":1986},
//       {"ad":"range-roveer","il":2015},
//       {"ad":"hummer","il":2003}

//   ];
// });
