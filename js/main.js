var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=3581a524-16a4-4605-b6b9-85e4f71a4a97";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
