var app = angular.module('rentApp',[]);
app.controller('mainCtrl', function($scope, $rootScope){
	$rootScope.selectedItemsArray = [];
	$scope.readItemsFromCsvFile = function () {
		var txtFile = "E:/project/js/csvfile.txt"
		var file = new File(txtFile);
		file.open("r"); // open file with read access
		var str = "";
		while (!file.eof) {
			// read each line of text
			var dataObj = file.readln().split(',');
				var tarr = [];
				for ( var j = 0; j < dataObj.length; j++) {
					tarr.push(dataObj[j]);
				}
		//		$rootScope.itemsListObj.push(tarr);
		}
		//console.log("qqqqqqqq "
		//+$rootScope.itemsListObj[0])
		file.close();
	};
	
});
app.controller('viewsCtrl',function($scope, $rootScope){
	$scope.itemsListObj=[];
	$scope.totalUnitsSelected=1
	$scope.TotalPrice = function(){
		$rootScope.totalAmt = 0;
		$rootScope.amount = 0;
		var amt=0;
		for(var i=0;i <$rootScope.selectedItemsArray.length;i++){
			console.log("loop is "+$rootScope.selectedItemsArray[i].price)
			$rootScope.amount = $rootScope.amount + $rootScope.selectedItemsArray[i].price 
			$rootScope.selectedItemsArray[i].selectedUnits;
		}
		console.log("select amt "+$rootScope.amount)
	}
	
	$scope.itemsListObj = [
		{
			index:111,
			name:"nameTent",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image4.jpg ../images/image1.jpg ../images/image3.jpg ../images/image2.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:112,
			name:"nameTent1",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},	
		{
			index:113,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:114,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:115,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:116,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:117,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:118,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:119,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:120,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:121,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:111,
			name:"nameTent",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image4.jpg ../images/image1.jpg ../images/image3.jpg ../images/image2.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:112,
			name:"nameTent1",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},	
		{
			index:113,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:114,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:115,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:116,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:117,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:111,
			name:"nameTent",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image4.jpg ../images/image1.jpg ../images/image3.jpg ../images/image2.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:112,
			name:"nameTent1",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},	
		{
			index:113,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:114,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:115,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:116,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:117,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:111,
			name:"nameTent",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image4.jpg ../images/image1.jpg ../images/image3.jpg ../images/image2.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:112,
			name:"nameTent1",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},	
		{
			index:113,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:114,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:115,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,selectedUnits:1
		},
		{
			index:116,
			name:"nameTent23",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg",
			isSelected:false,
			totalUnits:6,
			selectedUnits:1
		},
		{
			index:117,
			name:"nameTent22",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg",
			isSelected:false,
			totalUnits:6,
			selectedUnits:1
		}
	];
});
app.filter('split', function() {
    return function(input,split,index) {
		if(index=="All") {
			var arr = input.split(split);
			arr = arr.splice(1)			
		}
		if(index>=0){
			var arr = input.split(split)[index];
		}
		return arr;
    };
});
app.directive('rentItem',function($rootScope){
	var dir = {};
	dir.restrict = "AE";
	dir.transclude = "True";
	dir.templateUrl = "itemView.html"
	dir.scope = {
                data :'='
        };
	dir.controller = "viewsCtrl";
	dir.compile = function(element, attributes) {
		
	//	element.addClass('container-fluid');
	//	element.addClass('text-center');
		element.css("float", "left");
		element.css("width","19.9%");
		element.css("height","35%");
//		element.css("background-color","gray");
		element.css("padding-right","0px");
		element.css("margin-right","1px");
		element.css("margin-bottom","7px");
		element.css("border","1px solid #E9E9E9");
		element.css("transition","width 2s");
		
            var link = function($scope, element, attributes) {
				$scope.selectedItem = function() {
					$scope.data.isSelected=true;
					$rootScope.selectedItemsArray.push($scope.data) 
					for(i=0;i<$rootScope.selectedItemsArray.length;i++) {
						console.log("name "+$rootScope.selectedItemsArray[i].name)
						console.log("index "+$rootScope.selectedItemsArray[i].index)
						console.log("selectedUnits "+$rootScope.selectedItemsArray[i].selectedUnits)
						console.log("totalUnits "+$rootScope.selectedItemsArray[i].totalUnits)
					}
				}
				$scope.updateTotalUnits = function() {
					console.log("updating units to data "+$scope.totalUnitsSelected)
					$scope.data.selectedUnits=$scope.totalUnitsSelected;
					console.log("data.selectedUnits "+$scope.data.selectedUnits)
					console.log("data name "+$scope.data.index)
					//$rootScope.selectedItemsArray.push($scope.data) 
				}
				$scope.showItemDetails = function() {
					$rootScope.showItemDetailsView=true;
					//$scope.data.selectedUnits=$scope.totalUnitsSelected		
					$rootScope.itemViewData = $scope.data;
				}
				$scope.hideItemDetails = function() {
					$rootScope.showItemDetailsView=false;
				}
            }
   	        return link;
	}
	return dir;
});

app.directive('selectedList',function($rootScope) {
	var selectedList = {};
	selectedList.restrict="AE";
	selectedList.controller = "viewsCtrl";
	selectedList.transclude= true;
	selectedList.scope = {
        detail :'='
    	};
	selectedList.compile = function(element, attributes) {
		var link = function($scope, element, attributes) {
			$scope.showPicBtn=false;
			$scope.showSelectedItemImages=true;
			$scope.descBtn = function(){
				console.log("desc btn clicked")
				$scope.showPicBtn=true;
				//here enable view
			}			
			$scope.infoBtn = function(){
				console.log("Info btn clicked")
				$scope.showPicBtn=true;
				
				//here enable view
			}	
			$scope.updateTotalUnits = function() {
					console.log("updating units to data "+$scope.totalUnitsSelected)
					$scope.detail.selectedUnits=$scope.totalUnitsSelected;
					console.log("detail.selectedUnits "+$scope.detail.selectedUnits)
					console.log("detail.name "+$scope.detail.index)
			}
			$scope.showItemDetails = function() {
					$rootScope.showItemDetailsView=true;
					//$scope.detail.selectedUnits=$scope.totalUnitsSelected
					$rootScope.itemViewData = $scope.detail
					//$scope.detail.selectedUnits=$scope.totalUnitsSelected
					for(i=0;i<$rootScope.selectedItemsArray.length;i++) {
							console.log("1name "+$rootScope.selectedItemsArray[i].name)
							console.log("1index "+$rootScope.selectedItemsArray[i].index)
							console.log("1selectedUnits "+$rootScope.selectedItemsArray[i].selectedUnits)
							console.log("1totalUnits "+$rootScope.selectedItemsArray[i].totalUnits)
					}
			}
			$scope.removeItemFromList = function(data) {
				console.log("index from selected array list "+$rootScope.selectedItemsArray.indexOf(data));
				$rootScope.selectedItemsArray = $rootScope.selectedItemsArray.filter(function(itemToBeRemoved,indx,arr) {
					if (itemToBeRemoved.index == data.index) {
						data.isSelected=false;
						return false
					} else {
						return true
					}	
				})
			}
			$scope.enableView = function(name) {
				$scope.showSelectedItemImages=false;
				$scope.showSelectedItemInfo=false;
				$scope.showSelectedItemDesc=false;				
				if(name == "info") {
					$scope.showPicBtn=true;
					$scope.showSelectedItemInfo = true;
					console.log("info")
				}
				if (name == "images") {
					$scope.showSelectedItemImages = true;
					console.log("images")
				}
				if (name == "desc") {
					$scope.showPicBtn=true;
					$scope.showSelectedItemDesc = true;
					console.log("desc")
				}
			}
		}
		return link;
	};
	selectedList.templateUrl = "selectedList.html";
	return selectedList;
});

