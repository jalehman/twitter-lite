function element(tag) {
    return function(attrs, content) {
        var s = "<" + tag;
        for (var attr in attrs) {
            var val = attrs[attr];
            s += " " + attr + "=\"" + val + "\"";
        }
        return s + ">" + content + "</" + tag + ">";
    };
}

var div = element("div");
var li = element("li");
var ul = element("ul");

var smartUl = function(attrs, items, li_attrs) {
    var content = "";
    for(var i = 0; i < items.length; i++) {
        content += li(li_attrs, items[i]);
    } 
    return ul(attrs, content);
};

smartUl({}, ["tweet 1", "tweet 2"], {"class": "tweet"});

var attrs = {id: "container", class: "tours something-else"};

li(attrs, "Hello, World!");
