$(document).ready(function () {

    var app = new Vue({
        el: '#app',
        data: {
            project: {details: {}}
        },
        created: function () {
            this.fetchData();
        },

        methods: {
            getTechnologies : function (tech) {
              return tech.join(' , ');
            },
            fetchData: function () {
                var xhr = new XMLHttpRequest();
                var self = this;
                xhr.open('GET', '/projects/json/index.json');
                xhr.onload = function () {
                    var project_id = getParameterByName('project');
                    var projects = JSON.parse(xhr.responseText);
                    self.project = projects.find(function (project) {
                        return project.id == project_id;
                    });

                    console.log(self.project);
                };
                xhr.send()
            }
        }
    });
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}