
function appViewModel() {
	var self = this;
	self.Documents = ko.observableArray([
	{name:"Article Name",pos:"1",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"2",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"3",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"4",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"5",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"6",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"7",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)},
	{name:"Article Name",pos:"8",description:"Authors, name of edition,publishing year, (more info?)",check:ko.observable(0),id:"doc",full:ko.observable(0)
	}]);
	self.Links = ko.observableArray([
	{name:"Article Name",pos:"1",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"2",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"3",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"4",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"5",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"6",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"7",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)},
	{name:"Article Name",pos:"8",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"link",full:ko.observable(0)
	}]);
	self.Science = ko.observableArray([
	{name:"Article Name",pos:"1",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"science",full:ko.observable(0)},
	{name:"Article Name",pos:"2",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"science",full:ko.observable(0)},
	{name:"Article Name",pos:"3",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"science",full:ko.observable(0)},
	{name:"Article Name",pos:"4",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"science",full:ko.observable(0)},
	{name:"Article Name",pos:"5",description:"www address, (more info?) second line of text",check:ko.observable(0),id:"science",full:ko.observable(0)	
	}]);
	self.textAddRemoveAllDocs = ko.observable("Add All");
	self.textAddRemoveAllLinks = ko.observable("Add All");
	self.textAddRemoveAllScience = ko.observable("Add All");
	self.countChecked = ko.observable(0);
	self.counter = 0;
	self.counterDocs = 0;
	self.counterLinks = 0;
	self.counterScience = 0;
	self.userMessage = ko.observable("");
	self.userName = ko.observable("");
	self.userEmail = ko.observable("");
	self.arrAttachedItems = ko.observableArray([]);
	
	checkboxClick = function(){
		if (this.check() == 0)
		{
			this.check(1);
			this.full(1);
			if (self.arrAttachedItems().indexOf(this) ==-1){
				self.arrAttachedItems.push(this);
				self.counter++;
				self.countChecked(self.counter);
			}
			if (this.id == "doc")
			{
				for (var i = 0;i < self.Documents().length;i++)
				{
					if (self.Documents()[i].full() == 1)
						self.counterDocs++
				}
				if (self.counterDocs == self.Documents().length)
				{
					self.textAddRemoveAllDocs("Remove All");
				}
				self.counterDocs = 0;
			}
			if (this.id == "link")
			{
				for (var i = 0;i < self.Links().length;i++)
				{
					if (self.Links()[i].full() == 1)
						self.counterLinks++
				}
				if (self.counterLinks == self.Links().length)
				{
					self.textAddRemoveAllLinks("Remove All");
				}
				self.counterLinks = 0;
			}
			if (this.id == "science")
			{
				for (var i = 0;i < self.Science().length;i++)
				{
					if (self.Science()[i].full() == 1)
						self.counterScience++
				}
				if (self.counterScience == self.Science().length)
				{
					self.textAddRemoveAllScience("Remove All");
				}
				self.counterScience = 0;
			}
		}
		else {
			this.check(0);
			if (self.arrAttachedItems().indexOf(this) !=-1)
			{
				self.arrAttachedItems.remove(this);
				self.counter--;
				self.countChecked(self.counter);
			}
			if (this.full() == 1){
				this.full(0);
				if (this.id == "doc")
				self.textAddRemoveAllDocs("Add All");
				else if (this.id == "link")
				self.textAddRemoveAllLinks("Add All");
				else  if (this.id == "science")
				self.textAddRemoveAllScience("Add All");
			}
		}
	}
	
	selectAllDocuments = function(){
		if (self.textAddRemoveAllDocs() == "Add All")
		{
			self.textAddRemoveAllDocs("Remove All");
			for (var i =0 ; i < self.Documents().length; i++){
				self.Documents()[i].check(1);
				self.Documents()[i].full(1);
				if (self.arrAttachedItems().indexOf(self.Documents()[i]) == -1){
					self.arrAttachedItems.push(self.Documents()[i]);
					self.counter++;
					self.countChecked(self.counter);
				}
			}
			
			
		}
		else
		{
			self.textAddRemoveAllDocs("Add All");
			for (var i =0 ; i < self.Documents().length; i++){
				self.counter--;
				self.countChecked(self.counter);
				self.Documents()[i].check(0);
				self.Documents()[i].full(0);
			}
			for (var i = 0;i < self.arrAttachedItems().length;i++){
				if (self.arrAttachedItems()[i].id == "doc"){
					self.arrAttachedItems.splice(i,1);
					i = i-1;
				}
			}

		}

	}
	selectAllLinks = function(){
		if (self.textAddRemoveAllLinks() == "Add All")
		{
			self.textAddRemoveAllLinks("Remove All");
			for (var i =0 ; i < self.Links().length; i++){
				self.Links()[i].check(1);
				self.Links()[i].full(1);
				if (self.arrAttachedItems().indexOf(self.Links()[i]) == -1){
					self.arrAttachedItems.push(self.Links()[i]);
					self.counter++;
					self.countChecked(self.counter);
				}
			}
		}
		else
		{
			self.textAddRemoveAllLinks("Add All");
			for (var i =0 ; i < self.Links().length; i++){
				self.counter--;
				self.countChecked(self.counter);
				self.Links()[i].check(0);
				self.Links()[i].full(0);
			}
			for (var i = 0;i < self.arrAttachedItems().length;i++){
				if (self.arrAttachedItems()[i].id == "link"){
					self.arrAttachedItems.splice(i,1);
					i = i-1;
				}
			}
				
		}
	}
	selectAllScience = function(){
		if (self.textAddRemoveAllScience() == "Add All")
		{
			self.textAddRemoveAllScience("Remove All");
			for (var i =0 ; i < self.Science().length; i++){
				self.Science()[i].check(1);
				self.Science()[i].full(1);
				if (self.arrAttachedItems().indexOf(self.Science()[i]) == -1){
					self.arrAttachedItems.push(self.Science()[i]);
					self.counter++;
					self.countChecked(self.counter);
				}
			}
		}
		else
		{
			self.textAddRemoveAllScience("Add All");
			for (var i =0 ; i < self.Science().length; i++){
				self.counter--;
				self.countChecked(self.counter);
				self.Science()[i].check(0);
				self.Science()[i].full(0);
				self.arrAttachedItems.pop();
			}
			for (var i = 0;i < self.arrAttachedItems().length;i++){
				if (self.arrAttachedItems()[i].id == "science"){
					self.arrAttachedItems.splice(i,1);
					i = i-1;
				}
			}
						
		}
	}

	self.removeSelected = function(){
		if (this.id == "doc"){
			self.counter--;
			self.countChecked(self.counter);
			self.Documents()[this.pos-1].check(0);
			self.Documents()[this.pos-1].full(0);
			self.textAddRemoveAllDocs("Add All");
			self.arrAttachedItems.remove(this);
		}
		if (this.id == "link"){
			self.counter--;
			self.countChecked(self.counter);
			self.Links()[this.pos-1].check(0);
			self.Links()[this.pos-1].full(0);
			self.textAddRemoveAllLinks("Add All");
			self.arrAttachedItems.remove(this);
		}
		if (this.id == "science"){
			self.counter--;
			self.countChecked(self.counter);
			self.Science()[this.pos-1].check(0);
			self.Science()[this.pos-1].full(0);
			self.textAddRemoveAllScience("Add All");
			self.arrAttachedItems.remove(this);
		}
	}
	var clearForm = function(){
		self.userName("");
		self.userEmail("");
		self.userMessage("");
		self.textAddRemoveAllDocs("Add All");
		self.textAddRemoveAllLinks("Add All");
		self.textAddRemoveAllScience ("Add All");
		self.countChecked(0);
		self.counter = 0;
		self.counterDocs = 0;
		self.counterLinks = 0;
		self.counterScience = 0;
		for (var i = 0;i<self.arrAttachedItems().length;i++){
			self.arrAttachedItems.splice(i,1);
			i--;
		}
		for (var i = 0;i < self.Documents().length;i++){
			self.Documents()[i].check(0);
			self.Documents()[i].full(0);
		}
		for (var i = 0;i < self.Links().length;i++){
			self.Links()[i].check(0);
			self.Links()[i].full(0);
		}
		for (var i = 0;i < self.Science().length;i++){
			self.Science()[i].check(0);
			self.Science()[i].full(0);
		}

	}
	self.sendForm = function(){
		console.log(self.userEmail());
		alert("Name: "+self.userName() + "\n" + "Email: "+self.userEmail()+"\n" + "Message: " + self.userMessage()+"\n"+
			"You attached:" + self.counter + " links");
		clearForm();
	}

}
ko.applyBindings(new appViewModel());