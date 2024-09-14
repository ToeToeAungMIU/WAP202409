let group = {
    title : "Our Group",
    students : ["John","Pete","Alice"],
    showList : function(){
        this.students.forEach(function(student){
            console.log(this.title + ": " + student);
        });
    }
};


group.showList();

let group1 = {
    title : "Our Group",
    students : ["John","Pete","Alice"],
    showList : function(){
        this.students.forEach(function(student){
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};

group1.showList();


