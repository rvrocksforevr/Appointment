$(document).ready(function(e) {
	
	
	$(".choice").click(function(e) {
        alert($(this).val());
    });
	
	/*
var counter=0;
parseInt(counter);


	$("body").on("click",".add_btn", function(){
		counter++;
		
		$(".add_btn").text("(-)");
		$(".add_btn").addClass("remove_it");
		$(".remove_it").removeClass("add_btn");
		
		var add_val ="<div class='time_chart'><input type='text' class='schedule_time' id='schedule."+parseInt(counter)+".time' /><a class='add_btn' href='javascript:void(0);'>(+)</a></div>";
		
  	var data = $(this).parents(".add_data").html();
    $(".add_data").append(add_val);
    
    
    
  });
  
  
  $("body").on("click",".remove_it", function(){
		
  	$(this).parent(".time_chart").html("");
    
    
    
    
  });
*/

var images_spec = '['+
'{"name":"ART","image_url":"images/icon/neurology.png"},'+
'{"name":"Interventional Cardiology","image_url":"images/icon/cardiology.png"},'+
'{"name":"Medicine","image_url":"images/icon/medicine.png"}]';

var obj = JSON.parse(images_spec);


	 


//var obj = JSON.parse(images_spec);

select_item = function()
{
	var value = $(".specialities_drop").val();
	var values = String(value);
	
	
	$.each(obj,function(key,value)
	{
		var image_url = obj[key].image_url;
		var depart_cat = obj[key].name;
		var dept = String(depart_cat)
		if(values == dept)
		{
					
			$(".specility_name").text(values);
			$(".dept_cat figure img").attr("src",image_url);
			$(".dept_cat figure img").addClass("dept_image");
			$(".dept_cat figure img").attr("alt",values);
		}
		else
		{
			
		}
	});
	
	
}


var images_doc_new = '['+
'{"name":"Anjani Kumar","image_url":"images/icon/neurology.png"},'+
'{"name":"Deepak Khattar","image_url":"images/icon/cardiology.png"},'+
'{"name":"Jyoti Malik","image_url":"images/icon/medicine.png"}]';

var obj_new = JSON.parse(images_doc_new);


doc_select = function()
{
	var value = $(".doctor_drop").val();
	var values = String(value);
	
	alert(values);
	$.each(obj_new,function(key,value)
	{
		var image_url = obj_new[key].image_url;
		var depart_cat = obj_new[key].name;
		var dept = String(depart_cat)
		if(values == dept)
		{
					
			$(".doctor_name").text(values);
			$(".doc_image figure img").attr("src",image_url);
			$(".doc_image figure img").addClass("dept_image");
			$(".doc_image figure img").attr("alt",values);
		}
		else
		{
			
		}
	});
	
}




var appoint = [
				{
					appoint_date:"8/10/2016",
					appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
				{
					appoint_date:"10/10/2016",
					appoint_time:[
						{ time_start_event:"13:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
				{
					appoint_date:"12/10/2016",
					appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
				{
					appoint_date:"16/10/2016",
					appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
				{
					appoint_date:"18/10/2016",
					appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
				{
					appoint_date:"19/10/2016",
					appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]
				},
					];
					
					

//var appointment = JSON.parse(appoint_time);


var dateToday = new Date();
var day = dateToday.getDate();
var month = dateToday.getMonth();
var year = dateToday.getFullYear();

var new_date = String(day+"/"+(month+1)+"/"+year);
//var change_date = formatDate('dd/MM/yy', dateToday);
//var change_date = dateToday.format("YYYY-MM-DD");

$( ".calander_div #datepicker" ).datepicker({
	dateFormat: 'd/m/yy',
	onSelect: function (date) {
		String(date);
            if(date != "" || date !=null)
			{
				$(".date_choose").show();
				$(".appoint_date").html(date);
				$( ".calander_div #datepicker" ).hide();
				$(".change_text sub").show();
				
					$.each(appoint , function(index, val)
					{
						//alert(val.appoint_date);
						//alert(date);
						if( val.appoint_date == date)
							{
								$.each(val.appoint_time , function(index_inter, val_inter)
								{
									
							var new_value = "<li class='time_slot_outer'><a class='time_slot_new' href='javascript:void(0);'>"+val_inter.time_start_event+"</a></li>"
									$("ul.time_allotment").append(new_value);
								});
								
							}
							
					});
			}
	},
	minDate:dateToday,
	maxDate:"+15d",
	
	
});

$(".appoint_date").click(function(e) {
    $( ".calander_div #datepicker" ).show();
	$("ul.time_allotment").html("");
});


$(".step_1 .next_btn").click(function(e) {
	$(".tab-content #home").removeClass("active");
	$(".steps_container .nav-tabs .step_1").addClass("visited");
	$(".steps_container .nav-tabs .step_1").removeClass("active");
	$(".steps_container .nav-tabs .step_2").addClass("active");
	$(".tab-content #profile").addClass("active");
});

$(".step_2 .next_btn").click(function(e) {
	$(".tab-content #profile").removeClass("active");
	$(".steps_container .nav-tabs .step_2").addClass("visited");
	$(".steps_container .nav-tabs .step_2").removeClass("active");
	$(".steps_container .nav-tabs .step_3").addClass("active");
	$(".tab-content #messages").addClass("active");
});


/*$(".calander_div #datepicker .ui-datepicker-calendar tbody tr a").click(function(e) {
    $( ".calander_div #datepicker" ).datepicker("destroy");
});*/


var appoint_time = [
					{
						appoint_date:"08/10/2016",
						appoint_time:[
						{ time_start_event:"10:00 am",time_end_event:"10:30 am"},
						{ time_start_event:"10:30 am",time_end_event:"11:00 am"},
						{ time_start_event:"11:00 am",time_end_event:"11:30 am"},
						{ time_start_event:"11:30 am",time_end_event:"12:00 pm"},
						{ time_start_event:"01:00 pm",time_end_event:"01:30 pm"},
						{ time_start_event:"01:30 pm",time_end_event:"02:00 pm"},
						]}
					];




});
