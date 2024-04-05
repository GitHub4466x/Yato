var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors=require("cors");
var app = express();
var login=require('./routes/login');
var districtreg=require('./routes/districtreg');
var locationreg=require('./routes/locationreg');
var locationview=require('./routes/locationview');
var locationdelete=require('./routes/locationdelete');
var locationget=require('./routes/locationget');
var locationupdate=require('./routes/locationupdate');
var getdistrictbyid=require('./routes/getdistrictbyid');
var getcategorybyid=require('./routes/getcategorybyid');
var districtview=require('./routes/districtview');
var districtget=require('./routes/districtget');
var districtupdate=require('./routes/districtupdate');
var categoryreg=require('./routes/categoryreg');
var categoryview=require('./routes/categoryview');
var categorydelete=require('./routes/categorydelete');
var categoryget=require('./routes/categoryget');
var categoryupdate=require('./routes/categoryupdate');
var fuelreg=require('./routes/fuelreg');
var servicereg=require('./routes/servicereg');
var serviceview=require('./routes/serviceview');
var servicedelete=require('./routes/servicedelete');
var serviceget=require('./routes/serviceget');
var serviceupdate=require('./routes/serviceupdate');
var companyreg=require('./routes/companyreg');
var upload=require('./routes/upload');
var fuelview=require('./routes/fuelview');
var fueldelete=require('./routes/fueldelete');
var fuelget=require('./routes/fuelget');
var fuelupdate=require('./routes/fuelupdate');
var companyview=require('./routes/companyview');
var companydelete=require('./routes/companydelete');
var companyget=require('./routes/companyget');
var companyupdate=require('./routes/companyupdate');
var districtdelete=require('./routes/districtdelete');
var viewcenter=require('./routes/viewcenter');
var confirm=require('./routes/confirm');
var declain=require('./routes/declain');



var bookingcount=require('./routes/bookingcount');
var servicecount=require('./routes/servicecount');
var datewiseservice=require('./routes/datewiseservice');
var paymentview=require('./routes/paymentview');


var servicecentercount=require('./routes/servicecentercount');
var customercount=require('./routes/customercount');
var countservice=require('./routes/countservice');





var servicecenterreg=require('./routes/servicecenterreg');
var serviceadd=require('./routes/serviceadd');
var serviceaddedit=require('./routes/serviceaddedit');
var serviceadddelete=require('./routes/serviceadddelete');
var serviceviewbyid=require('./routes/serviceviewbyid');
var bookingview=require('./routes/bookingview');
var viewmore=require('./routes/viewmore');
var serviceconfirm=require('./routes/serviceconfirm');
var servicedeclain=require('./routes/servicedeclain');
var servicerecived=require('./routes/servicerecived');
var updateservice=require('./routes/updateservice');
var servicecompleted=require('./routes/servicecompleted');
var centerprofile=require('./routes/centerprofile');
var centerviewbyid=require('./routes/centerviewbyid');
var viewbookingbystatus=require('./routes/viewbookingbystatus');




var customerreg=require('./routes/customerreg');
var vehicleadd=require('./routes/vehicleadd');
var centerview=require('./routes/centerview');
var customerviewbyid=require('./routes/customerviewbyid');
var bookingservicebyid=require('./routes/bookingservicebyid');
var bookingservice=require('./routes/bookingservice');
var c_bookingview=require('./routes/c_bookingview');
var payment=require('./routes/payment');
var viewbystatus=require('./routes/viewbystatus');
var customerview=require('./routes/customerview');
var customerprofile=require('./routes/customerprofile');
var vehicleview=require('./routes/vehicleviewbyid');




var forgotpassword=require('./routes/forgotpassword');
var changepassword=require('./routes/changepassword');



global.__basedir = path.resolve(path.dirname(''));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',login);
app.use('/districtreg',districtreg);
app.use('/districtview',districtview);
app.use('/districtdelete',districtdelete);
app.use('/districtget',districtget);
app.use('/districtupdate',districtupdate);
app.use('/locationreg',locationreg);
app.use('/locationview',locationview);
app.use('/locationdelete',locationdelete);
app.use('/locationget',locationget);
app.use('/locationupdate',locationupdate);
app.use('/getdistrictbyid',getdistrictbyid);
app.use('/getcategorybyid',getcategorybyid);
app.use('/categoryreg',categoryreg);
app.use('/categoryview',categoryview);
app.use('/categorydelete',categorydelete);
app.use('/categoryget',categoryget);
app.use('/categoryupdate',categoryupdate);
app.use('/fuelreg',fuelreg);
app.use('/servicereg',servicereg);
app.use('/serviceview',serviceview);
app.use('/servicedelete',servicedelete);
app.use('/serviceget',serviceget);
app.use('/serviceupdate',serviceupdate);
app.use('/companyreg',companyreg);
app.use('/companyview',companyview);
app.use('/companydelete',companydelete);
app.use('/companyget',companyget);
app.use('/companyupdate',companyupdate);
app.use('/upload',upload);
app.use('/fuelview',fuelview);
app.use('/fueldelete',fueldelete);
app.use('/fuelget',fuelget);
app.use('/fuelupdate',fuelupdate);
app.use('/viewcenter',viewcenter);
app.use('/confirm',confirm);
app.use('/declain',declain);




app.use('/bookingcount',bookingcount);
app.use('/servicecount',servicecount);
app.use('/datewiseservice',datewiseservice);
app.use('/paymentview',paymentview);

app.use('/servicecentercount',servicecentercount);
app.use('/customercount',customercount);
app.use('/countservice',countservice);



app.use('/servicecenterreg',servicecenterreg);
app.use('/serviceadd',serviceadd);
app.use('/serviceaddedit',serviceaddedit);
app.use('/serviceadddelete',serviceadddelete);
app.use('/serviceviewbyid',serviceviewbyid);
app.use('/bookingview',bookingview);
app.use('/viewmore',viewmore);
app.use('/serviceconfirm',serviceconfirm);
app.use('/servicedeclain',servicedeclain);
app.use('/servicerecived',servicerecived);
app.use('/updateservice',updateservice);
app.use('/servicecompleted',servicecompleted);
app.use('/centerprofile',centerprofile);
app.use('/centerviewbyid',centerviewbyid);
app.use('/viewbookingbystatus',viewbookingbystatus);


app.use('/customerreg',customerreg);
app.use('/vehicleadd',vehicleadd);
app.use('/centerview',centerview);
app.use('/customerviewbyid',customerviewbyid);
app.use('/bookingservicebyid',bookingservicebyid);
app.use('/bookingservice',bookingservice);
app.use('/c_bookingview',c_bookingview);
app.use('/payment',payment);
app.use('/viewbystatus',viewbystatus);
app.use('/customerview',customerview);
app.use('/customerprofile',customerprofile);
app.use('/vehicleview',vehicleview);


app.use('/forgotpassword',forgotpassword);
app.use('/changepassword',changepassword);

module.exports = app;
