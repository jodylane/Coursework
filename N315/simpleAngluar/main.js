/**
 * Created by Josh Lane on .
 N215 N320
 */
angular.module("simpleApp",[])
    .controller("AppController",function(){
        var s_app = this;
        AppService.getAllUsers(usersFinished);
        function usersFinished(data){
            console.log(data)
        }
        s_app.listItems = [
            {name: "Todd", done: true},
            {name: "Sammi", done: false},
            {name: "Joe", done: false},
            {name: "Lisa", done: true},
            {name: "Josh", done: false}
        ];
        s_app.upDateList = function(item){
           if(item.done == true){
               item.done = false;
           }else{
               item.done = true;
           }
        };
        s_app.addTodo = function(){
            var checkMark = false;
            if(s_app.markDone == true){
                checkMark = true;
            }else{
                checkMark = false;
            }
            s_app.listItems.push({name:s_app.todoText,done: checkMark});
            s_app.todoText = '';
            s_app.markDone = "false";
        }
    }).factory("AppService",function($http){
        var _dbURL = "https://api.mongolab.com/api/1/databases/dwspeakersite/collections/speakers?";
        var _apiKey = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";

        var _userInfo = {};

        var _getAllUsers = function(callback) {
            return $http.get(_dbURL + _apiKey).success(callback);
            //var deferred = $q.defer();

            //$.ajax({
            //    url: _dbURL + 'q={"email": "' + username + '"}&fo=true&' + _apiKey,
            //    type: "GET",
            //    contentType: "application/json"
            //}).done(function (data) {
            //    console.log('data ', data);
            //    callback(data);
            //    //return deferred.resolve(data);
            //});
        };
        return{
            getAllUsers: _getAllUsers
        }
    });


