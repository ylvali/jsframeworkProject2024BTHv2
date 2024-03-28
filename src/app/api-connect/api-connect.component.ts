import { Component } from '@angular/core';

import { ApiCallService } from '../api-call.service';

import { LoginService } from '../login.service';


import { User } from '../User';

@Component({
  selector: 'app-api-connect',
  templateUrl: './api-connect.component.html',
  styleUrls: ['./api-connect.component.css']
})
export class ApiConnectComponent {
  
  constructor( 
    private ApiCallService: ApiCallService,
    private LoginService: LoginService) { }

    // ------------------------------- Properties
    response = '';

    users : User[] = [];

    // CALLBACK 
    // Call the api routes
    callAPi2(method, url, callback, dataObj = null, token=null) {
      var obj1 = this;
      if (!dataObj) {
        dataObj = {};
      }
      this.ApiCallService.fetchCall(dataObj ,url, method, callback, token, obj1);
    }

    // Call the api routes
    callAPi1(method, url, callback, params = null, header = null) {
      var obj1 = this;
      this.ApiCallService.reqCall(method, url, callback, obj1, params, header);
    }

    // Token
    // callback2(thisObj,res, result) {
    //   console.log(res);
    //   console.log(result);

    //   thisObj.response = result.data.token;
    //   thisObj.users = {};
    // }

    // callback3(thisObj, res, result) {
    //   console.log(result.data);
    //   thisObj.users = result.data.data;

    //   console.log(result.data.data[0].name)
    //   thisObj.response = 'Success';
    // }

    // Test API
    callback4(thisObj, res, result) {
      console.log(result.data);
      // thisObj.users = result.data.data;

      console.log(result.data.msg)
      thisObj.response = result.data.msg;
      thisObj.response = result.data.pres2;
      // thisObj.users = '';
    }

    // See product
    callback5(thisObj, res, result) {
        console.log(res);
        console.log(result.data);
        // thisObj.users = result.data.data;

        thisObj.response = 'missing data';
      if (result.data.msg != undefined) {
        console.log(result.data.msg)
        thisObj.response = result.data.msg.name;
        thisObj.response += " $"+result.data.msg.price;
        // thisObj.users = {};
      }
    }

    // Check depot
    callback6(thisObj, res, result) {
      if (result.data != undefined) {
          console.log(result.data);
          // thisObj.users = result.data.data;
    
          thisObj.response = "Email: "+result.data.msg.email+" | ";
          thisObj.response += "Nr products: "+result.data.msg.nrProducts+" | ";
          thisObj.response += "Sum: "+result.data.msg.sum+" | ";

          // thisObj.users = {};
      }
    }

    callback7(thisObj, res, result) {
      if (result.data != undefined) {
          console.log(result.data);
          thisObj.response = result.data.msg;
      }
      if (result.msg != undefined) {
        console.log(result.msg);
        thisObj.response = result.msg;
      }
    }

    // ROUTES 
    // Token
    // route2() {
    //   this.callAPi2('GET', 'https://me-api.ysojs.se/token', this.callback2);
    // }

    // route3() {
    //   this.callAPi2('POST', 'https://me-api.ysojs.se/users/allUsers', this.callback3);
    // }

    // // AllLoggedOn
    // route8() {
    //   var url = 'https://me-api.ysojs.se/users/allLoggedOn';
    //   var params;
    //   params = {};
    //   this.callAPi2('POST', url, this.callback3, params);
    // }

    // Test the new API
    // Calls the API and returns the data to a callback
    testAPI() {
      var url = 'http://localhost:8333/';
      var params;
      params = {};
      this.callAPi2('GET', url, this.callback4, params);
    }

    seeProduct() {
      var url = 'http://localhost:8333/shop/seeProduct';
      var params;
      params = {productName: "prodX"};
      this.callAPi2('POST', url, this.callback5, params);
    }

    addProduct() {
      var url = 'http://localhost:8333/shop/addProduct';
      var params;
      params = {};
      this.callAPi2('POST', url, this.callback7, params);
    }


    checkDepot() {
      var userOnline;
      var userOn;
      userOnline = this.LoginService.getUserOnline();

      if (userOnline.email == undefined) {
        this.response = 'no user online';
      }
      if (userOnline.email != undefined) {
          var url = 'http://localhost:8333/shop/checkDepot';
          var params;
          params = {email: userOnline.email };
          this.callAPi2('POST', url, this.callback6, params);
      }
    }

    // ADD $1000
    addMoney() {
      var userOnline;
      var userOn;
      userOnline = this.LoginService.getUserOnline();

      if (userOnline.email == undefined) {
        this.response = 'no user online';
      }
      if (userOnline.email != undefined) {
          var url = 'http://localhost:8333/shop/addMoney';
          var params;
          params = {email: userOnline.email };
          this.callAPi2('POST', url, this.callback7, params);
      }
    }

    buyProduct() {
      var userOnline;
      var userOn;
      userOnline = this.LoginService.getUserOnline();

      if (userOnline.email == undefined) {
        this.response = 'no user online';
      }
      if (userOnline.email != undefined) {
          var url = 'http://localhost:8333/shop/buyProduct';
          var params;
          params = {email: userOnline.email, productName: 'prodX' };
          this.callAPi2('POST', url, this.callback7, params);
      }
    }

    sellProduct() {
      var userOnline;
      var userOn;
      userOnline = this.LoginService.getUserOnline();

      if (userOnline.email == undefined) {
        this.response = 'no user online';
      }
      if (userOnline.email != undefined) {
          var url = 'http://localhost:8333/shop/sellProduct';
          var params;
          params = {email: userOnline.email, productName: 'prodX' };
          this.callAPi2('POST', url, this.callback7, params);
      }
    }

}
