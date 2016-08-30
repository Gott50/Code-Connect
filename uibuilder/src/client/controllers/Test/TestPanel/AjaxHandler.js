var URL = 'http://localhost:3000';


//AJAX set up
function getRequest(route, callback) {

    $.ajax({
        url: URL + route,
        dataType: 'text',
        cache: false,
        success: function(data) {
            callback(data);
            return;
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(route, status, err.toString());
            return;
        }.bind(this)
    });
}

function getJSON(route, callback) {

    $.ajax({
        url: URL + route,
        dataType: 'json',
        cache: false,
        success: function(data) {
            callback(data);
            return;
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(route, status, err.toString());
            return;
        }.bind(this)
    });
}

//temp data to send to server
function postRequest(route, callback, temp) {
    $.ajax({
        url: URL + route,
        dataType: 'text',
        type: 'POST',
        data: temp,
        success: function(data) {
            callback(data);
            return;
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(route, status, err.toString());
            return;
        }.bind(this)
    });
}


//exported Requests
//param callback
exports.getProjectList = function(callback) {
    getJSON('/projectList', callback);
}

exports.getTaskList = function(callback) {
    getJSON('/taskList', callback);
}

////////////////////////////////////////
//not used function
////////////////////////////////////////
exports.getTask = function() {
    getRequest('/task', function() {
        console.log("GOT THE TASK");
    });
}

exports.getProject = function() {
    getRequest('/project', function() {
        console.log("GOT THE PROJECT")
    });
}

exports.postTask = function(temp) {
    postRequest('/task', function(data) {
        console.log(data);
    }, temp);
}
