﻿'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
fbApp.controller('appController', function($scope, $routeParams, DataService) {

	$scope.store = DataService.store;
	
	if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
	
	$scope.addMarker = function(id, score) {
		console.log("hello");
		if(score < 0.75 && score >= 0.50) {
			$("#marker"+id).removeClass("glyphicon-ok-circle");
			$("#marker"+id).removeClass("real");
			$("#marker"+id).addClass("glyphicon-ban-circle");
			$("#marker"+id).addClass("neutral");
		}
		else if(score < 0.50) {
			$("#marker"+id).removeClass("glyphicon-ok-circle");
			$("#marker"+id).removeClass("real");
			$("#marker"+id).addClass("glyphicon-remove-circle");
			$("#marker"+id).addClass("fake");
		}
	}
	
	$scope.showPopover = function(id, score) {
		$scope.popoverIsVisible = true; 
		
		var chart = dc.pieChart("#chartContainer"+id);
		var data          = [ 
		  { 'Perc': score, 'title': 'Real'  }, 
		  { 'Perc': (1-score), 'title': 'Fake'  }
		];
		var ndx           = crossfilter(data);
		var	runDimension  = ndx.dimension(function(d) {
							  return d.title;
							});
		var percGroup = runDimension.group().reduceSum(function(d) { 
							  return d.Perc;
							});
		//var colorScale =  d3.scale.category10();
		var colorScale = d3.scale.ordinal().range(["#d62728", "#2ca02c"]);
			
		chart
			.width(250)
			.height(150)
			.slicesCap(4)
			.innerRadius(10)
			.dimension(runDimension)
			.group(percGroup) // by default, pie charts will use group.key as the label
			.renderLabel(true)
			.colors(colorScale)
			.legend(dc.legend())
			.label(function (d) {
			  return d.key.toUpperCase();
		});

		chart.render();
	};
	
	$scope.hidePopover = function () {
	  $scope.popoverIsVisible = false;
	};
	
	$scope._posts = [
      {
          "username":"The Controversial Files",
		  "postid":1,
		  "score":0.75,
          "message":"Shipment Of Samsung Smartphones Explodes During Transport A semi-trailer truck exploded this morning in Florida, after the Samsung phones it was carrying began exploding, killing 3 people and injuring 11 others. According to witnesses, a series of explosion took place in the truck’s cargo trailer, setting it ablaze. Read more: http://www.thedailytrends.net/2016/09/shipment-of-samsung-smartphones.html",
         "link": "https://www.facebook.com/dcontroversialfiles/posts/1592033104434196",
         "created_time": "2016-09-14T08:54:41+0000",
         "type": "photo",
         "name": "Shipment Of Samsung Smartphones Explodes During Transport",
         "reactions":239,
		 "likes":161,"wow":37,"haha":29,"sad":8,"angry":2,"love":1,
          "shares":108,
         "comments":33, 
          "commentlist":
    [
      {
         "created_time": "2016-09-14T10:48:01+0000",
         "from": {
            "name": "Dennis Dulcero Floralde",
            "id": "1298806933544469"
         },
         "message": "Wla sinabotahe n ng maker ng Samsung ang produkto nito para LNG bumaba ang stock value nito at sales...malamang kalaban din nito n mga smart phone ang may pakana o bansa n may nais n pahinain sa market ang Samsung para lumakas ang localproduct nila.",
         "id": "1592033104434196_1592060034431503"
      },
      {
         "created_time": "2016-09-14T12:58:51+0000",
         "from": {
            "name": "Don Manansala",
            "id": "1537880392896920"
         },
         "message": "I heard yun ibang model ang battery is made in China....hmmm di kaya sabotahe? Just my wild guess knowing how China thinks.",
         "id": "1592033104434196_1592105594426947"
      },
      {
         "created_time": "2016-09-14T09:14:36+0000",
         "from": {
            "name": "Muhammad Faisal",
            "id": "10206190755407509"
         },
         "message": "Mass destruction weapon... USA should invade samsung... :p",
         "id": "1592033104434196_1592040991100074"
      },
      {
         "created_time": "2016-09-14T23:35:34+0000",
         "from": {
            "name": "Inton Inton",
            "id": "1556053597746666"
         },
         "message": "hoax. dipa ginagamit sumabog na? nagpapaniwala na naman yung mga naka data lang jan hahahah :D :D :D",
         "id": "1592033104434196_1592285337742306"
      },
      {
         "created_time": "2016-09-14T09:33:59+0000",
         "from": {
            "name": "Bugz Dunny",
            "id": "1535331773144984"
         },
         "message": "Yan ba tlaga dahilan sa pag sabog ? 4 shipment plang daw , ibig sabihin hndi pa gnagamit, ano nanyari bakit sumabog hahahaha !",
         "id": "1592033104434196_1592043877766452"
      },
      {
         "created_time": "2016-09-16T08:20:18+0000",
         "from": {
            "name": "Adrian Wong",
            "id": "1331991260228240"
         },
         "message": "It's NOT true. See http://www.techarp.com/articles/exploding-samsung-smartphones-florida/",
         "id": "1592033104434196_1592736121030561"
      },
      {
         "created_time": "2016-09-15T06:58:03+0000",
         "from": {
            "name": "Dinky Dumag Pascua",
            "id": "1323075051104930"
         },
         "message": "Baliw papano sasabog d pa nman naksalpak ung batery pinasabog iba ang sumavog sa pubasabog",
         "id": "1592033104434196_1592364014401105"
      },
      {
         "created_time": "2016-09-14T12:35:45+0000",
         "from": {
            "name": "Chico Decano Camaclang",
            "id": "1340048709397220"
         },
         "message": "palpak ang technology ng samsung at isa pa ung i phone madami na insedente ng paputok na mga gadget na to!karamiham sa mga repairshop yang mga gadyet na yan!",
         "id": "1592033104434196_1592098157761024"
      },
      {
         "created_time": "2016-09-14T10:12:45+0000",
         "from": {
            "name": "Christopher Manalo",
            "id": "10211644349842916"
         },
         "message": "Hahaha. Ngaun ko lang nalaman na ganyan pala kalakas ang pagsabog ng shipment ng smartphones. Wow. Kapanipaniwala. Hahaha. Naniniwala ako. Haha",
         "id": "1592033104434196_1592050761099097"
      },
      {
         "created_time": "2016-09-14T08:56:44+0000",
         "from": {
            "name": "Ariel Ruano",
            "id": "1458033974218356"
         },
         "message": "Battery issue?",
         "id": "1592033104434196_1592034931100680"
      },
      {
         "created_time": "2016-09-14T09:10:17+0000",
         "from": {
            "name": "Jhong Matalandang",
            "id": "1891817554367483"
         },
         "message": "Exsads..",
         "id": "1592033104434196_1592039147766925"
      },
      {
         "created_time": "2016-09-15T02:44:54+0000",
         "from": {
            "name": "Royce Mark",
            "id": "10211604753308251"
         },
         "message": "Satire wars. \ud83d\ude02\ud83d\ude03\ud83d\ude01",
         "id": "1592033104434196_1592321541072019"
      },
      {
         "created_time": "2016-09-14T16:09:59+0000",
         "from": {
            "name": "Albert Ballesteros",
            "id": "585276161679932"
         },
         "message": "Sony\u263a",
         "id": "1592033104434196_1592176644419842"
      },
      {
         "created_time": "2016-09-14T08:57:27+0000",
         "from": {
            "name": "Michael Gilberts",
            "id": "1410821978968495"
         },
         "message": "I think this is way too absurd",
         "id": "1592033104434196_1592035017767338"
      },
      {
         "created_time": "2016-09-14T13:47:23+0000",
         "from": {
            "name": "Randell Nambio",
            "id": "1404390966250306"
         },
         "message": "Hoax!!",
         "id": "1592033104434196_1592123824425124"
      },
      {
         "created_time": "2016-09-14T11:22:32+0000",
         "from": {
            "name": "Russelle Tapuro Sunday",
            "id": "1839851999673997"
         },
         "message": "Gadget wars..  lol..",
         "id": "1592033104434196_1592066927764147"
      },
      {
         "created_time": "2016-09-14T10:37:35+0000",
         "from": {
            "name": "Rama Arora",
            "id": "1381148331977081"
         },
         "message": "Vivek Singh pata hai aapko kuch",
         "id": "1592033104434196_1592057797765060"
      },
      {
         "created_time": "2016-09-15T16:14:45+0000",
         "from": {
            "name": "Datu Gundam",
            "id": "1877404559183719"
         },
         "message": "Kagaguhan.",
         "id": "1592033104434196_1592495974387909"
      },
      {
         "created_time": "2016-09-15T08:19:47+0000",
         "from": {
            "name": "Numzkull",
            "id": "1930946077186171"
         },
         "message": "\ud83d\ude02",
         "id": "1592033104434196_1592385931065580"
      },
      {
         "created_time": "2016-09-14T10:59:22+0000",
         "from": {
            "name": "Shivam Khatri",
            "id": "1290209504350280"
         },
         "message": "Or U.S.A can start selling it as a new warfare weapon. :P",
         "id": "1592033104434196_1592063294431177"
      },
      {
         "created_time": "2016-09-14T11:50:45+0000",
         "from": {
            "name": "Michael Jay",
            "id": "1895127590729219"
         },
         "message": "Note 7?",
         "id": "1592033104434196_1592089674428539"
      },
      {
         "created_time": "2016-09-14T09:04:32+0000",
         "from": {
            "name": "Raffy Macutay Pagba Tabuena",
            "id": "10155645588323812"
         },
         "message": "Wag ka munaag stock ng samsung sa bahay mo Jan Michael Lachica Jan Michael Lachica",
         "id": "1592033104434196_1592036001100573"
      },
      {
         "created_time": "2016-09-14T09:08:44+0000",
         "from": {
            "name": "Cathy Granadil - Borlagdan",
            "id": "1483228925051870"
         },
         "message": "Janniel Flores-Granadil Totoo b yn jn dw s florida?",
         "id": "1592033104434196_1592036497767190"
      },
      {
         "created_time": "2016-09-14T09:56:38+0000",
         "from": {
            "name": "Iris Liezel Bi\u00f1egas Pico",
            "id": "1256672281118419"
         },
         "message": "Bii Julian",
         "id": "1592033104434196_1592047997766040"
      },
      {
         "created_time": "2016-09-14T15:11:10+0000",
         "from": {
            "name": "Cay Samson",
            "id": "2276834695874951"
         },
         "message": "Jessy Pearl",
         "id": "1592033104434196_1592153671088806"
      }
   ]

      },
       {
          "username":"CNN",
		  "postid":2,
		  "score":0.5,
          "message":"BREAKING NEWS: Theresa May makes shock announcement that she will seek an early general election held on June 8.         http://www.cnn.com/2017/04/18/europe/uk-snap-election-theresa-may/index.html?sr=fbCNN041817uk-snap-election-theresa-may1014AMStoryLink&linkId=36613274",
         "link": "https://www.facebook.com/cnn/posts/10156468497861509",
         "created_time": "2017-04-18T10:14:01+0000",
         "type": "photo",
         "name": "UK Prime Minister Theresa May to seek early election",
         "reactions":1128,
        "likes":950,"wow":107,"haha":20,"sad":3,"angry":8,"love":40,
          "shares":271,
         "comments":99, 
          "commentlist":
    [
      {
         "created_time": "2017-04-18T10:14:21+0000",
         "from": {
            "name": "Fraser T Hunter",
            "id": "1290972170950277"
         },
         "message": "Wouldn't expect any less from a Tory scumbag.\nWon't let the Scots have a referendum but holds a GE that's a guaranteed win.\n\nIndyref2 just got closer.",
         "id": "10156468497861509_10156468498511509"
      },
      {
         "created_time": "2017-04-18T10:18:35+0000",
         "from": {
            "name": "Arthur Jackson",
            "id": "1863798847213588"
         },
         "message": "The only way is to stop Tories getting a majority because Labour... SNP... and LibDems wouldn't work with her... it's a long shot but a vote for Tory is a vote to turn us into a police state...",
         "id": "10156468497861509_10156468511941509"
      },
      {
         "created_time": "2017-04-18T11:15:56+0000",
         "from": {
            "name": "Mamu Al Conteh",
            "id": "10154988557045700"
         },
         "message": "She should have called for the elections before triggering article 50. She had no electoral mandate to do so. \n\nDavid Cameron had that mandate, but even him knew the electorate should know exactly what they are asking for. We are screwed front and back, from Monday to Sunday. \n\nThey must be punished. Labour for me is a non starter as long as that buffoon in their leader. I am definitely not voting for the cons, so Lib dems could be the only alternative for me.",
         "id": "10156468497861509_10156468744171509"
      },
      {
         "created_time": "2017-04-18T10:50:46+0000",
         "from": {
            "name": "Steve Seca Sexton",
            "id": "1552892598076605"
         },
         "message": "\" here we go again \" \nDemocracy is brilliant we should have elections every year in every country..... Only way to vote out leaders who are doing a cr*p job ?",
         "id": "10156468497861509_10156468660051509"
      },
      {
         "created_time": "2017-04-18T10:30:17+0000",
         "from": {
            "name": "Pietro Timpanelli",
            "id": "1635604616468559"
         },
         "message": "Jesus , I'm about done with all this voting and referendum \ud83d\udc34\ud83d\udca9 , seems like we've completely lost our way as far as running a country is concerned , and our governments seem to consist of spineless ill equipped cry babies that fall at the first hurdle !!! Get a grip and get on with it !!!",
         "id": "10156468497861509_10156468543276509"
      },
      {
         "created_time": "2017-04-18T10:20:24+0000",
         "from": {
            "name": "Leo Medina",
            "id": "1644542972242654"
         },
         "message": "So glad , I don't have to call that loser Obama commander in chief anymore . Who protected pedophiles in Afghanistan and had the worse anti- American foreign policy ever . Finally I have a real commander in chief who loves America . Don't worry we will fix the mess that loser left behind .",
         "id": "10156468497861509_10156468516591509"
      },
      {
         "created_time": "2017-04-18T15:34:45+0000",
         "from": {
            "name": "Bryan Curran",
            "id": "10211505781854490"
         },
         "message": "Proper border and deportation policies are a bedrock of successful societies\n\nReturn of full border control from the European Union\nAn end to mass immigration and a return to natural controlled immigration\nZero tolerance approach towards demands to alter national life, culture and traditions to accommodate minority held beliefs and cultures.\nEconomic migrants must be capable of supporting themselves when looking for work. If migrants become incapable of supporting themselves they should be offered short term social assistance depending on how long they have worked (if they have worked). Once this ends they should be deported.\nOnly citizens should be able to access full social assistance\nImmediate deportation of all illegal and criminal migrants\nMass immigration creates greater competition for scarce employment, puts pressure on social systems and can create cultural division and conflict.\n\nIdentity Ireland aims to return to a system of natural controlled immigration which is practiced by most of the countries of the world as this is the best policy for our society.",
         "id": "10156468497861509_10156470479891509"
      },
      {
         "created_time": "2017-04-18T10:37:34+0000",
         "from": {
            "name": "Michael Wieland",
            "id": "10212751367280342"
         },
         "message": "That's when you realize, that you can not succeed with all the promises you made about Brexit. She should have done that before announcing the Brexit. BTW, it is very clever to do so due to the Scotish referendum and the low approval rating of Corbyn. But the UK looses valuable time for transforming the country.",
         "id": "10156468497861509_10156468621036509"
      },
      {
         "created_time": "2017-04-18T14:20:02+0000",
         "from": {
            "name": "Jacquelyn Booker",
            "id": "1312117028826199"
         },
         "message": "This after she said that would never call a snap general election.  I would never do that she said.  Yet another lie then to add to the multitude of the brexiters.  She also blames everyone else for having to go to these lengths.  What she actually says if you listen carefully is that she wants no more democracy.  People speaking their minds.  No contention against her decisions. She is playing hard the brexit card, but if she has her way it means she will have total control over all other government issues.  So beware of this dictator in the making",
         "id": "10156468497861509_10156469476786509"
      },
      {
         "created_time": "2017-04-18T10:42:45+0000",
         "from": {
            "name": "Carl Lam",
            "id": "355305584867142"
         },
         "message": "Let her people to give her the mandate in seeking for absolute supremacy and domination ! That is democracy ! Another gamble on top of the one evoked by her predecessor !",
         "id": "10156468497861509_10156468636076509"
      },
      {
         "created_time": "2017-04-18T11:40:04+0000",
         "from": {
            "name": "Mert Ahmet",
            "id": "10154379485291825"
         },
         "message": "So she calls for election after triggering article 50, wouldn't it been fair to allow political parties to go to election first and then let their voters decide whether they still want brexit given how close was the referendum?",
         "id": "10156468497861509_10156468825146509"
      },
      {
         "created_time": "2017-04-18T10:52:38+0000",
         "from": {
            "name": "Russell Wyllie",
            "id": "10154746388588040"
         },
         "message": "....it was speculated for a few weeks... not a 'SHOCK' as CNN want you to believe.... US politics are not the same as British politics, they hold snap UK elections to put the public's mind at rest, a snap US election really would be a shock.",
         "id": "10156468497861509_10156468666386509"
      },
      {
         "created_time": "2017-04-18T13:23:11+0000",
         "from": {
            "name": "Deacon Jeff Ogbuogu",
            "id": "1443644115686722"
         },
         "message": "Professionals listen, this is the time to answer Tory party for not appreciating us.Vote them out with huge majority, umbrrella companys only favours umbrella company not nurses etc.Is like nurses has been enslaved more. Share the news.",
         "id": "10156468497861509_10156469229571509"
      },
      {
         "created_time": "2017-04-18T12:16:27+0000",
         "from": {
            "name": "Wahid Khan",
            "id": "10211109024419828"
         },
         "message": "It's a true sign of a WEAK leader who can't get her MP's to follow her. Why does she assume that having a larger majority will mean that more Tory MP's will make her job easier? It's just as likely to mean an even greater number of MP's who feel they can ignore the leadership because their jobs are not on the line!",
         "id": "10156468497861509_10156468954701509"
      },
      {
         "created_time": "2017-04-18T10:22:29+0000",
         "from": {
            "name": "Prince Bunyore",
            "id": "1261713003883058"
         },
         "message": "Why not just change the regime with psychopathic \"Islamist rebels\" who are really mercenaries working for foreign governments who like to kill children in suicide bombings?",
         "id": "10156468497861509_10156468522876509"
      },
      {
         "created_time": "2017-04-18T10:16:09+0000",
         "from": {
            "name": "Chris Hickling",
            "id": "10158484936485133"
         },
         "message": "I see she learned from David Cameron how to light the fuse and do a runner.",
         "id": "10156468497861509_10156468503636509"
      },
      {
         "created_time": "2017-04-18T10:15:02+0000",
         "from": {
            "name": "Catarina Ivone",
            "id": "1311056928931728"
         },
         "message": "AFTER what she has done? how a coward she is! this is unbelievably hypocrite!",
         "id": "10156468497861509_10156468499926509"
      },
      {
         "created_time": "2017-04-18T10:49:07+0000",
         "from": {
            "name": "Leigh Jorgo",
            "id": "162690074256040"
         },
         "message": "Mother Teresa is more than 20 points ahead of the Labor Party there. \nCorbyn is about as dull and daft as Bill Shorten, so no surprise and Id think she will have a much bigger majority after the election to make Britain Great again.",
         "id": "10156468497861509_10156468655301509"
      },
      {
         "created_time": "2017-04-18T10:20:18+0000",
         "from": {
            "name": "Ken Zman",
            "id": "156113081584168"
         },
         "message": "I guess Brexit implementation is a pain in the butt.",
         "id": "10156468497861509_10156468516351509"
      },
      {
         "created_time": "2017-04-18T10:40:21+0000",
         "from": {
            "name": "Matt Hoffman",
            "id": "10155038352270168"
         },
         "message": "Once Jonathan Pie has done a broadcast I'll understand what this actually means",
         "id": "10156468497861509_10156468628441509"
      },
      {
         "created_time": "2017-04-18T14:27:47+0000",
         "from": {
            "name": "Jose Contreras",
            "id": "1393444420703492"
         },
         "message": "I hope the citizens of the UK are not getting caught asleep at the wheel.",
         "id": "10156468497861509_10156469504676509"
      },
      {
         "created_time": "2017-04-18T10:21:32+0000",
         "from": {
            "name": "Michael DeCesare",
            "id": "1302330976552466"
         },
         "message": "Good. The sooner the better. This way England gets to leave the EU that much faster.",
         "id": "10156468497861509_10156468520111509"
      },
      {
         "created_time": "2017-04-18T10:51:31+0000",
         "from": {
            "name": "Lou Gray",
            "id": "10203416667733660"
         },
         "message": "The conservatives fold again, they always fold. Pathetic.",
         "id": "10156468497861509_10156468663181509"
      },
      {
         "created_time": "2017-04-18T18:16:17+0000",
         "from": {
            "name": "Eduardo Rivera",
            "id": "1527260177285097"
         },
         "message": "Wish we could do that here in America.   \ud83d\ude10.  Seems like the new American flag will soon be a combination of \ud83c\udde8\ud83c\uddf3\ud83c\uddf7\ud83c\uddfa.",
         "id": "10156468497861509_10156473811031509"
      },
      {
         "created_time": "2017-04-18T16:54:46+0000",
         "from": {
            "name": "Pete March",
            "id": "1640961289249115"
         },
         "message": "If she loses, can we have her in place of the orange maniac?",
         "id": "10156468497861509_10156472825621509"
      }
        
   ]

},
       {
          "username":"FESLER BUILT",
		  "postid":3,
		  "score":0.25,
          "message":"Even with this two clowns there she only could get 10,000 people and Trump did over 11,000 all by himself and it cost him nothing. Hillary paid over 62 million for her largest event yet. DO YOU PEOPLE have it right on who you want to win? Someone who takes your money and throws it away or someone that will fight for you and stop this nonsense?",
         "link": "https://www.facebook.com/FeslerBuilt/posts/10154629080574030",
         "created_time": "2016-11-07T07:13:01+0000",
         "type": "photo",
         "name": "Clinton Campaign Paid Beyonce and Jay Z $62 Million For Cleveland Concert to Secure Black Votes",
         "reactions":204,
        "likes":138,"wow":5,"haha":23,"sad":2,"angry":35,"love":1,
          "shares":230,
         "comments":39, 
          "commentlist":
    [
      {
         "created_time": "2016-11-07T22:51:17+0000",
         "from": {
            "name": "Matthew Hamann",
            "id": "1226996434086037"
         },
         "message": "Hillary Clinton is the motherfreakin antichrist plain and simple. Trump has a dark side as well but he didn't allow Americans to die. That in itself is grounds for execution in my opinion.",
         "id": "10154629080574030_10154629121389030"
      },
      {
         "created_time": "2016-11-07T22:43:18+0000",
         "from": {
            "name": "Ruben Segura",
            "id": "10158591888035302"
         },
         "message": "At least she didn't refer to them as \"where's my African-American black man?\" Like Trumpetas. Or how about his discriminating law suit against black residents occupying his apartments back east?",
         "id": "10154629080574030_10154629108049030"
      },
      {
         "created_time": "2016-11-08T02:39:02+0000",
         "from": {
            "name": "Jackie Sample",
            "id": "10209028394048239"
         },
         "message": "It's disgusting how many people allow the media to brainwash them to believe what they want them to. Think for yourself once and research the claim and the source of it before you sound like a complete idiot supporting it. This isn't even a true article.",
         "id": "10154629080574030_10154629602499030"
      },
      {
         "created_time": "2016-11-07T23:08:47+0000",
         "from": {
            "name": "John Elliott",
            "id": "10212827258904041"
         },
         "message": "It is the only chance in many of our lifetimes to repair the damage that has already been done. It's past time to Drain the Swamp!",
         "id": "10154629080574030_10154629162019030"
      },
      {
         "created_time": "2016-11-07T22:53:19+0000",
         "from": {
            "name": "Marie Haberman-Wilkens",
            "id": "10211117139037455"
         },
         "message": "I'm proud of the fact that my vote wasn't purchased or bribed.",
         "id": "10154629080574030_10154629125054030"
      },
      {
         "created_time": "2016-11-08T02:50:08+0000",
         "from": {
            "name": "Mike Gannon",
            "id": "10213057082407036"
         },
         "message": "Funny, Trump still draws a bigger crowd! Just goes to show that nobody can help Crooked Hillary or will for free!!!",
         "id": "10154629080574030_10154629619139030"
      },
      {
         "created_time": "2016-11-08T00:16:05+0000",
         "from": {
            "name": "Richard Vial",
            "id": "10208461602554471"
         },
         "message": "Please....source, empire herald....they say \"sources\" and no names. They performed for free.....show me some proof other than....sources say.",
         "id": "10154629080574030_10154629335944030"
      },
      {
         "created_time": "2016-11-08T01:54:58+0000",
         "from": {
            "name": "Russ M",
            "id": "10155058046695943"
         },
         "message": "Gotta spend that cash so you don't have to give it back!",
         "id": "10154629080574030_10154629531534030"
      },
      {
         "created_time": "2016-11-08T02:33:12+0000",
         "from": {
            "name": "Lesle Ross Dothage",
            "id": "1568751669810863"
         },
         "message": "The idiots need to all be on the same ship when it sinks!!\ud83d\udef3",
         "id": "10154629080574030_10154629594374030"
      },
      {
         "created_time": "2016-11-08T04:11:33+0000",
         "from": {
            "name": "Ron Spicer",
            "id": "1706242876060458"
         },
         "message": "Personally JZ is a no talent bum who rides on the purse strings of Beyonce",
         "id": "10154629080574030_10154629746859030"
      },
      {
         "created_time": "2016-11-08T13:59:54+0000",
         "from": {
            "name": "Marvin Junior",
            "id": "424744031219114"
         },
         "message": "Meanwhile pretty much every musician refuses to let Trump the chump even play a recording of their music at his rallies!",
         "id": "10154629080574030_10154630714309030"
      },
      {
         "created_time": "2016-11-08T02:12:36+0000",
         "from": {
            "name": "Jared Patterson",
            "id": "1442466525799187"
         },
         "message": "When she doesn't hire entertainers, Trump pulls in 10X the crowd! They're telling us she's leading? I don't think so!",
         "id": "10154629080574030_10154629562549030"
      },
      {
         "created_time": "2016-11-08T02:00:31+0000",
         "from": {
            "name": "Walt Carlen",
            "id": "10211418222425507"
         },
         "message": "How does it feel to be a misinformed which makes you ignorant!",
         "id": "10154629080574030_10154629541319030"
      },
      {
         "created_time": "2016-11-08T00:31:05+0000",
         "from": {
            "name": "Jeff Slocum",
            "id": "10210584869391155"
         },
         "message": "Oh my god. 62 million to throw away. I fucking hate her so much.",
         "id": "10154629080574030_10154629380164030"
      },
      {
         "created_time": "2016-11-07T23:17:53+0000",
         "from": {
            "name": "Kevin Giguere",
            "id": "10210617799695209"
         },
         "message": "Killary is a corrupt lying POS that belongs in prison. Killary has to pay people to support her. Killary is a corrupt lying POS",
         "id": "10154629080574030_10154629188354030"
      },
      {
         "created_time": "2016-11-08T06:33:41+0000",
         "from": {
            "name": "Jim Johnson",
            "id": "1602539023109343"
         },
         "message": "I would not give one red cent to go see the three of them losers all !!!!!",
         "id": "10154629080574030_10154629926959030"
      },
      {
         "created_time": "2016-11-08T02:10:05+0000",
         "from": {
            "name": "Patrick Anthony Wente",
            "id": "236008006804396"
         },
         "message": "What a disgrace; they are paid by blood money and bribes!",
         "id": "10154629080574030_10154629559189030"
      },
      {
         "created_time": "2016-11-08T02:24:16+0000",
         "from": {
            "name": "Walter Friedauer",
            "id": "10211008584644569"
         },
         "message": "GIVE THE SWAMP A ENEMA",
         "id": "10154629080574030_10154629579934030"
      },
      {
         "created_time": "2016-11-08T01:20:31+0000",
         "from": {
            "name": "Brian D Surber",
            "id": "1484840308219235"
         },
         "message": "No surprise there!\nShoulda hired some REAL talent!!!!!!",
         "id": "10154629080574030_10154629470504030"
      },
      {
         "created_time": "2016-11-07T22:47:56+0000",
         "from": {
            "name": "Robert Chavez",
            "id": "1512282162146133"
         },
         "message": "For 62 million I would sing for a piece of crap too.",
         "id": "10154629080574030_10154629114724030"
      },
      {
         "created_time": "2016-11-07T23:54:55+0000",
         "from": {
            "name": "Robin Rodrigues Wright",
            "id": "10209001191246520"
         },
         "message": "Antichrist.   Spot on.",
         "id": "10154629080574030_10154629276009030"
      },
      {
         "created_time": "2016-11-08T00:11:33+0000",
         "from": {
            "name": "Karsten Flagstad",
            "id": "1279892585380339"
         },
         "message": "She needs a band to draw a small crowd.",
         "id": "10154629080574030_10154629326689030"
      },
      {
         "created_time": "2016-11-07T23:05:33+0000",
         "from": {
            "name": "Craig Webster",
            "id": "10209088637835143"
         },
         "message": "Sources are about as credible as the national enquirer...",
         "id": "10154629080574030_10154629152064030"
      },
      {
         "created_time": "2016-11-08T12:01:49+0000",
         "from": {
            "name": "Jerry Look",
            "id": "1494769530595844"
         },
         "message": "Stolen from where,,? Lmao!",
         "id": "10154629080574030_10154630511254030"
      },
      {
         "created_time": "2016-11-07T22:42:39+0000",
         "from": {
            "name": "Vince Robinson",
            "id": "10208676918420770"
         },
         "message": "For real!?? 62 million",
         "id": "10154629080574030_10154629107314030"
      }
   ]

},      {
          "username":"Thinking Humanity",
		  "postid":4,
		  "score":0.85,
          "message":"Amazing video! Orchestral musicians play in the middle of the sea and bring whales to surface!",
         "link": "https://www.facebook.com/ThinkingHumanity/videos/1085420981518790/",
         "created_time": "2016-04-13T05:50:41+0000",
         "type": "video",
         "name": "Orchestral musicians play in the middle of the sea and bring whales to surface!",
         "reactions":129,
        "likes":105000,"wow":7087,"haha":154,"sad":36,"angry":10,"love":15000,
          "shares":543414,
         "comments":9900, 
          "commentlist":
    [
      {
         "created_time": "2016-04-16T07:25:54+0000",
         "from": {
            "name": "Kenny Barnes",
            "id": "1492962084069946"
         },
         "message": "I did something similar and played a Kanye West album on my boat CD player. All the fish leapt out of the water, and crabs and lobsters scuttled out of it as fast as they could....",
         "id": "1085420981518790_1089005897826965"
      },
      {
         "created_time": "2016-04-15T14:33:49+0000",
         "from": {
            "name": "Carol Wilkins",
            "id": "10208692816780085"
         },
         "message": "I saw a longer video of this & after reading the comments I think it doesn't matter how or why it was made. It was posted to share it with others. These ancient, seafaring whales are very intelligent & I love it that we are attempting to communicate with them instead of hunting them because of ignorance.",
         "id": "1085420981518790_1088603061200582"
      },
      {
         "created_time": "2016-04-22T02:15:00+0000",
         "from": {
            "name": "Sara Lee",
            "id": "1880079072270462"
         },
         "message": "This video may be a theatrical creation but I want you to know anyone can have this sort of experience if you are in the right time and place and willing to communicate.  I have inadvertently sung my morning meditation only to have a humpback whale come to the surface alongside 4 feet away and rolled over on its side to get a good look at me.  It hung out for 10 minutes or so.  No microphones no recordings.  I take only the memory and wonder if the whale swims the deep wide ocean remembering too.",
         "id": "1085420981518790_1724783074473954"
      },
      {
         "created_time": "2016-04-16T17:38:07+0000",
         "from": {
            "name": "Karen Piche",
            "id": "10154295766141750"
         },
         "message": "Some people don't see past the purpose of the video! Whales are elegant,  breathtaking, with great skill and momentum. They are the curious and so socail and kind if left happy in thier own habitat.",
         "id": "1085420981518790_1089283267799228"
      },
      {
         "created_time": "2016-04-13T22:57:54+0000",
         "from": {
            "name": "Aaron George",
            "id": "10158544948835440"
         },
         "message": "Video edit (happy now?)  if I ever saw one, looks like it's from a commercial",
         "id": "1085420981518790_1087632751297613"
      },
      {
         "created_time": "2016-04-18T18:43:25+0000",
         "from": {
            "name": "Kristi Kelty",
            "id": "1533794129988414"
         },
         "message": "I play my orchestral themes for the fish and other animals in my garden. Immediately they come to where I am and just listen. They seem to love it. Also-- a few years ago I sent a CD of my orchestral tunes to a local animal shelter and the worker notified me that \"all the dogs stopped barking and listened!\"  http://www.musicforthediscriminatingpetorchestralthemestocalmyournerves.com/background.php      https://kristikelty.hearnow.com",
         "id": "1085420981518790_1090610704333151"
      },
      {
         "created_time": "2016-04-13T23:36:04+0000",
         "from": {
            "name": "Sada Sivan",
            "id": "1465175500181174"
         },
         "message": "Probably thought the opposite whale is calling for mating and saw these guys and went disappointed. .\"oh you guys...ahhhh\"",
         "id": "1085420981518790_1087647731296115"
      },
      {
         "created_time": "2016-04-21T21:41:40+0000",
         "from": {
            "name": "Marie Basiago",
            "id": "10212927772614892"
         },
         "message": "Once when I saw a video of men releasing a whale from being tangled up in fishing line, and the whale came around and leaped in the air before swimming away, as if to say \"thank you!\", I realized what intelligent, amazing creatures they are!  I think of dolphins in much the same way!  \ud83d\ude07",
         "id": "1085420981518790_1715407805386873"
      },
      {
         "created_time": "2016-04-14T02:16:52+0000",
         "from": {
            "name": "Art Sarkis",
            "id": "10210495834486994"
         },
         "message": "Who cares  if it is fake, or photo shop, or blah,blah , blah,, we like it, if you dont like it, dont sit there and watch it over and over and over and over and then share your unwanted negative opinion  with all of us nice and positive, loving,tree hugging folks,, So,,,please spare us from your negative, opinionated fb post ! Thanks !",
         "id": "1085420981518790_1087711887956366"
      },
      {
         "created_time": "2016-04-16T21:28:51+0000",
         "from": {
            "name": "Jan Havens",
            "id": "10209775993576414"
         },
         "message": "As you say, maybe real, maybe not, but there is nothing Photoshopped about that whale breach, and their her water curiosity.\nThink what you like, I enjoyed it.",
         "id": "1085420981518790_1089391397788415"
      },
      {
         "created_time": "2016-04-20T01:21:53+0000",
         "from": {
            "name": "Jim Anderson",
            "id": "10211585433087850"
         },
         "message": "The violinist sounded very much like my playing, when I was a music major. The only differences were that I was trying to play in tune, and there were no whales in Topeka, Kansas.",
         "id": "1085420981518790_1743352032575196"
      },
      {
         "created_time": "2016-04-17T16:52:16+0000",
         "from": {
            "name": "Shellee Jenkins",
            "id": "10210703378832937"
         },
         "message": "It's beautiful and amazing; \"real\" or not. The point is the beauty and possibility of it; the possibility that we could communicate with something so amazing. Sure, it's an ad for cellular service but the fact is, someone imagined this was possible and I'm sure it is. To speak their language; appreciate the glorious, intelligent, sentient beings they are...wow\u2764\ufe0f",
         "id": "1085420981518790_1089876681073220"
      },
      {
         "created_time": "2016-04-23T00:56:17+0000",
         "from": {
            "name": "Brian Rich O'connor",
            "id": "10155197751409491"
         },
         "message": "This was scripted. They paid the whale to do this. Its pretty obvious. The whale is a bad actor anyways.",
         "id": "1085420981518790_1744474882462911"
      },
      {
         "created_time": "2016-04-16T14:54:00+0000",
         "from": {
            "name": "Sally Hlousek",
            "id": "1680033322013738"
         },
         "message": "To all you negative naysayers! This is not meant to be real or actual. Wouldn't it be awesome if it was? It's called imagination, inspiration, creativity and using and expanding your mind. Try it!",
         "id": "1085420981518790_1089183917809163"
      },
      {
         "created_time": "2016-04-15T16:10:47+0000",
         "from": {
            "name": "Rolando Gonzalez Medrano",
            "id": "1780407545306394"
         },
         "message": "I'm just here waiting  to see the experts come out of their mothers basement to tells us all  this is fake. \n\nI don't know what I do without them.",
         "id": "1085420981518790_1088655551195333"
      },
      {
         "created_time": "2016-04-17T20:14:30+0000",
         "from": {
            "name": "Marta Molina",
            "id": "10209070743147592"
         },
         "message": "Splashy splashy! Time to play, beautiful playful creatures accepted the tribute of their own sounds produced for them by a bunch of loving talented beautiful souls/musicians \ud83e\udd17",
         "id": "1085420981518790_1089997347727820"
      },
      {
         "created_time": "2016-05-14T07:53:17+0000",
         "from": {
            "name": "Galiena Clarke",
            "id": "10210615763843011"
         },
         "message": "Wow!! It reminded me of being a child & hearing the killer whales grace by near the closest beach, on S. Pender Isl) I could hear them from my Dad's porch & run down & be lucky enough to see a pod travel past \u2764\ufe0f I once actually found a Whale tooth & learned how to blow into and make a whale call. I would take it w/ us when my dad & I would go fishing :) thanks Bernice Raabis for helping me to remember this \ud83d\ude18 Whales are very Special ~",
         "id": "1085420981518790_815298241934029"
      },
      {
         "created_time": "2016-04-23T05:41:34+0000",
         "from": {
            "name": "Janette Kavanaugh",
            "id": "1410850962270962"
         },
         "message": "If you want to hear interesting music with whale songs listen to the work by Hovaness And God Created Great Whales.  Beautiful!!!",
         "id": "1085420981518790_1725231391095789"
      },
      {
         "created_time": "2016-04-16T15:03:20+0000",
         "from": {
            "name": "Lynne Marie Corgan Galassi",
            "id": "10211085658289257"
         },
         "message": "\u003C3 I see it as REAL, as that is MY DESIRE!! It is REAL....to ME. Nothing else really matters. Such BEAUTY in motion. ALL pure loving energy...being born of the Universes and playing with the Universes, for the enjoyment of us ALL. \u003C3 \u003C3 \u003C3",
         "id": "1085420981518790_1089189417808613"
      },
      {
         "created_time": "2016-04-18T10:38:17+0000",
         "from": {
            "name": "Roy Vonderau",
            "id": "1904227619814641"
         },
         "message": "That was unbelievable so cool if we don't do something about Fukushima in the near future the whales not be around",
         "id": "1085420981518790_1090342611026627"
      },
      {
         "created_time": "2016-04-23T20:18:08+0000",
         "from": {
            "name": "Grant Davies",
            "id": "2286717918219292"
         },
         "message": "Amazing, chilling, beautiful, I have seen this before, real or not we need to protect our oceans and planet. We learn so much everyday but we still destroy and pollute the Earth and kill these animals for nothing apart from greed.",
         "id": "1085420981518790_1716116958649291"
      },
      {
         "created_time": "2016-04-20T20:05:20+0000",
         "from": {
            "name": "Louise Miller",
            "id": "1802118446782790"
         },
         "message": "Awesome! More than 20 years had a friend who who built the then largest liveaboard catamaran and brought it to Cabo. During the whale watching season he would take it out and those whales loved the sound of those engines and \" show off!!!\" The dolphins would come in massive schools and it was \ud83d\ude46 awesome!!!",
         "id": "1085420981518790_1724252534527008"
      },
      {
         "created_time": "2016-04-20T13:56:26+0000",
         "from": {
            "name": "Brenda Steinberg",
            "id": "1459802504082226"
         },
         "message": "Um there is something wrong with this video.  If an orchestra instrument gets wet it gets ruined.  People aren't going to risk a 50 k violin  in the middle of the ocean. Something isn't right here.",
         "id": "1085420981518790_1714899182104402"
      },
      {
         "created_time": "2016-04-19T15:10:51+0000",
         "from": {
            "name": "William Davis",
            "id": "10210965547488228"
         },
         "message": "This is a promotional film produced for Optus, a large Australian telecommunications conglomerate. I doubt the musicians ever saw whales, and they were probably in a studio tank, not the ocean",
         "id": "1085420981518790_1743176662592733"
      },
      {
         "created_time": "2016-04-16T15:45:50+0000",
         "from": {
            "name": "Andrew Panasuk Jr.",
            "id": "424354751269013"
         },
         "message": "What a fascinating world we live in. I hope one day we can translate but the whales are actually saying. But probably they are just expressing emotions joy pain parenthood Etc.",
         "id": "1085420981518790_1089216224472599"
      }
   ]

      },
       {
          "username":"The Huffington Post",
		  "postid":5,
		  "score":0.60,
          "message":"“Really and truly, when people ask what me eat and drink to live so long, I say to them that I eat everything, except pork and chicken,” she said, “and I don’t drink rum and dem tings.”",
         "link": "https://www.facebook.com/HuffingtonPost/posts/10154902432361130",
         "created_time": "2017-04-18T22:00:55+0000",
         "type": "link",
         "name": "The World's Oldest Person Is A 117-Year-Old Jamaican Woman Called 'Aunt V'",
         "reactions":1555,
        "likes":1279,"wow":45,"haha":6,"sad":0,"angry":0,"love":228,
          "shares":556,
         "comments":99, 
          "commentlist":
    [
      {
         "created_time": "2017-04-18T18:47:04+0000",
         "from": {
            "name": "Ceedub James",
            "id": "1806900826303806"
         },
         "message": "Oh, Auntie V, may God continue to Bless and keep you in good health. But, Ma'am, I fear, I may not live as long as you, as I have to admit, I do hit de rum once in a while.....",
         "id": "1515130165177451_1515281565162311"
      },
      {
         "created_time": "2017-04-18T21:01:46+0000",
         "from": {
            "name": "Robert Scarlett",
            "id": "10210794298686237"
         },
         "message": "She was more than likely born up to 4 years prior. \nIt was customary in Jamaica for the baby to be registered a few years after birth as was the case with my own mother who was registered in 1932, however was born in 1928.",
         "id": "1515130165177451_1515400598483741"
      },
      {
         "created_time": "2017-04-18T22:06:43+0000",
         "from": {
            "name": "Rob Samarati",
            "id": "10209473622173316"
         },
         "message": "If Violet can hold on a little longer  she could be the only person in history that was alive during WW1 WW2 and WW3",
         "id": "1515130165177451_1515444975145970"
      },
      {
         "created_time": "2017-04-18T19:36:17+0000",
         "from": {
            "name": "Rw Neal",
            "id": "1904228666528717"
         },
         "message": "Can you imagine being 97 and still have your mother alive!",
         "id": "1515130165177451_1515322341824900"
      },
      {
         "created_time": "2017-04-18T19:04:09+0000",
         "from": {
            "name": "Sean Braisted",
            "id": "10105029402464043"
         },
         "message": "Kind of surprised the article doesn't mention the previous title holder. I know the video does, but still, the last person to have been born in the 1800s is pretty signficant.",
         "id": "1515130165177451_1515298471827287"
      },
      {
         "created_time": "2017-04-18T19:11:21+0000",
         "from": {
            "name": "Jeff Grainer",
            "id": "1126508314120749"
         },
         "message": "Ms. Brown remains the oldest living person born in the 19th century, as the 20th century didn't begin until Jan. 1, 1901.",
         "id": "1515130165177451_1515303455160122"
      },
      {
         "created_time": "2017-04-18T22:11:15+0000",
         "from": {
            "name": "Brandon Crisler",
            "id": "10209355204856766"
         },
         "message": "No rum or pork!? I'll go ahead and die in my fifties, then.",
         "id": "1515130165177451_1515447498479051"
      },
      {
         "created_time": "2017-04-18T23:27:05+0000",
         "from": {
            "name": "Lisa Walker",
            "id": "10213233932981724"
         },
         "message": "It's a good thing I drink rum and dem tings. lol I can't afford to live to 117 years old. God bless you Aunt V.",
         "id": "1515130165177451_1515498781807256"
      },
      {
         "created_time": "2017-04-18T19:08:36+0000",
         "from": {
            "name": "Victoria Cook",
            "id": "1841941832498005"
         },
         "message": "God bless, that's all I can say. what a fruitful and storied life she must have led.",
         "id": "1515130165177451_1515301678493633"
      },
      {
         "created_time": "2017-04-18T19:56:36+0000",
         "from": {
            "name": "Sonora Swearing",
            "id": "10211953561541746"
         },
         "message": "God's blessings to you Aunt V! May you enjoy many more beautiful years!",
         "id": "1515130165177451_1515338295156638"
      },
      {
         "created_time": "2017-04-18T22:16:27+0000",
         "from": {
            "name": "Nana Osei Boama Bediatuo",
            "id": "10206479666149083"
         },
         "message": "Is not true, she is not the oldest in the world... But we 125 years in Ghana..",
         "id": "1515130165177451_1515450588478742"
      },
      {
         "created_time": "2017-04-18T22:07:54+0000",
         "from": {
            "name": "Karen Smaglick",
            "id": "1712852292345857"
         },
         "message": "There's no hope for me, I love ribs and Bacardi!",
         "id": "1515130165177451_1515445655145902"
      },
      {
         "created_time": "2017-04-18T18:50:36+0000",
         "from": {
            "name": "Debbie Duran",
            "id": "10212945082561308"
         },
         "message": "WE UP DEY INNA EVERYTHING....BIG UP AUNTIE V",
         "id": "1515130165177451_1515284481828686"
      },
      {
         "created_time": "2017-04-18T22:02:02+0000",
         "from": {
            "name": "Beth Lyle-Durham",
            "id": "10158546353325427"
         },
         "message": "No rum? What's the point of living so long then?",
         "id": "1515130165177451_1515441701812964"
      },
      {
         "created_time": "2017-04-18T19:04:14+0000",
         "from": {
            "name": "Brenda Peterson",
            "id": "10211742992637793"
         },
         "message": "She is darling!  God Bless her and keep her!",
         "id": "1515130165177451_1515298535160614"
      },
      {
         "created_time": "2017-04-18T22:18:31+0000",
         "from": {
            "name": "Ryan Kargel",
            "id": "10209117065425729"
         },
         "message": "The rule is to get insanely lucky with your genes.",
         "id": "1515130165177451_1515451901811944"
      },
      {
         "created_time": "2017-04-18T20:55:08+0000",
         "from": {
            "name": "Heather Smith",
            "id": "653992974799067"
         },
         "message": "Nice !",
         "id": "1515130165177451_1515395731817561"
      },
      {
         "created_time": "2017-04-18T22:09:24+0000",
         "from": {
            "name": "Mark Laidford",
            "id": "10158811222610122"
         },
         "message": "No Rum and Dem tings.",
         "id": "1515130165177451_1515446468479154"
      },
      {
         "created_time": "2017-04-18T22:04:44+0000",
         "from": {
            "name": "Terrie Money",
            "id": "10211315536837659"
         },
         "message": "Mow the media says she's the oldest  living human?",
         "id": "1515130165177451_1515443385146129"
      }
   ]

}];
	
	
	
	
});
